import Link from "next/link"
import { MailIcon, PhoneIcon, MapPinIcon } from "@/components/icons"

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-serif font-bold mb-4">Travel your Journey</h3>
            <p className="text-primary-foreground/80">
              Curated luxury travel experiences across India's most enchanting destinations.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/destinations"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Destinations
                </Link>
              </li>
              <li>
                <Link
                  href="/packages"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Packages
                </Link>
              </li>
              <li>
                <Link
                  href="/experiences"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Experiences
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Destinations */}
          <div>
            <h4 className="font-semibold mb-4">Destinations</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/destinations/himachal"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Himachal Pradesh
                </Link>
              </li>
              <li>
                <Link
                  href="/destinations/uttarakhand"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Uttarakhand
                </Link>
              </li>
              <li>
                <Link
                  href="/destinations/rajasthan"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Rajasthan
                </Link>
              </li>
              <li>
                <Link
                  href="/destinations/gujarat"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Gujarat
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2">
                <PhoneIcon size={18} />
                <div className="flex flex-col gap-1">
                  <span className="text-primary-foreground/80 text-sm">+91 7434829124</span>
                  <span className="text-primary-foreground/80 text-sm">+91 8530124947</span>
                </div>
              </li>
              <li className="flex items-center gap-2">
                <MailIcon size={18} />
                <span className="text-primary-foreground/80">info.travelyourjourney@gmail.com</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPinIcon size={18} className="mt-1" />
                <span className="text-primary-foreground/80">New Delhi, India</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8 text-center text-primary-foreground/80">
          <p>&copy; 2025 Travel your Journey. All rights reserved. | Crafted with care for wanderers.</p>
        </div>
      </div>
    </footer>
  )
}
