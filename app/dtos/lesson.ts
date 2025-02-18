import { BaseModelDto } from '@adocasts.com/dto/base'
import Lesson from '#models/lesson'

export default class LessonDto extends BaseModelDto {
  declare id: number
  declare createdAt: string
  declare updatedAt: string

  constructor(lesson?: Lesson) {
    super()

    if (!lesson) return
    this.id = lesson.id
    this.createdAt = lesson.createdAt.toISO()!
    this.updatedAt = lesson.updatedAt.toISO()!
  }
}