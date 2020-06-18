<?php
namespace App\Logic;

use App\Models\DividendLogs;
use App\Models\Member;
use Illuminate\Support\Facades\DB;

class DividendLogic{

    public static function doDividend($points){
        $lists = Member::where('plan',2)->where('finish',0)->selectRaw('id,phone,frozen_points,active_points,goal_points,withdraw,plan,status,finish,created_at')->orderBy('status','asc')->orderBy('created_at','desc')->get()->map(function ($item){
            $item->difference = $item->goal_points - $item->frozen_points;
            return $item;
        })->sortBy('difference');
        $count = $lists->count();
        if($count > 0){
            DB::beginTransaction();
            try {
                $avg = floor($points / $count * 100)/100;
                foreach ($lists as $k=>$v){
                    $diff = $v->difference;
                    if($v->difference < $avg){
                        $values = $diff;
                        $v->finish = 1;
                        $avg = floor($points / $count * 100)/100;
                    }else{
                        $values = $avg;
                    }
                    $v->frozen_points = floor($v->frozen_points + $values);
                    $v->active_points = floor($v->active_points + $values);
                    unset($v->difference);
                    $v->save();
                    $points = floor($points - $diff);
                    $count --;
                    $did = new DividendLogs();
                    $did->user_id = $v->id;
                    $did->from_id = 0;
                    $did->points = $values;
                    $did->content = '高级合伙人分红获得'.$values;
                    $did->save();
                }
                DB::commit();
                return ['code'=>1,'msg'=>'success'];
            }catch (\Exception $e){
                DB::rollBack();
                return ['code'=>400,'msg'=>$e->getMessage()];
            }
        }
        return ['code'=>1,'msg'=>'没有可分红用户'];

    }
}
