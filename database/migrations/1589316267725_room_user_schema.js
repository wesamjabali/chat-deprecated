'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class RoomUserSchema extends Schema {
  up () {
    this.create('room_users', (table) => {
      table.increments()
      table.integer('room_id').references('rooms.id');
      table.integer('user_id').references('users.id');
    })
  }

  down () {
    this.drop('room_users')
  }
}

module.exports = RoomUserSchema
