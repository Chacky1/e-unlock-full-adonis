import { inject } from '@adonisjs/core'
import type { HttpContext } from '@adonisjs/core/http'
import UserAction from '#actions/user'

export default class UsersController {
  @inject()
  async completeLesson({ request, response }: HttpContext, userAction: UserAction) {
    const { userId, lessonId } = request.params() as { userId: string, lessonId: string }

    await userAction.handleCompleteLesson(+userId, +lessonId)

    const referer = request.header('Referer') ? new URL(request.header('Referer') as string).pathname : null

    return referer ? response.redirect().toPath(referer) : response.noContent()
  }

  @inject()
  async incompleteLesson({ request, response }: HttpContext, userAction: UserAction) {
    const { userId, lessonId } = request.params() as { userId: string, lessonId: string }

    await userAction.handleIncompleteLesson(+userId, +lessonId)

    const referer = request.header('Referer') ? new URL(request.header('Referer') as string).pathname : null

    return referer ? response.redirect().toPath(referer) : response.noContent()
  }
}
