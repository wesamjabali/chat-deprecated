
import Response from './Response';
import Paginator from './Paginator';
import axios from 'axios';

export default class Query {
    constructor(endpoint) {
        this.endpoint = endpoint;
        this._Paginator = null;
    }

    async _fetch() {
        return await axios.get(this.endpoint, {
            headers: {
                Accept: 'application/json'
            }
        });
    }

    async all() {
        let rawResponse = await this._fetch();

        this._Paginator = new Paginator(this.endpoint, rawResponse.data.page, rawResponse.data.lastPage, rawResponse.data.total);

        return new Response(rawResponse, 'ALL', this.Paginator);//.getData();
    }

    async first() {
        let rawResponse = await this._fetch();

        this._Paginator = new Paginator(this.endpoint, rawResponse.data.page, rawResponse.data.lastPage,  rawResponse.data.total);

        return new Response(rawResponse, 'FIRST', this.Paginator);//.getData();
    }

    get Paginator() {
        return this._Paginator;
    }
}
