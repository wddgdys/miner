<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateMemberTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('member', function (Blueprint $table) {
            $table->engine = 'InnoDB';
            $table->bigIncrements('id');
            $table->string('phone')->unique();
            $table->string('password');
            $table->integer('parent_id')->comment('上级ID')->default(0);
            $table->integer('superior_id')->comment('上上级id')->default(0);
            $table->decimal('frozen_points',10,2)->comment('冻结积分')->default(0);
            $table->decimal('active_points',10,2)->comment('可使用积分')->default(0);
            $table->decimal('withdraw',10,2)->comment('已提现积分')->default(0);
            $table->decimal('goal_points',10,2)->comment('目标积分')->default(0);
            $table->integer('plan')->comment('标识  1.千人计划   2.高级合伙人')->default(0);
            $table->string('bank_name')->comment('银行卡姓名')->nullable();
            $table->string('bank_no')->comment('银行卡号')->nullable();
            $table->string('bank_address')->comment('开户地')->nullable();
            $table->string('alipay_account')->comment('支付宝账号')->nullable();
            $table->string('weixin_account')->comment('微信账号')->nullable();
            $table->string('last_ip')->comment('登录IP');
            $table->string('last_time')->comment('登录时间');
            $table->tinyInteger('status')->comment('状态  1.正常 2.冻结')->default(1);
            $table->tinyInteger('finish')->comment('高级用户是否完成 1.完成')->default(0);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('member');
    }
}
