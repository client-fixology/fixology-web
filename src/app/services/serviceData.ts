export interface ServiceType {
  id: string;
  title: string;
  description: string;
  price: string;
  heroImage: string;
  fullDescription: string;
  features: string[];
  benefits: string[];
  special: boolean
}

export const services: ServiceType[] = [
  {
    id: 'diagnostic-services',
    title: 'Diagnostic Services',
    description: 'Complete vehicle diagnostic using state-of-the-art equipment',
    price: 'From $79.99',
    heroImage: '../images/diagnostic-services.jpg',
    fullDescription: 'Our comprehensive diagnostic service uses the latest technology to identify any issues with your vehicle.',
    features: [
      'Full computer diagnostic scan',
      'Engine performance testing',
      'Electrical systems check',
      'Emissions testing'
    ],
    benefits: [
      'Accurate problem identification',
      'Prevent major repairs',
      'Improve vehicle performance',
      'Save money long-term'
    ],
    special: false
  },
  {
    id: 'oil-change',
    title: 'Oil Change',
    description: 'Full synthetic oil change with filter replacement',
    price: 'From $49.99',
    heroImage: '../images/oil-change.jpg',
    fullDescription: 'Keep your engine running smoothly with our professional oil change service.',
    features: [
      'Full synthetic oil',
      'New oil filter',
      'Multi-point inspection',
      'Fluid level check'
    ],
    benefits: [
      'Extend engine life',
      'Improve fuel efficiency',
      'Reduce engine wear',
      'Maintain warranty'
    ],
    special: false
  },
  {
    id: 'brake-service',
    title: 'Brake Services',
    description: 'Brake pad replacement and brake system inspection',
    price: 'From $149.99',
    heroImage: '../images/brake-service.jpg',
    fullDescription: 'Ensure your safety with our comprehensive brake service and inspection.',
    features: [
      'Brake pad replacement',
      'Rotor inspection',
      'Brake fluid check',
      'System calibration'
    ],
    benefits: [
      'Enhanced safety',
      'Better stopping power',
      'Reduced noise',
      'Extended brake life'
    ],
    special: false
  },
  {
    id: 'electrical-service',
    title: 'Electrical Systems',
    description: 'Battery testing, replacement, and electrical system check',
    price: 'From $89.99',
    heroImage: '../images/battery-service.jpg',
    fullDescription: 'Don\'t get stranded with a dead battery. Let us test and service your vehicle\'s electrical system.',
    features: [
      'Battery load testing',
      'Charging system check',
      'Terminal cleaning',
      'Battery replacement'
    ],
    benefits: [
      'Reliable starting',
      'Prevent electrical issues',
      'Extended battery life',
      'Peace of mind'
    ],
    special: false
  },
  {
    id: 'front-end-suspension',
    title: 'Front-End Suspension',
    description: 'Complete suspension inspection and repair service',
    price: 'From $199.99',
    heroImage: '../images/suspension-service.jpg',
    fullDescription: 'Expert suspension service to ensure smooth handling and optimal vehicle performance.',
    features: [
      'Strut/shock inspection',
      'Ball joint testing',
      'Tie rod inspection',
      'Alignment check'
    ],
    benefits: [
      'Improved handling',
      'Better tire wear',
      'Smoother ride',
      'Enhanced safety'
    ],
    special: false
  },
  {
    id: 'coolant-system',
    title: 'Coolant System',
    description: 'Comprehensive cooling system service and maintenance',
    price: 'From $129.99',
    heroImage: '../images/coolant-service.jpg',
    fullDescription: 'Complete cooling system inspection and service to prevent overheating and ensure proper engine temperature.',
    features: [
      'Coolant flush',
      'Pressure testing',
      'Hose inspection',
      'Thermostat check'
    ],
    benefits: [
      'Prevent overheating',
      'Extend engine life',
      'Optimal performance',
      'Year-round protection'
    ],
    special: false
  },
  {
    id: 'fuel-system',
    title: 'Fuel System',
    description: 'Fuel system cleaning and maintenance service',
    price: 'From $149.99',
    heroImage: '../images/fuel-service.jpg',
    fullDescription: 'Professional fuel system service to restore performance and improve fuel efficiency.',
    features: [
      'Fuel injection cleaning',
      'Filter inspection',
      'Pressure testing',
      'System diagnosis'
    ],
    benefits: [
      'Better fuel economy',
      'Improved performance',
      'Reduced emissions',
      'Smoother operation'
    ],
    special: false
  },
  {
    id: 'filter-replacement',
    title: 'Filter Replacement',
    description: 'Complete vehicle filter replacement service',
    price: 'From $89.99',
    heroImage: '../images/filter-service.jpg',
    fullDescription: 'Professional replacement of all major vehicle filters to maintain optimal performance.',
    features: [
      'Air filter replacement',
      'Oil filter change',
      'Fuel filter service',
      'Cabin filter replacement'
    ],
    benefits: [
      'Better air quality',
      'Improved engine life',
      'Enhanced performance',
      'Cleaner fuel system'
    ],
    special: false
  }
]
