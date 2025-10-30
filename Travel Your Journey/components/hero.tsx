import Link from "next/link"

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url("/luxury-mountain-landscape-himalayas-sunset.jpg")',
        }}
      >
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-3xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6 text-balance">Discover Your Next Adventure</h1>
        <p className="text-xl md:text-2xl mb-8 text-white/90 text-pretty">
          Curated luxury travel experiences across India's most breathtaking destinations
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/destinations"
            className="px-8 py-3 bg-accent text-accent-foreground rounded-lg hover:bg-accent/90 transition-colors font-semibold"
          >
            Explore Destinations
          </Link>
          <Link
            href="/contact"
            className="px-8 py-3 bg-white/20 text-white border border-white rounded-lg hover:bg-white/30 transition-colors font-semibold"
          >
            Plan Your Trip
          </Link>
        </div>
      </div>
    </section>
  )
}
