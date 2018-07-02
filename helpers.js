const { google }  = require('googleapis');
const web = require('./client_secret');

const helpers = {
    auth: new google.auth.JWT(web.client_email, null, web.private_key, ['https://www.googleapis.com/auth/plus.me', 'https://www.googleapis.com/auth/calendar']),
};

module.exports = helpers;
