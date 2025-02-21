import Course from "#models/course"
import { inject } from "@adonisjs/core"

export default class HomeAction {
  @inject()
  async handle() {
    const courses = await Course.all()

    return { courses }
  }
}
