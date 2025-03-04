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
    price: 'From $50.00',
    heroImage: 'https://client-fixology.github.io/fixology-web/images/diagnostic-services.jpg',
    fullDescription: 'Is your car not performing as it should? Strange sounds, warning lights, or a dip in fuel efficiency could mean something\'s off under the hood. Our Automotive Diagnostic Services are here to identify and resolve any issues quickly and efficiently, keeping you and your car safely on the road.<br/><br/>Our state-of-the-art diagnostic tools and expert technicians can assess all aspects of your vehicle, from engine performance to electrical systems. Whether it\'s a mysterious check engine light or a more complex issue, we leave no stone unturned. We\'ll not only diagnose the problem but also provide clear explanations and a plan for the fix.<br/><br/>When you choose our diagnostic services, you\'re opting for precision, transparency, and peace of mind. Don\'t wait for a small issue to turn into a costly repair—book your appointment today! Let us keep your car running smoothly and reliably.<br/><br/>Your car deserves the best care—because every journey begins with trust.',
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
    price: 'Call for Pricing',
    heroImage: 'https://client-fixology.github.io/fixology-web/images/oil-change.jpg',
    fullDescription: 'Regular oil changes are essential to maintaining the performance and longevity of your vehicle. Our Automotive Oil Change Services are designed to give your engine the care it deserves, ensuring a smooth, efficient, and reliable ride every time.<br/><br/>With our expert technicians and high-quality oils, we offer a thorough service that includes replacing your engine oil, installing a new oil filter, and conducting a quick inspection to catch any potential issues early. Whether you prefer conventional, synthetic, or high-mileage oil, we\'ll tailor the service to your vehicle\'s specific needs<br/><br/>Why choose us? Because we prioritize speed, convenience, and customer satisfaction. Don\'t let old oil slow your engine down—schedule your oil change today and enjoy a car that\'s always ready to go the extra mile!<br/><br/>Your next adventure starts with a healthy engine—let\'s make it happen!',
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
    price: 'Call for Pricing',
    heroImage: 'https://client-fixology.github.io/fixology-web/images/brake-service.jpg',
    fullDescription: 'Your brakes are one of the most critical safety components of your vehicle. Don\'t take chances—our Automotive Brake Services are here to ensure your braking system performs flawlessly, giving you the confidence you need on every drive.<br/><br/>We offer comprehensive brake services, including brake pad replacement, rotor resurfacing or replacement, and system inspections to identify wear and potential issues. Our skilled technicians use high-quality parts and precision tools to keep your brakes in peak condition, ensuring your safety and peace of mind.<br/><br/>Whether you\'ve noticed squeaking, grinding, or reduced stopping power, or it\'s simply time for routine maintenance, trust us to handle it. With quick, reliable service, we\'ll have you back on the road in no time.<br/><br/>Don\'t wait for a brake issue to escalate—schedule your service today and drive with peace of mind, knowing your brakes are ready when you need them most. Safety starts here!',
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
    price: 'Call for Pricing',
    heroImage: 'https://client-fixology.github.io/fixology-web/images/battery-service.jpg',
    fullDescription: 'Your vehicle\'s electrical system is the backbone of its functionality, from starting the engine to powering essential features like lights, wipers, and navigation systems. When something goes wrong, it can disrupt your entire driving experience. That\'s where our Automotive Electrical Systems Services come in—delivering expert care to keep your vehicle\'s electrical components in top condition.<br/><br/>Our skilled technicians are equipped to diagnose and repair all aspects of your car\'s electrical system, including the battery, alternator, starter motor, wiring, and fuses. Whether you\'re dealing with dimming headlights, dashboard warning lights, or a completely dead battery, we\'ll identify the issue and provide a reliable solution.<br/><br/>Trust us to get your car back on the road with precision, speed, and quality parts. Don\'t let electrical problems leave you stranded—schedule your service today and experience the difference professional care makes<br/><br/>Because a reliable car starts with a powerful electrical system!',
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
    price: 'Call for Pricing',
    heroImage: 'https://client-fixology.github.io/fixology-web/images/suspension-service.jpg',
    fullDescription: 'Your vehicle\'s front-end suspension system plays a crucial role in ensuring a comfortable, stable, and safe driving experience. If you\'re noticing a rough ride, uneven tire wear, or difficulty steering, it may be time for our Automotive Front End Suspension Services.<br/><br/>Our expert technicians specialize in diagnosing and repairing suspension issues, including worn-out shocks, struts, ball joints, tie rods, and control arms. Using top-quality parts and advanced tools, we\'ll restore your car\'s handling, alignment, and ride comfort, giving you confidence on every turn and bump in the road.<br/><br/>Don\'t let suspension problems compromise your safety or driving enjoyment. Schedule your service today and experience the smooth, responsive ride you deserve! Because every journey should feel as good as it is safe.',
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
    price: 'Call for Pricing',
    heroImage: 'https://client-fixology.github.io/fixology-web/images/coolant-service.jpg',
    fullDescription: 'Your vehicle\'s cooling system is vital for maintaining the right engine temperature and preventing costly damage caused by overheating. Our Automotive Cooling System Services ensure your engine runs at its best, no matter the conditions.<br/><br/>We provide a thorough inspection and maintenance of your cooling system, including coolant flushes, thermostat replacements, radiator repairs, hose checks, and more. Our expert technicians use advanced tools and high-quality components to keep your system working efficiently and your engine protected.<br/><br/>Don\'t wait for warning signs like rising temperature gauges or coolant leaks—stay ahead of the game with our reliable cooling system care. Schedule your service today and enjoy worry-free driving with a cool and efficient engine.<br/><br/>Because a healthy cooling system means a healthy engine!',
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
    price: 'Call for Pricing',
    heroImage: 'https://client-fixology.github.io/fixology-web/images/fuel-service.jpg',
    fullDescription: 'Your vehicle\'s fuel system is the lifeline that keeps your engine running smoothly, delivering the right mix of fuel for optimal performance. Over time, deposits and wear can reduce fuel efficiency and power. Our Automotive Fuel System Services are here to ensure your engine gets clean, uninterrupted fuel flow for peak performance.<br/><br/>Our comprehensive services include fuel injector cleaning, fuel filter replacement, system inspections, and addressing issues like clogged injectors or fuel pump wear. Using advanced techniques and quality components, our expert technicians will restore your vehicle\'s efficiency, power, and reliability.<br/><br/>Don\'t let a sluggish engine or poor mileage hold you back—schedule your fuel system service today. Experience the difference that a clean, efficient system can make on every drive!<br/><br/>Because your engine deserves nothing less than top-quality care.',
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
    price: 'Call for Pricing',
    heroImage: 'https://client-fixology.github.io/fixology-web/images/filter-service.jpg',
    fullDescription: 'Filters play a crucial role in protecting your vehicle\'s vital systems by keeping out dirt, debris, and contaminants. Our Automotive Filter Replacement Services ensure your engine, cabin, and other components perform at their best, giving you a cleaner, healthier, and more efficient driving experience.<br/><br/>We offer replacement services for all essential filters, including engine air filters, cabin air filters, fuel filters, and oil filters. Our skilled technicians use high-quality replacements tailored to your vehicle\'s specifications to ensure maximum performance and longevity.<br/><br/>Don\'t let clogged or worn-out filters compromise your engine\'s health or your comfort. Schedule your filter replacement service today for cleaner air, smoother performance, and peace of mind on the road.<br/><br/>Because a well-filtered car is a well-performing car!',
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
