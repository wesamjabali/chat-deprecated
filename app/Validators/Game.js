'use strict';

class Game {
    get rules () {
        return {
            name: 'required|string',
            password: 'string|max:8|min:4'
        };
    }

    get messages() {
        return {
            'name.required': 'Game name is required.',
            'name.string': 'Name must be a valid string',
            'password.string': 'Password must be a valid string',
            'password.max': 'Passwords must be no more than 8 characters',
            'password.min': 'Passwords must be no less than 4 characters'
        };
    }
}

module.exports = Game;
