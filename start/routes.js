'use strict'

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.get('/', () => {
  return { greeting: 'Hello world in JSON' }
})

Route.post('/users', 'UserController.store')

Route.post('/sessions', 'SessionController.store')

Route.group(() => {
  Route.get('/foods', 'FoodController.index')
  Route.post('/foods', 'FoodController.store')
  Route.put('/foods/:id', 'FoodController.update')
}).middleware(['auth'])
