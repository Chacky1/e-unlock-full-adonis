import HomeAction from '#actions/home'
import CourseDto from '#dtos/course'
import { inject } from '@adonisjs/core'
import type { HttpContext } from '@adonisjs/core/http'

export default class HomeController {
  @inject()
  async show({ inertia }: HttpContext, homeAction: HomeAction) {
    const { courses } = await homeAction.handle()

    const coursesDto = courses.map(course => new CourseDto(course))

    return inertia.render('home', {
      courses: coursesDto
    })
  }
  
}
