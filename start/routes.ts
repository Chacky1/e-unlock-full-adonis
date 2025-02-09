/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

const RegisterController = () => import('#controllers/auth/register_controller')

import router from '@adonisjs/core/services/router'
router.on('/').renderInertia('home')

router
  .group(() => {
    router.get('/register', [RegisterController, 'index']).as('register-store')
    router.post('/register', [RegisterController, 'register']).as('register-page')
  })
  .prefix('auth')
  .as('auth')
