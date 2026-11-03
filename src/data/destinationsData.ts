export interface DestinationHighlight {
  title: string;
  description: string;
  tag: string;
}

export interface DayItinerary {
  day: number;
  title: string;
  activity: string;
  stay: string;
  meals: string;
}

export interface RecommendedVehicle {
  vehicle: string;
  capacity: string;
  tag: string;
  why: string;
}

export interface DestinationFaq {
  question: string;
  answer: string;
}

export interface WeatherSeason {
  season: string;
  months: string;
  temp: string;
  advice: string;
}

export interface DestinationDetail {
  slug: string;
  name: string;
  subtitle: string;
  tagline: string;
  state: string;
  district: string;
  category: 'Pilgrimage & Sacred' | 'Himalayan Ski & Snow' | 'Wildlife & Safari' | 'Lakes & Colonial Ridges' | 'Trek & High Passes' | 'Royal Heritage';
  altitude: string;
  bestSeason: string;
  idealDuration: string;
  nearestAirport: string;
  nearestRailhead: string;
  startingPrice: string;
  startingPriceNumeric: number;
  rating: string;
  reviewsCount: number;
  heroImage: string;
  gallery: string[];
  overview: string;
  highlights: DestinationHighlight[];
  itinerary: DayItinerary[];
  fleetRecommendation: RecommendedVehicle[];
  weatherGuide: WeatherSeason[];
  faqs: DestinationFaq[];
}

