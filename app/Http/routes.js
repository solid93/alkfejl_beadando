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

Route.on('/').render('pages.login')

Route.group('auth-routes', () => {
    Route.get('/tasks', 'TaskController.index').middleware('auth')
    Route.get('/completed-tasks', 'TaskController.completedTasks').middleware('auth')
    Route.get('/complete-task', 'TaskController.index')
    Route.post('complete-task', 'TaskController.complete')
    Route.get('/edit-task', 'TaskController.edit')
    Route.post('edit-task', 'TaskController.update')
    Route.get('/redo-task', 'TaskController.index')
    Route.post('redo-task', 'TaskController.redoTask')
    Route.get('/create-task', 'TaskController.create').middleware('auth')
    Route.post('create-task', 'TaskController.store').middleware('auth')
}).middleware('auth')




Route.get('/login', 'AuthController.index')
Route.post('/login', 'AuthController.login')

Route.get('/logout', 'AuthController.logout')

Route.get('/register', 'RegisterController.index')
Route.post('register', 'RegisterController.register')


