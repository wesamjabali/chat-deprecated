'use strict';

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema');

class RoomsSchema extends Schema {
  up () {
    this.create('rooms', (table) => {
      table.increments('id');
      table.integer('max_users');
      table.string('password', 255);
    })
  }

  down () {
    this.drop('rooms');
  }
}

module.exports = RoomsSchema;
