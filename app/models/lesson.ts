import { DateTime } from 'luxon'
import { afterFetch, afterFind, BaseModel, belongsTo, column, manyToMany } from '@adonisjs/lucid/orm'
import type { BelongsTo, ManyToMany } from '@adonisjs/lucid/types/relations'
import drive from '@adonisjs/drive/services/main'
import Module from './module.js'
import User from './user.js'

export default class Lesson extends BaseModel {
  @afterFind()
  static async hydrateLessonWithSignedUrls(lesson: Lesson) {
    const hydratedLesson = await Lesson.hydrateLessonWithVideoSignedUrl(lesson)

    return hydratedLesson
  }

  @afterFetch()
  static async hydrateLessonsWithSignedUrls(lessons: Lesson[]) {
    const hydratedLessons = []

    for (const lesson of lessons) {
      const hydratedLesson = await Lesson.hydrateLessonWithSignedUrls(lesson)

      hydratedLessons.push(hydratedLesson)
    }

    return hydratedLessons
  }

  @column({ isPrimary: true })
  declare id: number

  @column()
  declare moduleId: number

  @column()
  declare name: string

  @column()
  declare content: string

  @column()
  declare order: number

  @column()
  declare videoUrl: string

  @column()
  declare isActive: boolean

  @column()
  declare isFree: boolean

  @column.dateTime()
  declare publishedAt: DateTime

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime

  @belongsTo(() => Module)
  declare module: BelongsTo<typeof Module>

  @manyToMany(() => User, {
    pivotTable: 'user_lessons',
  })
  declare users: ManyToMany<typeof User>

  static async hydrateLessonWithVideoSignedUrl(lesson: Lesson) {
    if (lesson.videoUrl === null) {
      return lesson
    }

    const lessonVideoUrl = new URL(lesson.videoUrl)

    const signedVideoUrl = await drive.use().getUrl(lessonVideoUrl.pathname)

    lesson.videoUrl = signedVideoUrl

    return lesson
  }
}
