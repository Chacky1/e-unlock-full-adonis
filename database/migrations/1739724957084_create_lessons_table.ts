import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'lessons'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table
        .integer('module_id')
        .unsigned()
        .references('modules.id')
        .onDelete('CASCADE')
        .notNullable()
      table.string('name', 255).notNullable()
      table.text('content').nullable()
      table.integer('order').notNullable()
      table.string('video_url', 255).nullable()
      table.boolean('is_active').nullable().defaultTo(false)
      table.boolean('is_free').nullable().defaultTo(false)

      table.timestamp('published_at').nullable()
      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
