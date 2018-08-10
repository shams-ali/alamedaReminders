require('dotenv').config();

const {
    TWILIO_ACCOUNT_SID: accountSid,
    TWILIO_AUTH_TOKEN: authToken,
    TWILIO_PHONE: twilioPhone,
    TEST_PHONE
} = process.env;

const { mapSeries } = require('bluebird');
const Moment = require('moment');

const contacts = require('./contacts');
const events = require('./events.js')
const { messages } = require('twilio')(accountSid, authToken);
console.log('hello world');

const initiateTwilio = async() => {
    try {
        console.log('twilio initiated')
        console.log('authorized')
        const { Alameda } = events 
        const twilioMessages = Alameda
            .filter(({date}) => Moment(date).isSame(Date.now(), 'day'))
            .reduce((messages, { date, occasion, items }) =>
                messages.concat(items.map(({ email, item }) => ({ 
                    from: twilioPhone, 
                    body: `REMINDER: ${item} at ${Moment(date).format('LLLL')} *${occasion}*`, 
                    to: `+1${contacts[email]}`
                })
            )), [])
            .concat({
                from: '16502002692',
                body: 'khane notificatione sent',
                to: `+${TEST_PHONE}`
            })
        
        console.log(twilioMessages, 'this is twilio messages')
        const results = await mapSeries(twilioMessages, message => messages.create(message))
        console.log(results, 'this is results')
    } catch (error) {
        console.error('this is error', error);
    }

}

module.exports = initiateTwilio

