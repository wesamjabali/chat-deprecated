export default class Paginator {
    constructor(endpoint, page, lastPage, total) {
        this._endpoint = endpoint;
        this._page = page;
        this._lastPage = lastPage;
        this._total = total;
    }

    get endpoint() {
        return this._endpoint;
    }

    get page() {
        return this._page;
    }

    get lastPage() {
        return this._lastPage;
    }

    get total() {
        return this._total;
    }

    get next() {
        if(this.page === this.lastPage) {
            return false;
        }
        else {
            return this.page + 1;
        }
    }

    get previous() {
        if(this.page === 1) {
            return false;
        }
        else {
            return this.page - 1;
        }
    }

}
