'use strict';

const BaseExceptionHandler = use('BaseExceptionHandler');

/**
 * This class handles all exceptions thrown during
 * the HTTP request lifecycle.
 *
 * @class ExceptionHandler
 */
class ExceptionHandler extends BaseExceptionHandler {
    /**
     * Handle exception thrown during the HTTP lifecycle
     *
     * @method handle
     *
     * @param  {Object} error
     * @param  {Object} options.request
     * @param  {Object} options.response
     *
     * @return {void}
     */
    async handle (error, { request, response }) {
        const E_GUEST_ONLY = 'E_GUEST_ONLY: Only guest user can access the route';
        const E_INVALID_SESSION = 'E_INVALID_SESSION: Invalid session';

        if(error.name === 'HttpException' && error.message.includes(E_GUEST_ONLY)) {
            response.redirect('/app');
        }
        else if(error.name === 'InvalidSessionException' && error.message === E_INVALID_SESSION) {
            response.redirect('/');
        }
        else {
            await super.handle(...arguments);

        }

    }

    /**
     * Report exception for logging or debugging.
     *
     * @method report
     *
     * @param  {Object} error
     * @param  {Object} options.request
     *
     * @return {void}
     */
    async report (error, { request }) {
    }
}

module.exports = ExceptionHandler;
