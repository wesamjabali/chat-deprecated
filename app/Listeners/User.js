'use strict';

const Mail = use('Mail');
const Token = use('App/Models/Token');
const User = exports = module.exports = {};
let base64 = require('base-64');

User.sendVerificationEmail = async ({ user, token }) => {

    const encodedToken = base64.encode(token);

    await Mail.send('emails.email_verification', { user, token: encodedToken },  message => {
        message.to(user.email)
            .from('no-reply@risk.co.uk.thatscrazymanyoueverdone.dmt')
            .subject('Risk Email Verification');
    });
};
