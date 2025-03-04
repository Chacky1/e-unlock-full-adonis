import type { HttpContext } from '@adonisjs/core/http'
import { addContactValidator } from '#validators/mailer'
import plunkService from '#services/plunk'

export default class MailerController {
  public async addContact({ request, response }: HttpContext) {
    const { email } = await request.validateUsing(addContactValidator)

    try {
      await plunkService.addContactOrFail(email)
    } catch(error) {
      console.error(error)
      return response.badRequest('Failed to add contact')
    }

    return response.redirect().back()
  }
}
