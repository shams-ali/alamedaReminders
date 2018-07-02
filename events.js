require('dotenv').config();
const Batchelor = require('batchelor');

const {
    CALENDAR_ID: calendarId,
} = process.env;
const { promisifyAll, mapSeries } = require('bluebird');
const Moment = require('moment');

const { auth } = require('./helpers');

const { google: { calendar } } = require('googleapis');
const { events, calendars } = calendar('v3');
[events, calendars].forEach(promisifyAll);

const allEvents = [
    {
        summary: 'Alameda Khane - Sukhreet',
        start: '2018-07-06',
        attendees: ['roshanbhatia@yahoo.com'],
    },
    {
        summary: 'Alameda Khane - Fruit/Milk',
        start: '2018-07-06',
        attendees: ['roshanbhatia@yahoo.com'],
    },
    {
        summary: 'Alameda Khane - Sukhreet (3)',
        start: '2018-07-11',
        attendees: ['khadija.punjwani@yahoo.com'],
        description: 'Imamat Day'
    },
    {
        summary: 'Alameda Khane - Fruit/Milk',
        start: '2018-07-11',
        attendees: [],
        description: 'Imamat Day'
    },
    {
        summary: 'Alameda Khane - Sukhreet',
        start: '2018-07-13',
        attendees: ['khadija.punjwani@yahoo.com'],
        description: 'Chandraat- Beej (K)'
    },
    {
        summary: 'Alameda Khane - Fruit/Milk (1)',
        start: '2018-07-13',
        attendees: ['spatel129@gmail.com'],
        description: 'Chandraat- Beej (K)'
    },
    {
        summary: 'Alameda Khane - Sukhreet',
        start: '2018-07-20',
        attendees: ['zuli_lalani@hotmail.com'],
        description: 'Students (K)'
    },
    {
        summary: 'Alameda Khane - Fruit/Milk (1)',
        start: '2018-07-20',
        attendees: ['simshamji@gmail.com', 'zuli_lalani@hotmail.com'],
        description: 'Students (K)'
    },
    {
        summary: 'Alameda Khane - Sukhreet',
        start: '2018-07-27',
        attendees: ['zeenatboolani@yahoo.com'],
    },
    {
        summary: 'Alameda Khane - Fruit/Milk',
        start: '2018-07-27',
        attendees: ['zeenatboolani@yahoo.com'],
    }
]


const createEvents = async (auth, calendarId, events) => {
    const batch = new Batchelor({
        uri: 'https://www.googleapis.com/batch',
        method: 'POST',
        auth,
        headers: {
            'Content-Type': 'multipart/mixed',
        },
    });
    console.log(events, 'these are events')
    events.forEach(body => batch.add({
        method: 'POST',
        path: `/calendar/v3/calendars/${calendarId}/events`,
        parameters: {
            'Content-Type': 'application/json',
            body,
        },
        callback: res => res,
    }));
    try {
        console.log(batch, 'this is batch')
        const result = await promisifyAll(batch).runAsync();
        console.log(result, 'this is result')
        batch.reset();
        return result;
    } catch (err) {
        console.log(err, 'this is err')
        batch.reset();
        return err;
    }
}

const createAllEvents = async(allEvents) => {
    const { access_token } = await auth.authorizeAsync();

    const formatAllEvents = allEvents.map(({ summary, start, attendees, description }) => {
        return { 
            summary, 
            start: {
                dateTime: new Moment(start).add(20, 'hours').format()
            },
            end: {
                dateTime: new Moment(start).add(21, 'hours').format()
            },
            attendees: attendees.map(attendee => ({ email: attendee })), 
            description 
        }
    })
    console.log(formatAllEvents, 'this is formatted')
    // const x = await createEvents({ bearer: access_token }, calendarId, formatAllEvents);
    // console.log(x, 'this is x')
}

createAllEvents(allEvents);
