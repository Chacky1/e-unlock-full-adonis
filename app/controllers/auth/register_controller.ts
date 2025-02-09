import type { HttpContext } from '@adonisjs/core/http'

import { registerValidator } from '#validators/auth/register'
import User from '#models/user'

export default class RegisterController {
  public async index({ inertia, request }: HttpContext) {
    return inertia.render('auth/register', {
      csrfToken: request.csrfToken,
    })
  }
  
  public async register({ request, response }: HttpContext) {
    const userData = await request.validateUsing(registerValidator)

    const newUser = await User.create(userData)

    return response.json(newUser)
  }
}
