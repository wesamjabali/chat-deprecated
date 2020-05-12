'use strict';

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route');

Route.on('/').render('welcome').middleware('guest');

Route
    .post('login', 'AuthController.login')
    .middleware('guest');

Route.get('verification/:token', 'VerificationController.verify');

Route
    .post('register', 'AuthController.register')
    .middleware('guest');

Route.on('app').render('app');

/**
 * API
 *
 * Edit routes should follow the following pattern
 * /api/entityName/{id}/update
 *
 * Creation Routes should follow the following pattern
 * /api/entityName/create
 */

Route.group(() => {
    Route.get('rooms', 'RoomController.allRooms');

    Route.post('rooms/create', 'RoomController.create').validator('Room');
}).prefix('api').middleware([
    'auth'
]);
