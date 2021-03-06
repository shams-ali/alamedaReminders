require('dotenv').config();

const { TEST_EMAIL, TEST_PHONE } = process.env;

const contacts = {
  'ali.s90@outlook.com': '3109537849',
  'alijankhwaja@hotmail.com': '7135174711',
  'aminaramzan@gmail.com': '6613307207',
  'gsp110@aol.com': '9254081047',
  'khadija.punjwani@yahoo.com': '9254948252',
  'kiranmerchant@gmail.com': '3106225812',
  'mackrehmat@gmail.com': '5107108221',
  'marmarinv@gmail.com': '5102204533',
  'naseemjaffer@gmail.com': '9253675615',
  'roshanbhatia@yahoo.com': '9259150746',
  'saira.shamji@gmail.com': '5104176885',
  'simba94502@yahoo.com': '5103333387',
  'simshamji@gmail.com': '4157220662',
  'spatel129@gmail.com': '2145364714',
  'zain_jaffri@live.com': '3109890722',
  'zeenatboolani@yahoo.com': '5108164585',
  'zuli_lalani@hotmail.com': '5108470800',
  [TEST_EMAIL]: TEST_PHONE
};

module.exports = contacts;

/*
Alnoor Koorji		925 528 9039	koorji@gmail.com
Al Karim Premji		510 333 3387	simba94502@yahoo.com
Alijan Khwaja		713 517 4711	alijankhwaja@hotmail.com
Amina Dharani		661 330 7207	aminaramzan@gmail.com
Gulshan Rowjani		925 408 1047	gsp110@aol.com
Khadija Panjwani		925 494 8252	khadija.punjwani@yahoo.com
Kiran Merchant		310 622 5812	kiranmerchant@gmail.com
Marmarin         510 220 4533               marmarinv@gmail.com
Naseem Jaffer		925 367 5615	naseemjaffer@gmail.com
Rehmat Mackwani		510 710 8221	mackrehmat@gmail.com
Roshan Bhatia		925 254 4844	roshanbhatia@yahoo.com
Saira Shamji		510 417 6885	Saira.shamji@gmail.com
Simin Shamji		415 722 0662	simshamji@gmail.com
Sunny Patel		214 536 4714	spatel129@gmail.com
Taher Paroo		214 725 3434	tahir.m.paroo@gmail.com
Zeenat Boolani		510 843 7510	zeenatboolani@yahoo.com
Zuli Lalani		510 847 0800	zuli_lalani@hotmail.com
*/
