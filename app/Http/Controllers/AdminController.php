<?php

namespace App\Http\Controllers;

use App\Logic\DividendLogic;
use App\Logic\MemberLogic;
use App\Models\Admin;
use App\Models\DividendLogs;
use App\Models\Member;
use App\Models\Withdraw;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Tymon\JWTAuth\Facades\JWTAuth;
use Exception;

class AdminController extends Controller
{
    //
    protected $parent_percent = 20;
    protected $superior_percent = 10;
    /**
     * 登录
     */
    public function login(Request $request){

        $users = Admin::where('name',$request->name)->first();

        if(!$users){
            return errJsonResp('用户不存在', 400);
        }
        if($users->status == 2) {
            return errJsonResp('风险账户已被冻结',400);
        }

        if (password_verify($request->password, $users->password)) {
            $users->last_ip = request()->getClientIp();
            $users->last_time = time();
            $users->save();
            return sucJsonResp(['token' => JWTAuth::fromUser($users),'user'=>$users]);
        } else {
            return errJsonResp('用户密码错误', 400);
        }
    }

    public function withdraw(Request $request){

        $status = $request->status;
        $obj = new Withdraw();
        if(is_numeric($status)){
            $obj = $obj->where('status',$status);
        }
        $lists = $obj->orderBy('created_at','desc')->paginate(10);
        foreach ($lists as $k=>&$v){
            $v->key  = $v->id;
        }

        return sucJsonResp(compact('lists'));
    }

    public function audit(Request $request){

        $id = $request->id;
        if(!$id){
            return errJsonResp('参数错误');
        }
        $status = $request->status;

        DB::beginTransaction();
        try {
            $withdraw = Withdraw::find($id);
            $withdraw->status = $status;
            if ($status == 2) {
                $withdraw->reject_msg = $request->reject_msg;
            }
            $withdraw->save();
            $user = Member::where('id',$withdraw->user_id)->first();
            if($status == 1){
                $user->withdraw += $withdraw->money;
            }else{
                $user->active_points += $withdraw->money;
            }
            $user->save();
            DB::commit();
            return sucJsonResp('修改成功');
        }catch (\Exception $e){
            DB::rollBack();
            return errJsonResp($e->getMessage(),400);
        }
    }

    public function member(Request $request){
        $keywords = $request->keywords ?? '';
        $obj = Member::where('plan','<>',2)->with(['parent:id,phone','superior:id,phone','top:id,phone']);
        if($keywords){
            $obj = $obj->where('phone','like',$keywords.'%');
        }
        $lists = $obj->selectRaw('id,parent_id,superior_id,top_id,phone,name,game,frozen_points,active_points,withdraw,plan,status,finish,created_at')->orderBy('created_at','desc')->paginate(10);

        $lines = MemberLogic::getLine();
        $arr = [
            10000=>'初级矿机',
            20000=>'中级矿机',
            30000=>'高级矿机',
        ];
        foreach ($lists as $k=>&$v){
            $v->parent_phone = isset($v->parent) ? $v->parent->phone : '';
            $v->superior_phone = isset($v->superior) ? $v->superior->phone : '';
            $v->top_phone = isset($v->top) ? $v->top->phone : '';
            $v->key  = $v->id;
            $v->minerStr = $v->frozen_points > 0 ? $arr[$v->frozen_points] : '无矿机';
            $children = getSonNode($lines,$v->id);
            $v->lines = count($children);
            unset($v->parent);
            unset($v->superior);
            unset($v->top);
            unset($children);
        }
        return sucJsonResp(compact('lists'));
    }

    public function reset(Request $request){
        $id = $request->id;
        if(!$id){
            return errJsonResp('参数错误');
        }
        $password = $request->password;
        if(!$password){
            return errJsonResp('缺少密码');
        }
        try {
            $member = Member::find($id);
            $member->password = bcrypt($password);
            $member->save();
            return sucJsonResp();
        }catch (Exception $e){
            return errJsonResp($e->getMessage());
        }

    }

