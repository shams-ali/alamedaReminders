/* eslint no-console: ["error", { allow: ["warn", "error"] }] */
require('dotenv').config();

const {
    TWILIO_ACCOUNT_SID: accountSid,
    TWILIO_AUTH_TOKEN: authToken,
    TWILIO_PHONE: twilioPhone,
    TEST_PHONE = '3109537849'
} = process.env;

const { mapSeries } = require('bluebird');
const Moment = require('moment');
const { messages } = require('twilio')(accountSid, authToken);

const contacts = require('./contacts');
const events = require('./events.js')

const { assign } = Object

const initiateTwilio = async() => {
    try {
        console.warn('twilio initiated')
        const { Alameda } = events
        const tomorrow = Moment().add(1, 'day') 
        const jamatiMessages = Alameda
            .filter(({date}) => 
                Moment(date).isSame(Date.now(), 'day') ||  Moment(date).isSame(tomorrow, 'day'))
            .reduce((buildJamatiMessages, { date, occasion, items }) =>
                buildJamatiMessages.concat(items.map(({ email, item }) => ({ 
                    from: twilioPhone, 
                    body: `REMINDER: ${item} at ${Moment(date).format('LLLL')} *${occasion}*`, 
                    to: `+1${contacts[email]}`
                })
            )), [])
        
        const adminMessage = jamatiMessages.length ? 
            jamatiMessages.reduce((buildAdminMessage, { body, to }) => assign(buildAdminMessage, { 
                body: `${buildAdminMessage.body} ${body} to: ${to};`
            }), { from: twilioPhone, to: `+1${TEST_PHONE}`, body: ''}) 
            : []
        
        console.warn(jamatiMessages.concat(adminMessage), 'twilio messages')
        const results = await mapSeries(
            jamatiMessages.concat(adminMessage),
            message => messages.create(message)
        )
        console.warn(results, 'this is results')
    } catch (error) {
        console.error('this is error', error);
    }
}

module.exports = initiateTwilio

