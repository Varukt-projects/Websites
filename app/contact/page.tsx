import Header from "@/components/header"
import Footer from "@/components/footer"
import ContactForm from "@/components/contact-form"
import { Card } from "@/components/ui/card"
import { PhoneIcon, MailIcon, MapPinIcon, MessageCircleIcon } from "@/components/icons"

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />

      {/* Hero */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-secondary">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-serif font-bold text-foreground mb-4">Contact Us</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Have questions? We'd love to hear from you. Get in touch with our travel experts.
          </p>
        </div>
      </section>

      {/* Contact Info & Form */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            <Card className="p-6">
              <div className="flex items-start gap-3">
                <PhoneIcon className="text-accent mt-1 flex-shrink-0" size={24} />
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Phone</h3>
                  <p className="text-sm text-muted-foreground">+91 7434829124</p>
                  <p className="text-sm text-muted-foreground">+91 8530124947</p>
                  <p className="text-xs text-muted-foreground mt-2">Mon-Fri, 9 AM - 6 PM IST</p>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex items-start gap-3">
                <MailIcon className="text-accent mt-1 flex-shrink-0" size={24} />
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Email</h3>
                  <p className="text-sm text-muted-foreground">info.travelyourjourney@gmail.com</p>
                  <p className="text-xs text-muted-foreground mt-2">Response within 24 hours</p>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex items-start gap-3">
                <MapPinIcon className="text-accent mt-1 flex-shrink-0" size={24} />
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Office</h3>
                  <p className="text-sm text-muted-foreground">Ahmedabad, India</p>
                  <p className="text-xs text-muted-foreground mt-2">Available for consultations</p>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex items-start gap-3">
                <MessageCircleIcon className="text-accent mt-1 flex-shrink-0" size={24} />
                <div>
                  <h3 className="font-semibold text-foreground mb-1">WhatsApp</h3>
                  <p className="text-sm text-muted-foreground">+91 7434829124</p>
                  <p className="text-xs text-muted-foreground mt-2">Instant messaging available</p>
                </div>
              </div>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="max-w-4xl mx-auto">
            <ContactForm />
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-secondary">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-serif font-bold text-foreground mb-12 text-center">
            Frequently Asked Questions
          </h2>

          <div className="space-y-6">
            <Card className="p-8">
              <h3 className="text-lg font-semibold text-foreground mb-3">How far in advance should I book?</h3>
              <p className="text-muted-foreground">
                We recommend booking at least 2-4 weeks in advance for domestic packages. For international travelers or
                large groups, 6-8 weeks is ideal to ensure availability and better rates.
              </p>
            </Card>

            <Card className="p-8">
              <h3 className="text-lg font-semibold text-foreground mb-3">What's included in the packages?</h3>
              <p className="text-muted-foreground">
                Our packages typically include accommodation, meals, guided tours, and activities as mentioned. Flights,
                travel insurance, and personal expenses are usually excluded unless specified.
              </p>
            </Card>

            <Card className="p-8">
              <h3 className="text-lg font-semibold text-foreground mb-3">Can I customize a package?</h3>
              <p className="text-muted-foreground">
                All our packages can be customized based on your preferences, budget, and timeline. Contact our team to
                discuss your specific requirements.
              </p>
            </Card>

            <Card className="p-8">
              <h3 className="text-lg font-semibold text-foreground mb-3">What's your cancellation policy?</h3>
              <p className="text-muted-foreground">
                We offer flexible cancellation policies. Cancellations made 30 days before the trip receive a full
                refund. For cancellations within 30 days, a 50% refund is provided. Within 7 days, no refund is
                available.
              </p>
            </Card>

            <Card className="p-8">
              <h3 className="text-lg font-semibold text-foreground mb-3">Do you offer group discounts?</h3>
              <p className="text-muted-foreground">
                Yes! We offer special discounts for groups of 8 or more people. Contact us with your group size and
                preferred destination for a customized quote.
              </p>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
