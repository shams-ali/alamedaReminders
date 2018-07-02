require('dotenv').config();

const {
    CALENDAR_ID: calendarId,
    TWILIO_ACCOUNT_SID: accountSid,
    TWILIO_AUTH_TOKEN: authToken,
    TWILIO_PHONE: twilioPhone
} = process.env;

const { promisifyAll, mapSeries } = require('bluebird');
const Moment = require('moment');

const { auth } = require('./helpers');
const contacts = require('./contacts');

const { google: { calendar } } = require('googleapis');
const { events } = calendar('v3');
[events].forEach(promisifyAll(events));

const { messages } = require('twilio')(accountSid, authToken);

const initiateTwilio = async() => {
    try {
        await auth.authorizeAsync();
        const tomorrow = new Moment().add(1, 'days');
        const { data: { items } } = await events.listAsync({
            auth,
            calendarId,
            singleEvents: true,
            timeMin: tomorrow.format(),
            timeMax: tomorrow.add(1, 'days').format(),
            orderBy: 'startTime'
        });
        const twilioMessages = items.reduce((messages, { summary, description = '', attendees = [], start: { dateTime } = {} }) =>
            messages.concat(attendees.map(({ email }) => ({ 
                from: twilioPhone, 
                body: `REMINDER: ${summary.trim()} at ${Moment(dateTime).format('LLLL')} *${description}*`, 
                to: `+1${contacts[email]}`
            })
        )), [])
        
        console.log(twilioMessages, 'this is twilio messages')
        const results = await mapSeries(twilioMessages, message => messages.create(message))
        console.log(results, 'this is results')

    } catch (error) {
        console.error('this is error', error);
    }

}

module.exports = initiateTwilio

