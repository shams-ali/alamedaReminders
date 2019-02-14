require('dotenv').config();

const { PORT } = process.env;
const app = require('express')();
const initiateTwilioJob = require('./chron.js');

console.log('initiateTwilioJob status', initiateTwilioJob.running);

app.get('/', (_, res) => res.send('You have reached Alameda Reminders'))

app.listen(PORT, () => console.log(`Listening on port ${PORT}`))

