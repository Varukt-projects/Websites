import Header from "@/components/header"
import Footer from "@/components/footer"
import { destinations } from "@/lib/destinations"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

const destination = destinations.rajasthan

export const metadata = {
  title: `${destination.name} | Travel Your Journey - Royal Heritage & Palace Tours`,
  description: destination.longDescription,
  openGraph: {
    title: `Explore ${destination.name} - Forts, Palaces & Desert Adventure`,
    description: destination.longDescription,
    images: [{ url: destination.image }],
  },
}

export default function RajasthanPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="relative h-96 md:h-[500px] overflow-hidden">
        <img
          src={destination.image || "/placeholder.svg"}
          alt={destination.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-10 lg:p-16 text-white">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-4">{destination.name}</h1>
          <p className="text-lg md:text-xl max-w-2xl">{destination.description}</p>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Breadcrumb */}
        <nav className="mb-8 text-sm text-muted-foreground">
          <Link href="/" className="hover:text-primary">
            Home
          </Link>
          <span className="mx-2">/</span>
          <Link href="/destinations" className="hover:text-primary">
            Destinations
          </Link>
          <span className="mx-2">/</span>
          <span className="text-foreground">{destination.name}</span>
        </nav>

        {/* Overview */}
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-6">About {destination.name}</h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-8">{destination.longDescription}</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-secondary p-6 rounded-lg">
              <h3 className="font-semibold text-foreground mb-2">Best Time to Visit</h3>
              <p className="text-muted-foreground">{destination.bestTime}</p>
            </div>
            <div className="bg-secondary p-6 rounded-lg">
              <h3 className="font-semibold text-foreground mb-2">Altitude Range</h3>
              <p className="text-muted-foreground">{destination.altitude}</p>
            </div>
            <div className="bg-secondary p-6 rounded-lg">
              <h3 className="font-semibold text-foreground mb-2">Top Highlights</h3>
              <div className="flex flex-wrap gap-2">
                {destination.highlights.map((highlight) => (
                  <span key={highlight} className="bg-primary/10 text-primary text-sm px-3 py-1 rounded-full">
                    {highlight}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Activities */}
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-8">Activities & Experiences</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {destination.activities.map((activity, idx) => (
              <Card key={idx} className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-3">{activity.name}</h3>
                <p className="text-muted-foreground mb-4">{activity.description}</p>
                <div className="flex justify-between text-sm text-muted-foreground">
                  <span>Duration: {activity.duration}</span>
                  <span>Level: {activity.difficulty}</span>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Accommodations */}
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-8">Accommodations</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {destination.accommodations.map((acc, idx) => (
              <Card key={idx} className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-2">{acc.name}</h3>
                <p className="text-sm text-accent mb-3">{acc.type}</p>
                <p className="text-muted-foreground text-sm mb-4">{acc.description}</p>
                <p className="font-semibold text-primary mb-4">{acc.priceRange}</p>
                <div className="space-y-2">
                  {acc.amenities.map((amenity) => (
                    <div key={amenity} className="flex items-center text-sm text-muted-foreground">
                      <span className="w-2 h-2 bg-primary rounded-full mr-2" />
                      {amenity}
                    </div>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-primary to-accent rounded-lg p-8 md:p-12 text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary-foreground mb-4">Ready to Explore?</h2>
          <p className="text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Discover curated packages and personalized experiences in {destination.name}. Chat with us on WhatsApp to
            plan your perfect journey.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button className="bg-background text-primary hover:bg-background/90 px-8 py-6">Enquire Now</Button>
            </Link>
            <a
              href="https://wa.me/917434829124?text=Hi%2C%20I%27d%20like%20to%20plan%20a%20trip%20to%20Rajasthan"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="bg-background text-primary hover:bg-background/90 px-8 py-6">Chat on WhatsApp</Button>
            </a>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
}