export const DESTINATIONS_DATA: DestinationDetail[] = [
  {
    slug: 'rishikesh',
    name: 'Rishikesh & Ganga Valley',
    subtitle: 'The Global Yoga Capital & Gateway to Devbhoomi',
    tagline: 'Where the sacred emerald Ganges leaves the Himalayas for the plains',
    state: 'Uttarakhand',
    district: 'Dehradun & Tehri Garhwal',
    category: 'Pilgrimage & Sacred',
    altitude: '372 m (1,220 ft)',
    bestSeason: 'September to May',
    idealDuration: '3 to 4 Days',
    nearestAirport: 'Dehradun Jolly Grant (DED) - 21 km',
    nearestRailhead: 'Yog Nagari Rishikesh (YNRK) - 5 km',
    startingPrice: '₹4,499',
    startingPriceNumeric: 4499,
    rating: '4.9',
    reviewsCount: 420,
    heroImage: 'https://images.pexels.com/photos/3389536/pexels-photo-3389536.jpeg?auto=compress&cs=tinysrgb&w=1600',
    gallery: [
      'https://images.pexels.com/photos/3389536/pexels-photo-3389536.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/1032650/pexels-photo-1032650.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/2166559/pexels-photo-2166559.jpeg?auto=compress&cs=tinysrgb&w=1200',
    ],
    overview: 'Nestled where the holy river Ganges descends from the high Shivalik foothills, Rishikesh is a timeless sanctuary of spiritual energy, white-water river rapids, luxury wellness retreats, and ancient yogic ashrams. From the resonant bells of the evening Triveni Ghat Ganga Aarti to exhilarating grade IV rafting rapids at Marine Drive, Rishikesh bridges the gap between deep inner tranquility and heart-pounding outdoor adventure.',
    highlights: [
      {
        title: 'Triveni & Parmarth Niketan Ganga Aarti',
        description: 'Witness the mesmerizing sunset prayer ritual with flaming brass lamps, Sanskrit chants, and thousands of floating flower diyas on the sacred Ganges.',
        tag: 'Spiritual Essence',
      },
      {
        title: 'Marine Drive to Shivpuri Grade IV Rafting',
        description: 'Navigate legendary river rapids like The Wall, Roller Coaster, and Golf Course with international-certified river guides and premium safety gear.',
        tag: 'High Adventure',
      },
      {
        title: 'The Beatles Ashram (Chaurasi Kutia)',
        description: 'Wander through the secluded Rajaji Tiger Reserve forest domes where the Beatles composed their iconic White Album with Maharishi Mahesh Yogi in 1968.',
        tag: 'Heritage & Art',
      },
      {
        title: 'Riverside Luxury Wellness & Sound Healing',
        description: 'Immerse in private Tibetan singing bowl sessions, authentic Ayurvedic panchakarma therapies, and organic Himalayan gastronomy along quiet river sandbars.',
        tag: 'Holistic Luxury',
      },
    ],
    itinerary: [
      {
        day: 1,
        title: 'Dehradun Arrival & Tapovan Sunset Aarti',
        activity: 'Chauffeur pickup from Dehradun airport or railway station. Check-in to riverside luxury resort in Tapovan. Evening private walk across Ram Jhula suspension bridge to Parmarth Niketan for the sacred Vedic Ganga Aarti.',
        stay: 'Riverside Luxury Boutique Resort, Tapovan',
        meals: 'Welcome Herbal Kahwa & Dinner',
      },
      {
        day: 2,
        title: 'White Water Rafting & Cliff Jumping at Marine Drive',
        activity: 'Early morning sunrise pranayama by the river. Drive up to Marine Drive for a thrilling 16 km white-water expedition down to Shivpuri. Afternoon riverside beach picnic and visit to the Beatles Ashram.',
        stay: 'Riverside Luxury Boutique Resort, Tapovan',
        meals: 'Breakfast, Picnic Lunch & Dinner',
      },
      {
        day: 3,
        title: 'Kunjapuri Temple Sunrise & Vashishta Cave Meditation',
        activity: 'Pre-dawn drive up to Kunjapuri Devi Temple (1,665m) for panoramic sunrise vistas over Swargarohini, Chaukhamba, and Banderpoonch peaks. Descend to the ancient Vashishta Cave beside the secluded river bank.',
        stay: 'Riverside Luxury Boutique Resort, Tapovan',
        meals: 'Breakfast & Traditional Garhwali Dinner',
      },
    ],
    fleetRecommendation: [
      {
        vehicle: 'Toyota Innova Crysta / Hycross',
        capacity: '4 to 6 Guests',
        tag: 'Executive Mountain SUV',
        why: 'Whisper-quiet cabin, supple suspension for winding ghat roads, and panoramic elevated road visibility.',
      },
      {
        vehicle: 'Force Urbania Luxury Van',
        capacity: '10 to 14 Guests',
        tag: 'Next-Gen European Van',
        why: 'Individual climate vents, reclining captain seats, and ample luggage space for yoga groups and multi-generational families.',
      },
    ],
    weatherGuide: [
      { season: 'Autumn & Spring', months: 'Oct - Nov & Feb - Apr', temp: '15°C to 28°C', advice: 'Peak season for rafting, trekking, and pleasant open-air dining.' },
      { season: 'Winter', months: 'Dec - Jan', temp: '7°C to 20°C', advice: 'Crisp, sunny mountain days and cozy campfire evenings beside the Ganges.' },
      { season: 'Monsoon', months: 'Jul - Aug', temp: '22°C to 30°C', advice: 'Lush greenery, surging waterfalls; river rafting paused during peak rainfall.' },
    ],
    faqs: [
      {
        question: 'What is the best way to travel between Dehradun Airport and Rishikesh?',
        answer: 'Our private chauffeur meets you at Dehradun Jolly Grant Airport terminal with your name placard. The scenic drive through the Himalayan foothills takes approximately 35 to 45 minutes.',
      },
      {
        question: 'Is river rafting safe for families and non-swimmers?',
        answer: 'Yes. We operate exclusively with Grade A certified safety gear, certified river rescue kayakers, and high-flotation life vests. Milder 9 km stretches from Brahmpuri are tailored for families and children.',
      },
    ],
  },
  {
    slug: 'kedarnath',
    name: 'Kedarnath Dham',
    subtitle: 'The Crown Jewel of Char Dham & Mandakini Valley',
    tagline: 'Standing resolute amidst snowy peaks since the age of the Mahabharata',
    state: 'Uttarakhand',
    district: 'Rudraprayag',
    category: 'Pilgrimage & Sacred',
    altitude: '3,583 m (11,755 ft)',
    bestSeason: 'May to June & September to October',
    idealDuration: '4 to 5 Days',
    nearestAirport: 'Dehradun Jolly Grant (DED) - 235 km',
    nearestRailhead: 'Rishikesh / Haridwar - 240 km',
    startingPrice: '₹14,990',
    startingPriceNumeric: 14990,
    rating: '5.0',
    reviewsCount: 890,
    heroImage: 'https://images.pexels.com/photos/1450353/pexels-photo-1450353.jpeg?auto=compress&cs=tinysrgb&w=1600',
    gallery: [
      'https://images.pexels.com/photos/1450353/pexels-photo-1450353.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/167699/pexels-photo-167699.jpeg?auto=compress&cs=tinysrgb&w=1200',
    ],
    overview: 'Perched in the colossal shadow of the snow-clad Kedarnath and Kedar Dome massifs, Kedarnath is the most revered of the 12 Jyotirlingas. Built of massive gray stone slabs that withstood the 2013 flash floods untouched, the temple is an emblem of unwavering faith and sheer mountain majesty. Whether arriving via private helicopter charter over cascading glaciers or trekking the rugged 16 km paved trail from Gaurikund, visiting Kedarnath is a life-defining spiritual milestone.',
    highlights: [
      {
        title: 'Ancient 8th-Century Stone Temple & Jyotirlinga',
        description: 'Darshan of the conical rock lingam consecrated by Adi Shankaracharya against the majestic backdrop of Mount Kedarnath (6,940m).',
        tag: 'Holy Darshan',
      },
      {
        title: 'VIP Helicopter Charters from Guptkashi / Phata',
        description: 'Skip the strenuous 8-hour mountain ascent with direct 10-minute helicopter shuttles offering breathtaking aerial views of the Mandakini gorge.',
        tag: 'VIP Aviation',
      },
      {
        title: 'Bhairavnath Peak & Gandhi Sarovar Glacial Lake',
        description: 'Trek 1 km above the temple to Bhairavnath Temple for aerial panoramas of the Kedarnath bowl, or hike to the emerald ice waters of Chorabari Lake.',
        tag: 'Alpine Wilderness',
      },
      {
        title: 'Pre-Arranged Biometric Yatra e-Pass & Priority Slips',
        description: 'Complete registration assistance, biometric slips, and local temple committee coordination managed in advance by our concierge team.',
        tag: 'Hassle-Free',
      },
    ],
    itinerary: [
      {
        day: 1,
        title: 'Rishikesh to Guptkashi / Sitapur via Devprayag',
        activity: 'Scenic mountain drive via Devprayag (confluence of Bhagirathi and Alaknanda creating the Ganga), Srinagar Garhwal, and Rudraprayag along the Mandakini river. Arrive at luxury cottages in Guptkashi.',
        stay: 'Luxury Valley Retreat, Guptkashi',
        meals: 'Breakfast & Dinner',
      },
      {
        day: 2,
        title: 'Helicopter Flight to Kedarnath & Evening Special Aarti',
        activity: 'Morning transfer to Phata / Sersi helipad. Board private shuttle helicopter landing at Kedarnath helipad (500m from temple). Check-in to temple view camp, VIP afternoon temple darshan, and evening Maha Aarti.',
        stay: 'Kedarnath High-Altitude Deluxe Camp, Kedarnath',
        meals: 'Breakfast & Hot Satvik Dinner',
      },
      {
        day: 3,
        title: 'Morning Abhishekam, Bhairavnath Trek & Flight Down',
        activity: 'Early dawn darshan and optional trek to Bhairavnath shrine for alpine sunrise. Morning helicopter flight back down to Guptkashi. Relaxing afternoon at resort.',
        stay: 'Luxury Valley Retreat, Guptkashi',
        meals: 'Breakfast & Dinner',
      },
      {
        day: 4,
        title: 'Return to Rishikesh / Dehradun',
        activity: 'Return journey down the picturesque valley with stops at Dhari Devi Temple (protector deity of Char Dham). Drop-off at Dehradun or Rishikesh.',
        stay: 'End of Circuit',
        meals: 'Breakfast',
      },
    ],
    fleetRecommendation: [
      {
        vehicle: 'Toyota Fortuner 4x4 / Innova Crysta',
        capacity: '4 to 6 Guests',
        tag: 'High-Torque Hill SUV',
        why: 'Essential for steep Garhwal hairpin climbs, high ground clearance over monsoon runoff, and supreme cabin comfort.',
      },
      {
        vehicle: 'Maharaja Tempo Traveller 12-Seater',
        capacity: '8 to 12 Guests',
        tag: 'Chauffeur Van for Groups',
        why: 'Heavy-duty hill axle, panoramic view windows, customized footrests, and vetted mountain pilot.',
      },
    ],
    weatherGuide: [
      { season: 'Summer Season', months: 'May - Jun', temp: '4°C to 15°C', advice: 'Temple gates open in early May. Warm woolens required; sunny days and crisp mornings.' },
      { season: 'Autumn Yatra', months: 'Sep - Oct', temp: '-2°C to 12°C', advice: 'Crystal clear post-monsoon blue skies, snow dusting high peaks; gates close on Bhai Dooj.' },
    ],
    faqs: [
      {
        question: 'How does the Kedarnath helicopter booking work?',
        answer: 'Helicopter slots from Phata/Sersi/Guptkashi are booked via the official IRCTC HeliYatra portal. Our concierge assists with slot selection, biometric registrations, and priority boarding alignment.',
      },
      {
        question: 'What physical fitness is required for the Kedarnath trek?',
        answer: 'The Gaurikund to Kedarnath trek is 16 km with a steep 1,500m elevation gain. For those walking or riding ponies/palkis, light cardio preparation is advised. Staying overnight allows proper altitude acclimatization.',
      },
    ],
  },
  {
    slug: 'auli',
    name: 'Auli Snow Peak Haven',
    subtitle: 'India\'s Premier Alpine Ski Resort & Meadow Paradise',
    tagline: 'World-class powdery slopes and 360-degree vistas of Mount Nanda Devi',
    state: 'Uttarakhand',
    district: 'Chamoli',
    category: 'Himalayan Ski & Snow',
    altitude: '2,800 m to 3,050 m (9,180 ft)',
    bestSeason: 'December to March (Snow & Ski) | April to June (Lush Green Meadows)',
    idealDuration: '3 to 5 Days',
    nearestAirport: 'Dehradun Jolly Grant (DED) - 275 km',
    nearestRailhead: 'Rishikesh / Haridwar - 260 km',
    startingPrice: '₹7,899',
    startingPriceNumeric: 7899,
    rating: '4.9',
    reviewsCount: 380,
    heroImage: 'https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?auto=compress&cs=tinysrgb&w=1600',
    gallery: [
      'https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/1687845/pexels-photo-1687845.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/1032650/pexels-photo-1032650.jpeg?auto=compress&cs=tinysrgb&w=1200',
    ],
    overview: 'Surrounded by coniferous deodar and oak forests, Auli offers one of the most stunning mountain panoramas anywhere in the world. Looking out from its slopes, you stand face-to-face with Mount Nanda Devi (India’s second-highest peak), Trishul, Kamet, and Dunagiri. In winter, Auli transforms into a white wonderland with international ski slopes and the Joshimath-to-Auli cable car (Asia’s longest ropeway at 4 km). In spring and summer, the snow melts to reveal Gurso Bugyal, an emerald green carpet of alpine flora.',
    highlights: [
      {
        title: 'Asia\'s Longest Ropeway from Joshimath (4 km)',
        description: 'Glide high over dense deodar forests with jaw-dropping 360-degree views of Trishul and Nanda Devi peaks.',
        tag: 'Iconic Cable Car',
      },
      {
        title: 'Skiing & Snowboarding on FIS-Approved Slopes',
        description: 'Professional ski instructors, groomed slopes with snowmaking guns, and equipment rentals for beginners and experts alike.',
        tag: 'Winter Sports',
      },
      {
        title: 'Gurso Bugyal & Chattrakund Trek',
        description: 'A gentle 3 km trek from Auli through enchanted pine woods to Gurso Bugyal meadow and the crystalline sweetwater Chattrakund pond.',
        tag: 'Alpine Trek',
      },
      {
        title: 'Man-Made Auli Lake & Luxury Chalet Stays',
        description: 'Stay in wood-paneled heated alpine chalets overlooking the highest man-made artificial lake designed for ski slope snowmaking.',
        tag: 'Resort Luxury',
      },
    ],
    itinerary: [
      {
        day: 1,
        title: 'Rishikesh to Joshimath via Rudraprayag & Karnaprayag',
        activity: 'Chauffeur pickup in Rishikesh. Drive through the historic Panch Prayags (Devprayag, Rudraprayag, Karnaprayag, Nandaprayag). Arrive at Joshimath or Auli cliffside resort.',
        stay: 'Alpine Wooden Chalet, Auli',
        meals: 'Breakfast & Warm Garhwali Dinner',
      },
      {
        day: 2,
        title: 'Auli Ropeway, Ski Lessons & Lake Walk',
        activity: 'Morning ride on the iconic 4 km cable car. 3-hour ski coaching session on the slopes with certified instructor. Afternoon stroll around the scenic Auli lake reflecting Nanda Devi summit.',
        stay: 'Alpine Wooden Chalet, Auli',
        meals: 'Breakfast & Dinner',
      },
      {
        day: 3,
        title: 'Gurso Bugyal Snowshoe / Meadow Trek',
        activity: 'Guided trek to Gurso Bugyal (3,056m). Spectacular close-up vistas of Dronagiri and Hathi Parvat. Warm campfire and hot chocolate at resort.',
        stay: 'Alpine Wooden Chalet, Auli',
        meals: 'Breakfast & Dinner',
      },
      {
        day: 4,
        title: 'Scenic Return via Chopta Valley',
        activity: 'Scenic descent through the Chopta pine ridges with stops for traditional Kumaoni tea and snacks before drop-off at Dehradun or Rishikesh.',
        stay: 'End of Circuit',
        meals: 'Breakfast',
      },
    ],
    fleetRecommendation: [
      {
        vehicle: 'Toyota Fortuner 4x4 with Snow Chains',
        capacity: '4 to 6 Guests',
        tag: 'Extreme Terrain SUV',
        why: 'Equipped for snow and ice on the Joshimath-Auli link road during peak winter months.',
      },
      {
        vehicle: 'Toyota Innova Crysta',
        capacity: '4 to 6 Guests',
        tag: 'Comfort Mountain Chauffeur',
        why: 'Plush leather captain seats, great climate control, and smooth hill performance for family comfort.',
      },
    ],
    weatherGuide: [
      { season: 'Winter (Peak Ski)', months: 'Dec - Mar', temp: '-6°C to 8°C', advice: 'Sub-zero temperatures and heavy snowfall. High-quality down jacket, thermal innerwear, and snow boots essential.' },
      { season: 'Summer (Bugyals)', months: 'Apr - Jun', temp: '10°C to 22°C', advice: 'Warm, pleasant sunshine, lush green alpine meadows, and clear skies for photography.' },
    ],
    faqs: [
      {
        question: 'When is the best time for snow and skiing in Auli?',
        answer: 'Peak snowfall occurs from mid-December through February, with skiing championships typically hosted between January and February.',
      },
      {
        question: 'Can absolute beginners try skiing at Auli?',
        answer: 'Yes. Certified instructors provide 1-day taster lessons or 5-day certification courses. Slopes have gentle nursery gradients for beginners.',
      },
    ],
  },
  {
    slug: 'jim-corbett',
    name: 'Jim Corbett National Park',
    subtitle: 'India\'s Legendary Royal Bengal Tiger Wilderness',
    tagline: 'Deep sal forests, elephant herds, and historic jungle lodges',
    state: 'Uttarakhand',
    district: 'Nainital & Pauri Garhwal',
    category: 'Wildlife & Safari',
    altitude: '385 m to 1,100 m',
    bestSeason: 'November to June (Dhikala zone opens Nov 15)',
    idealDuration: '3 to 4 Days',
    nearestAirport: 'Pantnagar (PGH) - 80 km | Dehradun (DED) - 170 km | Delhi (DEL) - 245 km',
    nearestRailhead: 'Ramnagar (RMR) - 12 km',
    startingPrice: '₹8,490',
    startingPriceNumeric: 8490,
    rating: '4.8',
    reviewsCount: 310,
    heroImage: 'https://images.pexels.com/photos/2166559/pexels-photo-2166559.jpeg?auto=compress&cs=tinysrgb&w=1600',
    gallery: [
      'https://images.pexels.com/photos/2166559/pexels-photo-2166559.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/1032650/pexels-photo-1032650.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/167699/pexels-photo-167699.jpeg?auto=compress&cs=tinysrgb&w=1200',
    ],
    overview: 'Established in 1936 as Hailey National Park, Corbett is India’s oldest and most prestigious wildlife haven. Nestled in the Shivalik foothills along the Ramganga River, its 1,318 square kilometers encompass towering sal trees, vast marshy grasslands (chaurs), and deep ravines. Home to over 250 Royal Bengal Tigers, wild Asian elephants, leopards, and 600 bird species, an expedition here offers the unmatched thrill of staying deep inside the core forest at the historic Dhikala Forest Rest House.',
    highlights: [
      {
        title: 'Open 4x4 Gypsy Safaris in Dhikala & Bijrani Zones',
        description: 'Morning and dusk game drives led by veteran government naturalists tracking tiger pugmarks and alarm calls.',
        tag: 'Core Safari',
      },
      {
        title: 'Stay Inside Dhikala Forest Lodge (Core Zone)',
        description: 'The only national park in India that allows overnight stays inside the core tiger habitat without fences.',
        tag: 'Exclusive Stay',
      },
      {
        title: 'Ramganga River Wildlife & Gharial Watching',
        description: 'Watch wild elephant herds bathing in the river and spot endangered fish-eating Gharials sunbathing on riverbanks.',
        tag: 'Wild Encounters',
      },
      {
        title: 'Corbett Heritage Trails & Corbett Falls',
        description: 'Visit the historic stone cottage of hunter-naturalist Jim Corbett at Chhoti Haldwani and scenic jungle waterfalls.',
        tag: 'Colonial Heritage',
      },
    ],
    itinerary: [
      {
        day: 1,
        title: 'Delhi / Dehradun to Corbett & Resort Check-in',
        activity: 'Chauffeur pickup from Delhi NCR or Dehradun. Comfortable highway cruise to Ramnagar. Check-in to luxury wilderness resort along Kosi River. Evening jungle orientation and birdwatching.',
        stay: 'Kosi Riverside Wilderness Resort, Ramnagar',
        meals: 'Lunch & Dinner',
      },
      {
        day: 2,
        title: 'Dhikala Core Zone Full-Day 4x4 Safari',
        activity: 'Early dawn entry through Dhangarhi gate into Dhikala core zone. Morning game drive across Sambhar Road and Ramganga riverbed. Lunch at Dhikala canteen. Afternoon safari tracking tiger sightings.',
        stay: 'Kosi Riverside Wilderness Resort, Ramnagar',
        meals: 'Breakfast, Lunch & Dinner',
      },
      {
        day: 3,
        title: 'Bijrani / Jhirna Morning Safari & Corbett Museum',
        activity: 'Morning safari in Bijrani zone renowned for tiger sightings. Afternoon visit to Corbett Museum at Kaladhungi and cascading Corbett Falls in the teak woods.',
        stay: 'Kosi Riverside Wilderness Resort, Ramnagar',
        meals: 'Breakfast & Barbecue Dinner',
      },
    ],
    fleetRecommendation: [
      {
        vehicle: 'Maruti Gypsy 4x4 (Forest Department Registered)',
        capacity: 'Up to 6 Guests',
        tag: 'Official Open Safari Vehicle',
        why: 'Silent engine, open-top 360-degree wildlife viewing, and rugged high-clearance capability.',
      },
      {
        vehicle: 'Toyota Innova Crysta / Hycross',
        capacity: '4 to 6 Guests',
        tag: 'Highway Transit Chauffeur',
        why: 'Plush transit from Delhi or Dehradun directly to your Corbett jungle lodge gate.',
      },
    ],
    weatherGuide: [
      { season: 'Winter (Best Sightings)', months: 'Nov - Feb', temp: '5°C to 24°C', advice: 'Cold early morning open Gypsy safaris require heavy woolens, gloves, and caps.' },
      { season: 'Summer (Peak Tiger Track)', months: 'Mar - Jun', temp: '18°C to 38°C', advice: 'Animals congregate around waterholes; highest tiger sighting frequency.' },
    ],
    faqs: [
      {
        question: 'How far in advance must Corbett safari permits be booked?',
        answer: 'Core zone permits (especially Dhikala and Bijrani) open 45 days in advance for Indian citizens and 90 days for foreign nationals. Early booking is essential as daily vehicle quotas are strictly capped.',
      },
      {
        question: 'Can our personal outstation vehicle enter the safari zones?',
        answer: 'No. The Uttarakhand Forest Department permits only authorized 4x4 open Gypsies with registered local drivers and licensed naturalists inside the park.',
      },
    ],
  },
  {
    slug: 'nainital',
    name: 'Nainital & Kumaon Lakes',
    subtitle: 'The Emerald Lake District & British Colonial Heritage',
    tagline: 'Tranquil boat rides, pine-scented mountain breezes, and quiet hill walks',
    state: 'Uttarakhand',
    district: 'Nainital',
    category: 'Lakes & Colonial Ridges',
    altitude: '2,084 m (6,837 ft)',
    bestSeason: 'March to June & September to November',
    idealDuration: '3 to 4 Days',
    nearestAirport: 'Pantnagar (PGH) - 70 km | Dehradun (DED) - 280 km',
    nearestRailhead: 'Kathgodam (KGM) - 34 km',
    startingPrice: '₹5,490',
    startingPriceNumeric: 5490,
    rating: '4.8',
    reviewsCount: 340,
    heroImage: 'https://images.pexels.com/photos/1032650/pexels-photo-1032650.jpeg?auto=compress&cs=tinysrgb&w=1600',
    gallery: [
      'https://images.pexels.com/photos/1032650/pexels-photo-1032650.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/2166559/pexels-photo-2166559.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/3389536/pexels-photo-3389536.jpeg?auto=compress&cs=tinysrgb&w=1200',
    ],
    overview: 'Set in a deep green valley around the eye-shaped Naini Lake, Nainital is the beloved crown jewel of the Kumaon hills. Flanked by seven verdant peaks (Ayarpata, Deopatha, Handi-Bandi, Naina, Alma, Manora, and Sher-ka-Danda), it combines romantic wooden yachts gliding on emerald waters with charming British colonial heritage architecture like the Gothic Raj Bhavan. Venture just 20 minutes further to explore the serene sister lakes of Bhimtal, Sattal, and Naukuchiatal.',
    highlights: [
      {
        title: 'Naini Lake Yachting & Heritage Boating',
        description: 'Sail colorful paddle boats or historic wooden yachts across the emerald lake, framed by the Naina Devi temple.',
        tag: 'Lake Life',
      },
      {
        title: 'Naina Peak & Snow View Cable Car',
        description: 'Take the aerial ropeway to Snow View Point (2,270m) for panoramic vistas of the high snowy Trishul and Nanda Devi peaks.',
        tag: 'Himalayan Vistas',
      },
      {
        title: 'Seven Lakes Circuit (Bhimtal, Sattal, Naukuchiatal)',
        description: 'Discover peaceful birdwatching in the seven interconnected freshwater lakes of Sattal and the quiet island aquarium of Bhimtal.',
        tag: 'Offbeat Waters',
      },
      {
        title: 'Gothic Governor\'s House (Raj Bhavan)',
        description: 'Tour the 1899 Victorian Gothic residence set in 160 acres of pine woodlands with its historic 18-hole golf course.',
        tag: 'Colonial Splendor',
      },
    ],
    itinerary: [
      {
        day: 1,
        title: 'Kathgodam / Delhi to Nainital & Mall Road Walk',
        activity: 'Scenic winding hill ascent from Kathgodam railway station. Check-in to heritage lake-view hotel. Leisurely afternoon walk along the Mall Road and sunset boat ride on Naini Lake.',
        stay: 'Colonial Heritage Hotel, Nainital',
        meals: 'Dinner',
      },
      {
        day: 2,
        title: 'Snow View Ropeway, High Altitude Zoo & Naina Peak',
        activity: 'Morning ropeway to Snow View Point. Visit Pt. G.B. Pant High Altitude Zoo (home to Snow Leopards and Himalayan Monals). Afternoon drive to Kilbury pine bird sanctuary.',
        stay: 'Colonial Heritage Hotel, Nainital',
        meals: 'Breakfast & Dinner',
      },
      {
        day: 3,
        title: 'Bhimtal, Sattal & Naukuchiatal Day Tour',
        activity: 'Day excursion through the emerald Kumaon lake district. Kayaking at Naukuchiatal, picnic by the serene pine shores of Sattal, and evening return to Nainital.',
        stay: 'Colonial Heritage Hotel, Nainital',
        meals: 'Breakfast & Dinner',
      },
    ],
    fleetRecommendation: [
      {
        vehicle: 'Toyota Innova Crysta',
        capacity: '4 to 6 Guests',
        tag: 'Premium Hill Sedan / SUV',
        why: 'Quiet hill climb, zero body roll, and dedicated mountain-experienced chauffeur.',
      },
      {
        vehicle: 'Maruti Suzuki Dzire / Ertiga',
        capacity: '2 to 4 Guests',
        tag: 'Compact Hill Executive',
        why: 'Nimble maneuvering through narrow Mall Road and lake bypass lanes.',
      },
    ],
    weatherGuide: [
      { season: 'Pleasant Summer', months: 'Mar - Jun', temp: '14°C to 26°C', advice: 'Ideal escape from North Indian plains; cool lake breezes and clear days.' },
      { season: 'Winter Chill & Snow', months: 'Dec - Feb', temp: '0°C to 12°C', advice: 'Chance of snowfall on higher peaks; warm cozy fireplaces and woolens.' },
    ],
    faqs: [
      {
        question: 'Are vehicles allowed on the Mall Road in Nainital?',
        answer: 'Mall Road is pedestrian-only during peak evening hours (6:00 PM to 8:30 PM). Our chauffeurs park in designated parking bays with drop-off passes at heritage hotels.',
      },
      {
        question: 'How far is Nainital from Kathgodam railway station?',
        answer: 'Kathgodam is the nearest railhead, just 34 km (about 1 to 1.5 hours scenic drive) from Nainital.',
      },
    ],
  },
  {
    slug: 'mussoorie',
    name: 'Mussoorie & Dhanaulti Ridge',
    subtitle: 'The Queen of the Hills & Landour Literary Trails',
    tagline: 'Deodar-draped walking trails, colonial bakeries, and Doon Valley sunsets',
    state: 'Uttarakhand',
    district: 'Dehradun & Tehri Garhwal',
    category: 'Lakes & Colonial Ridges',
    altitude: '2,005 m (6,578 ft)',
    bestSeason: 'Year-Round (April to June & September to February)',
    idealDuration: '3 to 4 Days',
    nearestAirport: 'Dehradun Jolly Grant (DED) - 54 km',
    nearestRailhead: 'Dehradun Railway Station (DDN) - 34 km',
    startingPrice: '₹4,890',
    startingPriceNumeric: 4890,
    rating: '4.8',
    reviewsCount: 290,
    heroImage: 'https://images.pexels.com/photos/167699/pexels-photo-167699.jpeg?auto=compress&cs=tinysrgb&w=1600',
    gallery: [
      'https://images.pexels.com/photos/167699/pexels-photo-167699.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/1032650/pexels-photo-1032650.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/3389536/pexels-photo-3389536.jpeg?auto=compress&cs=tinysrgb&w=1200',
    ],
    overview: 'Perched on a horseshoe ridge overlooking the sparkling lights of the Doon Valley on one side and the snow-clad Garhwal Himalayas on the other, Mussoorie has charmed travelers since the 1820s. Beyond the bustling Mall Road lies quiet, aristocratic Landour—a cantonment town filled with colonial bungalows, deodar woods, old English bakeries, and the beloved home of author Ruskin Bond. Further along the ridge lies Dhanaulti, celebrated for its quiet eco-parks and alpine apple orchards.',
    highlights: [
      {
        title: 'Landour Heritage Walk & Char Dukan',
        description: 'Wander the tranquil deodar trails of the Upper Chukkar, visit St. Paul\'s Church (1839), and savor cinnamon waffles at Char Dukan.',
        tag: 'Literary & Colonial',
      },
      {
        title: 'Sir George Everest House & Cloud\'s End',
        description: 'Explore the 1832 estate of the Surveyor General of India who mapped Mount Everest, offering jaw-dropping views of Aglar Valley.',
        tag: 'Panoramic Vistas',
      },
      {
        title: 'Dhanaulti Deodar Eco-Park & Surkanda Devi',
        description: 'Take a scenic 30 km drive through misty pine forests to Dhanaulti and ride the ropeway to Surkanda Devi Temple (2,757m).',
        tag: 'Pine Woods',
      },
      {
        title: 'Lal Tibba Telescope Viewpoint',
        description: 'Mussoorie\'s highest point (2,275m) with Japanese telescopes looking onto Badrinath, Kedarnath, and Banderpoonch massifs.',
        tag: 'Snow Peaks',
      },
    ],
    itinerary: [
      {
        day: 1,
        title: 'Dehradun to Mussoorie via Kingcraig Ascent',
        activity: 'Chauffeur pickup from Dehradun airport or station. Picturesque hill ascent. Check-in to cliffside boutique hotel. Sunset stroll along Camel\'s Back Road.',
        stay: 'Colonial Boutique Retreat, Mussoorie',
        meals: 'Dinner',
      },
      {
        day: 2,
        title: 'Landour Exploration, Sister\'s Bazaar & George Everest',
        activity: 'Morning private drive to Landour. Breakfast at Landour Bakehouse. Visit Sister\'s Bazaar and walk the Upper Chukkar. Afternoon picnic at George Everest Hill.',
        stay: 'Colonial Boutique Retreat, Mussoorie',
        meals: 'Breakfast & Dinner',
      },
      {
        day: 3,
        title: 'Dhanaulti Alpine Ridge & Apple Orchards',
        activity: 'Day excursion through the tranquil deodar forests of Dhanaulti. Ropeway visit to Surkanda Devi Temple. Evening return to Mussoorie.',
        stay: 'Colonial Boutique Retreat, Mussoorie',
        meals: 'Breakfast & Dinner',
      },
    ],
    fleetRecommendation: [
      {
        vehicle: 'Toyota Innova Crysta / Hycross',
        capacity: '4 to 6 Guests',
        tag: 'Luxury Mountain Cruiser',
        why: 'Quiet hill climbing, premium rear captain recliners, and skilled hill drivers.',
      },
      {
        vehicle: 'Force Urbania Luxury Van',
        capacity: '10 to 14 Guests',
        tag: 'Executive Family Van',
        why: 'Spacious luggage capacity and panoramic windows for Landour group retreats.',
      },
    ],
    weatherGuide: [
      { season: 'Spring & Summer', months: 'Apr - Jun', temp: '15°C to 26°C', advice: 'Pleasant weather, clear views, and escaping North Indian heat.' },
      { season: 'Winter Snow & Winterline', months: 'Dec - Feb', temp: '1°C to 12°C', advice: 'Witness the rare "Winterline" atmospheric phenomenon over the Doon Valley.' },
    ],
    faqs: [
      {
        question: 'What is the "Winterline" phenomenon in Mussoorie?',
        answer: 'Between October and January, the sunset horizon creates a sharp, vivid band of fiery red and yellow colors over the Doon Valley, visible in only two places on Earth (Mussoorie and Switzerland).',
      },
      {
        question: 'Can private vehicles drive up into Landour?',
        answer: 'Yes, but the roads are steep and narrow. Our experienced hill chauffeurs know every curve of the Landour cantonment loop for safe navigation.',
      },
    ],
  },
  {
    slug: 'chopta-tungnath',
    name: 'Chopta & Tungnath Ridge',
    subtitle: 'The Mini Switzerland of India & Highest Shiva Temple',
    tagline: 'Ancient stone steps, rhododendron forests, and 360-degree Himalayan sunrise',
    state: 'Uttarakhand',
    district: 'Rudraprayag',
    category: 'Trek & High Passes',
    altitude: '2,680 m (Chopta) to 3,680 m (Tungnath) & 4,000 m (Chandrashila)',
    bestSeason: 'April to November | December to March (Snow Trek)',
    idealDuration: '3 to 4 Days',
    nearestAirport: 'Dehradun Jolly Grant (DED) - 215 km',
    nearestRailhead: 'Rishikesh / Haridwar - 200 km',
    startingPrice: '₹6,490',
    startingPriceNumeric: 6490,
    rating: '5.0',
    reviewsCount: 395,
    heroImage: 'https://images.pexels.com/photos/1032650/pexels-photo-1032650.jpeg?auto=compress&cs=tinysrgb&w=1600',
    gallery: [
      'https://images.pexels.com/photos/1032650/pexels-photo-1032650.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/167699/pexels-photo-167699.jpeg?auto=compress&cs=tinysrgb&w=1200',
    ],
    overview: 'Often hailed as the "Mini Switzerland of India," Chopta is an untouched alpine meadow (bugyal) situated in the Kedarnath Wildlife Sanctuary. It serves as the base for the sacred trek to Tungnath, the third of the Panch Kedar and the highest Shiva temple on the planet at 3,680 meters. Continuing just 1.5 km above Tungnath brings you to the Chandrashila summit (4,000m), offering an awe-inspiring, unobstructed 360-degree amphitheater of peaks including Nanda Devi, Trishul, Chaukhamba, and Kedar Dome.',
    highlights: [
      {
        title: 'Tungnath Temple (Highest Shiva Temple in the World)',
        description: 'Trek a paved 3.5 km stone trail through vibrant red and pink rhododendron blossoms to the 1,000-year-old temple.',
        tag: 'Panch Kedar Shrine',
      },
      {
        title: 'Chandrashila Summit (4,000m) Sunrise',
        description: 'Watch the golden dawn light strike the colossal peaks of Chaukhamba, Trishul, and Nanda Devi from the roof of the Garhwal.',
        tag: 'Summit Glory',
      },
      {
        title: 'Deoria Tal Emerald Reflection Lake',
        description: 'A 2.5 km trek from Sari village leads to this pristine lake where the mighty Chaukhamba peak reflects mirror-perfect in the still water.',
        tag: 'Mirror Lake',
      },
      {
        title: 'Rhododendron Bloom in Spring (Buransh)',
        description: 'In March and April, the entire mountain forest blazes in crimson blossoms with refreshing local buransh flower juices.',
        tag: 'Spring Blooms',
      },
    ],
    itinerary: [
      {
        day: 1,
        title: 'Rishikesh to Sari Village & Deoria Tal Sunset',
        activity: 'Chauffeur pickup from Rishikesh. Drive through Mandakini valley to Sari village. Trek 2.5 km to Deoria Tal lake camp for sunset reflection of Chaukhamba.',
        stay: 'Deoria Tal Alpine Camp / Sari Lodge',
        meals: 'Breakfast & Hot Dinner',
      },
      {
        day: 2,
        title: 'Sari to Chopta & Acclimatization Meadow Walk',
        activity: 'Morning descent to Sari and short drive to Chopta meadow. Check-in to luxury Swiss alpine tents. Afternoon walk across the pine bugyals.',
        stay: 'Luxury Swiss Tents, Chopta',
        meals: 'Breakfast, Lunch & Dinner',
      },
      {
        day: 3,
        title: 'Pre-Dawn Summit Trek: Tungnath & Chandrashila',
        activity: 'Early 4:00 AM start for the trek to Tungnath Temple and the summit of Chandrashila (4,000m) for sunrise. Descend for hot brunch and relaxing evening campfire.',
        stay: 'Luxury Swiss Tents, Chopta',
        meals: 'Packed Trail Breakfast & Hot Dinner',
      },
    ],
    fleetRecommendation: [
      {
        vehicle: 'Toyota Fortuner 4x4 / Innova Crysta',
        capacity: '4 to 6 Guests',
        tag: 'High-Altitude 4x4',
        why: 'Rugged hill suspension, superior traction on remote mountain passes, and climate comfort.',
      },
    ],
    weatherGuide: [
      { season: 'Spring Flowers', months: 'Apr - May', temp: '8°C to 20°C', advice: 'Vibrant rhododendron blossoms and pleasant daytime trekking.' },
      { season: 'Autumn Clear Vistas', months: 'Sep - Nov', temp: '2°C to 16°C', advice: 'Crystal clear skies and sharpest peak visibility of the year.' },
    ],
    faqs: [
      {
        question: 'Is the Tungnath Chandrashila trek suitable for beginners?',
        answer: 'Yes! The trail from Chopta to Tungnath is fully paved with resting shelters. The trek to Tungnath is 3.5 km, with another 1.5 km climb to Chandrashila summit.',
      },
    ],
  },
  {
    slug: 'ladakh',
    name: 'Ladakh & High Passes',
    subtitle: 'The Land of High Passes, Ancient Monasteries & Pangong Tso',
    tagline: 'Surreal moonscapes, high-altitude desert dunes, and tranquil Buddhist gompas',
    state: 'Ladakh (UT)',
    district: 'Leh & Kargil',
    category: 'Trek & High Passes',
    altitude: '3,500 m to 5,359 m (17,582 ft at Khardung La)',
    bestSeason: 'May to October',
    idealDuration: '6 to 8 Days',
    nearestAirport: 'Leh Kushok Bakula Rimpochee (IXL)',
    nearestRailhead: 'Jammu Tawi (JAT) - 680 km',
    startingPrice: '₹22,990',
    startingPriceNumeric: 22990,
    rating: '5.0',
    reviewsCount: 512,
    heroImage: 'https://images.pexels.com/photos/1687845/pexels-photo-1687845.jpeg?auto=compress&cs=tinysrgb&w=1600',
    gallery: [
      'https://images.pexels.com/photos/1687845/pexels-photo-1687845.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/1001435/pexels-photo-1001435.jpeg?auto=compress&cs=tinysrgb&w=1200',
    ],
    overview: 'Perched in the trans-Himalayan rain shadow between the Karakoram and Great Himalayan ranges, Ladakh is a world apart. Characterized by dramatic arid mountains, whitewashed cliffside monasteries, and sapphire-blue glacial lakes like Pangong Tso and Tso Moriri, Ladakh is a dream for adventurers and cultural seekers. Cross Khardung La, ride double-humped Bactrian camels on the high sand dunes of Nubra Valley, and experience centuries-old monastic traditions.',
    highlights: [
      {
        title: 'Pangong Tso Blue Color-Shifting Glacial Lake',
        description: 'Stretching 134 km from India into Tibet, watch the lake change from turquoise to deep indigo throughout the day.',
        tag: 'Iconic Lake',
      },
      {
        title: 'Nubra Valley & Hunder Sand Dunes',
        description: 'Cross Khardung La pass to reach the surreal cold-desert sand dunes of Hunder with double-humped Bactrian camels.',
        tag: 'Cold Desert',
      },
      {
        title: 'Ancient Buddhist Monasteries (Thiksey, Hemis, Diskit)',
        description: 'Listen to monks chanting in multi-tiered monasteries echoing with the sound of Tibetan longhorns.',
        tag: 'Spiritual Gompas',
      },
      {
        title: 'Khardung La Pass (5,359 m)',
        description: 'One of the highest motorable mountain passes in the world, linking the Indus valley to the Nubra and Siachen corridors.',
        tag: 'High Pass',
      },
    ],
    itinerary: [
      {
        day: 1,
        title: 'Leh Airport Arrival & Mandatory Acclimatization',
        activity: 'Chauffeur pickup from Leh airport. Complete rest at luxury heated boutique hotel in Leh for altitude adaptation. Evening gentle walk to Shanti Stupa.',
        stay: 'Luxury Boutique Heritage Hotel, Leh',
        meals: 'Welcome Kahwa & Dinner',
      },
      {
        day: 2,
        title: 'Indus Valley Monasteries & Hall of Fame',
        activity: 'Visit Thiksey Monastery (modeled after the Potala Palace of Lhasa), Shey Palace, and Sindhu Ghat along the Indus River.',
        stay: 'Luxury Boutique Heritage Hotel, Leh',
        meals: 'Breakfast & Dinner',
      },
      {
        day: 3,
        title: 'Leh to Nubra Valley via Khardung La Pass',
        activity: 'Drive over Khardung La pass (5,359m). Descend into Nubra Valley. Sunset camel safari at Hunder sand dunes and visit to the giant Diskit Buddha.',
        stay: 'Luxury Glamping Camp, Nubra Valley',
        meals: 'Breakfast & Dinner',
      },
      {
        day: 4,
        title: 'Nubra to Pangong Tso via Shyok River Trail',
        activity: 'Scenic offbeat drive along the turquoise Shyok River gorge directly to Pangong Lake. Evening stargazing by the crystal lake shores.',
        stay: 'Lakeview Deluxe Cottage, Pangong Tso',
        meals: 'Breakfast & Dinner',
      },
    ],
    fleetRecommendation: [
      {
        vehicle: 'Toyota Innova Crysta / Fortuner 4x4',
        capacity: '4 to 6 Guests',
        tag: 'All-Terrain Himalayan SUV',
        why: 'Fitted with oxygen canisters, high-altitude tuned engine, and experienced local Ladakhi driver.',
      },
    ],
    weatherGuide: [
      { season: 'Summer Peak', months: 'Jun - Sep', temp: '10°C to 25°C', advice: 'Warm, clear sunny days; cool nights. Sunscreen and sunglasses essential.' },
    ],
    faqs: [
      {
        question: 'Why is day 1 acclimatization mandatory in Leh?',
        answer: 'Leh is at an altitude of 3,500 meters (11,500 ft). Flying in from sea level causes a sudden drop in oxygen pressure. 24 to 36 hours of rest prevents Acute Mountain Sickness (AMS).',
      },
    ],
  },
  {
    slug: 'rajasthan',
    name: 'Rajasthan Royal Heritage',
    subtitle: 'Land of Kings, Golden Havelis & Thar Desert Dunes',
    tagline: 'Grand royal palaces, desert luxury glamping, and Rajput grandeur',
    state: 'Rajasthan',
    district: 'Jaipur, Jodhpur, Udaipur & Jaisalmer',
    category: 'Royal Heritage',
    altitude: 'Plains & Aravalli Ranges',
    bestSeason: 'October to March',
    idealDuration: '6 to 9 Days',
    nearestAirport: 'Jaipur (JAI) / Udaipur (UDR) / Jodhpur (JDH)',
    nearestRailhead: 'Jaipur / Jodhpur / Udaipur',
    startingPrice: '₹18,490',
    startingPriceNumeric: 18490,
    rating: '4.9',
    reviewsCount: 460,
    heroImage: 'https://images.pexels.com/photos/1001435/pexels-photo-1001435.jpeg?auto=compress&cs=tinysrgb&w=1600',
    gallery: [
      'https://images.pexels.com/photos/1001435/pexels-photo-1001435.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/1371360/pexels-photo-1371360.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/2166559/pexels-photo-2166559.jpeg?auto=compress&cs=tinysrgb&w=1200',
    ],
    overview: 'From the glittering pink sandstone forts of Jaipur to the cobalt blue streets of Jodhpur, the romantic marble palaces floating on Lake Pichola in Udaipur, and the golden sandstone dunes of the Thar Desert in Jaisalmer, Rajasthan is a sensory journey into royal India. Experience private palace dinners, dune dinners under millions of desert stars, and stays at restored Rajput havelis with dedicated luxury chauffeur fleet.',
    highlights: [
      {
        title: 'Lake Pichola & City Palace, Udaipur',
        description: 'Private sunset boat cruise past Jag Mandir and the world-famous white marble Taj Lake Palace.',
        tag: 'Romantic Royalty',
      },
      {
        title: 'Sam Sand Dunes Luxury Glamping, Jaisalmer',
        description: 'Camel caravans into deep dunes, Kalbeliya folk dances around campfires, and luxury Swiss tents.',
        tag: 'Desert Glamour',
      },
      {
        title: 'Amber Fort & Hawa Mahal, Jaipur',
        description: 'Explore the grand 16th-century fortress of Amber, Sheesh Mahal (hall of mirrors), and the honeycomb Palace of Winds.',
        tag: 'Pink City Grandeur',
      },
      {
        title: 'Mehrangarh Fort, Jodhpur',
        description: 'Towering 400 feet above the Blue City, one of India\'s most impregnable and grandest royal fortresses.',
        tag: 'Fortress Splendor',
      },
    ],
    itinerary: [
      {
        day: 1,
        title: 'Jaipur Royal Welcome & City Palace Tour',
        activity: 'Chauffeur arrival at Jaipur airport. Check-in to heritage haveli. Visit City Palace, Jantar Mantar observatory, and sunset photo at Jal Mahal water palace.',
        stay: 'Heritage Haveli Hotel, Jaipur',
        meals: 'Royal Rajasthani Welcome Thali',
      },
      {
        day: 2,
        title: 'Amber Fort, Panna Meena Kund & Nahargarh Sunset',
        activity: 'Private tour of Amber Fort and mirror palace. Walk the geometric stepwell of Panna Meena Kund. Sunset high above the city at Nahargarh Fort.',
        stay: 'Heritage Haveli Hotel, Jaipur',
        meals: 'Breakfast & Dinner',
      },
      {
        day: 3,
        title: 'Jaipur to Jodhpur via Pushkar Holy Lake',
        activity: 'Scenic highway cruise through Pushkar, home to the rare Brahma Temple. Arrive in Jodhpur Blue City for evening view of Mehrangarh.',
        stay: 'Palace Hotel, Jodhpur',
        meals: 'Breakfast & Dinner',
      },
    ],
    fleetRecommendation: [
      {
        vehicle: 'Mercedes-Benz E-Class / Toyota Camry Hybrid',
        capacity: '2 to 3 Guests',
        tag: 'Royal VIP Sedan',
        why: 'Plush executive cruising along the Jaipur-Jodhpur-Udaipur expressway network.',
      },
      {
        vehicle: 'Force Urbania Luxury Recliner',
        capacity: '10 to 14 Guests',
        tag: 'Family Heritage Van',
        why: 'Large boot capacity for royal shopping, individual AC, and wide reclining comfort.',
      },
    ],
    weatherGuide: [
      { season: 'Winter Heritage Season', months: 'Oct - Mar', temp: '12°C to 28°C', advice: 'Pleasant daytime exploration and crisp desert evenings.' },
    ],
    faqs: [
      {
        question: 'Are heritage palace stays included in this tour package?',
        answer: 'Yes. We partner with royal family heritage properties, WelcomHeritage havelis, and luxury Taj/Oberoi palace resorts across Rajasthan.',
      },
    ],
  },
];

