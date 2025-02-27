import Course from "#models/course"
import { inject } from "@adonisjs/core"

export default class HomeAction {
  @inject()
  async handle() {
    const courses = await Course.query().preload('modules', (query) => {
      query.preload('lessons', (query) => {
        query.orderBy('order', 'asc')
      }).orderBy('order', 'asc')
    }).exec()

    return { courses }
  }
}
