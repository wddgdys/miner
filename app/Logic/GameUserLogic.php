<?php
namespace App\Logic;

use App\Models\DividendLogs;
use App\Models\Member;
use Illuminate\Support\Facades\DB;

class GameUserLogic{

    public static function CreateUser($param){

        $phone = $param['phone'];
        $parent_phone = (isset($param['parent'])) ? $param['parent'] : '';
        $superior_phone = (isset($param['superior'])) ? $param['superior'] : '';
        $users = Member::where('phone',$phone)->first();
        if($users && $users->plan != 0){
            return ['code'=>400,'msg'=>'用户已存在'];
        }
        DB::beginTransaction();
        try {

            if($superior_phone){
                $superior = Member::where('phone',$superior_phone)->first();
                if(!$superior){
                    $superior = new Member();
                    $superior->phone = $superior_phone;
                    $password = substr($superior_phone,-4) . '888888';
                    $superior->password = bcrypt($password);
                    $superior->parent_id = 0;
                    $superior->superior_id = 0;
                    $superior->frozen_points = 20000;
                    $superior->plan = 0;
                    $superior->save();
                }
            }

            if($parent_phone){
                $parent = Member::where('phone',$parent_phone)->first();
                if(!$parent){
                    $parent = new Member();
                    $parent->phone = $parent_phone;
                    $password = substr($parent_phone,-4) . '888888';
                    $parent->password = bcrypt($password);
                    $parent->parent_id = (isset($superior->id)) ? $superior->id : 0;
                    $parent->superior_id = 0;
                    $parent->frozen_points = 20000;
                    $parent->plan = 0;
                    $parent->save();
                }
            }

            if(!$users){
                $users = new Member();
                $users->phone = $param['phone'];
                $password = substr($phone,-4) . '888888';
                $users->password = bcrypt($password);
                $users->parent_id = (isset($parent->id)) ? $parent->id : 0;
                $users->superior_id = (isset($superior->id)) ? $superior->id : 0;
                $users->frozen_points = 20000;
                $users->plan = 1;
                $users->save();
                if(isset($parent->id) && $parent->plan == 1){
                    $parent->active_points = $parent->active_points + 4000;
                    $parent->save();
                    $didP = new DividendLogs();
                    $didP->user_id = $parent->id;
                    $didP->from_id = $users->id;
                    $didP->points = 4000;
                    $didP->content = '邀请'.$phone.'分红';
                    $didP->save();
                }
                if(isset($superior->id) && $superior->plan == 1){
                    $superior->active_points = $superior->active_points + 2000;
                    $superior->save();
                    $didS = new DividendLogs();
                    $didS->user_id = $superior->id;
                    $didS->from_id = $users->id;
                    $didS->points = 2000;
                    $didS->content = '徒弟'.$parent_phone.'邀请'.$phone.'分红';
                    $didS->save();
                }
            }else{
                $password = substr($phone,-4) . '888888';
                $id = $users->id;
                $children = Member::where('plan',1)->where(function ($query) use ($id){
                    $query->where('parent_id',$id)->orWhere('superior_id',$id);
                })->selectRaw('id,phone,parent_id,superior_id,plan')
                    ->get()->keyBy('id');
                $active_points = 0;
                foreach ($children as $k=>$v){
                    if($v->parent_id == $id){
                        $points = 4000;
                        $content = '邀请'.$v->phone.'分红';
                    }
                    if($v->superior_id == $id){
                        $points = 2000;
                        $content = '徒弟'.$children[$v->parent_id]['phone'].'邀请'.$v->phone.'分红';
                    }
                    $didS = new DividendLogs();
                    $didS->user_id = $id;
                    $didS->from_id = $v->id;
                    $didS->points = $points;
                    $didS->content = $content;
                    $didS->save();
                    $active_points = $active_points + $points;
                }
                $users->plan = 1;
                $users->active_points = $active_points;
                $users->save();
            }

            DB::commit();
            $data['phone'] = $phone;
            $data['password'] = $password;
            return ['code'=>1,'msg'=>$data];
        }catch (\Exception $e){
            DB::rollBack();
            return ['code'=>400,'msg'=>$e->getMessage()];
        }
    }

    public static function CreateSenior($param){
        $phone = $param['phone'];
        $users = Member::where('phone',$phone)->first();
        if($users && $users->plan != 0){
            return ['code'=>400,'msg'=>'用户已存在'];
        }
        try {
            $users = new Member();
            $users->phone = $param['phone'];
            $password = substr($phone,-4) . '888888';
            $users->password = bcrypt($password);
            $users->parent_id = 0;
            $users->superior_id = 0;
            $users->frozen_points = 0;
            $users->plan = 2;
            $users->save();
            $data['phone'] = $phone;
            $data['password'] = $password;
            return ['code'=>1,'msg'=>$data];
        }catch (\Exception $e){
            return ['code'=>400,'msg'=>$e->getMessage()];
        }
    }
}
