<?php
namespace App\Logic;

use App\Models\Member;

class MemberLogic{

    public static function getLine(){
        $members = Member::where('plan','<>',2)->pluck('parent_id','id')->toArray();
        $newArr = [];
        foreach ($members as $k=>$v){
            $newArr[$v][] = $k;
        }
        return $newArr;
    }

    /**
     * 查看团队顶级ID
     */
    public static function getTeamTop($pid){
        $parent = Member::find($pid);
        if($parent->top_id > 0){
            $top = $parent->top_id;
        }else{
            $top = $parent->id;
        }
        return $top;
    }
}
