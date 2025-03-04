import { services } from '../serviceData'
import { notFound } from 'next/navigation'
import Image from 'next/image'

export async function generateStaticParams() {
  return services.map((service) => ({
    id: service.id,
  }))
}

export default function ServicePage({ params }: { params: { id: string } }) {
  const service = services.find((s) => s.id === params.id)

  if (!service) {
    notFound()
  }

  return (
    <div className="pt-16 pb-16">
      <div className="relative w-full h-[400px] mb-12">
        <Image
          src={service.heroImage}
          alt={service.title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="px-4 text-5xl font-bold text-center text-white">{service.title}</h1>
        </div>
      </div>

      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <p className="text-xl italic text-gray-600">{service.description}</p>
          <p className="mt-4 text-2xl font-bold text-primary">{service.price}</p>
        </div>

        <div className="grid gap-8 mt-12 md:grid-cols-2">
          <div className="p-4 border-2 rounded-lg shadow-md border-primary">
            <h2 className="mb-4 text-2xl font-bold">Features</h2>
            <ul className="space-y-3">
              {service.features.map((feature, index) => (
                <li key={index} className="flex items-center">
                  <svg className="w-6 h-6 mr-2 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          <div className="p-4 border-2 rounded-lg shadow-md border-secondary">
            <h2 className="mb-4 text-2xl font-bold">Benefits</h2>
            <ul className="space-y-3">
              {service.benefits.map((benefit, index) => (
                <li key={index} className="flex items-center">
                  <svg className="w-6 h-6 mr-2 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  {benefit}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="w-full mt-6 mb-12">
        <div
          dangerouslySetInnerHTML={{__html: service.fullDescription}} />
        </div>
      </div>
    </div>
  )
}
