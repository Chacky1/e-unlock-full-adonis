import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'modules'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table
        .integer('course_id')
        .unsigned()
        .references('courses.id')
        .onDelete('CASCADE')
        .notNullable()
      table.string('name', 255).notNullable()
      table.text('description').nullable()
      table.integer('order').notNullable()
      table.boolean('is_active').nullable().defaultTo(false)

      table.timestamp('published_at').nullable()
      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
