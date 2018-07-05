require('dotenv').config()
const { TEST_EMAIL, TEST_PHONE } = process.env

const contacts = {
    'simba94502@yahoo.com': '5103333387',
    'kiranmerchant@gmail.com': '3106225812',
    'aminaramzan@gmail.com': '6613307207',
    'naseemjaffer@gmail.com': '9253675615',
    'mackrehmat@gmail.com': '5107108221',
    'roshanbhatia@yahoo.com': '9252544844',
    'zeenatboolani@yahoo.com': '5108437510',
    'zuli_lalani@hotmail.com': '5108470800',
    'khadija.punjwani@yahoo.com': '9254948252',
    'simshamji@gmail.com': '4157220662',
    'spatel129@gmail.com': '2145364714',
    'ali.s90@outlook.com': '3109537849',
    'zain_jaffri@live.com': '3109890722',
    [TEST_EMAIL]: TEST_PHONE
}

module.exports = contacts