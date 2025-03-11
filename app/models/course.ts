import { DateTime } from 'luxon'
import { afterFetch, afterFind, BaseModel, column, hasMany, hasManyThrough } from '@adonisjs/lucid/orm'
import type { HasMany, HasManyThrough } from '@adonisjs/lucid/types/relations'
import drive from '@adonisjs/drive/services/main'
import Module from './module.js'
import Lesson from './lesson.js'

export default class Course extends BaseModel {
  @afterFind()
  static async hydrateCourseWithSignedUrls(course: Course) {
    const courseWithSignedImageUrl = await Course.hydrateCourseWithImageSignedUrl(course)
    const courseWithAllSignedUrl = await Course.hydrateCourseWithVideoSignedUrl(courseWithSignedImageUrl)

    return courseWithAllSignedUrl
  }

  @afterFetch()
  static async hydrateCoursesWithSignedUrls(courses: Course[]) {
    const coursesWithSignedUrls = []

    for (const course of courses) {
      const courseWithSignedUrls = await Course.hydrateCourseWithSignedUrls(course)

      coursesWithSignedUrls.push(courseWithSignedUrls)
    }

    return coursesWithSignedUrls
  }

  @column({ isPrimary: true })
  declare id: number

  @column()
  declare name: string

  @column()
  declare slug: string

  @column()
  declare description: string | null

  @column()
  declare imageUrl: string | null

  @column()
  declare videoUrl: string | null

  @column.dateTime()
  declare publishedAt: DateTime | null

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime

  @hasMany(() => Module)
  declare modules: HasMany<typeof Module>

  @hasManyThrough([() => Lesson, () => Module])
  declare lessons: HasManyThrough<typeof Lesson>

  static async hydrateCourseWithImageSignedUrl(course: Course) {
    if (course.imageUrl === null) {
      return course
    }

    const courseImageUrl = new URL(course.imageUrl)

    const signedImageUrl = await drive.use().getUrl(courseImageUrl.pathname)

    course.imageUrl = signedImageUrl

    return course
  }

  static async hydrateCourseWithVideoSignedUrl(course: Course) {
    if (course.videoUrl === null) {
      return course
    }

    const courseVideoUrl = new URL(course.videoUrl)

    const signedVideoUrl = await drive.use().getUrl(courseVideoUrl.pathname)

    course.videoUrl = signedVideoUrl

    return course
  }
}
