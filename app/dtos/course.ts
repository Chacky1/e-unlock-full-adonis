import { BaseModelDto } from '@adocasts.com/dto/base'
import Course from '#models/course'
import UserDto from '#dtos/user'
import ModuleDto from '#dtos/module'
import LessonDto from '#dtos/lesson'

export default class CourseDto extends BaseModelDto {
  declare id: number
  declare name: string
  declare slug: string
  declare description: string | null
  declare imageUrl: string | null
  declare videoUrl: string | null
  declare publishedAt: string | null
  declare createdAt: string
  declare updatedAt: string
  declare users: UserDto[]
  declare modules: ModuleDto[]
  declare lessons: LessonDto[]

  constructor(course?: Course) {
    super()

    if (!course) return
    this.id = course.id
    this.name = course.name
    this.slug = course.slug
    this.description = course.description
    this.imageUrl = course.imageUrl
    this.videoUrl = course.videoUrl
    this.publishedAt = course.publishedAt?.toISO()!
    this.createdAt = course.createdAt.toISO()!
    this.updatedAt = course.updatedAt.toISO()!
    this.users = UserDto.fromArray(course.users)
    this.modules = ModuleDto.fromArray(course.modules)
    this.lessons = LessonDto.fromArray(course.lessons)
  }
}