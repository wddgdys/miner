<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class BaseController extends Controller
{
    //
    public function __construct()
    {
        config(['jwt.user' => 'App\Models\Member']);    //用于指定特定model
        config(['auth.providers.users.model' => \App\Models\Member::class]);//就是他们
    }
}
