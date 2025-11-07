import Header from "@/components/header"
import Footer from "@/components/footer"
import { Card } from "@/components/ui/card"
import Link from "next/link"
import { packages } from "@/lib/packages"
import { Clock, Users, TrendingUp } from "lucide-react"

export default function PackagesPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />

      {/* Hero */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-secondary">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-serif font-bold text-foreground mb-4">Travel Packages</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Curated itineraries designed for unforgettable experiences
          </p>
        </div>
      </section>

      {/* Packages Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {Object.values(packages).map((pkg) => (
              <Card key={pkg.id} className="overflow-hidden hover:shadow-xl transition-shadow h-full flex flex-col">
                <Link href={`/packages/${pkg.id}`} className="relative h-48 overflow-hidden block">
                  <img
                    src={pkg.image || "/placeholder.svg"}
                    alt={pkg.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </Link>
                <div className="p-8 flex flex-col flex-grow">
                  <h2 className="text-2xl font-serif font-bold text-foreground mb-2">{pkg.name}</h2>
                  <p className="text-accent font-semibold mb-4">{pkg.destination}</p>
                  <p className="text-muted-foreground mb-6 flex-grow">{pkg.description}</p>

                  <div className="grid grid-cols-3 gap-4 mb-6 py-4 border-t border-b border-border">
                    <div className="flex items-center gap-2">
                      <Clock size={18} className="text-accent" />
                      <span className="text-sm text-foreground">{pkg.duration}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users size={18} className="text-accent" />
                      <span className="text-sm text-foreground">{pkg.groupSize}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <TrendingUp size={18} className="text-accent" />
                      <span className="text-sm text-foreground">{pkg.difficulty}</span>
                    </div>
                  </div>

                  <div className="flex items-end justify-between gap-4">
                    <div>
                      <p className="text-sm text-muted-foreground">Starting from</p>
                      <p className="text-2xl font-bold text-primary">{pkg.price}</p>
                    </div>
                    <Link
                      href={`/contact?package=${encodeURIComponent(pkg.name)}`}
                      className="px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-semibold"
                    >
                      Enquire Now
                    </Link>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
