import { DateTime } from 'luxon'
import { BaseModel, belongsTo, column, hasMany } from '@adonisjs/lucid/orm'
import Course from './course.js'
import type { BelongsTo, HasMany } from '@adonisjs/lucid/types/relations'
import Lesson from './lesson.js'

export default class Module extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare courseId: number

  @column()
  declare name: string

  @column()
  declare description: string | null

  @column()
  declare order: number

  declare isActive: boolean

  @column.dateTime()
  declare publishedAt: DateTime | null

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime

  @belongsTo(() => Course)
  declare course: BelongsTo<typeof Course>

  @hasMany(() => Lesson)
  declare lessons: HasMany<typeof Lesson>
}
