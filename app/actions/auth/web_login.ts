import User from '#models/user'
import { loginValidator } from '#validators/auth/login'
import { inject } from '@adonisjs/core'
import { HttpContext } from '@adonisjs/core/http'
import { Infer } from '@vinejs/vine/types'

type Params = {
  data: Infer<typeof loginValidator>
}

@inject()
export default class WebLogin {
  constructor(protected ctx: HttpContext) {}

  @inject()
  async handle({ data }: Params) {
    const { email, password } = data

    const user = await User.verifyCredentials(email, password)

    await this.ctx.auth.use('web').login(user)

    return { user }
  }
}
