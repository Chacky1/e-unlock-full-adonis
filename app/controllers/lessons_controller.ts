import CourseDto from '#dtos/course'
import LessonDto from '#dtos/lesson'
import Course from '#models/course'
import Lesson from '#models/lesson'
import type { HttpContext } from '@adonisjs/core/http'

export default class LessonsController {
  async show({ inertia, params }: HttpContext) {
    const lesson = await Lesson.find(params.lessonId)

    if (!lesson) {
      return inertia.render('404')
    }

    const course = await Course.query().preload('modules', (query) => {
      query.preload('lessons', (query) => {
        query.orderBy('order', 'asc')
      }).orderBy('order', 'asc')
    }).preload('lessons').where('slug', params.courseSlug).first()

    if (!course) {
      return inertia.render('404')
    }

    return inertia.render('lesson', {
      course: new CourseDto(course),
      lesson: new LessonDto(lesson)
    })
  }
}
