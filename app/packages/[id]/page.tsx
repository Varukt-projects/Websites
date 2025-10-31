import Link from "next/link"
import { notFound } from "next/navigation"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { packages } from "@/lib/packages"
import { Card } from "@/components/ui/card"
import { Clock, Users, TrendingUp, Check } from "lucide-react"

export async function generateStaticParams() {
  return Object.keys(packages).map((id) => ({
    id,
  }))
}

export default function PackageDetailPage({ params }: { params: { id: string } }) {
  const pkg = packages[params.id]

  if (!pkg) {
    notFound()
  }

  return (
    <main className="min-h-screen bg-background">
      <Header />

      {/* Hero */}
      <section className="relative h-96 overflow-hidden">
        <img src={pkg.image || "/placeholder.svg"} alt={pkg.name} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex items-end">
          <div className="w-full p-8 md:p-12">
            <h1 className="text-5xl md:text-6xl font-serif font-bold text-white mb-2">{pkg.name}</h1>
            <p className="text-xl text-white/90">{pkg.destination}</p>
          </div>
        </div>
      </section>

      {/* Package Info */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-secondary">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
            <Card className="p-6">
              <div className="flex items-center gap-3 mb-2">
                <Clock className="text-accent" size={24} />
                <span className="text-sm text-muted-foreground">Duration</span>
              </div>
              <p className="text-2xl font-bold text-foreground">{pkg.duration}</p>
            </Card>

            <Card className="p-6">
              <div className="flex items-center gap-3 mb-2">
                <Users className="text-accent" size={24} />
                <span className="text-sm text-muted-foreground">Group Size</span>
              </div>
              <p className="text-2xl font-bold text-foreground">{pkg.groupSize}</p>
            </Card>

            <Card className="p-6">
              <div className="flex items-center gap-3 mb-2">
                <TrendingUp className="text-accent" size={24} />
                <span className="text-sm text-muted-foreground">Difficulty</span>
              </div>
              <p className="text-2xl font-bold text-foreground">{pkg.difficulty}</p>
            </Card>

            <Card className="p-6 bg-primary/10 border-primary/20">
              <p className="text-sm text-muted-foreground mb-2">Price per person</p>
              <p className="text-3xl font-bold text-primary">{pkg.price}</p>
            </Card>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-2xl font-serif font-bold text-foreground mb-4">Highlights</h2>
              <ul className="space-y-3">
                {pkg.highlights.map((highlight, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <span className="text-accent">✓</span>
                    <span className="text-foreground">{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-serif font-bold text-foreground mb-4">What's Included</h2>
              <ul className="space-y-3">
                {pkg.includes.map((item, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <Check size={20} className="text-accent" />
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Itinerary */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-serif font-bold text-foreground mb-12">Day-by-Day Itinerary</h2>

          <div className="space-y-6">
            {pkg.itinerary.map((day, index) => (
              <Card key={index} className="p-8 border-l-4 border-l-accent">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-serif font-bold text-foreground">Day {day.day}</h3>
                    <p className="text-lg text-accent font-semibold">{day.title}</p>
                  </div>
                  <span className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold">
                    {day.accommodation}
                  </span>
                </div>

                <p className="text-muted-foreground mb-6">{day.description}</p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <h4 className="font-semibold text-foreground mb-3">Activities</h4>
                    <ul className="space-y-2">
                      {day.activities.map((activity, i) => (
                        <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                          <span className="text-accent mt-1">•</span>
                          {activity}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-foreground mb-3">Meals</h4>
                    <ul className="space-y-2">
                      {day.meals.map((meal, i) => (
                        <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                          <span className="text-accent mt-1">•</span>
                          {meal}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-foreground mb-3">Accommodation</h4>
                    <p className="text-sm text-muted-foreground">{day.accommodation}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-secondary">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-serif font-bold text-foreground mb-6">Ready to Book?</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Contact us to customize this package or get more information
          </p>
          <Link href="/contact">
            <button className="px-8 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-semibold text-lg">
              Get in Touch
            </button>
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  )
}
