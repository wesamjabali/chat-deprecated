'use strict';
/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

class EmailVerification {
    /**
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Function} next
   */
    async handle ({ auth, response, view }, next) {
        let User = await auth.getUser();

        if(User.account_status === 'pending') {
            await response.send('check your email for a verification link');
        }
        else {
            await next();
        }

    }

    /**
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Function} next
   */
    async wsHandle ({ request }, next) {
    // call next to advance the request
        await next();
    }
}

module.exports = EmailVerification;
