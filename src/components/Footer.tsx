'use client'

import Link from 'next/link'
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faPhone, faClock} from '@fortawesome/free-solid-svg-icons'

export default function Footer() {
  return (
    <footer className="bg-gray-900 border-t">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 my-auto">
            <Link href="/" className="flex items-center">
                <Image
                  src="/images/logo/fixology-logo-light.svg"
                  alt="Fixology Logo"
                  width={80}
                  height={80}
                  className="mb-4 text-neutral-200"
                />
                <p className="-mt-4 ml-4 text-2xl font-bold text-neutral-200">Fixology LLC</p>
            </Link>
            <p className="text-gray-400 mt-4">
              Professional mobile auto repair services at your doorstep
            </p>
          </div>

          <div>
            <h3 className="text-white text-lg font-bold">Quick <span className="text-secondary">Links</span></h3>
            <div className="mt-2 space-y-2">
              <Link href="/" className="text-gray-400 hover:text-white block">Home</Link>
              <Link href="#services" className="text-gray-400 hover:text-white block">Services</Link>
              <Link href="#about" className="text-gray-400 hover:text-white block">About</Link>
              <Link href="#contact" className="text-gray-400 hover:text-white block">Contact</Link>
            </div>
          </div>

          <div>
            <h3 className="text-white text-lg font-bold">Contact <span className="text-secondary">Info</span></h3>
            <div className="mt-2 space-y-2 text-gray-400">
              <p><Link href="tel:5864538854"><span className="text-white mr-2"><FontAwesomeIcon icon={faPhone} /></span> (586) 453-8854</Link></p>
              <p><Link href="mailto:fixologyllcrepair@gmail.com"><span className="text-white mr-2"><FontAwesomeIcon icon={faEnvelope} /></span> fixologyllcrepair@gmail.com</Link></p>
              <p><span className="text-white mr-2"><FontAwesomeIcon icon={faClock} /></span> Mon-Sat 8am-6pm</p>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-200 mt-8 pt-8 text-center text-neutral-600">
          <p>&copy; {new Date().getFullYear()} Fixology LLC. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
