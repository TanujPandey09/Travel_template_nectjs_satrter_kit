export interface DayPlan {
  day: number;
  title: string;
  route: string;
  meals: string;
  stay: string;
  highlights: string[];
}

export interface TourPackage {
  id: string;
  title: string;
  subtitle: string;
  region: string;
  category: 'Domestic' | 'International' | 'Honeymoon' | 'Spiritual';
  durationNights: number;
  durationDays: number;
  basePrice3Star: number;
  basePrice4Star: number;
  basePrice5Star: number;
  bestSeason: string;
  pickupDrop: string;
  defaultVehicle: string;
  rating: string;
  reviewsCount: number;
  badgeText: string;
  badgeTone: 'terracotta' | 'pine' | 'amber' | 'sky';
  image: string;
  featured?: boolean;
  amenities: string[];
  itinerary: DayPlan[];
  inclusions: string[];
  exclusions: string[];
}

export interface VehicleSpecItem {
  label: string;
  value: string;
  note: string;
}

export interface FleetVehicle {
  id: string;
  name: string;
  categoryTag: string;
  seatingLabel: string;
  idealFor: string;
  perKmRate: number;
  minKmPerDay: number;
  driverAllowancePerDay: number;
  baseDayRental: number;
  image: string;
  highlights: string[];
  specs: VehicleSpecItem[];
}

export interface PopularCircuit {
  id: string;
  name: string;
  origin: string;
  destinations: string;
  totalKm: number;
  recommendedDays: number;
  stateTaxEstimate: number;
  altitudeOrTerrain: string;
}

