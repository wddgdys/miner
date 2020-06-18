<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateDividendLogTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('dividend_log', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->integer('user_id')->default(0);
            $table->integer('from_id')->default(0);
            $table->integer('points')->default(0)->comment('分红积分');
            $table->string('content')->comment('内容')->nullable();
            $table->string('sign')->comment('类型 re:分红')->default('re');
            $table->tinyInteger('func')->comment('1加2减')->default(1);
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
        Schema::dropIfExists('dividend_log');
    }
}
