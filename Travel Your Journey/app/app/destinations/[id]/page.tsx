import { notFound } from "next/navigation"
import Header from "@/components/header"
import Footer from "@/components/footer"
import DestinationDetail from "@/components/destination-detail"
import { destinations } from "@/lib/destinations"

export async function generateStaticParams() {
  return Object.keys(destinations).map((id) => ({
    id,
  }))
}

export default function DestinationPage({ params }: { params: { id: string } }) {
  const destination = destinations[params.id]

  if (!destination) {
    notFound()
  }

  return (
    <main className="min-h-screen bg-background">
      <Header />
      <DestinationDetail destination={destination} />
      <Footer />
    </main>
  )
}
