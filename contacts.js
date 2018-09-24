require('dotenv').config()

const { TEST_EMAIL, TEST_PHONE } = process.env

const contacts = {
    'simba94502@yahoo.com': '5103333387',
    'kiranmerchant@gmail.com': '3106225812',
    'aminaramzan@gmail.com': '6613307207',
    'naseemjaffer@gmail.com': '9253675615',
    'mackrehmat@gmail.com': '5107108221',
    'roshanbhatia@yahoo.com': '9259150746',
    'zeenatboolani@yahoo.com': '5108164585',
    'zuli_lalani@hotmail.com': '5108470800',
    'khadija.punjwani@yahoo.com': '9254948252',
    'simshamji@gmail.com': '4157220662',
    'spatel129@gmail.com': '2145364714',
    'ali.s90@outlook.com': '3109537849',
    'zain_jaffri@live.com': '3109890722',
    [TEST_EMAIL]: TEST_PHONE
}

module.exports = contacts

/*
Al Karim Premji		510 333 3387	simba94502@yahoo.com
Kiran Merchant		310 622 5812	kiranmerchant@gmail.com
Amina Dharani		661 330 7207	aminaramzan@gmail.com
Naseem Jaffer		925 367 5615	naseemjaffer@gmail.com
Rehmat Mackwani		510 710 8221	mackrehmat@gmail.com
Roshan Bhatia		925 915 0746	roshanbhatia@yahoo.com
Zeenat Boolani		510 843 7510	zeenatboolani@yahoo.com
Zuli Lalani		510 847 0800	zuli_lalani@hotmail.com
Khadija Panjwani		925 494 8252	khadija.punjwani@yahoo.com
Simin Shamji		415 722 0662	simshamji@gmail.com
Sunny Patel		214 536 4714	spatel129@gmail.com
*/