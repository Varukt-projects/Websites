"use client"

import Link from "next/link"
import { useState } from "react"
import { MenuIcon, XIcon } from "@/components/icons"
import Image from "next/image"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 hover:opacity-90 transition-opacity">
          <Image src="/logo.png" alt="Travel your Journey" width={32} height={32} className="h-8 w-auto" />
          <span className="text-xl font-serif font-bold text-primary sm:inline">Travel your Journey</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <Link href="/destinations" className="text-foreground hover:text-primary transition-colors">
            Destinations
          </Link>
          <Link href="/packages" className="text-foreground hover:text-primary transition-colors">
            Packages
          </Link>
          <Link href="/experiences" className="text-foreground hover:text-primary transition-colors">
            Experiences
          </Link>
          <Link
            href="/contact"
            className="px-6 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
          >
            Contact Us
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
          {isOpen ? <XIcon size={24} /> : <MenuIcon size={24} />}
        </button>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="absolute top-full left-0 right-0 bg-background border-b border-border md:hidden">
            <div className="flex flex-col gap-4 p-4">
              <Link href="/destinations" className="text-foreground hover:text-primary transition-colors">
                Destinations
              </Link>
              <Link href="/packages" className="text-foreground hover:text-primary transition-colors">
                Packages
              </Link>
              <Link href="/experiences" className="text-foreground hover:text-primary transition-colors">
                Experiences
              </Link>
              <Link
                href="/contact"
                className="px-6 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors text-center"
              >
                Contact Us
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
