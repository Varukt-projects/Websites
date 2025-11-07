export interface ItineraryDay {
  day: number
  title: string
  description: string
  activities: string[]
  meals: string[]
  accommodation: string
}

export interface TravelPackage {
  id: string
  name: string
  destination: string
  duration: string
  price: string
  pricePerPerson: string
  groupSize: string
  difficulty: "Easy" | "Moderate" | "Challenging"
  highlights: string[]
  includes: string[]
  excludes: string[]
  itinerary: ItineraryDay[]
  image: string
  description: string
}

export const packages: Record<string, TravelPackage> = {
  "shimla-manali": {
    id: "shimla-manali",
    name: "Shimla & Manali Explorer",
    destination: "Himachal Pradesh",
    duration: "5 days / 4 nights",
    price: "₹45,000",
    pricePerPerson: "₹45,000 per person",
    groupSize: "2-8 people",
    difficulty: "Easy",
    image: "/himachal-pradesh-mountains-snow-landscape.jpg",
    description:
      "Experience the charm of Shimla and the adventure of Manali in this perfect 5-day getaway. Explore colonial architecture, enjoy thrilling activities, and immerse yourself in the beauty of the Himalayas.",
    highlights: ["Shimla", "Manali", "Rohtang Pass", "Adventure Activities", "Local Culture"],
    includes: [
      "Accommodation in 4-star hotels",
      "Daily breakfast and dinner",
      "All transfers and sightseeing",
      "Professional guide",
      "Adventure activities",
    ],
    excludes: ["Flights", "Travel insurance", "Personal expenses", "Lunch"],
    itinerary: [
      {
        day: 1,
        title: "Arrival in Shimla",
        description: "Arrive in Shimla and settle into your hotel. Explore the Mall Road and enjoy the colonial charm.",
        activities: ["Mall Road walk", "Local market exploration", "Sunset view from Ridge"],
        meals: ["Dinner"],
        accommodation: "Hotel in Shimla",
      },
      {
        day: 2,
        title: "Shimla Sightseeing",
        description: "Full day exploring Shimla's iconic landmarks and natural beauty.",
        activities: ["Christ Church", "Jakhoo Temple", "Kufri visit", "Ropeway ride"],
        meals: ["Breakfast", "Lunch", "Dinner"],
        accommodation: "Hotel in Shimla",
      },
      {
        day: 3,
        title: "Shimla to Manali",
        description: "Drive to Manali via scenic mountain roads. Stop at Solang Valley.",
        activities: ["Scenic drive", "Solang Valley visit", "Local market"],
        meals: ["Breakfast", "Lunch", "Dinner"],
        accommodation: "Hotel in Manali",
      },
      {
        day: 4,
        title: "Manali Adventure",
        description: "Experience adventure activities and explore Manali's attractions.",
        activities: ["Rohtang Pass", "Paragliding", "Hadimba Temple", "Old Manali"],
        meals: ["Breakfast", "Lunch", "Dinner"],
        accommodation: "Hotel in Manali",
      },
      {
        day: 5,
        title: "Departure",
        description: "Enjoy breakfast and depart for your onward journey.",
        activities: ["Last-minute shopping", "Departure"],
        meals: ["Breakfast"],
        accommodation: "N/A",
      },
    ],
  },
  "rishikesh-yoga": {
    id: "rishikesh-yoga",
    name: "Rishikesh Yoga Retreat",
    destination: "Uttarakhand",
    duration: "5 days / 4 nights",
    price: "₹40,000",
    pricePerPerson: "₹40,000 per person",
    groupSize: "4-12 people",
    difficulty: "Easy",
    image: "/uttarakhand-mountains-forest-landscape.jpg",
    description:
      "Rejuvenate your mind, body, and soul with this transformative yoga retreat in the spiritual capital of India. Practice yoga by the Ganges, meditate in serene surroundings, and experience authentic Indian wellness.",
    highlights: ["Yoga Classes", "Meditation", "Ganges Rafting", "Temple Visits", "Spiritual Awakening"],
    includes: [
      "Accommodation in yoga retreat center",
      "Daily yoga and meditation classes",
      "Vegetarian meals",
      "Ganges rafting",
      "Temple visits",
      "Ayurveda consultation",
    ],
    excludes: ["Flights", "Travel insurance", "Personal expenses", "Alcohol"],
    itinerary: [
      {
        day: 1,
        title: "Arrival & Orientation",
        description: "Arrive in Rishikesh and settle into the retreat center. Evening orientation and light yoga.",
        activities: ["Check-in", "Orientation", "Evening yoga", "Dinner"],
        meals: ["Dinner"],
        accommodation: "Yoga Retreat Center",
      },
      {
        day: 2,
        title: "Yoga & Meditation",
        description: "Full day of yoga, meditation, and spiritual practices.",
        activities: ["Morning yoga", "Meditation", "Breakfast", "Ayurveda consultation", "Evening yoga"],
        meals: ["Breakfast", "Lunch", "Dinner"],
        accommodation: "Yoga Retreat Center",
      },
      {
        day: 3,
        title: "Ganges Rafting & Temple Visit",
        description: "Experience white water rafting and visit sacred temples.",
        activities: ["Morning yoga", "Ganges rafting", "Temple visit", "Evening meditation"],
        meals: ["Breakfast", "Lunch", "Dinner"],
        accommodation: "Yoga Retreat Center",
      },
      {
        day: 4,
        title: "Advanced Yoga & Wellness",
        description: "Advanced yoga sessions and Ayurvedic spa treatments.",
        activities: ["Advanced yoga", "Spa treatment", "Meditation", "Spiritual discourse"],
        meals: ["Breakfast", "Lunch", "Dinner"],
        accommodation: "Yoga Retreat Center",
      },
      {
        day: 5,
        title: "Departure",
        description: "Final yoga session and departure.",
        activities: ["Morning yoga", "Breakfast", "Departure"],
        meals: ["Breakfast"],
        accommodation: "N/A",
      },
    ],
  },
  "golden-triangle": {
    id: "golden-triangle",
    name: "Golden Triangle",
    destination: "Rajasthan",
    duration: "5 days / 4 nights",
    price: "₹55,000",
    pricePerPerson: "₹55,000 per person",
    groupSize: "2-10 people",
    difficulty: "Easy",
    image: "/rajasthan-fort-palace-desert-landscape.jpg",
    description:
      "Explore India's most iconic destinations: Delhi, Agra, and Jaipur. Visit the Taj Mahal, explore ancient forts, and experience the vibrant culture of Rajasthan.",
    highlights: ["Taj Mahal", "City Palace", "Jaipur", "Agra Fort", "Delhi Sightseeing"],
    includes: [
      "Accommodation in 4-star hotels",
      "Daily breakfast and dinner",
      "All transfers and sightseeing",
      "Professional guide",
      "Taj Mahal entry",
    ],
    excludes: ["Flights", "Travel insurance", "Personal expenses", "Lunch"],
    itinerary: [
      {
        day: 1,
        title: "Delhi Arrival",
        description: "Arrive in Delhi and explore the capital's historic sites.",
        activities: ["Red Fort", "Jama Masjid", "Chandni Chowk", "India Gate"],
        meals: ["Dinner"],
        accommodation: "Hotel in Delhi",
      },
      {
        day: 2,
        title: "Delhi to Agra",
        description: "Travel to Agra and visit the iconic Taj Mahal.",
        activities: ["Taj Mahal sunrise", "Agra Fort", "Local market"],
        meals: ["Breakfast", "Lunch", "Dinner"],
        accommodation: "Hotel in Agra",
      },
      {
        day: 3,
        title: "Agra to Jaipur",
        description: "Drive to Jaipur, the Pink City of Rajasthan.",
        activities: ["Scenic drive", "City Palace", "Jantar Mantar"],
        meals: ["Breakfast", "Lunch", "Dinner"],
        accommodation: "Hotel in Jaipur",
      },
      {
        day: 4,
        title: "Jaipur Exploration",
        description: "Explore Jaipur's palaces, temples, and markets.",
        activities: ["Hawa Mahal", "Albert Hall Museum", "Local bazaar", "Sunset view"],
        meals: ["Breakfast", "Lunch", "Dinner"],
        accommodation: "Hotel in Jaipur",
      },
      {
        day: 5,
        title: "Departure",
        description: "Breakfast and departure.",
        activities: ["Breakfast", "Departure"],
        meals: ["Breakfast"],
        accommodation: "N/A",
      },
    ],
  },
  "goa-beach": {
    id: "goa-beach",
    name: "Goa Beach Paradise",
    destination: "Goa",
    duration: "4 days / 3 nights",
    price: "₹38,000",
    pricePerPerson: "₹38,000 per person",
    groupSize: "2-8 people",
    difficulty: "Easy",
    image: "/goa-beach-coconut-trees-landscape.jpg",
    description:
      "Escape to the tropical paradise of Goa. Relax on pristine beaches, experience thrilling water sports, explore local markets, and immerse yourself in the unique culture of this coastal gem.",
    highlights: ["Anjuna Beach", "Palolem Beach", "Water Sports", "Local Culture", "Nightlife"],
    includes: [
      "Accommodation in beachfront resort",
      "Daily breakfast and dinner",
      "Beach activities",
      "Water sports session",
      "Local market tour",
    ],
    excludes: ["Flights", "Travel insurance", "Personal expenses", "Lunch"],
    itinerary: [
      {
        day: 1,
        title: "Arrival in Goa",
        description: "Arrive in Goa and settle into your beachfront resort. Evening beach walk.",
        activities: ["Check-in", "Beach walk", "Sunset view", "Dinner"],
        meals: ["Dinner"],
        accommodation: "Beachfront Resort in Goa",
      },
      {
        day: 2,
        title: "Beach & Water Sports",
        description: "Full day of beach relaxation and water sports adventure.",
        activities: ["Beach relaxation", "Parasailing", "Jet skiing", "Local market"],
        meals: ["Breakfast", "Lunch", "Dinner"],
        accommodation: "Beachfront Resort in Goa",
      },
      {
        day: 3,
        title: "Cultural Exploration",
        description: "Explore Goa's rich cultural heritage and local attractions.",
        activities: ["Fort Aguada", "Church visit", "Spice market", "Local cuisine"],
        meals: ["Breakfast", "Lunch", "Dinner"],
        accommodation: "Beachfront Resort in Goa",
      },
      {
        day: 4,
        title: "Departure",
        description: "Breakfast and departure.",
        activities: ["Breakfast", "Last-minute shopping", "Departure"],
        meals: ["Breakfast"],
        accommodation: "N/A",
      },
    ],
  },
}
