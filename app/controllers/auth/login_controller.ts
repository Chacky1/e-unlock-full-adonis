import type { HttpContext } from '@adonisjs/core/http'

import { loginValidator } from '#validators/auth/login'
import WebLogin from '#actions/auth/web_login'
import { inject } from '@adonisjs/core'

export default class LoginController {
  public async show({ inertia }: HttpContext) {
    return inertia.render('auth/login')
  }

  @inject()
  public async login({ request, response }: HttpContext, webLogin: WebLogin) {
    const loginData = await request.validateUsing(loginValidator)

    await webLogin.handle({ data: loginData })

    return response.redirect().toPath('/')
  }
}
