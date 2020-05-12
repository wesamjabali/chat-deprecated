import Mutator from './_Mutator';

export default class CreateUserMutator extends Mutator {
    constructor() {
        super('create', 'user', require('./inputs/UserInput').default);
    }
}
