'use client'
import { services } from '../app/services/serviceData'
import Link from 'next/link'
import Image from 'next/image'

export default function Services() {
    return (
        <section id="services" className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                    <h2 className="text-3xl font-extrabold text-gray-900">Our <span className="text-secondary">Services</span></h2>
                    <p className="mt-4 text-xl text-gray-600">
                        Professional auto repair services that come to you
                    </p>
                </div>

                <div className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
                    {services.map((service) => (
                        <div
                            key={service.id}
                            className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow transform hover:-translate-y-1 duration-300"
                        >
                            <div className="relative h-48 w-full">
                                <Image
                                    src={service.heroImage}
                                    alt={service.title}
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <div className="p-6 flex flex-col h-full">
                                <div className="flex-grow">
                                    <h3 className="text-xl font-semibold text-gray-900">{service.title}</h3>
                                    <p className="mt-2 h-20 text-gray-600">{service.description}</p>
                                    <p className="mt-4 text-primary font-bold">{service.price}</p>
                                    <Link
                                        href={`/services/${service.id}`}
                                        className="flex text-sm items-center justify-center mt-3 m-auto w-full text-center px-3 py-1 bg-primary text-white rounded-md hover:bg-opacity-90 transition-colors duration-200 group"
                                    >
                                        Learn More
                                        <div className="text-secondary"><svg 
                                            className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" 
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
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
