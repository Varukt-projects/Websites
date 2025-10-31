"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { MessageCircleIcon, CheckCircleIcon } from "@/components/icons"

interface FormData {
  name: string
  email: string
  phone: string
  destination: string
  travelStyle: string[]
  interests: string[]
  tripDuration: string
  budget: string
  numberOfTravelers: string
  message: string
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    destination: "",
    travelStyle: [],
    interests: [],
    tripDuration: "",
    budget: "",
    numberOfTravelers: "",
    message: "",
  })

  const [submitted, setSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const travelStyles = ["Adventure", "Luxury", "Cultural", "Wellness", "Family-Friendly", "Budget-Conscious"]
  const interestOptions = [
    "Hiking",
    "Photography",
    "Food & Cuisine",
    "Wildlife",
    "History & Heritage",
    "Yoga & Meditation",
    "Adventure Sports",
    "Local Culture",
  ]

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleCheckboxChange = (field: "travelStyle" | "interests", value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: prev[field].includes(value) ? prev[field].filter((item) => item !== value) : [...prev[field], value],
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setSubmitted(true)
        setFormData({
          name: "",
          email: "",
          phone: "",
          destination: "",
          travelStyle: [],
          interests: [],
          tripDuration: "",
          budget: "",
          numberOfTravelers: "",
          message: "",
        })

        // Reset success message after 5 seconds
        setTimeout(() => setSubmitted(false), 5000)
      }
    } catch (error) {
      console.error("Error submitting form:", error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="space-y-8">
      {/* Contact Form */}
      <Card className="p-8 md:p-12">
        <h2 className="text-3xl font-serif font-bold text-foreground mb-2">Get in Touch</h2>
        <p className="text-muted-foreground mb-8">
          Tell us about your dream trip and we'll create a personalized itinerary for you.
        </p>

        {submitted && (
          <div className="mb-6 p-4 bg-primary/10 border border-primary/20 rounded-lg flex items-start gap-3">
            <CheckCircleIcon className="text-primary mt-1" size={20} />
            <div>
              <p className="font-semibold text-primary">Thank you for reaching out!</p>
              <p className="text-sm text-primary/80">
                We'll get back to you within 24 hours with personalized recommendations.
              </p>
            </div>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Basic Information */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-4">Your Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Full Name *</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Your name"
                  className="w-full px-4 py-3 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Email Address *</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="your@email.com"
                  className="w-full px-4 py-3 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Phone Number *</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  placeholder="+91 XXXXX XXXXX"
                  className="w-full px-4 py-3 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Number of Travelers</label>
                <select
                  name="numberOfTravelers"
                  value={formData.numberOfTravelers}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                >
                  <option value="">Select number of travelers</option>
                  <option value="1">Just me</option>
                  <option value="2">2 people</option>
                  <option value="3-4">3-4 people</option>
                  <option value="5-8">5-8 people</option>
                  <option value="8+">8+ people (group)</option>
                </select>
              </div>
            </div>
          </div>

          {/* Travel Preferences */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-4">Travel Preferences</h3>

            <div className="mb-6">
              <label className="block text-sm font-medium text-foreground mb-3">Preferred Destination</label>
              <select
                name="destination"
                value={formData.destination}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              >
                <option value="">Select a destination</option>
                <option value="Himachal Pradesh">Himachal Pradesh</option>
                <option value="Uttarakhand">Uttarakhand</option>
                <option value="Rajasthan">Rajasthan</option>
                <option value="Gujarat">Gujarat</option>
                <option value="Multiple">Multiple Destinations</option>
                <option value="Not Sure">Not Sure Yet</option>
              </select>
            </div>

            <div className="mb-6">
              <label className="block text-sm font-medium text-foreground mb-3">
                Travel Style (Select all that apply)
              </label>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {travelStyles.map((style) => (
                  <label key={style} className="flex items-center gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={formData.travelStyle.includes(style)}
                      onChange={() => handleCheckboxChange("travelStyle", style)}
                      className="w-4 h-4 rounded border-border text-primary focus:ring-2 focus:ring-primary"
                    />
                    <span className="text-sm text-foreground">{style}</span>
                  </label>
                ))}
              </div>
            </div>

            <div className="mb-6">
              <label className="block text-sm font-medium text-foreground mb-3">
                Your Interests (Select all that apply)
              </label>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {interestOptions.map((interest) => (
                  <label key={interest} className="flex items-center gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={formData.interests.includes(interest)}
                      onChange={() => handleCheckboxChange("interests", interest)}
                      className="w-4 h-4 rounded border-border text-primary focus:ring-2 focus:ring-primary"
                    />
                    <span className="text-sm text-foreground">{interest}</span>
                  </label>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Trip Duration</label>
                <select
                  name="tripDuration"
                  value={formData.tripDuration}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                >
                  <option value="">Select duration</option>
                  <option value="Weekend">Weekend (2-3 days)</option>
                  <option value="Short">Short (4-7 days)</option>
                  <option value="Medium">Medium (1-2 weeks)</option>
                  <option value="Long">Long (2-4 weeks)</option>
                  <option value="Extended">Extended (1+ month)</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Budget Range</label>
                <select
                  name="budget"
                  value={formData.budget}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                >
                  <option value="">Select budget range</option>
                  <option value="Budget">Budget (₹20,000 - ₹50,000)</option>
                  <option value="Mid-Range">Mid-Range (₹50,000 - ₹1,50,000)</option>
                  <option value="Premium">Premium (₹1,50,000 - ₹3,00,000)</option>
                  <option value="Luxury">Luxury (₹3,00,000+)</option>
                  <option value="Flexible">Flexible</option>
                </select>
              </div>
            </div>
          </div>

          {/* Message */}
          <div>
            <label className="block text-sm font-medium text-foreground mb-2">
              Additional Details or Special Requests
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell us about any special requirements, dietary preferences, accessibility needs, or anything else we should know..."
              rows={5}
              className="w-full px-4 py-3 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary resize-none"
            />
          </div>

          <Button
            type="submit"
            disabled={isLoading}
            className="w-full px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-semibold disabled:opacity-50"
          >
            {isLoading ? "Sending..." : "Send My Travel Preferences"}
          </Button>
        </form>
      </Card>

      {/* WhatsApp CTA */}
      <Card className="p-8 md:p-12 bg-primary/5 border-primary/20">
        <div className="flex items-center gap-4 mb-4">
          <MessageCircleIcon className="text-primary" size={32} />
          <h3 className="text-2xl font-serif font-bold text-foreground">Quick Chat on WhatsApp</h3>
        </div>
        <p className="text-muted-foreground mb-6">
          Prefer to chat? Connect with us on WhatsApp for instant responses and personalized recommendations.
        </p>
        <a
          href="https://wa.me/919876543210?text=Hi%20Travel%20your%20Journey%2C%20I%20would%20like%20to%20know%20more%20about%20your%20travel%20packages."
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-semibold"
        >
          <MessageCircleIcon size={20} />
          Chat with Us on WhatsApp
        </a>
      </Card>
    </div>
  )
}
