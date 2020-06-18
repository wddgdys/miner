<?php

namespace App\Http\Controllers;

use App\Logic\MemberLogic;
use App\Models\Member;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Cache;
use Tymon\JWTAuth\Facades\JWTAuth;
use Validator, Exception;

class LoginController extends Controller
{
    //
    /**
     * 登录
     */
    public function login(Request $request)
    {

        $users = Member::where('phone', $request->phone)->first();

        if (!$users) {
            return errJsonResp('用户不存在', 400);
        }
        if ($users->status == 2) {
            return errJsonResp('风险账户已被冻结', 400);
        }

        if (password_verify($request->password, $users->password)) {
            $users->last_ip = request()->getClientIp();
            $users->last_time = time();
            $users->save();
            return sucJsonResp(['token' => JWTAuth::fromUser($users), 'user' => $users]);
        } else {
            return errJsonResp('用户密码错误', 400);
        }
    }
    /**
     * 验证码登录
    */
    public function verification(Request $request)
    {

        $users = Member::where('phone', $request->phone)->first();

        if (!$users) {
            return errJsonResp('用户不存在', 400);
        }
        if ($users->status == 2) {
            return errJsonResp('风险账户已被冻结', 400);
        }
        $key = $request->phone . '.' . $request->second;
        $verifyData = Cache::get($key);
        if(!$verifyData){
            return errJsonResp('验证码错误');
        }
        // 清除验证码缓存
        \Cache::forget($key);

        $users->last_ip = request()->getClientIp();
        $users->last_time = time();
        $users->save();
        return sucJsonResp(['token' => JWTAuth::fromUser($users), 'user' => $users]);
    }

    public function register(Request $request)
    {
        $data = $request->all();
        $validator_rule = [
            'phone' => 'required|unique:member|regex:/^1[345789][0-9]{9}$/',
            'password' => 'required',
            'invite' => 'required',
            'name' => 'required',
            'game' => 'required',
        ];
        $validator_title = [
            'phone.required' => '缺少手机号',
            'name.required' => '缺少姓名',
            'game.required' => '缺少游戏ID',
            'phone.unique' => '手机号已存在',
            'phone.regex' => '手机号码格式错误',
            'password.required' => '缺少密码',
            'invite.required' => '缺少邀请码',
        ];
        $validator = Validator::make($data, $validator_rule, $validator_title);
        if (!$validator->passes()) {
            return errJsonResp($validator->errors()->first());
        }
        if ($request->invite == 888888) {
            $parent_id = 0;
            $superior_id = 0;
            //$plan = 5;
        } else {
            $inviter = Member::where('phone', $request->invite)->first();
            if (!$inviter) {
                return errJsonResp('邀请码错误，用户不存在');
            }
            if ($inviter->finish == 0) {
                return errJsonResp('此邀请码用户暂未通过审核');
            }
            $parent_id = $inviter->id;
            $superior_id = $inviter->parent_id;
            //$plan = 0;
        }

        try {
            $member = new Member();
            $member->phone = $request->phone;
            $member->password = bcrypt($request->password);
            $member->name = $request->name;
            $member->game = $request->game;
            $member->parent_id = $parent_id;
            $member->superior_id = $superior_id;
            $member->top_id = $parent_id == 0 ? 0 : MemberLogic::getTeamTop($parent_id);
            $member->plan = 0;
            //$member->frozen_points = 20000;
            $member->save();
            return sucJsonResp(compact('member'));
        } catch (Exception $e) {
            return errJsonResp($e->getMessage());
        }


    }

    public function reset(Request $request){
        if(empty($request->phone)){
            return errJsonResp('非法操作');
        }
        $data = $request->all();
        $yz_field = [
            'phone' => 'required|regex:/^1[345789][0-9]{9}$/',
            'password' => 'required',
            'second' => 'required',
            'resetPwd' => 'required'
        ];
        $yz_title = [
            'phone.required' => '请输入手机号',
            'phone.regex' => '手机号码格式错误',
            'second.required' => '请输入验证码',
            'password.required' => '请输入密码',
            'resetPwd.required' => '请输入确认密码'
        ];
        $validator = Validator::make($data, $yz_field, $yz_title);

        if ($validator->passes()) {
            $key = $request->phone . '.' . $request->second;
            $verifyData = Cache::get($key);
            if(!$verifyData){
                return errJsonResp('验证码错误');
            }
            // 清除验证码缓存
            \Cache::forget($key);

            if($request->password != $request->resetPwd){
                return errJsonResp('两次密码不一致');
            }
            $seller = Member::where('phone',$request->phone)->first();
            $seller->password = bcrypt($request->password);
            $seller->save();

            //SellerLog::log($seller->id,'重置密码');
            return sucJsonResp();
        }else{
            return errJsonResp($validator->errors()->first());
        }
    }

    /**
     *发送验证码
     */
    public function send(Request $request)
    {

        $phone = $request->input('phone');
        if (!$phone) {
            return errJsonResp('缺少电话!');
        }
        if (!preg_match("/^1\d{10}$/", $phone)) {
            return errJsonResp('电话号码格式错误!');
        }


        $code = rand(1000, 9999);

        $from = $request->input('form');
        $user = Member::where('phone', $phone)->first();
        if (empty($user)) {
            return errJsonResp('该用户暂未注册');
        }

        $sms = app('easysms');
        try {
            $sms->send($phone, [
                'template' => 'SMS_191305061',
                'data' => [
                    'code' => $code
                ],
            ]);
            $key = $phone . '.' . $code;
            $expiredAt = now()->addMinutes(5);
            // 缓存验证码 5 分钟过期。
            \Cache::put($key, ['phone' => $phone, 'code' => $code], $expiredAt);
            return sucJsonResp([
                'expire' => 900
            ]);
        } catch (\Overtrue\EasySms\Exceptions\NoGatewayAvailableException $exception) {
            $message = $exception->getException('aliyun')->getMessage();
            return errJsonResp($message);
        }

    }
}
