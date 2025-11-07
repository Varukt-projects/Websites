"use client"

import { useState, useEffect } from "react"
import { Card } from "@/components/ui/card"
import { ChevronLeft, ChevronRight } from "lucide-react"

const testimonials = [
  {
    name: "Priya Sharma",
    location: "Mumbai",
    text: "Travel your Journey created the most magical experience in Himachal. Every detail was perfectly planned!",
    rating: 5,
  },
  {
    name: "Rajesh Kumar",
    location: "Delhi",
    text: "The Rajasthan package exceeded all expectations. Highly professional and incredibly attentive to our needs.",
    rating: 5,
  },
  {
    name: "Anjali Patel",
    location: "Bangalore",
    text: "Uttarakhand adventure was unforgettable. The guides were knowledgeable and the accommodations were luxurious.",
    rating: 5,
  },
  {
    name: "Vikram Singh",
    location: "Pune",
    text: "The Goa beach package was perfect for our family. Great experiences and excellent hospitality throughout.",
    rating: 5,
  },
  {
    name: "Neha Gupta",
    location: "Hyderabad",
    text: "Yoga retreat in Rishikesh was transformative. The entire experience was serene and well-organized.",
    rating: 5,
  },
  {
    name: "Arjun Mehta",
    location: "Ahmedabad",
    text: "Wildlife safari in Gir was extraordinary. Got to see Asiatic lions and learned so much from expert guides.",
    rating: 5,
  },
]

export default function Testimonials() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAutoPlay, setIsAutoPlay] = useState(true)

  useEffect(() => {
    if (!isAutoPlay) return

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % Math.ceil(testimonials.length / 3))
    }, 5000)

    return () => clearInterval(interval)
  }, [isAutoPlay])

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
    setIsAutoPlay(false)
  }

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % Math.ceil(testimonials.length / 3))
    setIsAutoPlay(false)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + Math.ceil(testimonials.length / 3)) % Math.ceil(testimonials.length / 3))
    setIsAutoPlay(false)
  }

  const itemsPerPage = 3
  const totalSlides = Math.ceil(testimonials.length / itemsPerPage)
  const visibleTestimonials = testimonials.slice(currentSlide * itemsPerPage, (currentSlide + 1) * itemsPerPage)

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4">What Our Travelers Say</h2>
          <p className="text-lg text-muted-foreground">Real experiences from our valued guests</p>
        </div>

        {/* Carousel Container */}
        <div className="relative">
          {/* Testimonials Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {visibleTestimonials.map((testimonial, index) => (
              <Card key={index} className="p-8 transition-all duration-300">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-accent text-xl">
                      ★
                    </span>
                  ))}
                </div>
                <p className="text-foreground mb-6 italic">"{testimonial.text}"</p>
                <div>
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                </div>
              </Card>
            ))}
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-16 md:-translate-x-20 z-10 bg-primary hover:bg-primary/90 text-white p-3 rounded-full transition-all duration-300"
            aria-label="Previous testimonials"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-16 md:translate-x-20 z-10 bg-primary hover:bg-primary/90 text-white p-3 rounded-full transition-all duration-300"
            aria-label="Next testimonials"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Dot Indicators */}
          <div className="flex justify-center gap-2 mt-12">
            {[...Array(totalSlides)].map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`transition-all duration-300 rounded-full ${
                  index === currentSlide ? "bg-primary w-8 h-2" : "bg-muted hover:bg-primary/50 w-2 h-2"
                }`}
                aria-label={`Go to testimonial set ${index + 1}`}
              />
            ))}
          </div>

          {/* Slide Counter */}
          <div className="text-center mt-6">
            <p className="text-sm text-muted-foreground">
              {currentSlide + 1} / {totalSlides}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
