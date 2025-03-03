'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const handleLinkClick = () => {
    setIsOpen(false)
  }

  return (
    <nav className="fixed w-full bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center hover:text-primary">
              <Image
                src="/images/logo/fixology-logo.svg"
                alt="Fixology Logo"
                width={60}
                height={60}
                priority
                className="hover:text-secondary"
              />
            <span className="ml-4 text-2xl font-bold">Fixology</span>
          </Link>
          
          <div className="hidden md:flex items-center space-x-4">
            <Link href="/" className="font-semibold hover:text-secondary">Home</Link>
            <Link href="#services" className="font-semibold hover:text-secondary">Services</Link>
            <Link href="#about" className="font-semibold hover:text-secondary">About</Link>
            <Link href="#contact" className="font-semibold hover:text-secondary">Contact</Link>
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-500">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link href="/" onClick={handleLinkClick} className="block hover:text-primary">Home</Link>
            <Link href="#services" onClick={handleLinkClick} className="block hover:text-primary">Services</Link>
            <Link href="#about" onClick={handleLinkClick} className="block hover:text-primary">About</Link>
            <Link href="#contact" onClick={handleLinkClick} className="block hover:text-primary">Contact</Link>
          </div>
        </div>
      )}
    </nav>
  )
}
