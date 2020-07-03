<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Withdraw extends Model
{
    //
    protected  $table = 'withdraw';

    public function member(){

        return $this->hasOne('App\Models\Member','id','user_id');
    }
}
