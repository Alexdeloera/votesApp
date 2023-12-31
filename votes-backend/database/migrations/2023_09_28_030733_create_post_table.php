<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('post', function (Blueprint $table) {
            $table->id();
            $table->text("title")->require(true);
            $table->text("body")->require(true);
            $table->text("state")->require(true);
            $table->date("date")->require(true);
            $table->integer("user_id");
            $table->timestamps();
            $table->foreign("user_id")
                  ->references("id")
                  ->on('users')
                  ->onDelete("cascade");
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('post');
    }
};
