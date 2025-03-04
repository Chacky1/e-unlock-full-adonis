import { BaseModelDto } from '@adocasts.com/dto/base'
import Lesson from '#models/lesson'
import ModuleDto from '#dtos/module'
import UserDto from '#dtos/user'

export default class LessonDto extends BaseModelDto {
  declare id: number
  declare moduleId: number
  declare name: string
  declare content: string
  declare order: number
  declare videoUrl: string
  declare isActive: boolean
  declare isFree: boolean
  declare publishedAt: string
  declare createdAt: string
  declare updatedAt: string
  declare module: ModuleDto | null
  declare users: UserDto[]

  constructor(lesson?: Lesson) {
    super()

    if (!lesson) return
    this.id = lesson.id
    this.moduleId = lesson.moduleId
    this.name = lesson.name
    this.content = lesson.content
    this.order = lesson.order
    this.videoUrl = lesson.videoUrl
    this.isActive = lesson.isActive
    this.isFree = lesson.isFree
    this.publishedAt = lesson.publishedAt.toISO()!
    this.createdAt = lesson.createdAt.toISO()!
    this.updatedAt = lesson.updatedAt.toISO()!
    this.module = lesson.module && new ModuleDto(lesson.module)
    this.users = lesson.users && UserDto.fromArray(lesson.users)
  }
}