export interface TestimonialItem {
  id: string;
  quote: string;
  travelerName: string;
  roleAndCity: string;
  tripTaken: string;
  vehicleUsed: string;
  dateLabel: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export const AGENCY_CONFIG = {
  name: 'Traveli',
  tagline: 'Bespoke Uttarakhand & Pan-India Expeditions • Luxury Chauffeur Fleet',
  phoneDisplay: '+91 98114 72940',
  whatsappNumber: '919811472940',
  email: 'concierge@traveli.in',
  headquarters: 'Tapovan, Rishikesh, Uttarakhand & Connaught Place, New Delhi',
  tourismReg: 'UK-TOUR-2026-99214',
  gstin: '05AABCT9841K1Z8',
};

export const TOUR_PACKAGES: TourPackage[] = [
  {
    id: 'kashmir-imperial-valley',
    title: 'Kashmir Alpine & Gurez Valley Expedition',
    subtitle: 'Private houseboat stay on Nigeen Lake, Gulmarg Phase 2 gondola, and offbeat Pahalgam meadows with dedicated Innova Crysta.',
    region: 'Jammu & Kashmir, India',
    category: 'Domestic',
    durationNights: 5,
    durationDays: 6,
    basePrice3Star: 21490,
    basePrice4Star: 28900,
    basePrice5Star: 44500,
    bestSeason: 'Mar to Oct & Dec to Feb',
    pickupDrop: 'Srinagar Airport (SXR)',
    defaultVehicle: 'Private Toyota Innova Crysta',
    rating: '4.9',
    reviewsCount: 318,
    badgeText: 'Signature Circuit',
    badgeTone: 'terracotta',
    image: 'https://picsum.photos/seed/kashmir-alpine-lake-mountains/1200/800',
    featured: true,
    amenities: ['Heritage Houseboat', 'Private SUV', 'Breakfast & Dinner', 'Shikara Charter', 'Gondola Passes'],
    itinerary: [
      {
        day: 1,
        title: 'Arrival in Srinagar & Nigeen Lake Sunset Shikara',
        route: 'Srinagar Airport to Nigeen Lake (22 km)',
        meals: 'Welcome Kahwa & Dinner',
        stay: 'Luxury Cedar Houseboat, Nigeen Lake',
        highlights: ['Private airport pickup in climate-controlled SUV', 'Evening 90-minute Shikara cruise across quiet floating gardens', 'Traditional Wazwan-inspired welcome dinner'],
      },
      {
        day: 2,
        title: 'Srinagar to Gulmarg Meadow of Flowers',
        route: 'Srinagar to Gulmarg via Tangmarg (54 km)',
        meals: 'Breakfast & Dinner',
        stay: 'Alpine Resort in Gulmarg',
        highlights: ['Scenic pine ascent from Tangmarg viewpoint', 'Guided Gondola ride up to Kongdoori and Apharwat Peak', 'Optional ATV trail or winter snow sledging'],
      },
      {
        day: 3,
        title: 'Gulmarg to Pahalgam via Awantipora Ruins & Saffron Fields',
        route: 'Gulmarg to Pahalgam (140 km)',
        meals: 'Breakfast & Dinner',
        stay: 'Riverside Boutique Retreat, Lidder Valley',
        highlights: ['Stop at 9th-century Awantipora temple ruins', 'Visit Pampore saffron and walnut growers directly', 'Evening walk along the Lidder River rapids'],
      },
      {
        day: 4,
        title: 'Aru, Betaab & Chandanwari Valley Exploration',
        route: 'Pahalgam Local Union Cab Included (36 km)',
        meals: 'Breakfast & Dinner',
        stay: 'Riverside Boutique Retreat, Lidder Valley',
        highlights: ['Pre-arranged local union cab to Aru and Betaab Valley', 'Picnic stop beside snow-fed glacial streams', 'Zero forced carpet-shop detours'],
      },
      {
        day: 5,
        title: 'Return to Srinagar & Mughal Gardens Circuit',
        route: 'Pahalgam to Srinagar (92 km)',
        meals: 'Breakfast & Dinner',
        stay: 'Boutique Hotel in Srinagar',
        highlights: ['Guided walk through Nishat Bagh and Shalimar Bagh terraces', 'Visit Shankaracharya Hill viewpoint overlooking Dal Lake', 'Old City spice and Pashmina craft walk'],
      },
      {
        day: 6,
        title: 'Departure Transfer to Srinagar Airport',
        route: 'Hotel to Srinagar Airport (16 km)',
        meals: 'Breakfast',
        stay: 'Departure Day',
        highlights: ['Punctual airport drop 3 hours before flight', 'Complimentary Kashmiri kehwa gift box'],
      },
    ],
    inclusions: [
      '5 Nights accommodation in selected hotel star tier',
      'Daily breakfast and dinner at stays',
      'Dedicated private AC SUV (AC switched off on steep hill ascents per safety norms)',
      'Pahalgam local union cab for Aru, Betaab, and Chandanwari',
      '1-hour private Shikara ride and all toll, parking, and driver allowances',
    ],
    exclusions: [
      'Airfare or train tickets to Srinagar',
      'Pony rides and personal adventure gear rentals',
      'Lunches and camera fees at monuments',
    ],
  },
  {
    id: 'ladakh-zanskar-high-passes',
    title: 'Ladakh, Nubra & Pangong Tso Expedition',
    subtitle: 'High-altitude circuit across Khardung La, Hunder sand dunes, Turtuk border village, and lakeside Pangong camp.',
    region: 'Ladakh, India',
    category: 'Domestic',
    durationNights: 6,
    durationDays: 7,
    basePrice3Star: 26800,
    basePrice4Star: 34500,
    basePrice5Star: 51900,
    bestSeason: 'May to Sep',
    pickupDrop: 'Leh Kushok Bakula Airport (IXL)',
    defaultVehicle: 'Toyota Innova / Xylo Hill Fleet',
    rating: '4.9',
    reviewsCount: 204,
    badgeText: 'Oxygen Equipped Fleet',
    badgeTone: 'pine',
    image: 'https://picsum.photos/seed/ladakh-pangong-monastery-pass/1200/800',
    amenities: ['Inner Line Permits', 'Oxygen Cylinder in Cab', 'MAP Meals', 'Nubra Swiss Camp', 'Pangong Lakefront'],
    itinerary: [
      {
        day: 1,
        title: 'Arrival in Leh & Complete High-Altitude Acclimatization',
        route: 'Leh Airport to Hotel (6 km)',
        meals: 'Dinner',
        stay: 'Leh Boutique Hotel',
        highlights: ['Airport transfer and pulse-oximeter check at check-in', 'Rest day for 3,500m altitude adjustment', 'Light evening stroll at Leh Main Market'],
      },
      {
        day: 2,
        title: 'Sham Valley: Sangam, Magnetic Hill & Alchi Monastery',
        route: 'Leh to Sham Valley Loop (110 km)',
        meals: 'Breakfast & Dinner',
        stay: 'Leh Boutique Hotel',
        highlights: ['Confluence of Indus and Zanskar rivers at Nimmu', 'Hall of Fame museum and Gurudwara Pathar Sahib', 'Sunset over Shanti Stupa'],
      },
      {
        day: 3,
        title: 'Leh to Nubra Valley via Khardung La Pass (17,582 ft)',
        route: 'Leh to Hunder via Khardung La (126 km)',
        meals: 'Breakfast & Dinner',
        stay: 'Luxury Glamping Tents / Resort, Hunder',
        highlights: ['Cross Khardung La with photo stop', 'Visit Diskit Monastery and 106-foot Maitreya Buddha', 'Double-humped Bactrian camel safari on cold desert dunes'],
      },
      {
        day: 4,
        title: 'Day Excursion to Turtuk Last Village on Shyok River',
        route: 'Hunder to Turtuk & Return (164 km)',
        meals: 'Breakfast & Dinner',
        stay: 'Luxury Glamping Tents / Resort, Hunder',
        highlights: ['Drive along the turquoise Shyok River gorge', 'Explore Balti heritage houses, buckwheat orchards, and natural cold storage'],
      },
      {
        day: 5,
        title: 'Nubra Valley to Pangong Tso via Shyok Route',
        route: 'Hunder to Pangong Lake (150 km)',
        meals: 'Breakfast & Dinner',
        stay: 'Lakeview Wooden Cottages, Spangmik',
        highlights: ['Scenic valley drive via Agham and Shyok villages', 'Watch Pangong shift across 5 shades of cobalt blue', 'Stargazing session by the lake'],
      },
      {
        day: 6,
        title: 'Pangong to Leh via Chang La Pass & Hemis Monastery',
        route: 'Pangong to Leh (160 km)',
        meals: 'Breakfast & Dinner',
        stay: 'Leh Boutique Hotel',
        highlights: ['Sunrise over Pangong Tso', 'Cross Chang La pass and visit Thiksey and Rancho School viewpoint'],
      },
      {
        day: 7,
        title: 'Morning Transfer to Leh Airport',
        route: 'Hotel to Leh Airport (6 km)',
        meals: 'Breakfast',
        stay: 'Departure Day',
        highlights: ['Early morning transfer for scenic Himalayan flight departure'],
      },
    ],
    inclusions: [
      '6 Nights stay with daily breakfast and dinner',
      'All Inner Line Permits, wildlife fees, and Red Cross environmental fee',
      'Portable medical oxygen cylinder in the vehicle throughout the tour',
      'Dedicated Ladakh-union SUV with experienced high-pass driver',
    ],
    exclusions: [
      'Flights to and from Leh',
      'Camel ride tickets at Hunder dunes',
      'Lunches and personal woollen gear',
    ],
  },
  {
    id: 'kerala-backwaters-tea-hills',
    title: 'Munnar Tea Estates, Thekkady & Alleppey Private Kettuvallam',
    subtitle: 'Mist-covered Western Ghats tea bungalows, Periyar spice trails, and an exclusive upper-deck houseboat cruise.',
    region: 'Kerala, India',
    category: 'Honeymoon',
    durationNights: 4,
    durationDays: 5,
    basePrice3Star: 17900,
    basePrice4Star: 23400,
    basePrice5Star: 38900,
    bestSeason: 'Sep to Mar',
    pickupDrop: 'Kochi International Airport (COK)',
    defaultVehicle: 'Private Sedan / Innova Hycross',
    rating: '4.8',
    reviewsCount: 276,
    badgeText: 'Couples & Family Favorite',
    badgeTone: 'amber',
    image: 'https://picsum.photos/seed/kerala-backwaters-munnar-tea/1200/800',
    amenities: ['Private Houseboat', 'All Meals on Cruise', 'Spice Plantation Walk', 'Private Chauffeur', 'Candlelight Dinner'],
    itinerary: [
      {
        day: 1,
        title: 'Kochi Pickup to Munnar via Cheeyappara Waterfalls',
        route: 'Kochi Airport to Munnar (128 km)',
        meals: 'Breakfast',
        stay: 'Tea Estate View Resort, Munnar',
        highlights: ['Meet chauffeur at Kochi terminals', 'Stop at Valara and Cheeyappara waterfalls', 'Check-in amidst 4,800 ft rolling tea gardens'],
      },
      {
        day: 2,
        title: 'Eravikulam National Park, Mattupetty Dam & Tea Factory',
        route: 'Munnar Sightseeing Circuit (45 km)',
        meals: 'Breakfast',
        stay: 'Tea Estate View Resort, Munnar',
        highlights: ['Spot Nilgiri Tahr at Eravikulam slopes', 'Guided tea leaf processing and tasting session', 'Echo Point and Top Station valley panorama'],
      },
      {
        day: 3,
        title: 'Munnar to Thekkady Periyar Wildlife & Spice Reserve',
        route: 'Munnar to Thekkady (92 km)',
        meals: 'Breakfast',
        stay: 'Forest Canopy Resort, Thekkady',
        highlights: ['Walk through cardamom, black pepper, and cinnamon estates', 'Evening Kalaripayattu martial arts or Kathakali performance', 'Periyar Lake boat safari option'],
      },
      {
        day: 4,
        title: 'Thekkady to Alleppey Private Backwater Houseboat',
        route: 'Thekkady to Alleppey Jetty (138 km)',
        meals: 'Breakfast, Traditional Kerala Lunch & Dinner',
        stay: 'Private AC Deluxe Houseboat, Vembanad Lake',
        highlights: ['Board your private Kettuvallam at 12:00 PM', 'Fresh pearl-spot fish and sadya lunch onboard', 'Sunset cruise past paddy fields below sea level'],
      },
      {
        day: 5,
        title: 'Disembark at Alleppey & Fort Kochi Heritage Drop',
        route: 'Alleppey to Kochi Airport (82 km)',
        meals: 'Breakfast',
        stay: 'Departure Day',
        highlights: ['Quick heritage drive past Fort Kochi Chinese fishing nets', 'Drop at Kochi Airport or Ernakulam station'],
      },
    ],
    inclusions: [
      '3 Nights hill & forest resorts + 1 Night exclusive private AC houseboat',
      'All 3 meals onboard the Alleppey houseboat prepared by private chef',
      'Dedicated AC vehicle from Kochi pickup to Kochi drop',
      'Spice plantation guided walk and toll/parking charges',
    ],
    exclusions: [
      'Periyar boating tickets and Kathakali show entry',
      'Airfare or train fare',
    ],
  },
  {
    id: 'rajasthan-royal-desert-forts',
    title: 'Udaipur Lakes, Jodhpur Blue City & Jaisalmer Sam Dunes',
    subtitle: 'Palace courtyards, Lake Pichola sunset boat, Mehrangarh Fort ramparts, and luxury Swiss tents in the Thar Desert.',
    region: 'Rajasthan, India',
    category: 'Domestic',
    durationNights: 5,
    durationDays: 6,
    basePrice3Star: 19400,
    basePrice4Star: 27800,
    basePrice5Star: 49200,
    bestSeason: 'Oct to Mar',
    pickupDrop: 'Udaipur Pickup / Jodhpur or Jaisalmer Drop',
    defaultVehicle: 'Innova Crysta / Maharaja Tempo Traveller',
    rating: '4.9',
    reviewsCount: 189,
    badgeText: 'Group & Family Bestseller',
    badgeTone: 'terracotta',
    image: 'https://picsum.photos/seed/rajasthan-udaipur-jaisalmer-fort/1200/800',
    amenities: ['Haveli Stays', '4x4 Dune Bash', 'Lake Pichola Boat', 'Folk Music Campfire', 'Chauffeur Driven'],
    itinerary: [
      {
        day: 1,
        title: 'Arrival in Udaipur & Lake Pichola Sunset Boat Ride',
        route: 'Udaipur Airport to Old City (24 km)',
        meals: 'Breakfast',
        stay: 'Heritage Haveli / Lake Resort, Udaipur',
        highlights: ['Check into heritage-style property', 'Evening boat cruise past Jag Mandir and City Palace facade', 'Bagore Ki Haveli cultural dance show'],
      },
      {
        day: 2,
        title: 'Udaipur City Palace, Saheliyon Ki Bari & Sajjangarh',
        route: 'Udaipur Local Sightseeing (35 km)',
        meals: 'Breakfast',
        stay: 'Heritage Haveli / Lake Resort, Udaipur',
        highlights: ['Guided tour of City Palace museum and Crystal Gallery', 'Vintage Car Museum and Fateh Sagar promenade'],
      },
      {
        day: 3,
        title: 'Udaipur to Jodhpur via Ranakpur Marble Jain Temple',
        route: 'Udaipur to Jodhpur (255 km)',
        meals: 'Breakfast',
        stay: 'Boutique Heritage Stay, Jodhpur',
        highlights: ['Marvel at 1,444 carved marble pillars at Ranakpur', 'Evening view of illuminated Mehrangarh Fort from Clock Tower market'],
      },
      {
        day: 4,
        title: 'Mehrangarh Fort, Jaswant Thada & Drive to Jaisalmer',
        route: 'Jodhpur to Jaisalmer (280 km)',
        meals: 'Breakfast',
        stay: 'Golden Sandstone Hotel, Jaisalmer',
        highlights: ['Morning tour of Mehrangarh Fort and Umaid Bhawan museum', 'Scenic desert highway drive into the Golden City'],
      },
      {
        day: 5,
        title: 'Jaisalmer Living Fort, Patwon Ki Haveli & Sam Sand Dunes',
        route: 'Jaisalmer to Sam Dunes (42 km)',
        meals: 'Breakfast & Desert Gala Dinner',
        stay: 'Luxury Swiss Desert Camp, Sam Dunes',
        highlights: ['Explore Sonar Quila (Living Fort) and Gadisar Lake', 'Camel safari and 4x4 jeep dune bashing at sunset', 'Kalbelia folk performance and Rajasthani dinner under the stars'],
      },
      {
        day: 6,
        title: 'Kuldhara Abandoned Village & Departure Transfer',
        route: 'Sam Dunes to Jaisalmer / Jodhpur Airport',
        meals: 'Breakfast',
        stay: 'Departure Day',
        highlights: ['Morning visit to 13th-century Kuldhara heritage site', 'Airport or railway drop as per schedule'],
      },
    ],
    inclusions: [
      '4 Nights heritage/boutique hotels + 1 Night luxury desert camp',
      'Camel ride, cultural program, and buffet dinner at Sam Dunes',
      'Lake Pichola boat ride ticket',
      'Private AC vehicle with Rajasthan state tax, tolls, and parking',
    ],
    exclusions: [
      'Monument entry tickets and local guide charges',
      'Airfare or train tickets',
    ],
  },
  {
    id: 'bali-nusa-penida-private-pool',
    title: 'Bali Ubud Rainforest Villa, Kintamani & Nusa Penida Island',
    subtitle: 'Private pool villa in Ubud, Mount Batur volcano panorama, Uluwatu cliff sunset, and high-speed boat to Kelingking Beach.',
    region: 'Bali, Indonesia',
    category: 'International',
    durationNights: 5,
    durationDays: 6,
    basePrice3Star: 34900,
    basePrice4Star: 43500,
    basePrice5Star: 64900,
    bestSeason: 'Apr to Oct',
    pickupDrop: 'Denpasar Ngurah Rai Airport (DPS)',
    defaultVehicle: 'Private Toyota Avanza / HiAce Charter',
    rating: '4.9',
    reviewsCount: 245,
    badgeText: 'Private Pool Villa Included',
    badgeTone: 'sky',
    image: 'https://picsum.photos/seed/bali-ubud-nusa-penida-cliff/1200/800',
    amenities: ['Private Pool Villa', 'Fast Boat Tickets', 'English Chauffeur', 'Floating Breakfast', 'All Entry Tickets'],
    itinerary: [
      {
        day: 1,
        title: 'Arrival in Denpasar & Transfer to Ubud Rainforest',
        route: 'DPS Airport to Ubud (38 km)',
        meals: 'Welcome Drink',
        stay: 'Private Pool Villa / Resort, Ubud',
        highlights: ['VIP meet and flower garland welcome at DPS Airport', 'Check into serene Ubud sanctuary surrounded by rice terraces'],
      },
      {
        day: 2,
        title: 'Kintamani Volcano, Tegalalang Terraces & Bali Swing',
        route: 'Ubud Full-Day Excursion (75 km)',
        meals: 'Breakfast & Crispy Duck / Veg Lunch',
        stay: 'Private Pool Villa / Resort, Ubud',
        highlights: ['Panoramic view of Mount Batur and Lake Batur', 'Aloha Ubud Swing pass and Tegalalang rice terrace walk', 'Tirta Empul holy spring water temple'],
      },
      {
        day: 3,
        title: 'West Nusa Penida Island Tour by Fast Speedboat',
        route: 'Sanur Harbour to Nusa Penida Return',
        meals: 'Breakfast & Island Lunch',
        stay: 'Beachfront Hotel, Seminyak / Kuta',
        highlights: ['Return fast-boat transfers from Sanur', 'Kelingking T-Rex Cliff, Broken Beach, and Angel Billabong', 'Crystal Bay snorkeling stop'],
      },
      {
        day: 4,
        title: 'Tanjung Benoa Water Sports & Uluwatu Kecak Fire Dance',
        route: 'South Bali Coastal Circuit (55 km)',
        meals: 'Breakfast & Jimbaran Seafood/Veg Dinner',
        stay: 'Beachfront Hotel, Seminyak / Kuta',
        highlights: ['Banana boat, jet ski, and parasailing adventure at Benoa', 'Cliffside Uluwatu Temple at golden hour', 'Kecak fire dance followed by candlelit dinner on Jimbaran Bay'],
      },
      {
        day: 5,
        title: 'Ulun Danu Beratan Lake Temple, Handara Gate & Tanah Lot',
        route: 'Bedugul & Tanah Lot Circuit (110 km)',
        meals: 'Breakfast',
        stay: 'Beachfront Hotel, Seminyak / Kuta',
        highlights: ['Iconic floating temple on Lake Beratan in the cool highlands', 'Sunset ocean waves at Tanah Lot sea temple'],
      },
      {
        day: 6,
        title: 'Souvenir Shopping & Denpasar Airport Transfer',
        route: 'Seminyak to DPS Airport (14 km)',
        meals: 'Breakfast',
        stay: 'Departure Day',
        highlights: ['Private transfer to Ngurah Rai International Airport'],
      },
    ],
    inclusions: [
      '2 Nights Ubud Private Pool Villa + 3 Nights Seminyak 4★/5★ Resort',
      '1 Floating Breakfast in Ubud Villa',
      'Return fast boat tickets and private car in Nusa Penida',
      'All temple entrance tickets, Bali Swing pass, and private English-speaking driver',
    ],
    exclusions: [
      'International return flights and Indonesia Visa on Arrival ($35)',
      'Personal laundry and extra meals',
    ],
  },
  {
    id: 'uttarakhand-do-dham-luxury',
    title: 'Kedarnath & Badrinath Do Dham Guided Yatra',
    subtitle: 'VIP darshan assistance, Phata helicopter coordination option, Haridwar Ganga Aarti, and hill-certified Tempo Traveller.',
    region: 'Uttarakhand, India',
    category: 'Spiritual',
    durationNights: 5,
    durationDays: 6,
    basePrice3Star: 18500,
    basePrice4Star: 24900,
    basePrice5Star: 36500,
    bestSeason: 'May to Jun & Sep to Oct',
    pickupDrop: 'Haridwar / Dehradun Airport (DED)',
    defaultVehicle: 'Maharaja Tempo Traveller / Innova',
    rating: '4.9',
    reviewsCount: 412,
    badgeText: 'Senior-Citizen Friendly',
    badgeTone: 'pine',
    image: 'https://picsum.photos/seed/kedarnath-himalaya-temple-peaks/1200/800',
    amenities: ['Yatra Registration', 'Senior Assistance', 'Pure Vegetarian Meals', 'Hill-Certified Driver', 'Hot Water Stays'],
    itinerary: [
      {
        day: 1,
        title: 'Haridwar / Dehradun Pickup to Guptkashi via Devprayag',
        route: 'Haridwar to Guptkashi (205 km)',
        meals: 'Dinner',
        stay: 'Mountain View Resort, Guptkashi / Sitapur',
        highlights: ['Witness Bhagirathi and Alaknanda confluence at Devprayag', 'Stop at Rudraprayag संगम and Ardhnarishwar Temple'],
      },
      {
        day: 2,
        title: 'Sonprayag / Phata to Kedarnath Ji Darshan',
        route: 'Guptkashi to Kedarnath Trek or Heli Shuttle',
        meals: 'Breakfast & Dinner',
        stay: 'Guesthouse / Swiss Camp near Kedarnath or Return to Guptkashi',
        highlights: ['Shuttle drop to Gaurikund or Phata helipad', 'Evening Rudra Abhishek and Aarti at Kedarnath Temple (11,755 ft)'],
      },
      {
        day: 3,
        title: 'Kedarnath Morning Darshan & Return to Guptkashi',
        route: 'Kedarnath to Guptkashi',
        meals: 'Breakfast & Dinner',
        stay: 'Mountain View Resort, Guptkashi',
        highlights: ['Visit Bhairavnath Temple viewpoint', 'Descend to Sonprayag where private vehicle awaits'],
      },
      {
        day: 4,
        title: 'Guptkashi to Badrinath Dham via Joshimath',
        route: 'Guptkashi to Badrinath (190 km)',
        meals: 'Breakfast & Dinner',
        stay: 'Hotel near Badrinath Temple',
        highlights: ['Scenic drive across Chopta alpine meadows', 'Tapt Kund holy dip and evening Badrinath Ji Aarti'],
      },
      {
        day: 5,
        title: 'Mana First Indian Village & Drive to Rudraprayag / Srinagar',
        route: 'Badrinath to Rudraprayag (155 km)',
        meals: 'Breakfast & Dinner',
        stay: 'Riverside Resort, Rudraprayag',
        highlights: ['Visit Vyas Gufa, Saraswati River origin, and Bhim Pul at Mana', 'Narsingh Temple at Joshimath and Karnaprayag confluence'],
      },
      {
        day: 6,
        title: 'Rudraprayag to Rishikesh Sightseeing & Haridwar Drop',
        route: 'Rudraprayag to Haridwar (160 km)',
        meals: 'Breakfast',
        stay: 'Departure Day',
        highlights: ['Visit Ram Jhula and Parmarth Niketan in Rishikesh', 'Drop at Dehradun Airport or Haridwar station'],
      },
    ],
    inclusions: [
      '5 Nights accommodation with pure vegetarian breakfast and dinner',
      'Mandatory Uttarakhand Char Dham biometric Yatra registration assistance',
      'Dedicated hill-certified vehicle with all state green taxes and parking',
    ],
    exclusions: [
      'Helicopter tickets, pony, or palki charges at Kedarnath',
      'VIP special puja receipts at temples',
    ],
  },
];

export const FLEET_VEHICLES: FleetVehicle[] = [
  {
    id: 'force-urbania-luxury',
    name: 'Force Urbania Luxury Van (13 & 17 Seater)',
    categoryTag: 'Next-Gen European Cabin',
    seatingLabel: '13+1 / 17+1 Recliner',
    idealFor: 'VIP Family Tours, Corporate Delegations & Foreign Guests',
    perKmRate: 34,
    minKmPerDay: 250,
    driverAllowancePerDay: 600,
    baseDayRental: 8500,
    image: 'https://picsum.photos/seed/luxury-passenger-van-urbania-silver/1200/750',
    highlights: [
      'Independent suspension for zero hill-sickness',
      'Individual AC vents, USB-C fast charging & reading lamps at every seat',
      'Dual airbags, ABS, ESP & panoramic sealed windows',
    ],
    specs: [
      { label: 'Outstation Tariff', value: '₹34 / km', note: 'Transparent odometer billing from garage to garage' },
      { label: 'Daily Minimum', value: '250 km / day', note: 'Standard outstation billing cycle per calendar day' },
      { label: 'Chauffeur Allowance', value: '₹600 / day', note: 'Uniformed hill-certified driver with route expertise' },
      { label: 'Seating Configuration', value: '2x1 Executive', note: 'Full recline captain seats with three-point seatbelts' },
      { label: 'Luggage Boot Space', value: '14 Large Suitcases', note: 'Dedicated rear luggage bay + overhead parcel racks' },
      { label: 'Cabin Features', value: 'Dual-Zone Climate', note: 'Sony 10-inch acoustic system, mic & icebox onboard' },
    ],
  },
  {
    id: 'maharaja-tempo-traveller-12-17',
    name: 'Maharaja 1x1 Tempo Traveller (12 / 17 / 20 Seater)',
    categoryTag: 'Most Booked Group Cruiser',
    seatingLabel: '12+1 / 17+1 Maharaja Sofa',
    idealFor: 'Joint Families, Char Dham Yatras, Rajasthan & Himachal Circuits',
    perKmRate: 26,
    minKmPerDay: 250,
    driverAllowancePerDay: 500,
    baseDayRental: 6500,
    image: 'https://picsum.photos/seed/tempo-traveller-luxury-minibus-tour/1200/750',
    highlights: [
      '1x1 Maharaja pushback leather recliners with calf support',
      'Rear 5-seater sofa cum bed for kids and senior citizens',
      'Smart Android LED TV, warm ambient roof lighting & 220V sockets',
    ],
    specs: [
      { label: 'Outstation Tariff', value: '₹26 / km', note: '12-Seater ₹24/km | 17-Seater ₹26/km | 20-Seater ₹29/km' },
      { label: 'Daily Minimum', value: '250 km / day', note: 'Ideal for multi-day North & South India circuits' },
      { label: 'Chauffeur Allowance', value: '₹500 / day', note: 'Includes driver meals and night halt charges' },
      { label: 'Seating Configuration', value: '1x1 Maharaja + Sofa', note: 'Wide center aisle for effortless movement on long drives' },
      { label: 'Luggage Capacity', value: '16 Large Bags', note: 'Rear boot compartment + weatherproof roof carrier' },
      { label: 'Onboard Amenities', value: 'LED TV + Icebox', note: 'First-aid kit, GPS tracking, curtains & Bluetooth audio' },
    ],
  },
  {
    id: 'toyota-innova-hycross-crysta',
    name: 'Toyota Innova Hycross & Crysta (6+1 / 7+1 SUV)',
    categoryTag: 'Executive SUV Standard',
    seatingLabel: '6+1 Captain / 7+1 Bench',
    idealFor: 'Couples, Nuclear Families & High-Speed Expressway Travel',
    perKmRate: 19,
    minKmPerDay: 250,
    driverAllowancePerDay: 400,
    baseDayRental: 4750,
    image: 'https://picsum.photos/seed/toyota-innova-suv-highway-mountain/1200/750',
    highlights: [
      'Plush middle-row ottoman captain seats with generous legroom',
      'Whisper-quiet cabin with roof-mounted climate diffusers',
      'All-India Tourist Permit with FASTag and hill-route clearance',
    ],
    specs: [
      { label: 'Outstation Tariff', value: '₹19 / km', note: 'Crysta ₹18/km | Hycross Hybrid ₹20/km' },
      { label: 'Daily Minimum', value: '250 km / day', note: 'Local 8Hr/80Km city package also available at ₹3,200' },
      { label: 'Chauffeur Allowance', value: '₹400 / day', note: 'Verified background & English/Hindi speaking chauffeur' },
      { label: 'Seating Configuration', value: '6+1 Captain Seats', note: '7+1 bench configuration available on request' },
      { label: 'Luggage Capacity', value: '5 Medium + 2 Cabin', note: 'Optional Thule roof box for 6-passenger ski/hill trips' },
      { label: 'Safety & Comfort', value: '6 Airbags + Cruise', note: 'Complimentary mineral water, tissues & phone chargers' },
    ],
  },
  {
    id: 'volvo-bharatbenz-luxury-coach',
    name: 'Volvo 9400 & BharatBenz Luxury Coach (35 / 45 Seater)',
    categoryTag: 'Large Group & Wedding Charter',
    seatingLabel: '35 / 41 / 45 Seater Coach',
    idealFor: 'Destination Weddings, Corporate Offsites & Institutional Tours',
    perKmRate: 62,
    minKmPerDay: 300,
    driverAllowancePerDay: 1000,
    baseDayRental: 18600,
    image: 'https://picsum.photos/seed/luxury-tour-coach-bus-highway/1200/750',
    highlights: [
      'Air-matic pneumatic suspension for ultra-smooth highway cruising',
      'Dual-monitor PA system for tour managers and wedding coordinators',
      'Massive under-belly pneumatic luggage holds for heavy wedding trunks',
    ],
    specs: [
      { label: 'Outstation Tariff', value: '₹62 / km', note: '35-Seater ₹54/km | 45-Seater Volvo ₹65/km' },
      { label: 'Daily Minimum', value: '300 km / day', note: 'Custom event/wedding shuttle packages available' },
      { label: 'Crew Allowance', value: '₹1,000 / day', note: 'Includes 1 Senior Captain + 1 Co-Driver/Attendant' },
      { label: 'Seating Configuration', value: '2x2 Pneumatic Recline', note: 'Adjustable footrests, tray tables & overhead reading lights' },
      { label: 'Under-Belly Boot', value: '50+ Full Suitcases', note: 'Through-and-through illuminated hydraulic luggage bays' },
      { label: 'Onboard Amenities', value: 'Mini Pantry + PA Mic', note: 'Dual 32-inch screens, refrigerator & emergency exits' },
    ],
  },
  {
    id: 'executive-sedan-dzire-city',
    name: 'Honda City & Maruti Dzire Tour (4+1 Sedan)',
    categoryTag: 'Couple & Solo Value Fleet',
    seatingLabel: '4+1 Passenger Sedan',
    idealFor: 'Honeymoon Couples, Airport Transfers & Weekend Getaways',
    perKmRate: 13,
    minKmPerDay: 250,
    driverAllowancePerDay: 350,
    baseDayRental: 3250,
    image: 'https://picsum.photos/seed/executive-white-sedan-car-road/1200/750',
    highlights: [
      'Lowest per-kilometer tariff for 2 to 3 travelers',
      'Clean non-CNG boot space for 3 full-size suitcases (Honda City)',
      'Instant 30-minute dispatch across major metro airports',
    ],
    specs: [
      { label: 'Outstation Tariff', value: '₹13 / km', note: 'Dzire/Etios ₹12/km | Honda City ₹15/km' },
      { label: 'Daily Minimum', value: '250 km / day', note: 'Airport drop starts at ₹999 flat in metro cities' },
      { label: 'Chauffeur Allowance', value: '₹350 / day', note: 'Punctual arrival 20 minutes prior to pickup slot' },
      { label: 'Seating Configuration', value: '4+1 Comfort', note: 'Rear center armrest and rear AC vents' },
      { label: 'Luggage Capacity', value: '3 Large Bags', note: 'Dedicated 500-liter trunk space' },
      { label: 'Billing Transparency', value: 'Zero Hidden Surge', note: 'Fixed per-km rate even during peak holiday weekends' },
    ],
  },
];

export const POPULAR_CIRCUITS: PopularCircuit[] = [
  {
    id: 'delhi-manali-solang-kasol',
    name: 'Delhi to Manali, Atal Tunnel & Kasol Circuit',
    origin: 'New Delhi / Chandigarh',
    destinations: 'Manali, Solang, Sissu, Kasol, Manikaran',
    totalKm: 1250,
    recommendedDays: 5,
    stateTaxEstimate: 3200,
    altitudeOrTerrain: 'Mountain Expressway + High Pass (10,000 ft)',
  },
  {
    id: 'golden-triangle-agra-jaipur',
    name: 'Delhi, Agra & Jaipur Golden Triangle',
    origin: 'New Delhi Airport / NCR',
    destinations: 'Agra Taj Mahal, Fatehpur Sikri, Jaipur Amer Fort',
    totalKm: 780,
    recommendedDays: 3,
    stateTaxEstimate: 1800,
    altitudeOrTerrain: '6-Lane Yamuna & Delhi-Mumbai Expressway',
  },
  {
    id: 'rajasthan-udaipur-jodhpur-jaisalmer',
    name: 'Royal Mewar & Marwar Desert Circuit',
    origin: 'Jaipur / Udaipur',
    destinations: 'Udaipur, Ranakpur, Jodhpur, Jaisalmer Sam Dunes',
    totalKm: 1380,
    recommendedDays: 6,
    stateTaxEstimate: 2400,
    altitudeOrTerrain: 'Bharatmala Desert Highway',
  },
  {
    id: 'char-dham-uttarakhand-complete',
    name: 'Uttarakhand Do Dham (Kedarnath & Badrinath)',
    origin: 'Haridwar / Dehradun',
    destinations: 'Guptkashi, Sonprayag, Chopta, Badrinath, Rishikesh',
    totalKm: 960,
    recommendedDays: 6,
    stateTaxEstimate: 2800,
    altitudeOrTerrain: 'Garhwal Himalayan Ghat Roads',
  },
  {
    id: 'kerala-kochi-munnar-alleppey',
    name: 'Kerala Hills, Wildlife & Backwater Loop',
    origin: 'Kochi Airport (COK)',
    destinations: 'Munnar, Thekkady, Alleppey, Fort Kochi',
    totalKm: 620,
    recommendedDays: 5,
    stateTaxEstimate: 1400,
    altitudeOrTerrain: 'Western Ghats Tea Slopes & Coastal Highway',
  },
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: 'review-1',
    quote: '“We booked the 17-seater Maharaja Tempo Traveller for 14 family members across Udaipur, Jodhpur, and Jaisalmer. The vehicle was spotless, seats reclined like business class, and chauffeur Vikram Ji knew every fort shortcut.”',
    travelerName: 'Raghavendra & Meera Kulkarni',
    roleAndCity: 'Architects, Pune',
    tripTaken: '6-Day Rajasthan Desert Circuit',
    vehicleUsed: '17-Seater Maharaja Tempo Traveller',
    dateLabel: 'Booked Oct 2026',
  },
  {
    id: 'review-2',
    quote: '“Unlike large portals where nobody answers once you land, Vanguard assigned a live WhatsApp trip captain for our Kashmir trip. Every houseboat and Pahalgam union cab was waiting before we even stepped out.”',
    travelerName: 'Dr. Ananya Sen & Siddharth Nair',
    roleAndCity: 'Cardiologist, Bengaluru',
    tripTaken: '6-Day Kashmir Alpine Expedition (5★ Tier)',
    vehicleUsed: 'Private Toyota Innova Crysta',
    dateLabel: 'Booked Sep 2026',
  },
  {
    id: 'review-3',
    quote: '“Hired two Force Urbania 13-seaters for our leadership offsite from Chandigarh to Shimla and Mashobra. The cabin quietness, individual AC vents, and transparent GST billing made procurement effortless.”',
    travelerName: 'Vikramaditya Malhotra',
    roleAndCity: 'VP Operations, Gurugram',
    tripTaken: '4-Day Corporate Mountain Retreat',
    vehicleUsed: '2x Force Urbania Luxury Vans',
    dateLabel: 'Booked Oct 2026',
  },
  {
    id: 'review-4',
    quote: '“My parents are in their seventies and wanted to complete Kedarnath and Badrinath peacefully. Our driver stopped wherever they needed rest, arranged hot water stays, and handled all yatra permits smoothly.”',
    travelerName: 'Prashant & Kavita Tiwari',
    roleAndCity: 'Chartered Accountant, Ahmedabad',
    tripTaken: '6-Day Do Dham Yatra Package',
    vehicleUsed: 'Toyota Innova Hycross',
    dateLabel: 'Booked May 2026',
  },
];

