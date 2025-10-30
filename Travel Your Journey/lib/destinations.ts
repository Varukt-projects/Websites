export interface Destination {
  id: string
  name: string
  state: string
  description: string
  longDescription: string
  bestTime: string
  altitude: string
  image: string
  activities: Activity[]
  accommodations: Accommodation[]
  highlights: string[]
  packages: Package[]
}

export interface Activity {
  name: string
  description: string
  duration: string
  difficulty: "Easy" | "Moderate" | "Challenging"
}

export interface Accommodation {
  name: string
  type: string
  description: string
  priceRange: string
  amenities: string[]
}

export interface Package {
  name: string
  duration: string
  price: string
  highlights: string[]
}

export const destinations: Record<string, Destination> = {
  himachal: {
    id: "himachal",
    name: "Himachal Pradesh",
    state: "Northern India",
    description: "Snow-capped peaks, ancient temples, and pristine valleys",
    longDescription:
      "Himachal Pradesh is a paradise for nature lovers and adventure seekers. With its majestic Himalayan peaks, lush green valleys, and charming hill stations, it offers an unforgettable experience. From the spiritual vibes of Dharamshala to the adventure capital of Manali, Himachal has something for everyone.",
    bestTime: "March to June, September to November",
    altitude: "1,500 - 6,500 meters",
    image: "/himachal-pradesh-mountains-snow-landscape.jpg",
    highlights: ["Shimla", "Manali", "Dharamshala", "Spiti Valley", "Kinnaur"],
    activities: [
      {
        name: "Trekking",
        description: "Explore scenic mountain trails with breathtaking views",
        duration: "1-7 days",
        difficulty: "Moderate",
      },
      {
        name: "Paragliding",
        description: "Soar above the valleys and experience the thrill",
        duration: "Half day",
        difficulty: "Easy",
      },
      {
        name: "Skiing",
        description: "Winter sports at Auli ski resort",
        duration: "Full day",
        difficulty: "Moderate",
      },
      {
        name: "Monastery Visits",
        description: "Explore ancient Buddhist monasteries and temples",
        duration: "Half day",
        difficulty: "Easy",
      },
    ],
    accommodations: [
      {
        name: "Luxury Mountain Resort",
        type: "Resort",
        description: "5-star luxury with panoramic mountain views",
        priceRange: "₹15,000 - ₹25,000/night",
        amenities: ["Spa", "Fine Dining", "Mountain Views", "Heated Pool"],
      },
      {
        name: "Heritage Hotel",
        type: "Hotel",
        description: "Charming colonial-era hotel with modern amenities",
        priceRange: "₹8,000 - ₹15,000/night",
        amenities: ["Restaurant", "Library", "Garden", "Fireplace"],
      },
      {
        name: "Adventure Lodge",
        type: "Lodge",
        description: "Cozy lodge perfect for adventure enthusiasts",
        priceRange: "₹5,000 - ₹10,000/night",
        amenities: ["Bonfire", "Trekking Guides", "Local Cuisine", "WiFi"],
      },
    ],
    packages: [
      {
        name: "Shimla & Manali Explorer",
        duration: "5 days",
        price: "₹45,000 per person",
        highlights: ["Shimla", "Manali", "Rohtang Pass", "Adventure Activities"],
      },
      {
        name: "Spiritual Dharamshala",
        duration: "4 days",
        price: "₹35,000 per person",
        highlights: ["Dharamshala", "McLeod Ganj", "Monasteries", "Yoga Retreat"],
      },
      {
        name: "Spiti Valley Adventure",
        duration: "7 days",
        price: "₹65,000 per person",
        highlights: ["Spiti Valley", "Kaza", "Trekking", "Local Culture"],
      },
    ],
  },
  uttarakhand: {
    id: "uttarakhand",
    name: "Uttarakhand",
    state: "Northern India",
    description: "Spiritual retreats, adventure trails, and serene hill stations",
    longDescription:
      "Uttarakhand, the 'Land of Gods', is a spiritual and adventure destination. Home to sacred pilgrimage sites, pristine forests, and adventure activities, Uttarakhand offers a perfect blend of spirituality and adventure. From the yoga capital of Rishikesh to the adventure hub of Auli, experience the magic of the Himalayas.",
    bestTime: "March to May, September to November",
    altitude: "500 - 4,000 meters",
    image: "/uttarakhand-mountains-forest-landscape.jpg",
    highlights: ["Rishikesh", "Auli", "Nainital", "Chopta", "Kedarnath"],
    activities: [
      {
        name: "Yoga & Meditation",
        description: "Join yoga sessions by the Ganges River",
        duration: "3-7 days",
        difficulty: "Easy",
      },
      {
        name: "White Water Rafting",
        description: "Thrilling rafting experience on the Ganges",
        duration: "Half day",
        difficulty: "Moderate",
      },
      {
        name: "Skiing at Auli",
        description: "India's premier skiing destination",
        duration: "Full day",
        difficulty: "Moderate",
      },
      {
        name: "Pilgrimage Treks",
        description: "Sacred treks to holy sites",
        duration: "2-4 days",
        difficulty: "Moderate",
      },
    ],
    accommodations: [
      {
        name: "Yoga Retreat Center",
        type: "Retreat",
        description: "Holistic wellness center with yoga and Ayurveda",
        priceRange: "₹6,000 - ₹12,000/night",
        amenities: ["Yoga Classes", "Ayurveda Spa", "Vegetarian Meals", "Meditation Hall"],
      },
      {
        name: "Riverside Resort",
        type: "Resort",
        description: "Luxury resort overlooking the Ganges",
        priceRange: "₹10,000 - ₹18,000/night",
        amenities: ["River View", "Restaurant", "Adventure Desk", "Spa"],
      },
      {
        name: "Mountain Cottage",
        type: "Cottage",
        description: "Cozy cottage in the hills",
        priceRange: "₹4,000 - ₹8,000/night",
        amenities: ["Fireplace", "Kitchen", "Garden", "Local Guides"],
      },
    ],
    packages: [
      {
        name: "Rishikesh Yoga Retreat",
        duration: "5 days",
        price: "₹40,000 per person",
        highlights: ["Yoga Classes", "Meditation", "Ganges Rafting", "Temple Visits"],
      },
      {
        name: "Auli Skiing Adventure",
        duration: "4 days",
        price: "₹50,000 per person",
        highlights: ["Skiing", "Snow Activities", "Mountain Views", "Local Cuisine"],
      },
      {
        name: "Nainital Lake Escape",
        duration: "3 days",
        price: "₹30,000 per person",
        highlights: ["Lake Activities", "Trekking", "Local Markets", "Scenic Views"],
      },
    ],
  },
  rajasthan: {
    id: "rajasthan",
    name: "Rajasthan",
    state: "Western India",
    description: "Majestic forts, vibrant culture, and golden desert landscapes",
    longDescription:
      "Rajasthan, the 'Land of Kings', is a treasure trove of history, culture, and natural beauty. With its magnificent forts and palaces, vibrant markets, and golden deserts, Rajasthan offers a glimpse into India's royal past. Experience the grandeur of Jaipur, the romance of Udaipur, and the mystique of the Thar Desert.",
    bestTime: "October to March",
    altitude: "200 - 1,200 meters",
    image: "/rajasthan-fort-palace-desert-landscape.jpg",
    highlights: ["Jaipur", "Udaipur", "Jodhpur", "Pushkar", "Jaisalmer"],
    activities: [
      {
        name: "Fort & Palace Tours",
        description: "Explore magnificent historical structures",
        duration: "Full day",
        difficulty: "Easy",
      },
      {
        name: "Desert Safari",
        description: "Camel safari through the golden Thar Desert",
        duration: "Half day",
        difficulty: "Easy",
      },
      {
        name: "Cultural Shows",
        description: "Traditional folk performances and dance",
        duration: "Evening",
        difficulty: "Easy",
      },
      {
        name: "Shopping & Markets",
        description: "Explore vibrant bazaars and local crafts",
        duration: "Half day",
        difficulty: "Easy",
      },
    ],
    accommodations: [
      {
        name: "Palace Hotel",
        type: "Hotel",
        description: "Luxury hotel in a converted royal palace",
        priceRange: "₹12,000 - ₹20,000/night",
        amenities: ["Royal Decor", "Fine Dining", "Spa", "Heritage Tours"],
      },
      {
        name: "Desert Resort",
        type: "Resort",
        description: "Luxury resort in the heart of the desert",
        priceRange: "₹8,000 - ₹15,000/night",
        amenities: ["Desert Safari", "Bonfire", "Local Cuisine", "Camel Rides"],
      },
      {
        name: "Heritage Haveli",
        type: "Guesthouse",
        description: "Traditional haveli with modern comforts",
        priceRange: "₹4,000 - ₹9,000/night",
        amenities: ["Rooftop Terrace", "Local Guides", "Traditional Meals", "WiFi"],
      },
    ],
    packages: [
      {
        name: "Golden Triangle",
        duration: "5 days",
        price: "₹55,000 per person",
        highlights: ["Jaipur", "Agra", "Delhi", "Taj Mahal", "City Palace"],
      },
      {
        name: "Udaipur Romance",
        duration: "4 days",
        price: "₹45,000 per person",
        highlights: ["Lake Palace", "City Palace", "Boat Rides", "Local Culture"],
      },
      {
        name: "Desert Magic",
        duration: "4 days",
        price: "₹40,000 per person",
        highlights: ["Jaisalmer", "Desert Safari", "Fort Tours", "Camel Rides"],
      },
    ],
  },
  gujarat: {
    id: "gujarat",
    name: "Gujarat",
    state: "Western India",
    description: "Rich heritage, wildlife sanctuaries, and coastal beauty",
    longDescription:
      "Gujarat, the birthplace of Mahatma Gandhi, is a land of diverse experiences. From the wildlife sanctuaries of Gir Forest to the vibrant textile markets of Ahmedabad, from the salt marshes of Kutch to the beaches of Diu, Gujarat offers a unique blend of nature, culture, and history.",
    bestTime: "October to March",
    altitude: "0 - 1,000 meters",
    image: "/gujarat-wildlife-lion-landscape.jpg",
    highlights: ["Gir Forest", "Kutch", "Ahmedabad", "Diu", "Somnath"],
    activities: [
      {
        name: "Wildlife Safari",
        description: "Spot Asiatic lions in Gir Forest",
        duration: "Full day",
        difficulty: "Easy",
      },
      {
        name: "Textile Tours",
        description: "Explore traditional textile weaving",
        duration: "Half day",
        difficulty: "Easy",
      },
      {
        name: "Beach Activities",
        description: "Relax on pristine beaches",
        duration: "Full day",
        difficulty: "Easy",
      },
      {
        name: "Cultural Heritage",
        description: "Visit temples and historical sites",
        duration: "Half day",
        difficulty: "Easy",
      },
    ],
    accommodations: [
      {
        name: "Wildlife Lodge",
        type: "Lodge",
        description: "Eco-friendly lodge near Gir Forest",
        priceRange: "₹7,000 - ₹13,000/night",
        amenities: ["Safari Guides", "Nature Walks", "Local Cuisine", "Observation Deck"],
      },
      {
        name: "Beach Resort",
        type: "Resort",
        description: "Luxury beachfront resort",
        priceRange: "₹10,000 - ₹16,000/night",
        amenities: ["Beach Access", "Water Sports", "Restaurant", "Spa"],
      },
      {
        name: "Heritage Homestay",
        type: "Homestay",
        description: "Authentic local experience",
        priceRange: "₹3,000 - ₹7,000/night",
        amenities: ["Home Cooked Meals", "Local Guides", "Cultural Exchange", "WiFi"],
      },
    ],
    packages: [
      {
        name: "Gir Wildlife Explorer",
        duration: "3 days",
        price: "₹35,000 per person",
        highlights: ["Lion Safari", "Nature Walks", "Local Culture", "Wildlife Photography"],
      },
      {
        name: "Kutch Cultural Tour",
        duration: "4 days",
        price: "₹40,000 per person",
        highlights: ["Textile Markets", "Salt Marshes", "Local Crafts", "Desert Landscape"],
      },
      {
        name: "Coastal Escape",
        duration: "3 days",
        price: "₹32,000 per person",
        highlights: ["Diu Beach", "Somnath Temple", "Water Sports", "Sunset Views"],
      },
    ],
  },
}
