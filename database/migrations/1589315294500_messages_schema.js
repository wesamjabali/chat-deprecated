'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class MessagesSchema extends Schema {
  up () {
    this.create('messages', (table) => {
      table.increments('id')
      table.timestamps()
      table.integer('user_id').references('users.id')
      table.integer('room_id').references('rooms.id')
      table.string('message', 1000).notNullable();
    })
  }

  down () {
    this.drop('messages')
  }
}

module.exports = MessagesSchema
