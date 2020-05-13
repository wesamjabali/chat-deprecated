import Mutator from './_Mutator';

export default class CreateRoomMutator extends Mutator {
    constructor() {
        super('create', 'room', require('./inputs/RoomInput').default);
    }
}
