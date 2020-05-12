let collection = {};

const req = require.context('./../enums', false, /\.js$/);

req.keys().forEach(e => {
    collection[e.replace('./', '').replace('.js', '')] = req(e).default;
});

export default class EnumsService {

    constructor() {
        _.each(collection, (value, enumKey) => {
            this[enumKey] = value;
        });
    }
}
