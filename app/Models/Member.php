<?php

namespace App\Models;

use Illuminate\Foundation\Auth\User as Authenticatable;
use Tymon\JWTAuth\Contracts\JWTSubject;


class Member extends Authenticatable implements JWTSubject
{
    protected $table = 'member';

    public function getJWTIdentifier()
    {
        // TODO: Implement getJWTIdentifier() method.
        return $this->getKey();
    }
    public function getJWTCustomClaims()
    {
        // TODO: Implement getJWTCustomClaims() method.
        return ['role'=>'member'];
    }

    public function parent(){
        return $this->hasOne('App\Models\Member','id','parent_id');
    }
    public function superior()
    {
        return $this->hasOne('App\Models\Member','id','superior_id');
    }
    public function top(){
        return $this->hasOne('App\Models\Member','id','top_id');
    }

    public function children(){
        return $this->hasMany('App\Models\Member','parent_id','id');
    }
}
