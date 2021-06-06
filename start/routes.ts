/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer'
|
*/

import Route from '@ioc:Adonis/Core/Route'

Route.get('/', async () => {
  return { hello: 'world' }
})

// auth/*
Route.group(() => {
  Route
    .post('login', 'UsersController.login')
    .as('login')
    .middleware('hasBody')
  Route
    .post('logout', 'UsersController.logout')
    .as('logout')
    .middleware('auth')
  Route
    .post('signup', 'UsersController.signup')
    .as('signup')
    .middleware('hasBody')
})
  .prefix('auth')

// posts/*
Route.group(() => {
  Route
    .get('', 'PostsController.list')
    .as('list_posts')
  Route
    .post('', 'PostsController.create')
    .as('create_post')
    .middleware('hasBody')
})
  .prefix('posts')
  .middleware('auth')

// post/*
Route.group(() => {
  Route
    .delete(':id', 'PostsController.delete')
    .as('delete_post')
    .middleware('PostHasAccess')
  Route
    .route(':id', ['PUT', 'PATCH'], 'PostsController.update')
    .as('update_post')
    .middleware('PostHasAccess')
  Route
    .get(':id', 'PostsController.show')
    .as('show_post')
})
  .prefix('post')
  .where('id', /^[1-9][0-9]*$/)
  .middleware(['auth', 'PostExist'])