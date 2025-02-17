import { DateTime } from 'luxon'
import { BaseModel, column, hasMany, hasManyThrough, manyToMany } from '@adonisjs/lucid/orm'
import type { HasMany, HasManyThrough, ManyToMany } from '@adonisjs/lucid/types/relations'
import User from './user.js'
import Module from './module.js'
import Lesson from './lesson.js'

export default class Course extends BaseModel {
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

  @manyToMany(() => User, {
    pivotTable: 'course_users',
  })
  declare users: ManyToMany<typeof User>

  @hasMany(() => Module)
  declare modules: HasMany<typeof Module>

  @hasManyThrough([() => Lesson, () => Module])
  declare lessons: HasManyThrough<typeof Lesson>
}
