const { CronJob } = require('cron');
const initiateTwilio = require('./reminders.js');

const initiateTwilioJob = new CronJob('00 00 14 * * 0-6', function () {
    /* Runs every day at 11:30:00 AM. */
    initiateTwilio()
}, function () {
    /* This function is executed when the job stops */
    console.log('done with all chron')
},
    true, /* Start the job right now */
    'America/Los_Angeles' /* Time zone of this job. */
);

module.exports = initiateTwilioJob