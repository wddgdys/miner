<?php

namespace App\Http\Controllers;

use App\Logic\MemberLogic;
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

            if($user->frozen_points > $v->frozen_points){
                $frozen = $v->frozen_points;
            }else{
                $frozen = $user->frozen_points;
            }
            if($type == 1){
                $su = 10;
            }else{
                $su = 5;
            }
            $re = $frozen * $su / 100;
            $v->re = $re;
        }

        $points = DividendLogs::where('user_id',$user->id)->where('sign','re')->sum('points');

        $lines = 0;
        if($user->plan == 5){
            /*$lines = MemberLogic::getLine();
            $children = getSonNode($lines,$user->id);
            $lines = count($children);*/
            $lines = Member::where('plan','<>',2)->where('top_id',1)->count();
        }

        return sucJsonResp(compact('lists','points','lines'));
    }

    public function dividend(){

        $logs = DividendLogs::where('user_id',$this->user->id)->orderBy('created_at','desc')->paginate(20);
        return sucJsonResp($logs);
    }

    public function withdraw(Request $request){

        $user =  $this->user;
        $points = $request->points;
        if($points > $user->active_points){
            return errJsonResp('积分不足', 201);
        }
        $type = $request->type;
        if(!$type){
            return errJsonResp('缺少类型', 201);
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
            return sucJsonResp(compact('user'));
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
