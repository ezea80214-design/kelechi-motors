export interface GuideBenefit {
  number: string;
  mistakeTitle: string;
  benefitTitle: string;
  description: string;
  practicalCheck: string;
}

export const GUIDE_TITLE = 'Avoid These 7 Costly Mistakes When Buying a Used Car';
export const GUIDE_SUBTITLE = 'One-Page Free PDF Guide for Nigerian Used-Car Buyers · Kelechi Motors';

export const PUBLISHED_GOOGLE_FORM_VIEW_URL =
  'https://docs.google.com/forms/d/e/1FAIpQLSfB4EdbhCV1i9IZkJJUTp3QPZnGwcPjSZBRAA8Dur-EmFhUbA/viewform';
export const PUBLISHED_GOOGLE_FORM_EMBED_URL =
  'https://docs.google.com/forms/d/e/1FAIpQLSfB4EdbhCV1i9IZkJJUTp3QPZnGwcPjSZBRAA8Dur-EmFhUbA/viewform?embedded=true';

// Temporary portfolio demonstration WhatsApp number (08060677222 -> 2348060677222).
// Replace with Kelechi Motors' verified official WhatsApp number when deploying live.
export const DEMO_WHATSAPP_NUMBER = '2348060677222';

export const WHATSAPP_PREFILL_MESSAGE =
  'Hello Kelechi Motors, I have downloaded your Free Used-Car Buying Guide and would like to make an enquiry about available vehicles.';

export const GUIDE_BENEFITS: GuideBenefit[] = [
  {
    number: '01',
    mistakeTitle: 'Buying a Flooded or Heavily Repaired Accident Car',
    benefitTitle: 'Spot Hidden Flood Rust, Fresh Filler & Mismatched Paint',
    description:
      'Many imported (Tokunbo) and locally used vehicles undergo cosmetic repainting after serious collisions or water damage. Learn how to check uneven panel gaps, overspray on rubber seals, silt under carpets, and rust on seat-rail bolts before making a commitment.',
    practicalCheck: 'Inspect spare-tyre well, seatbelt bases, and door-hinge bolts in daylight.',
  },
  {
    number: '02',
    mistakeTitle: 'Skipping an Independent Diagnostic Scan Before Paying',
    benefitTitle: 'Check for Cleared Warning Lights & Active Fault Codes',
    description:
      'Dashboard warning bulbs can be disconnected or fault codes cleared shortly before a viewing. Running an independent OBD-II diagnostic scan shows whether system readiness monitors are complete or if engine, ABS, and airbag issues are waiting to reappear.',
    practicalCheck: 'Have an independent mechanic scan ECU readiness monitors before paying.',
  },
  {
    number: '03',
    mistakeTitle: 'Trusting Odometer Readings Without Checking Vehicle History & Wear',
    benefitTitle: 'Compare Mileage Claims Against Physical Wear & VIN Records',
    description:
      'Odometer tampering is common on older imported and Nigerian-used cars. Compare the displayed mileage against steering-wheel polish, brake-pedal rubber wear, driver-seat bolsters, and available VIN history reports where applicable.',
    practicalCheck: 'Match dashboard VIN plate against door-jamb sticker and chassis stamp.',
  },
  {
    number: '04',
    mistakeTitle: 'Testing the Car Only After the Engine Is Already Warm',
    benefitTitle: 'Evaluate Cold-Start Behaviour, Gearbox Shifts & Cooling Under Load',
    description:
      'A pre-warmed engine can hide rough morning starts, noisy lifters, and weak batteries. Start the car cold, test reverse and forward gear engagement smoothly, and run the air conditioning at idle to verify the radiator fans and cooling system handle stop-and-go traffic.',
    practicalCheck: 'Arrive early so you observe a cold start and test A/C cooling at idle.',
  },
  {
    number: '05',
    mistakeTitle: 'Ignoring Local Spare Parts Availability & Road Suitability',
    benefitTitle: 'Choose Models With Accessible Parts & Reliable Local Maintenance',
    description:
      'A low purchase price can turn into long workshop delays if body panels, sensors, or suspension components are scarce in Nigeria. Check parts availability, ground clearance for your regular routes, and whether trusted mechanics service that specific engine.',
    practicalCheck: 'Confirm common service items (pads, shocks, filters) are readily stocked locally.',
  },
  {
    number: '06',
    mistakeTitle: 'Paying Without Verifying Customs Papers & Ownership Documents',
    benefitTitle: 'Confirm Genuine Documentation & Clear Seller Identity',
    description:
      'Incomplete customs duty papers, mismatched chassis numbers, or unclear third-party ownership can create legal and resale trouble later. Always verify original customs documents (for Tokunbo cars), vehicle licence, proof of ownership, and seller ID before transferring funds.',
    practicalCheck: 'Cross-check chassis/VIN across every paper document prior to bank transfer.',
  },
  {
    number: '07',
    mistakeTitle: 'Rushing Into Payment Under Pressure Without a Written Agreement',
    benefitTitle: 'Take Your Time, Factor Needed Repairs & Document Terms Clearly',
    description:
      'Urgent "other buyer waiting" pressure often leads buyers to overlook worn tyres, weak shocks, or missing paperwork. List every defect you notice during inspection, agree on who handles what, and obtain a signed receipt stating vehicle details, price, and payment terms.',
    practicalCheck: 'Never pay a non-refundable deposit before inspection and document checks.',
  },
];

export const GUIDE_HIGHLIGHTS = [
  {
    value: '1-Page PDF',
    label: 'One-page free PDF guide designed to read easily on your phone or print out',
  },
  {
    value: '7 Mistakes',
    label: 'Practical buying checks tailored for Tokunbo and Nigerian-used vehicles',
  },
  {
    value: 'Free Access',
    label: 'Register via our Google Form to unlock the download on the next page',
  },
];
