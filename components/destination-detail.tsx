import type { Destination } from "@/lib/destinations"
import { Card } from "@/components/ui/card"
import { MapPin, Calendar, Mountain } from "lucide-react"

interface DestinationDetailProps {
  destination: Destination
}

export default function DestinationDetail({ destination }: DestinationDetailProps) {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-96 overflow-hidden">
        <img
          src={destination.image || "/placeholder.svg"}
          alt={destination.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex items-end">
          <div className="w-full p-8 md:p-12">
            <h1 className="text-5xl md:text-6xl font-serif font-bold text-white mb-2">{destination.name}</h1>
            <p className="text-xl text-white/90">{destination.state}</p>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-secondary">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <Card className="p-6">
              <div className="flex items-start gap-4">
                <Calendar className="text-accent mt-1" size={24} />
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Best Time to Visit</h3>
                  <p className="text-muted-foreground">{destination.bestTime}</p>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex items-start gap-4">
                <Mountain className="text-accent mt-1" size={24} />
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Altitude</h3>
                  <p className="text-muted-foreground">{destination.altitude}</p>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex items-start gap-4">
                <MapPin className="text-accent mt-1" size={24} />
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Highlights</h3>
                  <p className="text-muted-foreground">{destination.highlights.slice(0, 3).join(", ")}</p>
                </div>
              </div>
            </Card>
          </div>

          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-foreground leading-relaxed">{destination.longDescription}</p>
          </div>
        </div>
      </section>

      {/* Activities */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-serif font-bold text-foreground mb-12">Activities & Experiences</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {destination.activities.map((activity, index) => (
              <Card key={index} className="p-8">
                <h3 className="text-2xl font-serif font-bold text-foreground mb-3">{activity.name}</h3>
                <p className="text-muted-foreground mb-4">{activity.description}</p>
                <div className="flex gap-4 text-sm">
                  <span className="px-3 py-1 bg-primary/10 text-primary rounded-full">{activity.duration}</span>
                  <span className="px-3 py-1 bg-accent/10 text-accent rounded-full">{activity.difficulty}</span>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Accommodations */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-secondary">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-serif font-bold text-foreground mb-12">Where to Stay</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {destination.accommodations.map((accommodation, index) => (
              <Card key={index} className="p-8">
                <div className="mb-4">
                  <h3 className="text-xl font-serif font-bold text-foreground">{accommodation.name}</h3>
                  <p className="text-sm text-accent font-semibold">{accommodation.type}</p>
                </div>
                <p className="text-muted-foreground mb-4">{accommodation.description}</p>
                <p className="font-semibold text-primary mb-4">{accommodation.priceRange}</p>
                <div className="space-y-2">
                  <p className="text-sm font-semibold text-foreground">Amenities:</p>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    {accommodation.amenities.map((amenity, i) => (
                      <li key={i}>• {amenity}</li>
                    ))}
                  </ul>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Packages */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-serif font-bold text-foreground mb-12">Curated Packages</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {destination.packages.map((pkg, index) => (
              <Card key={index} className="p-8 border-2 border-accent/20 hover:border-accent/50 transition-colors">
                <h3 className="text-2xl font-serif font-bold text-foreground mb-2">{pkg.name}</h3>
                <p className="text-accent font-semibold mb-4">{pkg.duration}</p>
                <ul className="space-y-2 mb-6">
                  {pkg.highlights.map((highlight, i) => (
                    <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                      <span className="text-accent mt-1">✓</span>
                      {highlight}
                    </li>
                  ))}
                </ul>
                <div className="border-t border-border pt-4">
                  <p className="text-2xl font-bold text-primary">{pkg.price}</p>
                  <button className="w-full mt-4 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-semibold">
                    Inquire Now
                  </button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
