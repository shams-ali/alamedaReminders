require('dotenv').config();

const events = {
  Alameda: [
    {
      date: '2018-08-10',
      occasion: 'Friday',
      items: [
        { email: 'naseemjaffer@gmail.com', item: 'Alameda Khane - Sukhreet' },
        { email: 'naseemjaffer@gmail.com', item: 'Alameda Khane - Fruit/Milk' }
      ]
    },
    {
      date: '2018-08-11',
      occasion: 'Chandraat',
      items: [
        { email: 'naseemjaffer@gmail.com', item: 'Alameda Khane - Sukhreet' },
        { email: 'spatel129@gmail.com', item: 'Alameda Khane - Fruit/Milk' }
      ]
    },
    {
      date: '2018-08-17',
      occasion: 'Students',
      items: [
        { email: 'aminaramzan@gmail.com', item: 'Alameda Khane - Sukhreet' },
        { email: 'zeenatboolani@yahoo.com', item: 'Alameda Khane - Fruit/Milk' }
      ]
    },
    {
      date: '2018-08-24',
      occasion: 'Friday',
      items: [
        { email: 'roshanbhatia@yahoo.com', item: 'Alameda Khane - Sukhreet' },
        { email: 'roshanbhatia@yahoo.com', item: 'Alameda Khane - Fruit/Milk' }
      ]
    },
    {
      date: '2018-08-28',
      occasion: 'Eid-e-Ghadir',
      items: [
        { email: 'zeenatboolani@yahoo.com', item: 'Alameda Khane - Sukhreet' },
        {
          email: 'zeenatboolani@yahoo.com',
          item: 'Alameda Khane - Fruit/Milk(1)'
        }
      ]
    },
    {
      date: '2018-08-31',
      occasion: 'Friday',
      items: [
        { email: 'kiranmerchant@gmail.com', item: 'Alameda Khane - Sukhreet' },
        { email: 'naseemjaffer@gmail.com', item: 'Alameda Khane - Fruit/Milk' }
      ]
    },
    {
      date: '2018-09-07',
      occasion: 'Friday',
      items: [
        { email: 'mackrehmat@gmail.com', item: 'Alameda Khane - Sukhreet' },
        { email: 'mackrehmat@gmail.com', item: 'Alameda Khane - Fruit/Milk' }
      ]
    },
    {
      date: '2018-09-10',
      occasion: 'Chandraat',
      items: [
        {
          email: 'khadija.punjwani@yahoo.com',
          item: 'Alameda Khane - Sukhreet'
        },
        { email: 'spatel129@gmail.com', item: 'Alameda Khane - Fruit/Milk' }
      ]
    },
    {
      date: '2018-09-14',
      occasion: 'Students',
      items: [
        { email: 'aminaramzan@gmail.com', item: 'Alameda Khane - Sukhreet' },
        {
          email: 'khadija.punjwani@yahoo.com',
          item: 'Alameda Khane - Fruit/Milk'
        }
      ]
    },
    {
      date: '2018-09-21',
      occasion: 'Friday',
      items: [
        {
          email: 'naseemjaffer@gmail.com',
          item: 'Alameda Khane - Sukhreet'
        },
        {
          email: 'naseemjaffer@gmail.com',
          item: 'Alameda Khane - Fruit/Milk'
        }
      ]
    },
    {
      date: '2018-09-28',
      occasion: 'Friday',
      items: [
        {
          email: 'roshanbhatia@yahoo.com',
          item: 'Alameda Khane - Sukhreet'
        },
        {
          email: 'roshanbhatia@yahoo.com',
          item: 'Alameda Khane - Fruit/Milk'
        }
      ]
    },
    {
      date: '2018-10-05',
      occasion: 'Friday',
      items: [
        {
          email: 'zeenatboolani@yahoo.com',
          item: 'Alameda Khane - Sukhreet'
        },
        {
          email: 'zeenatboolani@yahoo.com',
          item: 'Alameda Khane - Fruit/Milk'
        }
      ]
    },
    {
      date: '2018-10-09',
      occasion: 'Chandraat',
      items: [
        {
          email: 'mackrehmat@gmail.com',
          item: 'Alameda Khane - Sukhreet'
        },
        {
          email: 'spatel129@gmail.com',
          item: 'Alameda Khane - Fruit/Milk'
        }
      ]
    },
    {
      date: '2018-10-12',
      occasion: 'Students',
      items: [
        {
          email: 'kiranmerchant@gmail.com',
          item: 'Alameda Khane - Sukhreet'
        },
        {
          email: 'naseemjaffer@gmail.com',
          item: 'Alameda Khane - Fruit/Milk'
        }
      ]
    },
    {
      date: '2018-10-19',
      occasion: 'Friday',
      items: [
        {
          email: 'khadija.punjwani@yahoo.com',
          item: 'Alameda Khane - Sukhreet'
        },
        {
          email: 'khadija.punjwani@yahoo.com',
          item: 'Alameda Khane - Fruit/Milk'
        }
      ]
    },
    {
      date: '2018-10-20',
      occasion: 'Jamati Satada',
      items: [
        {
          email: 'simba94502@yahoo.com',
          item: 'Alameda Khane - Sukhreet'
        },
        {
          email: 'simba94502@yahoo.com',
          item: 'Alameda Khane - Fruit/Milk'
        }
      ]
    },
    {
      date: '2018-10-21',
      occasion: 'Jamati Satada',
      items: [
        {
          email: 'simba94502@yahoo.com',
          item: 'Alameda Khane - Sukhreet'
        },
        {
          email: 'simba94502@yahoo.com',
          item: 'Alameda Khane - Fruit/Milk'
        }
      ]
    },
    {
      date: '2018-10-22',
      occasion: 'Jamati Satada',
      items: [
        {
          email: 'aminaramzan@gmail.com',
          item: 'Alameda Khane - Sukhreet'
        },
        {
          email: 'roshanbhatia@yahoo.com',
          item: 'Alameda Khane - Fruit/Milk'
        }
      ]
    },
    {
      date: '2018-10-23',
      occasion: 'Jamati Satada',
      items: [
        {
          email: 'naseemjaffer@gmail.com',
          item: 'Alameda Khane - Sukhreet'
        },
        {
          email: 'naseemjaffer@gmail.com',
          item: 'Alameda Khane - Fruit/Milk'
        }
      ]
    },
    {
      date: '2018-10-24',
      occasion: 'Jamati Satada',
      items: [
        {
          email: 'roshanbhatia@yahoo.com',
          item: 'Alameda Khane - Sukhreet'
        },
        {
          email: 'roshanbhatia@yahoo.com',
          item: 'Alameda Khane - Fruit/Milk'
        }
      ]
    },
    {
      date: '2018-10-25',
      occasion: 'Jamati Satada',
      items: [
        {
          email: 'zeenatboolani@yahoo.com',
          item: 'Alameda Khane - Sukhreet'
        },
        {
          email: 'zeenatboolani@yahoo.com',
          item: 'Alameda Khane - Fruit/Milk'
        }
      ]
    },
    {
      date: '2018-10-26',
      occasion: 'Jamati Satada',
      items: [
        {
          email: 'mackrehmat@gmail.com',
          item: 'Alameda Khane - Sukhreet'
        },
        {
          email: 'mackrehmat@gmail.com',
          item: 'Alameda Khane - Fruit/Milk'
        }
      ]
    },
    {
      date: '2018-11-02',
      occasion: 'Friday',
      items: [
        {
          email: 'kiranmerchant@gmail.com',
          item: 'Alameda Khane - Sukhreet'
        },
        {
          email: 'mackrehmat@gmail.com',
          item: 'Alameda Khane - Fruit/Milk'
        }
      ]
    },
    {
      date: '2018-11-08',
      occasion: 'Chandraat',
      items: [
        {
          email: 'khadija.punjwani@yahoo.com',
          item: 'Alameda Khane - Sukhreet'
        },
        {
          email: 'spatel129@gmail.com',
          item: 'Alameda Khane - Fruit/Milk'
        }
      ]
    },
    {
      date: '2018-11-09',
      occasion: 'Students',
      items: [
        {
          email: '',
          item: 'Alameda Khane - Sukhreet'
        },
        {
          email: '',
          item: 'Alameda Khane - Fruit/Milk'
        }
      ]
    },
    {
      date: '2018-11-16',
      occasion: 'Friday',
      items: [
        {
          email: 'aminaramzan@gmail.com',
          item: 'Alameda Khane - Sukhreet'
        },
        {
          email: 'khadija.punjwani@yahoo.com',
          item: 'Alameda Khane - Fruit/Milk'
        }
      ]
    },
    {
      date: '2018-11-19',
      occasion: 'Milad-e-Nabi',
      items: [
        {
          email: 'roshanbhatia@yahoo.com',
          item: 'Alameda Khane - Sukhreet'
        },
        {
          email: 'roshanbhatia@yahoo.com',
          item: 'Alameda Khane - Fruit/Milk (1)'
        }
      ]
    },
    {
      date: '2018-11-23',
      occasion: 'Friday',
      items: [
        {
          email: 'kiranmerchant@gmail.com',
          item: 'Alameda Khane - Sukhreet'
        },
        {
          email: 'khadija.punjwani@yahoo.com',
          item: 'Alameda Khane - Fruit/Milk'
        }
      ]
    },
    {
      date: '2018-11-30',
      occasion: 'Friday',
      items: [
        {
          email: 'zeenatboolani@yahoo.com',
          item: 'Alameda Khane - Sukhreet'
        },
        {
          email: 'zeenatboolani@yahoo.com',
          item: 'Alameda Khane - Fruit/Milk'
        }
      ]
    },
    {
      date: '2018-12-07',
      occasion: 'Chandraat (Beej) (K)',
      items: [
        {
          email: 'mackrehmat@gmail.com',
          item: 'Alameda Khane - Sukhreet'
        },
        {
          email: 'spatel129@gmail.com',
          item: 'Alameda Khane - Fruit/Milk'
        }
      ]
    },
    {
      date: '2018-12-13',
      occasion: 'Salgirah',
      items: [
        {
          email: 'khadija.punjwani@yahoo.com (6)',
          item: 'Alameda Khane - Sukhreet'
        },
        {
          email: 'khadija.punjwani@yahoo.com',
          item: 'Alameda Khane - Fruit/Milk'
        }
      ]
    },
    {
      date: '2018-12-14',
      occasion: 'Students (K)',
      items: [
        {
          email: 'aminaramzan@gmail.com',
          item: 'Alameda Khane - Sukhreet'
        },
        {
          email: 'mackrehmat@gmail.com',
          item: 'Alameda Khane - Fruit/Milk'
        }
      ]
    },
    {
      date: '2018-12-21',
      occasion: 'Friday',
      items: [
        {
          email: 'naseemjaffer@gmail.com',
          item: 'Alameda Khane - Sukhreet'
        },
        {
          email: 'naseemjaffer@gmail.com',
          item: 'Alameda Khane - Fruit/Milk'
        }
      ]
    },
    {
      date: '2018-12-28',
      occasion: 'Friday',
      items: [
        {
          email: 'roshanbhatia@yahoo.com',
          item: 'Alameda Khane - Sukhreet'
        },
        {
          email: 'roshanbhatia@yahoo.com',
          item: 'Alameda Khane - Fruit/Milk'
        }
      ]
    }
  ]
};

module.exports = events