'use client'
import Image from 'next/image'

export default function Hero() {
  return (
    <div className="relative h-screen">
      <div className="absolute inset-0">
        <Image
          src="./images/hero-bg.jpg"
          alt="Auto repair hero background"
          fill
          priority
          className="object-cover"
          quality={100}
        />
      </div>
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>
      <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
          Mobile Auto Repair at Your Doorstep
        </h1>
        <p className="mt-6 text-xl text-gray-300 max-w-3xl">
          Professional automotive repair and maintenance services that come to you. Save time and money with our convenient mobile solutions.
        </p>
        <div className="mt-10">
          <a
            href="#contact"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-opacity-90 group"
          >
            Book Now
            <svg 
              className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform text-secondary" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M9 5l7 7-7 7" 
              />
            </svg>
          </a>
        </div>
      </div>
    </div>
  )
}
