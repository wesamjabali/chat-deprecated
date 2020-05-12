/*
* ALL VALIDATOR SERVICE METHODS MUST RETURN A BOOLEAN
*/

import moment from 'moment';
import is from 'is_js';

export default class ValidatorService {

    boolean(value) {
        return !!value;
    }

    date(value) {
        return moment(value).isValid();
    }

    email(value) {
        return is.email(value);
    }

    integer(value) {
        return typeof value === 'number';
    }

    string(value) {
        return typeof value === 'string';
    }

}
