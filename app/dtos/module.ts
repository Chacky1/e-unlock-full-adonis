import { BaseModelDto } from '@adocasts.com/dto/base'
import Module from '#models/module'
import CourseDto from '#dtos/course'
import LessonDto from '#dtos/lesson'

export default class ModuleDto extends BaseModelDto {
  declare id: number
  declare courseId: number
  declare name: string
  declare description: string | null
  declare order: number
  declare isActive: boolean
  declare publishedAt: string | null
  declare createdAt: string
  declare updatedAt: string
  declare course: CourseDto | null
  declare lessons: LessonDto[]

  constructor(module?: Module) {
    super()

    if (!module) return
    this.id = module.id
    this.courseId = module.courseId
    this.name = module.name
    this.description = module.description
    this.order = module.order
    this.isActive = module.isActive
    this.publishedAt = module.publishedAt?.toISO()!
    this.createdAt = module.createdAt.toISO()!
    this.updatedAt = module.updatedAt.toISO()!
    this.course = module.course && new CourseDto(module.course)
    this.lessons = LessonDto.fromArray(module.lessons)
  }
}