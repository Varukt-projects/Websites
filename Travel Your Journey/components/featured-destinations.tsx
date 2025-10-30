import Link from "next/link"
import { Card } from "@/components/ui/card"

const destinations = [
  {
    id: "himachal",
    name: "Himachal Pradesh",
    description: "Snow-capped peaks, ancient temples, and pristine valleys",
    image: "/himachal-pradesh-mountains-snow-landscape.jpg",
    highlights: ["Shimla", "Manali", "Dharamshala"],
  },
  {
    id: "uttarakhand",
    name: "Uttarakhand",
    description: "Spiritual retreats, adventure trails, and serene hill stations",
    image: "/uttarakhand-mountains-forest-landscape.jpg",
    highlights: ["Rishikesh", "Auli", "Nainital"],
  },
  {
    id: "rajasthan",
    name: "Rajasthan",
    description: "Majestic forts, vibrant culture, and golden desert landscapes",
    image: "/rajasthan-fort-palace-desert-landscape.jpg",
    highlights: ["Jaipur", "Udaipur", "Jodhpur"],
  },
  {
    id: "gujarat",
    name: "Gujarat",
    description: "Rich heritage, wildlife sanctuaries, and coastal beauty",
    image: "/gujarat-wildlife-lion-landscape.jpg",
    highlights: ["Gir Forest", "Kutch", "Ahmedabad"],
  },
]

export default function FeaturedDestinations() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4">Featured Destinations</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore our handpicked collection of India's most enchanting destinations
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {destinations.map((destination) => (
            <Link key={destination.id} href={`/destinations/${destination.id}`}>
              <Card className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer h-full">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={destination.image || "/placeholder.svg"}
                    alt={destination.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-serif font-bold text-foreground mb-2">{destination.name}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{destination.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {destination.highlights.map((highlight) => (
                      <span key={highlight} className="text-xs bg-primary/10 text-primary px-3 py-1 rounded-full">
                        {highlight}
                      </span>
                    ))}
                  </div>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
