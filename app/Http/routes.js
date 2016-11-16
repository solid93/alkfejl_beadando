'use strict'

/*
|--------------------------------------------------------------------------
| Router
|--------------------------------------------------------------------------
|
| AdonisJs Router helps you in defining urls and their actions. It supports
| all major HTTP conventions to keep your routes file descriptive and
| clean.
|
| @example
| Route.get('/user', 'UserController.index')
| Route.post('/user', 'UserController.store')
| Route.resource('user', 'UserController')
*/

const Route = use('Route')

Route.on('/').render('login')

Route.get('/home', 'HomeController.index').middleware('auth')

Route.get('/asd', 'CardController.index')
Route.post('asd', 'CardController.doCreate')


Route.get('/login', 'AuthController.index')
Route.post('/login', 'AuthController.login')

Route.get('/logout', 'AuthController.logout')

Route.get('/register', 'RegisterController.index')
Route.post('register', 'RegisterController.doRegister')
