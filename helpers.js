require('dotenv').config()
const { 
    client_email,
    private_key
} = process.env

const { google }  = require('googleapis');

const helpers = {
    auth: new google.auth.JWT(client_email, null, private_key.split('\\n').join('\n'), ['https://www.googleapis.com/auth/plus.me', 'https://www.googleapis.com/auth/calendar']),
};

console.log(private_key.split('\\n').join('\n'), client_email)
helpers.auth.authorizeAsync()
console.log('authorized in helpers')

module.exports = helpers;
