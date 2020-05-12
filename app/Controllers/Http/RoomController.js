'use strict';

const Room = use('App/Models/Room');
const Database = use('Database');

class RoomController {
    async allRooms({ request, response }) {
        let page = request.get().page || 1;

        await response.json(await Room.query().paginate(page, 1000));
    }

    async create({ request, response, auth }) {
        let user = await auth.getUser();

        let payload = request.only([
            'name',
            'password',
            'max_users'
        ]);

        let room = new Room();

        room.name = payload.name;
        room.password = payload.password;
        room.max_users = payload.max_users;

        await room.save();

        await Database.insert({ user_id: user.id, room_id: room.id }).into('room_users');

        await response.json({
            data: [
                room
            ]
        });
    }
}

module.exports = RoomController;
