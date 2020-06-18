<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateWithdrawTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('withdraw', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->integer('user_id');
            $table->integer('money')->comment('提现金额');
            $table->tinyInteger('type')->comment('1.银行卡  2.支付宝 3.微信')->default(1);
            $table->string('bank_no')->comment('银行卡号')->nullable();
            $table->string('bank_name')->comment('姓名')->nullable();
            $table->string('bank_address')->comment('开户地')->nullable();
            $table->string('alipay')->comment('支付宝号')->nullable();
            $table->string('weixin')->comment('微信账号')->nullable();
            $table->tinyInteger('status')->default(0)->comment('0.待审核  1.审核通过  2.驳回');
            $table->string('reject_msg')->comment('驳回理由')->nullable();
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
        Schema::dropIfExists('withdraw');
    }
}
