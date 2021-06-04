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

Route
  .get('docs/:id', ({ params, request, response, logger }) => {
    logger.info(params.id)
    logger.info(request.completeUrl())
    response.send({'accepted': params.id})
  })
  .where('id', /^[1-9][0-9]*$/);

Route.group(() => {
  Route
    .post('login', 'UsersController.login')
    .as('login')
    .middleware('hasBody')
  Route
    .post('signup', 'UsersController.signup')
    .as('signup')
    .middleware('hasBody')
}).prefix('auth')
