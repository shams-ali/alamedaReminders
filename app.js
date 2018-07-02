require('dotenv').config();
const { PORT } = process.env;
const app = require('express')();
const initiateTwilioJob = require('./chron.js');

console.log('initiateTwilioJob status', initiateTwilioJob.running); // initiateTwilioJob status undefined

app.listen(PORT, () => console.log(`Listening on port ${PORT}`))
