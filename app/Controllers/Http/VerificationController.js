'use strict';

const Persona = use('Persona');
let base64 = require('base-64');

class VerificationController {
    async verify ({ params, response }) {
        const token = base64.decode(params.token);

        await Persona.verifyEmail(token);
        await response.redirect('/app');
    }

    /* not sure where this should go lol */
    /*async updatePassword ({ request, auth, response }) {
        const payload = request.only([
            'old_password',
            'password',
            'password_confirmation'
        ]);

        const User = auth.user;

        let passwordUpdateSuccessful = await Persona.updatePassword(User, payload);
        if(passwordUpdateSuccessful) {
            User.setup_complete = true;
            User.save();

            await response.redirect('/app');
        }

    }*/
}

module.exports = VerificationController;
