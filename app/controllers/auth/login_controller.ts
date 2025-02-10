import type { HttpContext } from '@adonisjs/core/http'

import { loginValidator } from '#validators/auth/login'
import User from '#models/user'

export default class LoginController {
  public async index({ inertia, request }: HttpContext) {
    return inertia.render('auth/login', {
      csrfToken: request.csrfToken,
    })
  }

  public async login({ request, response, auth }: HttpContext) {
    const { email, password } = await request.validateUsing(loginValidator)

    const user = await User.verifyCredentials(email, password)

    await auth.use('web').login(user)

    return response.json({ message: 'Logged in successfully' })
  }
}
