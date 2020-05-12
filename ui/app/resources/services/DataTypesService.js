export default class DataTypesService {

    get boolean() {
        return {
            name: 'boolean',
            validator: Validator.boolean
        };
    }

    get date() {
        return {
            name: 'date',
            validator: Validator.date
        };
    }

    get email() {
        return {
            name: 'email',
            validator: Validator.email
        };
    }

    get integer() {
        return {
            name: 'integer',
            validator: Validator.integer
        };
    }

    get socialSecurityNumber() {
        return {
            name: 'socialSecurityNumber',
            validator: Validator.socialSecurityNumber
        };
    }

    get string () {
        return {
            name: 'string',
            validator: Validator.string
        };
    }
}
