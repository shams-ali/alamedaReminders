require('dotenv').config()
const { CronJob } = require('cron');
const initiateTwilio = require('./reminders.js');
const { CHRON_TIME } = process.env
const initiateTwilioJob = new CronJob(CHRON_TIME, function () {
    /* Runs every day at 02:00:00 PM. */
    initiateTwilio()
}, function () {
    /* This function is executed when the job stops */
    console.log('done with all chron')
},
    true, /* Start the job right now */
    'America/Los_Angeles' /* Time zone of this job. */
);

module.exports = initiateTwilioJob