    public function miner(){
        $arr = [
            ['name'=>'初级','frozen_points'=>10000],
            ['name'=>'中级','frozen_points'=>20000],
            ['name'=>'高级','frozen_points'=>30000],
        ];
        return sucJsonResp($arr);
    }

    public function editStatus(Request $request){
        $id = $request->id;
        if(!$id){
            return errJsonResp('参数错误');
        }
        try {
            $status = $request->status;
            $member = Member::find($id);
            $member->status = $status;
            $member->save();
            return sucJsonResp('操作成功');
        }catch (Exception $e){
            return errJsonResp($e->getMessage());
        }

    }

    public function children(Request $request){
        $id = $request->id;
        if(!$id){
            return errJsonResp('参数错误');
        }
        $children = Member::where('parent_id',$id)->with('children:id,phone,parent_id')->selectRaw('id,phone')->get();
        foreach ($children as $k=>$v){
            $v->key = $v->id;
            $v->title = $v->phone;
            if(count($v->children)){
                $v->isLeaf = false;
            }else{
                $v->isLeaf = true;
            }
            unset($v->children);
        }
        return sucJsonResp(compact('children'));
    }

    public function memberStatus(Request $request){
        $id = $request->id;
        if(!$id){
            return errJsonResp('参数错误');
        }
        $finish = $request->finish;
        if($finish == 1){
            DB::beginTransaction();
            try {
                $member = Member::find($id);
                $member->finish = $finish;
                if($member->parent_id == 0){
                    $member->plan = 5;
                } else{
                    $member->plan = 1;
                }
                $member->frozen_points = $request->frozen_points;
                $member->save();
                $m_phone = substr($member->phone,-4);
                $parent_re = 0;
                if($member->parent_id > 0){
                    $parent = Member::find($member->parent_id);
                    if($parent){
                        if($parent->frozen_points > $member->frozen_points){
                            $frozen = $member->frozen_points;
                        }else{
                            $frozen = $parent->frozen_points;
                        }
                        $parent_re = $frozen * $this->parent_percent / 100;
                        $parent->active_points = $parent->active_points + $parent_re;
                        $parent->save();
                        $didP = new DividendLogs();
                        $didP->user_id = $parent->id;
                        $didP->from_id = $member->id;
                        $didP->points = $parent_re;
                        $didP->content = '邀请'.$m_phone.'分红';
                        $didP->save();
                    }

                }
                if($member->superior_id > 0 && $parent_re){
                    $superior = Member::find($member->superior_id);
                    if($superior){
                        if($superior->frozen_points > $member->frozen_points){
                            $frozen_s = $member->frozen_points;
                        }else{
                            $frozen_s = $superior->frozen_points;
                        }
                        $superior_re = $frozen_s * $this->superior_percent / 100;
                        $superior->active_points = $superior->active_points + $superior_re;
                        $superior->save();
                        $didS = new DividendLogs();
                        $didS->user_id = $superior->id;
                        $didS->from_id = $member->id;
                        $didS->points = $superior_re;
                        $p_phone = substr($parent->phone,-4);
                        $didS->content = '徒弟'.$p_phone.'邀请'.$m_phone.'分红';
                        $didS->save();
                    }
                }
                DB::commit();
                return sucJsonResp('操作成功');
            }catch (Exception $e){
                DB::rollBack();
                return errJsonResp($e->getMessage());
            }
        }else{
            return sucJsonResp('操作成功');
        }
    }

