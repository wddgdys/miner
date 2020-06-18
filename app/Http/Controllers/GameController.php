<?php

namespace App\Http\Controllers;

use App\Logic\GameUserLogic;
use App\Models\DividendLogs;
use App\Models\Member;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class GameController extends Controller
{
    //
    public function user(Request $request){

        $param = $request->all();

        $result = GameUserLogic::CreateUser($param);

        return JsonResp($result);

    }

    public function senior(Request $request){

        if(!$request->phone){
            return errJsonResp('参数错误');
        }
        $param = $request->all();

        $result = GameUserLogic::CreateSenior($param);

        return JsonResp($result);
    }

    public function reset(Request $request){
        $phone = $request->phone;
        $password = $request->password;
        if(!$user = Member::where('phone',$phone)->first()){
            return errJsonResp('用户不存在', 400);
        }
        $user->password = bcrypt($password);
        $user->save();
        return sucJsonResp('重置成功');
    }
}
