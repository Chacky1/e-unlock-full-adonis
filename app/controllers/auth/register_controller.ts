import type { HttpContext } from '@adonisjs/core/http'
import { inject } from '@adonisjs/core'

import { registerValidator } from '#validators/auth/register'
import WebRegister from '#actions/auth/web_register'

export default class RegisterController {
  public async show({ inertia }: HttpContext) {
    return inertia.render('auth/register')
  }
  
  @inject()
  public async register({ request, response }: HttpContext, webRegister: WebRegister) {
    const userData = await request.validateUsing(registerValidator)

    await webRegister.handle({ data: userData })

    return response.redirect().toPath('/')
  }
}
