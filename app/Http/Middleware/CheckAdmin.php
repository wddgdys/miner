<?php

namespace App\Http\Middleware;

use App\Models\Admin;
use Closure;
use Tymon\JWTAuth\Facades\JWTAuth;

class CheckAdmin
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
        try{
             $payoad = JWTAuth::parseToken()->payload();
             $user = Admin::where('id',$payoad->get('sub'))->first();
             if(!$user) {
                 return errJsonResp('用户不正确');
             }
            return $next($request);

        }catch(\Exception $e){
            return errJsonResp($e->getMessage(),201);
        }
    }
}
