import Mutator from './_Mutator';

export default class CreateGameMutator extends Mutator {
    constructor() {
        super('create', 'game', require('./inputs/GameInput').default);
    }
}
