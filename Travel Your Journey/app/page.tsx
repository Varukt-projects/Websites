import Header from "@/components/header"
import Hero from "@/components/hero"
import ActivitiesCarousel from "@/components/activities-carousel"
import FeaturedDestinations from "@/components/featured-destinations"
import QuickPlanner from "@/components/quick-planner"
import Testimonials from "@/components/testimonials"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <Hero />
      <ActivitiesCarousel />
      <FeaturedDestinations />
      <QuickPlanner />
      <Testimonials />
      <Footer />
    </main>
  )
}
