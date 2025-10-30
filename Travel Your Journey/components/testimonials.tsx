import { Card } from "@/components/ui/card"

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
]

export default function Testimonials() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4">What Our Travelers Say</h2>
          <p className="text-lg text-muted-foreground">Real experiences from our valued guests</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="p-8">
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
      </div>
    </section>
  )
}
