<?php

namespace App\Http\Middleware;

use Illuminate\Foundation\Http\Middleware\VerifyCsrfToken as Middleware;

class VerifyCsrfToken extends Middleware
{
    /**
     * Indicates whether the XSRF-TOKEN cookie should be set on the response.
     *
     * @var bool
     */
    protected $addHttpCookie = true;

    /**
     * The URIs that should be excluded from CSRF verification.
     *
     * @var array
     */
    protected $except = [
        //
        '/admin/login','/admin/withdraw/audit','/admin/withdraw/config','/admin/senior/goal','/admin/senior/dividend','/admin/member/audit','/admin/member/points','/admin/member/upgrade','/admin/member/reset','/admin/member/tovip',
        '/api/login','/api/verification','/api/register','/api/send','/api/reset',
        '/api/game/user','/api/game/reset','/api/game/senior',
        '/api/user/withdraw'
    ];
}
