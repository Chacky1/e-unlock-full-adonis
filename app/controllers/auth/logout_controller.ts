import { inject } from '@adonisjs/core'
import type { HttpContext } from '@adonisjs/core/http'
import WebLogout from '#actions/auth/web_logout'

export default class LogoutController {
  @inject()
  public async logout({ response }: HttpContext, webLogout: WebLogout) {
    await webLogout.handle()

    return response.redirect().toRoute('login.show')
  }
}