export const FAQ_ITEMS: FaqItem[] = [
  {
    id: 'faq-1',
    category: 'Fleet & Billing',
    question: 'How is outstation Tempo Traveller or Innova per-km billing calculated?',
    answer: 'Outstation rentals are billed transparently on a per-kilometer basis with a standard 250 km daily minimum average. Odometer reading starts and ends at our city hub, and state border taxes, FASTag tolls, and driver allowances can be pre-bundled into an all-inclusive fixed quote upon request.',
  },
  {
    id: 'faq-2',
    category: 'Tour Customization',
    question: 'Can we customize hotel star categories or add extra nights to any tour package?',
    answer: 'Yes. Every itinerary on our site is 100% private and modular. Inside any package drawer, you can switch between 3-Star Comfort, 4-Star Boutique, and 5-Star Luxury stays instantly, or ask our trip planners to add extra days and offbeat stops.',
  },
  {
    id: 'faq-3',
    category: 'Safety & Hill Routes',
    question: 'Do your vehicles go to Rohtang Pass, Pahalgam Aru Valley, or Ladakh inner routes?',
    answer: 'Our vehicles hold valid All-India Tourist Permits. In certain hill unions (such as Pahalgam local valleys, Gulmarg snow zones, or Ladakh inner circuits) where local union vehicles are mandatory by law, we pre-include those union cabs in your tour package so you face zero hassle on the spot.',
  },
  {
    id: 'faq-4',
    category: 'Booking & Cancellation',
    question: 'What is the advance booking amount and date rescheduling policy?',
    answer: 'You can lock in your tour package or fleet vehicle with a 20% token advance and receive an official GST voucher and vehicle registration confirmation. Free date rescheduling is supported up to 14 days before departure subject to hotel availability.',
  },
  {
    id: 'faq-5',
    category: 'Fleet Authenticity',
    question: 'Will we get the exact Maharaja Tempo Traveller or Force Urbania shown in photos?',
    answer: 'Yes. Once your booking is confirmed, we share actual interior and exterior photographs along with the vehicle registration number and chauffeur contact details 24 hours prior to departure.',
  },
];

