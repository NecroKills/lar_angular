<?php

use Illuminate\Http\Request;

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('/', 'PostControlador@index');

Route::get('/', 'PostControlador@store');

Route::delete('/{id}', 'PostControlador@destroy');

Route::get('/lik/{id}', 'PostControlador@like');