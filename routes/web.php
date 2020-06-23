<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/
Route::get('admin',function (){
   return view('admin');
});
Route::get('web',function (){
   return view('web');
});

//后台
Route::group(['prefix' => 'admin'], function () {
    Route::post('/login', 'AdminController@login')->name('admin.login');
    Route::group(['middleware'=>['jwt.role:admin','checkadmin']], function () {
        Route::get('/withdraw', 'AdminController@withdraw')->name('admin.withdraw');
        Route::post('/withdraw/audit', 'AdminController@audit')->name('admin.withdraw.audit');
        Route::post('/withdraw/config', 'AdminController@setConfig')->name('admin.withdraw.config');
        Route::get('/withdraw/switch', 'AdminController@switch')->name('admin.withdraw.switch');

        Route::get('member', 'AdminController@member')->name('admin.member');
        Route::get('member/children', 'AdminController@children')->name('admin.member.children');
        Route::post('member/reset', 'AdminController@reset')->name('admin.member.reset');
        Route::post('member/status', 'AdminController@editStatus')->name('admin.member.status');
        Route::post('member/tovip', 'AdminController@toVip')->name('admin.member.tovip');
        Route::post('member/audit', 'AdminController@memberStatus')->name('admin.member.audit');
        Route::get('member/miner', 'AdminController@miner')->name('admin.member.miner');
        Route::post('member/points', 'AdminController@setPoints')->name('admin.member.points');
        Route::post('member/upgrade', 'AdminController@upgrade')->name('admin.member.upgrade');

        Route::get('senior', 'AdminController@senior')->name('admin.senior');
        Route::post('senior/goal', 'AdminController@addGoal')->name('admin.senior.goal');

        //高级合伙人分红
        Route::post('senior/dividend', 'AdminController@dividend')->name('admin.senior.dividend');
    });
});

//web端
Route::group(['prefix' => 'api'],function () {
    Route::post('/login', 'LoginController@login')->name('login');
    Route::post('/verification', 'LoginController@verification')->name('login');
    Route::post('/register', 'LoginController@register')->name('register');
    Route::post('/reset', 'LoginController@reset')->name('reset');
    Route::post('/send', 'LoginController@send')->name('send');

    Route::group(['prefix' => 'game'], function () {
        Route::post('/user', 'GameController@user')->name('game.user');
        Route::post('/reset', 'GameController@reset')->name('game.reset');

        Route::post('/senior', 'GameController@senior')->name('game.senior');
    });

    Route::group(['middleware'=>['jwt.role:member','checkuser'],'prefix' => 'user'], function () {
        Route::get('/info', 'UsersController@info')->name('user.info');
        Route::get('/lists', 'UsersController@lists')->name('user.lists');
        Route::get('/dividend', 'UsersController@dividend')->name('user.dividend');
        Route::post('/withdraw', 'UsersController@withdraw')->name('user.withdraw');
        Route::get('/switch', 'UsersController@switch')->name('user.withdraw.switch');
        Route::get('/withdrawLog', 'UsersController@withdrawLog')->name('user.withdrawLog');
    });
});
