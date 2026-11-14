export interface TeamStat {
  label: string;
  val: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  badge: string;
  experience: string;
  origin: string;
  avatar: string;
  summary: string; // 1-sentence punchy summary for compact card
  quote: string; // Mountain philosophy quote
  bio: string;
  detailedBio?: string[]; // Multiple paragraphs for detail page
  specialties: string[];
  credentials: string[];
  favoriteCircuit: string;
  favoriteCircuitImage?: string;
  favoriteCircuitDesc?: string;
  stats?: TeamStat[];
  languages?: string[];
}

export interface TeamPillar {
  title: string;
  subtitle: string;
  desc: string;
  iconName: string;
}

export const TEAM_MEMBERS: TeamMember[] = [
  {
    id: 'tanuj-sharma',
    name: 'Tanuj Sharma',
    role: 'Founder & Director of Himalayan Expeditions',
    badge: 'Expedition Lead',
    experience: '18+ Years Active Service',
    origin: 'Rishikesh, Uttarakhand',
    avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=800',
    summary: 'Pioneered private high-altitude alpine glamping and Char Dham route strategies across Devbhoomi.',
    quote: 'The mountain reveals its true sanctity not to those who rush to conquer it, but to those who travel with reverence, patience, and silent wonder.',
    bio: 'Born in the Garhwal foothills, Tanuj began guiding backcountry treks across the Nanda Devi sanctuary and Char Dham trails over two decades ago. He founded Alpinex to bring international safety protocols, bespoke luxury, and deep spiritual reverence to Himalayan travel.',
    detailedBio: [
      'Tanuj Sharma was raised in Tapovan along the roaring turquoise currents of the upper Ganga. From his teenage years accompanying ancestral shepherd pilgrimages into the high alpine bugyals of Chamoli and Rudraprayag, he learned to decipher Himalayan weather patterns, river crossings, and seasonal passes before modern GPS became ubiquitous.',
      'After completing formal mountaineering certifications at the Nehru Institute of Mountaineering (NIM) in Uttarkashi, Tanuj observed a glaring gap in the travel industry: standard agency tours rushed pilgrims and travelers through grueling bus caravans without comfort, cultural depth, or verified safety protocols. In 2016, he launched Alpinex with three private Toyota 4x4 vehicles and a single promise: treat every journey across Devbhoomi as an elite, deeply personal pilgrimage.',
      'Today, Tanuj oversees all seasonal expedition logistics, wilderness camp placements, and emergency helicopter evacuation contracts, personally leading high-profile expeditions across Uttarakhand and Ladakh.',
    ],
    specialties: ['Char Dham Route Strategy', 'High-Altitude Expedition Design', 'Luxury Wilderness Glamping', 'Emergency Air Evacuation Logistics'],
    credentials: ['Nehru Institute of Mountaineering (NIM) Certified', 'Indian Mountaineering Foundation (IMF) Active Member', 'Advanced Wilderness First Aid (NOLS)', 'Uttarakhand State Tourism Advisory Panel'],
    favoriteCircuit: 'Chopta to Tungnath & Chandrashila Peak at Dawn',
    favoriteCircuitImage: 'https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?auto=compress&cs=tinysrgb&w=1200',
    favoriteCircuitDesc: 'Standing at Chandrashila summit at 12,083 feet while the morning sun strikes the snow-capped faces of Trishul, Nanda Devi, and Chaukhamba in complete silence is an unmatched spiritual awakening.',
    stats: [
      { label: 'Expeditions Led', val: '240+' },
      { label: 'High Passes', val: '38 Passes' },
      { label: 'Guest Trust', val: '99.9%' },
    ],
    languages: ['Garhwali (Native)', 'Hindi (Fluent)', 'English (Professional)'],
  },
  {
    id: 'vikram-rawat',
    name: 'Capt. Vikram Rawat (Retd.)',
    role: 'Head of Mountain Safety & Chauffeur Fleet Operations',
    badge: 'Fleet & Safety Chief',
    experience: '24 Years Military & Logistics',
    origin: 'Pauri Garhwal & New Delhi',
    avatar: 'https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=800',
    summary: 'Directs hill chauffeur defensive driving academy, satellite telematics, and zero-breakdown fleet standards.',
    quote: 'In the high mountains, safety is not an afterthought or an insurance clause; it is a discipline forged through preparation, restraint, and vigilant routine.',
    bio: 'Former Indian Army Garhwal Rifles officer with extensive experience directing heavy vehicle mountain convoys across Ladakh, Sikkim, and Uttarakhand. Vikram oversees driver defensive driving certifications, GPS fleet tracking, and 24/7 roadside emergency protocols.',
    detailedBio: [
      'Serving over two decades in the prestigious Garhwal Rifles and logistics corps of the Indian Army, Capt. Vikram Rawat commanded heavy vehicle supply convoys across the world’s most treacherous military roads, including Zoji La, Chang La, and Mana Pass.',
      'Upon transitioning to civilian aviation and expedition logistics, Vikram brought uncompromising military rigor to Alpinex’s transportation fleet. He established the Alpinex Hill Driving Academy in Dehradun, where every prospective chauffeur undergoes extensive skid-pad training, mountain hair-pin cornering under monsoon fog, emergency tire-chain mounting, and altitude sickness response.',
      'Vikram operates Alpinex’s 24/7 operations control desk, monitoring real-time weather alerts from the State Disaster Management Authority and rerouting convoys proactively to safeguard guest itineraries.',
    ],
    specialties: ['Ghat Road Defensive Driving Protocols', 'Emergency Medical Convoy Support', 'Fleet Telematics & Preventative Maintenance', 'Alpine Winter Snow Chaining'],
    credentials: ['Ex-Garhwal Rifles Logistics Battalion Commander', 'Certified Heavy Mountain Vehicle Safety Inspector', 'Defensive Driving Master Instructor', 'High-Altitude Cold-Weather Warfare School Alum'],
    favoriteCircuit: 'Joshimath to Mana Village & Vasudhara Falls',
    favoriteCircuitImage: 'https://images.pexels.com/photos/167699/pexels-photo-167699.jpeg?auto=compress&cs=tinysrgb&w=1200',
    favoriteCircuitDesc: 'The ancient Indo-Tibetan trade road beyond Badrinath, where the Saraswati river thunders out of solid stone before meeting the Alaknanda at Keshav Prayag.',
    stats: [
      { label: 'Military Convoys', val: '1,200+' },
      { label: 'Fleet Incidents', val: '0 Reported' },
      { label: 'Chauffeurs Vetted', val: '160 Drivers' },
    ],
    languages: ['Garhwali (Native)', 'Hindi (Fluent)', 'Punjabi', 'English'],
  },
  {
    id: 'meenakshi-joshi',
    name: 'Dr. Meenakshi Joshi',
    role: 'Head of Cultural Curation & Heritage Lodges',
    badge: 'Culture & Heritage',
    experience: '14 Years Himalayan Folklore',
    origin: 'Almora, Kumaon',
    avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=800',
    summary: 'Curates living folklore, private temple sanctum clearances, and handpicked boutique Kumaoni havelis.',
    quote: 'Every slate-roofed pahadi home and cedar temple in these valleys carries stories whispered for thousands of years. We ensure travelers listen deeply.',
    bio: 'Historian and architectural preservationist, Dr. Joshi meticulously selects our partner boutique havelis, British colonial bungalows, and village homestays. She ensures every itinerary honors local Kumaoni and Garhwali traditions with private access to living culture.',
    detailedBio: [
      'Holding a doctorate in Himalayan folklore and traditional vernacular architecture from Kumaun University, Dr. Meenakshi Joshi has spent 14 years documenting the sacred wooden temples of Katarmal, Baijnath, and Jageshwar, as well as vanishing folk music traditions of the Katyuri valley.',
      'For Alpinex, Dr. Joshi acts as the bridge between elite travelers and living Himalayan heritage. She personally inspects and certifies our boutique hotel partners, from restored British Raj forest estates in Landour to stone-hewn boutique retreats perched above Almora’s terraced orchards.',
      'Through her deep relationships with local temple trusts and heritage artisans, Dr. Joshi secures exclusive evening Aarti viewings, private temple clearances, and intimate traditional Kumaoni feast tastings prepared with heritage millet and mountain herbs.',
    ],
    specialties: ['Himalayan Art & Temple Architecture', 'Traditional Gastronomy & Millet Foraging', 'Colonial & Vernacular Heritage Restoration', 'Sacred Ritual Protocol Advisory'],
    credentials: ['Ph.D. in Himalayan Folklore (Kumaun University)', 'UNESCO Heritage Cultural Trail Consultant', 'Author of "Living Sacred Groves of Uttarakhand"', 'Advisory Board, INTACH Kumaon Chapter'],
    favoriteCircuit: 'Almora to Binsar Wildlife Sanctuary & Jageshwar Temples',
    favoriteCircuitImage: 'https://images.pexels.com/photos/3389536/pexels-photo-3389536.jpeg?auto=compress&cs=tinysrgb&w=1200',
    favoriteCircuitDesc: 'Walking through ancient deodar forests where 124 stone temples from the 9th to 13th century rise silently from the mist, scented by pine resins and temple incense.',
    stats: [
      { label: 'Heritage Properties', val: '45 Vetted' },
      { label: 'Books Authored', val: '2 Volumes' },
      { label: 'Temple Clearances', val: '100% Private' },
    ],
    languages: ['Kumaoni (Native)', 'Hindi (Fluent)', 'Sanskrit (Read)', 'English (Fluent)'],
  },
  {
    id: 'sunil-negi',
    name: 'Sunil Negi',
    role: 'Chief Naturalist & Wildlife Expeditions Lead',
    badge: 'Wildlife Master',
    experience: '16 Years Forest Tracker',
    origin: 'Ramnagar, Nainital',
    avatar: 'https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=800',
    summary: 'Legendary Corbett tiger tracker, licensed birding naturalist, and sub-Himalayan forest conservationist.',
    quote: 'The jungle speaks in a thousands subtle languages. A snapped branch, a cheetal alarm bark, a sudden stillness—those who know will see what others walk right past.',
    bio: 'Recognized as one of Northern India\'s finest tiger trackers, Sunil grew up on the periphery of Corbett National Park. His uncanny ability to read forest alarm calls, bird movements, and pugmarks gives our guests unparalleled wildlife encounters.',
    detailedBio: [
      'Born in a small hamlet bordering the Ramganga river, Sunil Negi learned the ways of the jungle alongside his grandfather, a forest watcher in Corbett’s Dhikala range. He has logged over 3,200 open 4x4 safaris across the Terai Arc Landscape, earning widespread acclaim for ethical, non-intrusive wildlife tracking.',
      'Sunil possesses an encyclopedic knowledge of over 420 bird species across Uttarakhand, from the elusive Great Hornbill to high-altitude Himalayan Monals. His private safaris are legendary for their patience, safety, and respect for predator breeding territories.',
      'At Alpinex, Sunil trains our safari guides in naturalist field ethics, camera stabilization techniques for luxury photographers, and elephant corridor etiquette.',
    ],
    specialties: ['Royal Bengal Tiger Tracking', 'Himalayan & Terai Birding (400+ Species)', 'Forest Habitat Conservation & Camera Trapping', 'Ethical Safari Driving Techniques'],
    credentials: ['Corbett Tiger Reserve Master Guide License #042', 'BirdLife International Certified Bird Guide', 'Senior Fellow, Corbett Naturalist Collective', 'Wildlife First Responder (WTI Certified)'],
    favoriteCircuit: 'Dhikala Grasslands & Ramganga River Corridor',
    favoriteCircuitImage: 'https://images.pexels.com/photos/2166559/pexels-photo-2166559.jpeg?auto=compress&cs=tinysrgb&w=1200',
    favoriteCircuitDesc: 'Dawn overlooking the grasslands where wild Asian elephant herds bathe in the misty Ramganga river while hog deer graze under the shadow of the Shivalik hills.',
    stats: [
      { label: 'Forest Safaris', val: '3,200+' },
      { label: 'Bird Species', val: '420+ Cataloged' },
      { label: 'Tiger Sightings', val: '86% Rate' },
    ],
    languages: ['Hindi (Native)', 'Kumaoni (Fluent)', 'English (Professional)'],
  },
  {
    id: 'ananya-deshmukh',
    name: 'Ananya Deshmukh',
    role: 'Lead Guest Concierge & VIP Logistics',
    badge: 'Guest Concierge',
    experience: '11 Years Luxury Hospitality',
    origin: 'New Delhi & Dehradun',
    avatar: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=800',
    summary: 'Orchestrates seamless VIP helicopter slots, dietary protocols, private charters, and 24/7 guest care.',
    quote: 'True luxury in the wild is having your favorite cup of organic herbal tea waiting by the riverbank without having to ask twice.',
    bio: 'Formerly Senior Concierge at premier luxury resort brands, Ananya manages individual guest preferences, dietary requirements, VIP helicopter slots, and private temple clearances with precision and warmth.',
    detailedBio: [
      'Having begun her career in five-star palace hotels in Rajasthan and Delhi, Ananya brought world-class concierge standards into the boutique expedition realm. She joined Alpinex in 2020 to craft personalized traveler experiences that match the hospitality of top international luxury brands.',
      'Ananya curates every single detail before a guest steps foot in Uttarakhand: from custom orthopedic travel pillows for high-altitude car rides and child-friendly emergency meals to gluten-free dining and chartered helicopter transfers directly to Kedarnath helipads.',
      'Her team operates around the clock, providing real-time WhatsApp updates, live baggage transfers between camps, and immediate medical adjustments should high altitude cause discomfort.',
    ],
    specialties: ['VIP Helicopter Slot Coordination', 'High-Altitude Dietary & Family Care', '24/7 Real-Time Journey Tracking & Desk Support', 'Private Heritage Experience Booking'],
    credentials: ['Les Clefs d\'Or International Affiliate Member', 'Luxury Travel Concierge of the Year 2024', 'Certified High-Altitude Nutrition Consultant', 'Fluent in 4 Languages'],
    favoriteCircuit: 'Rishikesh Riverside Glamping & Sound Sanctuary',
    favoriteCircuitImage: 'https://images.pexels.com/photos/3874337/pexels-photo-3874337.jpeg?auto=compress&cs=tinysrgb&w=1200',
    favoriteCircuitDesc: 'Private riverside luxury bell tents along the sacred white sands of Shivpuri, with private Tibetan singing bowl sound ceremonies at twilight.',
    stats: [
      { label: 'VIP Transfers', val: '450+ Flights' },
      { label: 'Guest Concierge', val: '24/7 Dedicated' },
      { label: 'Dietary Customization', val: '100% Guaranteed' },
    ],
    languages: ['English (Bilingual)', 'Hindi (Native)', 'French (Conversational)', 'Marathi (Fluent)'],
  },
  {
    id: 'kavita-bhatt',
    name: 'Kavita Bhatt',
    role: 'Community Stewardship & Eco-Tourism Coordinator',
    badge: 'Eco & Community',
    experience: '9 Years Rural Development',
    origin: 'Chamoli, Uttarakhand',
    avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=800',
    summary: 'Directs fair-share village homestay revenue, women’s agricultural co-ops, and zero-plastic hill expeditions.',
    quote: 'Sustainable travel is not about leaving nothing behind—it is about leaving the local communities stronger, prouder, and more prosperous than before you arrived.',
    bio: 'Kavita bridges our travelers with local women\'s agricultural cooperatives, wool weavers, and village homestays. She ensures that 15% of expedition revenues directly benefit rural Himalayan village development and trail cleanup programs.',
    detailedBio: [
      'Hailing from a family of traditional mountain farmers in Chamoli, Kavita holds a Master’s in Rural Development and Sustainable Forest Management. She pioneered community-based regenerative tourism models across the Alaknanda and Mandakini river valleys.',
      'At Alpinex, Kavita ensures that every commercial itinerary creates direct economic value for local Himalayan families. She manages our direct contracts with female-run mountain homestays, licensed local porters, organic apple orchardists, and traditional wool weavers.',
      'Under her leadership, Alpinex became completely single-use plastic-free in 2022, providing every traveler with insulated stainless-steel flasks and natural spring water filtration stations throughout the fleet.',
    ],
    specialties: ['Fair-Share Village Homestays', 'Zero-Plastic Expedition Operations', 'Himalayan Organic Agriculture Trails', 'Artisan Wool & Handloom Revival'],
    credentials: ['Postgraduate in Rural Development', 'Founder, Garhwal Craft Revival Collective', 'Leave No Trace (LNT) Master Educator', 'State Youth Leadership Awardee (Uttarakhand)'],
    favoriteCircuit: 'Valley of Flowers & Ghangaria Meadows',
    favoriteCircuitImage: 'https://images.pexels.com/photos/1001965/pexels-photo-1001965.jpeg?auto=compress&cs=tinysrgb&w=1200',
    favoriteCircuitDesc: 'Walking through hundreds of blooming endemic Himalayan wildflower species nestled beneath the towering snow ramparts of Rataban peak.',
    stats: [
      { label: 'Villages Supported', val: '28 Communities' },
      { label: 'Plastic Bottles Saved', val: '80,000+' },
      { label: 'Fair-Share Revenue', val: '15% Direct' },
    ],
    languages: ['Garhwali (Native)', 'Hindi (Fluent)', 'English (Professional)'],
  },
];

