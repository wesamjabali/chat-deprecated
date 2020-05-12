import Response from '../Response';
import axios from 'axios';
import pluralize from 'pluralize';

export default class Mutator {
    constructor(action, entity, structure, id) {
        this._action = action;
        this._entity = entity;
        this._structure = structure;

        if(this._action === 'update') {
            this._id = id;
            if(!id) {
                throw new Error('Update mutators require an id');
            }
        }
    }

    get baseEndpoint() {
        return '/api';
    }

    get entity() {
        return this._entity;
    }

    get structure() {
        return this._structure;
    }

    async submit() {
        return axios.post(this.endpoint, {
            ...this.normalizeInputsForSubmission(),
            headers: {
                'X-CSRF-TOKEN': document.getElementsByTagName('body')[0].getAttribute('data-csrf'),
                'X-Requested-With': 'XMLHttpRequest',
                Accept: 'application/json'
            }
        }).then(rawResponse => {
            return new Response(rawResponse, 'ALL');
        }).catch(rawErrorResponse => {
            return new Response(rawErrorResponse.response, 'ALL');
        });
    }

    normalizeInputsForSubmission() {
        let result = {};
        _.each(this._structure, (value, key) => {
            result[key] = value.value;
        });

        return result;
    }

    setStructureValue(key, value) {
        if(this._structure[key]) {
            this._structure[key].value = value;
        }
    }

    get endpoint() {
        let result,
            entity = this._action === 'create' ? pluralize(this._entity): this._entity;

        if(this._action === 'create') {
            result = `${this.baseEndpoint}/${entity}/${this._action}`;
        }
        if(this._action === 'update') {
            result = `${this.baseEndpoint}/${entity}/${this._id}/${this._action}`;
        }

        return result;
    }

}
