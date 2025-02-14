/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

const RegisterController = () => import('#controllers/auth/register_controller')
const LoginController = () => import('#controllers/auth/login_controller')

import router from '@adonisjs/core/services/router'

router.on('/').renderInertia('home').as('home')

router
  .group(() => {
    router.get('/register', [RegisterController, 'index']).as('register-page')
    router.post('/register', [RegisterController, 'register']).as('register-store')
    router.get('/login', [LoginController, 'index']).as('login-page')
    router.post('/login', [LoginController, 'login']).as('login-store')
  })
  .prefix('auth')
