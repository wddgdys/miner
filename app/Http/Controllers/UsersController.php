<?php

namespace App\Http\Controllers;

use App\Logic\MemberLogic;
use App\Models\Config;
use App\Models\DividendLogs;
use App\Models\Member;
use App\Models\Withdraw;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Tymon\JWTAuth\Facades\JWTAuth;
use Validator,Exception;

class UsersController extends BaseController
{

    public $user;

    public function __construct()
    {

        parent::__construct();
        try {
            $this->user = JWTAuth::parseToken()->authenticate();
        } catch (\Exception $e) {
            return errJsonResp($e->getMessage(), 201);
        }
        $this->middleware(['checkuser']);

    }

    public function info(){

        $user = $this->user;
        $user->total = $user->frozen_points + $user->active_points;
        $arr = [
            10000=>'初级矿机',
            20000=>'中级矿机',
            30000=>'高级矿机',
        ];
        if($user->frozen_points > 0){
            $user->miner = $arr[(int)$user->frozen_points];
        }else{
            $user->miner = '无矿机';
        }
        $count_chu = $count_zho = $count_gao = 0;
        if($user->plan == 5){
            $team = Member::where('top_id',$user->id)->selectRaw('id,frozen_points')->get();
            foreach ($team as $k=>$v){
                switch ($v->frozen_points){
                    case 10000:
                        $count_chu ++;
                        break;
                    case 20000:
                        $count_zho ++;
                        break;
                    case 30000:
                        $count_gao ++;
                        break;
                }
            }
        }
        $user->count_chu = $count_chu;
        $user->count_zho = $count_zho;
        $user->count_gao = $count_gao;
        return sucJsonResp($user);
    }

    public function lists(Request $request){
        $user = $this->user;
        $type = $request->type;
        if(isset($type) && $type == 1){
            $lists = Member::where('parent_id',$user->id)->paginate(10);
        }
        if(isset($type) && $type == 2){
            $lists = Member::where('superior_id',$user->id)->paginate(10);
        }
        foreach ($lists as $k=>$v){

            $v->re = DividendLogs::where('user_id',$user->id)->where('from_id',$v->id)->sum('points');
        }

        $points = DividendLogs::where('user_id',$user->id)->where('sign','re')->sum('points');

        $lines = 0;
        if($user->plan == 5){
            /*$lines = MemberLogic::getLine();
            $children = getSonNode($lines,$user->id);
            $lines = count($children);*/
            $lines = Member::where('top_id',$user->id)->count();
        }

        return sucJsonResp(compact('lists','points','lines'));
    }

    public function dividend(){

        $logs = DividendLogs::where('user_id',$this->user->id)->orderBy('created_at','desc')->paginate(20);
        return sucJsonResp($logs);
    }

    public function switch(){
        $config = Config::find(1);
        $switch = $config->withdraw;
        return sucJsonResp($switch);
    }

    public function withdraw(Request $request){

        $user =  $this->user;
        $points = $request->points;
        if($points > $user->active_points){
            return errJsonResp('积分不足', 403);
        }
        //$type = $request->type ?? 1;
        $type = 1;
        if(!$type){
            return errJsonResp('缺少类型', 403);
        }
        DB::beginTransaction();
        try {
            $withdraw = new Withdraw();
            $withdraw->user_id = $user->id;
            $withdraw->money = $points;
            $withdraw->type = $type;
            if ($type == 1) {
                $withdraw->bank_no = $request->bank_no;
                $withdraw->bank_name = $request->bank_name;
                $withdraw->bank_address = $request->bank_address;
            } elseif ($type == 2) {
                $withdraw->bank_name = $request->bank_name;
                $withdraw->alipay = $request->alipay;
            } elseif ($type == 3) {
                $withdraw->weixin = $request->weixin;
            }
            $withdraw->save();
            $user->active_points -= $points;
            $user->save();
            DB::commit();
            return sucJsonResp(compact('user'),'申请提现成功');
        }catch (\Exception $e){
            DB::rollBack();
            return errJsonResp($e->getMessage(),400);
        }
    }

    public function withdrawLog(){

        $lists = Withdraw::where('user_id',$this->user->id)->orderBy('created_at','desc')->paginate(10);
        return sucJsonResp(compact('lists'));
    }
}