export const TEAM_PILLARS: TeamPillar[] = [
  {
    title: '100% Native Mountain Chauffeurs',
    subtitle: 'Hill Road Expertise',
    desc: 'Every chauffeur on our team has at least 8 years of proven experience navigating steep mountain ghats, monsoonal passes, and snow routes with zero-incident records.',
    iconName: 'ShieldCheck',
  },
  {
    title: 'Zero-Middleman Operations',
    subtitle: 'Local-First Transparency',
    desc: 'We operate our own private garage hubs in Rishikesh, Dehradun, and Delhi, meaning direct accountability, pristine vehicle sanitation, and no broker surcharges.',
    iconName: 'BuildingApartment',
  },
  {
    title: '24/7 Roadside & Medical Support',
    subtitle: 'Emergency Readiness',
    desc: 'Every tour vehicle carries certified oxygen canisters, emergency medical kits, tire chains, and direct satellite/cellular communication with our Dehradun dispatch desk.',
    iconName: 'FirstAid',
  },
  {
    title: 'Community Empowerment',
    subtitle: 'Fair Economic Footprint',
    desc: 'Our expeditions actively hire local porters, women-led kitchen cooperatives, and licensed regional naturalists, keeping travel revenues inside Devbhoomi.',
    iconName: 'Handshake',
  },
];
