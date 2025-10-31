"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

interface CarouselSlide {
  id: string
  state: string
  title: string
  activities: string[]
  image: string
  description: string
}

const slides: CarouselSlide[] = [
  {
    id: "himachal",
    state: "Himachal Pradesh",
    title: "Mountain Adventures",
    activities: ["Trekking", "Paragliding", "Skiing", "Monastery Visits"],
    image: "/himachal-pradesh-mountains-snow-landscape.jpg",
    description: "Experience snow-capped peaks and thrilling mountain activities",
  },
  {
    id: "uttarakhand",
    state: "Uttarakhand",
    title: "Spiritual & Adventure",
    activities: ["Yoga & Meditation", "White Water Rafting", "Skiing", "Pilgrimage Treks"],
    image: "/uttarakhand-mountains-forest-landscape.jpg",
    description: "Find inner peace and adrenaline-pumping adventures",
  },
  {
    id: "rajasthan",
    state: "Rajasthan",
    title: "Royal Heritage",
    activities: ["Fort & Palace Tours", "Desert Safari", "Cultural Shows", "Shopping"],
    image: "/rajasthan-fort-palace-desert-landscape.jpg",
    description: "Explore majestic forts and vibrant desert landscapes",
  },
  {
    id: "gujarat",
    state: "Gujarat",
    title: "Wildlife & Culture",
    activities: ["Wildlife Safari", "Textile Tours", "Beach Activities", "Cultural Heritage"],
    image: "/gujarat-wildlife-lion-landscape.jpg",
    description: "Discover diverse wildlife and rich cultural heritage",
  },
]

export default function ActivitiesCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAutoPlay, setIsAutoPlay] = useState(true)

  useEffect(() => {
    if (!isAutoPlay) return

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [isAutoPlay])

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
    setIsAutoPlay(false)
  }

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
    setIsAutoPlay(false)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
    setIsAutoPlay(false)
  }

  const slide = slides[currentSlide]

  return (
    <section className="w-full bg-background py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4">Explore Our Destinations</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover the diverse activities and experiences across India's most beautiful regions
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative rounded-2xl overflow-hidden bg-muted h-96 md:h-[500px] lg:h-[600px] shadow-2xl">
          {/* Slides */}
          {slides.map((s, index) => (
            <div
              key={s.id}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                index === currentSlide ? "opacity-100" : "opacity-0"
              }`}
            >
              {/* Background Image */}
              <div className="absolute inset-0">
                <img src={s.image || "/placeholder.svg"} alt={s.state} className="w-full h-full object-cover" />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
              </div>

              {/* Content */}
              <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-10 lg:p-12 text-white">
                <div className="max-w-2xl">
                  <p className="text-sm md:text-base font-semibold text-accent mb-2 uppercase tracking-widest">
                    {s.state}
                  </p>
                  <h3 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold mb-4">{s.title}</h3>
                  <p className="text-base md:text-lg text-gray-100 mb-6 max-w-xl">{s.description}</p>

                  {/* Activities Grid */}
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
                    {s.activities.map((activity, idx) => (
                      <div
                        key={idx}
                        className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg px-3 py-2 md:px-4 md:py-3 text-center"
                      >
                        <p className="text-xs md:text-sm font-medium text-white">{activity}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white/20 hover:bg-white/40 backdrop-blur-sm text-white p-2 md:p-3 rounded-full transition-all duration-300"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white/20 hover:bg-white/40 backdrop-blur-sm text-white p-2 md:p-3 rounded-full transition-all duration-300"
            aria-label="Next slide"
          >
            <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
          </button>

          {/* Dot Indicators */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex gap-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`transition-all duration-300 rounded-full ${
                  index === currentSlide ? "bg-accent w-8 h-2" : "bg-white/40 hover:bg-white/60 w-2 h-2"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Slide Counter */}
        <div className="text-center mt-8">
          <p className="text-sm text-muted-foreground">
            {currentSlide + 1} / {slides.length}
          </p>
        </div>
      </div>
    </section>
  )
}
