"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

export default function QuickPlanner() {
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState({
    destination: "",
    travelers: "",
    duration: "",
    dates: "",
    name: "",
    email: "",
    phone: "",
  })
  const [submitted, setSubmitted] = useState(false)
  const [whatsappLink, setWhatsappLink] = useState("")

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleStep1Submit = (e: React.FormEvent) => {
    e.preventDefault()
    if (formData.destination && formData.travelers && formData.duration && formData.dates) {
      setStep(2)
    }
  }

  const handleStep2Submit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (formData.name && formData.email && formData.phone) {
      try {
        await fetch("/api/contact", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        })
      } catch (error) {
        console.error("Error submitting form:", error)
      }

      const destinationName =
        {
          himachal: "Himachal Pradesh",
          uttarakhand: "Uttarakhand",
          rajasthan: "Rajasthan",
          gujarat: "Gujarat",
        }[formData.destination] || formData.destination

      const prefilledText = `Hi, I'd like to plan a trip to ${destinationName} for ${formData.dates}. I'm traveling with ${formData.travelers} person(s) for ${formData.duration} days. My contact: ${formData.name} - ${formData.email}`

      const encodedText = encodeURIComponent(prefilledText)
      const link = `https://wa.me/917434829124?text=${encodedText}`
      setWhatsappLink(link)
      setSubmitted(true)
    }
  }

  if (submitted) {
    return (
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-2xl mx-auto">
          <Card className="p-8 md:p-12 bg-primary/5 border-primary/20 text-center">
            <div className="mb-6">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-2">Thank You!</h2>
              <p className="text-muted-foreground mb-6">
                We've received your travel preferences. Let's chat on WhatsApp to finalize your perfect journey.
              </p>
            </div>

            <div className="space-y-4">
              <div className="bg-background p-4 rounded-lg border border-border">
                <p className="text-sm text-muted-foreground mb-2">Your Trip Details:</p>
                <p className="font-semibold text-foreground">
                  {
                    {
                      himachal: "Himachal Pradesh",
                      uttarakhand: "Uttarakhand",
                      rajasthan: "Rajasthan",
                      gujarat: "Gujarat",
                    }[formData.destination]
                  }{" "}
                  • {formData.dates} • {formData.duration} days • {formData.travelers} traveler(s)
                </p>
              </div>

              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-full px-8 py-4 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors font-semibold text-lg"
              >
                <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004a9.87 9.87 0 00-4.255.949c-1.238.503-2.335 1.236-3.356 2.259-1.02 1.02-1.756 2.119-2.259 3.356-.506 1.231-.957 2.853-.949 4.255-.007 1.402.443 2.771 1.349 3.807.906 1.035 2.275 1.856 3.807 1.349 1.382-.44 2.771-.443 3.807-1.349 1.035-.906 1.856-2.275 1.349-3.807-.44-1.382-.443-2.771-1.349-3.807-1.02-1.02-2.119-1.756-3.356-2.259-1.231-.506-2.853-.957-4.255-.949z" />
                </svg>
                Chat with Us on WhatsApp
              </a>

              <button
                onClick={() => {
                  setStep(1)
                  setSubmitted(false)
                  setFormData({
                    destination: "",
                    travelers: "",
                    duration: "",
                    dates: "",
                    name: "",
                    email: "",
                    phone: "",
                  })
                }}
                className="w-full px-8 py-2 border border-primary text-primary rounded-lg hover:bg-primary/5 transition-colors font-semibold"
              >
                Plan Another Trip
              </button>
            </div>
          </Card>
        </div>
      </section>
    )
  }

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-4xl mx-auto">
        <Card className="p-8 md:p-12 bg-primary/5 border-primary/20">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-2 text-center">
            Plan Your Journey
          </h2>
          <p className="text-center text-muted-foreground mb-8">
            {step === 1
              ? "Tell us about your ideal trip and we'll create a personalized itinerary"
              : "Share your contact details so we can reach out with your perfect itinerary"}
          </p>

          <div className="flex justify-center mb-8">
            <div className="flex items-center gap-4">
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold ${
                  step >= 1 ? "bg-primary text-primary-foreground" : "bg-border text-muted-foreground"
                }`}
              >
                1
              </div>
              <div className={`w-12 h-1 ${step >= 2 ? "bg-primary" : "bg-border"}`} />
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold ${
                  step >= 2 ? "bg-primary text-primary-foreground" : "bg-border text-muted-foreground"
                }`}
              >
                2
              </div>
            </div>
          </div>

          {step === 1 && (
            <form onSubmit={handleStep1Submit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Destination</label>
                  <select
                    name="destination"
                    value={formData.destination}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  >
                    <option value="">Select destination</option>
                    <option value="himachal">Himachal Pradesh</option>
                    <option value="uttarakhand">Uttarakhand</option>
                    <option value="rajasthan">Rajasthan</option>
                    <option value="gujarat">Gujarat</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Travel Dates</label>
                  <input
                    type="text"
                    name="dates"
                    value={formData.dates}
                    onChange={handleChange}
                    placeholder="e.g., Dec 15-22, 2024"
                    required
                    className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Number of Travelers</label>
                  <input
                    type="number"
                    name="travelers"
                    value={formData.travelers}
                    onChange={handleChange}
                    placeholder="2"
                    min="1"
                    required
                    className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Trip Duration (days)</label>
                  <input
                    type="number"
                    name="duration"
                    value={formData.duration}
                    onChange={handleChange}
                    placeholder="5"
                    min="1"
                    required
                    className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
              </div>

              <div className="flex justify-center">
                <Button
                  type="submit"
                  className="px-8 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-semibold"
                >
                  Continue to Next Step
                </Button>
              </div>
            </form>
          )}

          {step === 2 && (
            <form onSubmit={handleStep2Submit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Full Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    required
                    className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    required
                    className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>

                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-foreground mb-2">Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+91 XXXXXXXXXX"
                    required
                    className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
              </div>

              <div className="flex justify-center gap-4">
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="px-8 py-3 border border-primary text-primary rounded-lg hover:bg-primary/5 transition-colors font-semibold"
                >
                  Back
                </button>
                <Button
                  type="submit"
                  className="px-8 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-semibold"
                >
                  Complete & Chat on WhatsApp
                </Button>
              </div>
            </form>
          )}
        </Card>
      </div>
    </section>
  )
}
