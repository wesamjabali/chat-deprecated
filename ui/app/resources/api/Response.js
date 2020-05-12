import _ from 'lodash';

export default class Response {
    constructor(rawResponse, fetchMode, Paginator) {
        this._rawResponse = rawResponse;
        this._fetchMode = fetchMode;
        this._errors = [];
        this._Paginator = Paginator;

        this._setErrors();
    }

    get Paginator() {
        return this._Paginator;
    }

    baseResponse() {
        return this._rawResponse.data;
    }

    getData() {
        let baseResponse = this.baseResponse();

        if(this._fetchMode === 'FIRST') {
            return baseResponse.data[0];
        }

        return this.baseResponse().data;
    }

    errors() {
        return this._errors;
    }

    _setErrors() {
        _.each(this.baseResponse().errors, error => {
            this._errors.push({
                fieldName: error.source.pointer,
                errorMessages: error.detail
            });
        });
    }

    hasErrors() {
        return this.errors().length > 0;
    }
}