    public function upgrade(Request $request){
        $id = $request->id;
        //升级后的等级
        $points = $request->frozen_points;

        $member = Member::find($id);

        $parent_per = $this->parent_percent;
        $superior_per = $this->superior_percent;
        //上级返数额
        $parent_diff = 0;
        $superior_diff = 0;
        DB::beginTransaction();
        try {
            //差额
            $difference = $points - $member->frozen_points;
            //上级返利
            if($member->parent_id > 0){
                $parent = Member::find($member->parent_id);
                //升级后小于上级
                if($parent->frozen_points > $points){
                    $parent_diff = $difference;
                }
                //升级后和上级相等或高于上级
                if($parent->frozen_points <= $points && $member->frozen_points != $parent->frozen_points){
                    //一个档次
                    $parent_diff = (int)$parent->frozen_points - (int)$member->frozen_points;
                }
                //上上级返利
                if($member->superior_id > 0 && $parent_diff > 0) {
                    $superior = Member::find($member->superior_id);
                    //上上级返数额
                    $superior_diff = 0;
                    //升级后小于上级
                    if($superior->frozen_points > $points){
                        $superior_diff = $difference;
                    }
                    //升级后和上级相等或高于上级
                    if($superior->frozen_points <= $points){
                        if($parent->frozen_points <= $member->frozen_points){
                            $superior_diff = $superior->frozen_points - $parent->frozen_points;
                        }else{
                            $superior_diff = $superior->frozen_points - $member->frozen_points;
                        }
                        //一个档次

                    }
                }
            }
            $member->frozen_points = $points;
            $member->save();
            $m_phone = substr($member->phone,-4);
            if($parent_diff > 0){
                $parent_re = $parent_diff * $parent_per / 100;
                $parent->active_points = $parent->active_points + $parent_re;
                $parent->save();
                $didP = new DividendLogs();
                $didP->user_id = $parent->id;
                $didP->from_id = $member->id;
                $didP->points = $parent_re;
                $didP->content = '邀请'.$m_phone.'升级分红';
                $didP->save();
            }
            if($superior_diff > 0){
                $superior_re = $superior_diff * $superior_per / 100;
                $superior->active_points = $superior->active_points + $superior_re;
                $superior->save();
                $didS = new DividendLogs();
                $didS->user_id = $superior->id;
                $didS->from_id = $member->id;
                $didS->points = $superior_re;
                $p_phone = substr($parent->phone,-4);
                $didS->content = '徒弟'.$p_phone.'邀请'.$m_phone.'升级分红';
                $didS->save();
            }
            DB::commit();
            return sucJsonResp('操作成功');
        }catch (Exception $e){
            DB::rollBack();
            return errJsonResp($e->getMessage());
        }
    }

    public function setPoints(Request $request){
        $id = $request->id;
        if(!$id){
            return errJsonResp('参数错误');
        }
        $func = $request->func;
        $points = $request->points;
        $member = Member::find($id);
        if($func == 2) {
            if($member->active_points < $points) {
                return errJsonResp('操作失败，积分不足');
            }
        }
        DB::beginTransaction();
        try{
            $did = new DividendLogs();
            $did->user_id = $id;
            $did->from_id = 0;
            $did->points = $points;

            if($func == 1) {
                $member->active_points += $points;
                $did->content = '后台赠送'.$points.'积分';
            } else{
                if($member->active_points < $points) {
                    $points = $member->active_points;
                }
                $member->active_points -= $points;
                $did->content = '后台减'.$points.'积分';
            }

            $did->func = $func;
            $did->sign = 'back';
            $did->save();
            $member->save();
            DB::commit();
            return sucJsonResp($member->active_points);
        }catch (\Exception $e) {
            DB::rollBack();
            return errJsonResp('操作失败：'.$e->getMessage());
        }
    }

    public function senior(Request $request){

        $keywords = $request->keywords ?? '';
        $obj = Member::where('plan',2);
        if($keywords){
            $obj = $obj->where('phone','like',$keywords.'%');
        }
        $lists = $obj->selectRaw('id,phone,frozen_points,active_points,goal_points,withdraw,plan,status,created_at')->orderBy('status','asc')->orderBy('created_at','desc')->paginate(10);
        foreach ($lists as $k=>&$v){
            $v->key  = $v->id;
        }

        return sucJsonResp(compact('lists'));
    }

    public function addGoal(Request $request){
        $id = $request->id;
        if(!$id){
            return errJsonResp('参数错误');
        }
        $points = $request->points;
        $member = Member::find($id);
        $member->goal_points = $member->goal_points + $points;
        $member->finish = 0;
        $member->save();
        return sucJsonResp('添加成功');

    }

    public function dividend(Request $request){

        $points = $request->points;

        $result = DividendLogic::doDividend($points);

        return JsonResp($result);
    }
}
