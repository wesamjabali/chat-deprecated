export default class MeService {
    constructor() {
        Make.Query('/api/users/me').first().then(Response => {
            this.Me = Response.getData();
            window.Me = Response.getData();
        });
    }
}
