'use strict';

const Persona = use('Persona');

class AuthController {
    async register ({ request, auth, response }) {
        const payload = request.only([
            'email',
            'password',
            'username',
            'password_confirmation'
        ]);

        const user = await Persona.register(payload);

        // optional
        await auth.login(user);
        response.redirect('/app');
    }

    async login ({ request, auth, response }) {
        const payload = request.only([
            'uid',
            'password'
        ]);

        const user = await Persona.verify(payload);

        await auth.login(user);
        response.redirect('/app');
    }

}

module.exports = AuthController;
