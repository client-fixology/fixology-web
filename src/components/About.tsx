'use client'
import Image from 'next/image'

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
          <div>
            <h2 className="text-3xl font-extrabold text-gray-900">
              Why Choose <span className="text-secondary">Fixology?</span>
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              With over 10 years of experience, our certified mechanics bring the auto shop to you. We offer:
            </p>
            <ul className="mt-8 space-y-4">
              {[
                'Convenient mobile service at your location',
                'Certified professional mechanics',
                'Competitive pricing and transparent quotes',
                'Warranty on all repairs',
                'State-of-the-art diagnostic equipment'
              ].map((item, index) => (
                <li key={index} className="flex items-center">
                  <svg className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="ml-3 text-gray-600">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="mt-10 lg:mt-0">
            <div className="relative aspect-[3/2] w-full">
              <Image
                src="./images/mechanic-working.png"
                alt="Mechanic working on a car"
                fill
                className="object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
