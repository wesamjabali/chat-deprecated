import Query from './../api/Query';

export default class MakeService {
    Mutator(name, id) {
        return new window.Mutators[name](id);
    }

    Query(endpoint) {
        return new Query(endpoint);
    }
}
