import type { HttpContext } from '@adonisjs/core/http'

import { registerValidator } from '#validators/auth/register'
import User from '#models/user'

export default class RegisterController {
  public async index({ inertia }: HttpContext) {
    return inertia.render('auth/register')
  }
  
  public async register({ request, response }: HttpContext) {
    const userData = await request.validateUsing(registerValidator)

    await User.create(userData)

    return response.redirect().toRoute('login-page')
  }
}
