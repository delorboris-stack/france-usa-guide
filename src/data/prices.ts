export interface PriceData {
  category: string;
  items: {
    [key: string]: {
      france: number;
      usa: { [city: string]: number };
      currency: 'USD' | 'EUR';
      unit: string;
    };
  };
}

export const pricesData: { [key: string]: PriceData } = {
  housing: {
    category: 'Housing',
    items: {
      studioRent: {
        france: 800,
        usa: {
          nyc: 2500,
          dallas: 1200,
          la: 1800,
          atlanta: 1100,
          miami: 1400,
          chicago: 1300,
          philly: 1100,
        },
        currency: 'USD',
        unit: 'per month',
      },
      oneBedRent: {
        france: 1200,
        usa: {
          nyc: 3200,
          dallas: 1500,
          la: 2300,
          atlanta: 1400,
          miami: 1800,
          chicago: 1600,
          philly: 1400,
        },
        currency: 'USD',
        unit: 'per month',
      },
      oneBedBuy: {
        france: 450000,
        usa: {
          nyc: 750000,
          dallas: 320000,
          la: 650000,
          atlanta: 380000,
          miami: 480000,
          chicago: 400000,
          philly: 350000,
        },
        currency: 'USD',
        unit: 'per unit',
      },
      houseBuy: {
        france: 650000,
        usa: {
          nyc: 950000,
          dallas: 520000,
          la: 900000,
          atlanta: 580000,
          miami: 720000,
          chicago: 600000,
          philly: 550000,
        },
        currency: 'USD',
        unit: 'per unit',
      },
    },
  },
  education: {
    category: 'Education',
    items: {
      publicUni: {
        france: 3000,
        usa: {
          nyc: 45000,
          dallas: 35000,
          la: 40000,
          atlanta: 32000,
          miami: 38000,
          chicago: 42000,
          philly: 40000,
        },
        currency: 'USD',
        unit: 'per year',
      },
      privateSchool: {
        france: 8000,
        usa: {
          nyc: 35000,
          dallas: 20000,
          la: 25000,
          atlanta: 18000,
          miami: 22000,
          chicago: 24000,
          philly: 21000,
        },
        currency: 'USD',
        unit: 'per year',
      },
    },
  },
  salary: {
    category: 'Salary',
    items: {
      monthlyNet: {
        france: 2400,
        usa: {
          nyc: 4800,
          dallas: 3600,
          la: 4200,
          atlanta: 3400,
          miami: 3600,
          chicago: 3800,
          philly: 3500,
        },
        currency: 'USD',
        unit: 'per month',
      },
      minimumWage: {
        france: 1300,
        usa: {
          nyc: 1500,
          dallas: 1200,
          la: 1500,
          atlanta: 1200,
          miami: 1300,
          chicago: 1400,
          philly: 1300,
        },
        currency: 'USD',
        unit: 'per month',
      },
    },
  },
  health: {
    category: 'Health',
    items: {
      gpVisit: {
        france: 35,
        usa: {
          nyc: 200,
          dallas: 150,
          la: 180,
          atlanta: 140,
          miami: 160,
          chicago: 170,
          philly: 150,
        },
        currency: 'USD',
        unit: 'per visit',
      },
      emergencyVisit: {
        france: 100,
        usa: {
          nyc: 1500,
          dallas: 1200,
          la: 1400,
          atlanta: 1100,
          miami: 1300,
          chicago: 1350,
          philly: 1200,
        },
        currency: 'USD',
        unit: 'per visit',
      },
      antibiotics: {
        france: 12,
        usa: {
          nyc: 80,
          dallas: 60,
          la: 75,
          atlanta: 55,
          miami: 65,
          chicago: 70,
          philly: 60,
        },
        currency: 'USD',
        unit: 'per course',
      },
    },
  },
  transport: {
    category: 'Transport',
    items: {
      gasPerGallon: {
        france: 5.80,
        usa: {
          nyc: 3.50,
          dallas: 3.20,
          la: 3.80,
          atlanta: 3.15,
          miami: 3.45,
          chicago: 3.40,
          philly: 3.35,
        },
        currency: 'USD',
        unit: 'per gallon',
      },
      driverLicense: {
        france: 1800,
        usa: {
          nyc: 65,
          dallas: 50,
          la: 60,
          atlanta: 48,
          miami: 55,
          chicago: 60,
          philly: 58,
        },
        currency: 'USD',
        unit: 'one-time',
      },
      monthlyMetroPass: {
        france: 86,
        usa: {
          nyc: 127,
          dallas: 65,
          la: 100,
          atlanta: 75,
          miami: 95,
          chicago: 105,
          philly: 95,
        },
        currency: 'USD',
        unit: 'per month',
      },
    },
  },
  internet: {
    category: 'Internet',
    items: {
      fiberInternet: {
        france: 45,
        usa: {
          nyc: 80,
          dallas: 60,
          la: 75,
          atlanta: 55,
          miami: 70,
          chicago: 65,
          philly: 60,
        },
        currency: 'USD',
        unit: 'per month',
      },
      mobilePlan: {
        france: 25,
        usa: {
          nyc: 75,
          dallas: 70,
          la: 75,
          atlanta: 65,
          miami: 72,
          chicago: 70,
          philly: 70,
        },
        currency: 'USD',
        unit: 'per month',
      },
    },
  },
  food: {
    category: 'Food',
    items: {
      restaurantMeal: {
        france: 15,
        usa: {
          nyc: 25,
          dallas: 18,
          la: 22,
          atlanta: 16,
          miami: 20,
          chicago: 19,
          philly: 18,
        },
        currency: 'USD',
        unit: 'average',
      },
      beerPint: {
        france: 6,
        usa: {
          nyc: 8,
          dallas: 5.50,
          la: 7,
          atlanta: 5,
          miami: 6.50,
          chicago: 6,
          philly: 5.50,
        },
        currency: 'USD',
        unit: 'per pint',
      },
      espresso: {
        france: 2.50,
        usa: {
          nyc: 4,
          dallas: 3.25,
          la: 3.75,
          atlanta: 3,
          miami: 3.50,
          chicago: 3.50,
          philly: 3.25,
        },
        currency: 'USD',
        unit: 'per cup',
      },
      croissant: {
        france: 1.30,
        usa: {
          nyc: 4.50,
          dallas: 3.50,
          la: 4,
          atlanta: 3,
          miami: 3.75,
          chicago: 3.50,
          philly: 3.25,
        },
        currency: 'USD',
        unit: 'per item',
      },
      weeklyGroceries: {
        france: 60,
        usa: {
          nyc: 120,
          dallas: 85,
          la: 110,
          atlanta: 80,
          miami: 100,
          chicago: 95,
          philly: 90,
        },
        currency: 'USD',
        unit: 'per week',
      },
    },
  },
};