'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class FoodsSchema extends Schema {
  up () {
    this.create('foods', (table) => {
      table.increments()
      table.string('description').notNullable()
      table.float('protein').notNullable()
      table.float('carbo').notNullable()
      table.float('fat').notNullable()
      table.integer('user_id')
        .notNullable()
        .unsigned()
        .references('id')
        .inTable('users')

      table.timestamps()
    })
  }

  down () {
    this.drop('foods')
  }
}

module.exports = FoodsSchema
