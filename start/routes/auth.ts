const RegisterController = () => import('#controllers/auth/register_controller')
const LoginController = () => import('#controllers/auth/login_controller')
const LogoutController = () => import('#controllers/auth/logout_controller')

import { middleware } from '#start/kernel'
import router from '@adonisjs/core/services/router'

router
  .group(() => {
    router.get('/register', [RegisterController, 'show']).as('register.show').use(middleware.guest())
    router.post('/register', [RegisterController, 'register']).as('register.store').use(middleware.guest())
    router.get('/login', [LoginController, 'show']).as('login.show').use(middleware.guest())
    router.post('/login', [LoginController, 'login']).as('login.store').use(middleware.guest())
    router.post('/logout', [LogoutController, 'logout']).as('logout').use(middleware.auth())
  })
  .prefix('auth')
