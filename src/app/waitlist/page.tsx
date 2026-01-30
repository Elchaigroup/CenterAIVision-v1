'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import { FadeIn, Reveal } from '@/components/ui/animations'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'

export default function WaitlistPage() {
  const searchParams = useSearchParams()
  const product = searchParams.get('product') || 'Hardware'

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    quantity: '1',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In production, this would submit to an API
    setSubmitted(true)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  if (submitted) {
    return (
      <section className="relative min-h-screen pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-core-blue/20 via-midnight-slate to-midnight-slate" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-electric-azure/10 via-transparent to-transparent" />

        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <FadeIn>
            <Card variant="glass" className="text-center py-12" spotlight={false}>
              <CardContent>
                <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-green-500/20 flex items-center justify-center">
                  <svg className="w-10 h-10 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h1 className="text-3xl font-bold text-cloud-mist mb-4">
                  You&apos;re on the List!
                </h1>
                <p className="text-cloud-mist/70 mb-8 max-w-md mx-auto">
                  Thank you for your interest in {product}. Our sales team will contact you
                  within 24-48 hours with pricing and availability information.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Link href="/hardware/miners">
                    <Button variant="outline">Browse Miners</Button>
                  </Link>
                  <Link href="/hardware/gpus">
                    <Button variant="outline">Browse GPUs</Button>
                  </Link>
                  <Link href="/">
                    <Button variant="primary">Back to Home</Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </FadeIn>
        </div>
      </section>
    )
  }

  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-12 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-core-blue/20 via-midnight-slate to-midnight-slate" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-electric-azure/10 via-transparent to-transparent" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <FadeIn>
            <div className="text-center">
              <span className="inline-block px-4 py-1.5 mb-6 text-sm font-medium text-electric-azure bg-electric-azure/10 rounded-full border border-electric-azure/20">
                Limited Availability
              </span>
              <h1 className="text-4xl md:text-5xl font-bold text-cloud-mist leading-tight mb-4">
                Join the Waiting List
              </h1>
              <p className="text-lg text-cloud-mist/70 max-w-2xl mx-auto">
                {product !== 'Hardware'
                  ? `Reserve your ${product} today. Due to high demand, we operate on a first-come, first-served basis.`
                  : 'Reserve your hardware today. Due to high demand, we operate on a first-come, first-served basis.'}
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-12 pb-24">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <Card variant="glass" spotlight={false}>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  {product !== 'Hardware' && (
                    <div className="p-4 rounded-lg bg-electric-azure/10 border border-electric-azure/20 mb-6">
                      <p className="text-sm text-electric-azure font-medium">Selected Product:</p>
                      <p className="text-cloud-mist font-semibold">{product}</p>
                    </div>
                  )}

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-cloud-mist mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-midnight-slate/50 border border-white/10 rounded-lg text-cloud-mist placeholder-cloud-mist/40 focus:outline-none focus:border-electric-azure/50 focus:ring-1 focus:ring-electric-azure/50 transition-colors"
                        placeholder="John Doe"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-cloud-mist mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-midnight-slate/50 border border-white/10 rounded-lg text-cloud-mist placeholder-cloud-mist/40 focus:outline-none focus:border-electric-azure/50 focus:ring-1 focus:ring-electric-azure/50 transition-colors"
                        placeholder="john@company.com"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-cloud-mist mb-2">
                        Company Name
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-midnight-slate/50 border border-white/10 rounded-lg text-cloud-mist placeholder-cloud-mist/40 focus:outline-none focus:border-electric-azure/50 focus:ring-1 focus:ring-electric-azure/50 transition-colors"
                        placeholder="Company Inc."
                      />
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-cloud-mist mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-midnight-slate/50 border border-white/10 rounded-lg text-cloud-mist placeholder-cloud-mist/40 focus:outline-none focus:border-electric-azure/50 focus:ring-1 focus:ring-electric-azure/50 transition-colors"
                        placeholder="+1 (555) 000-0000"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="quantity" className="block text-sm font-medium text-cloud-mist mb-2">
                      Quantity Interested In
                    </label>
                    <select
                      id="quantity"
                      name="quantity"
                      value={formData.quantity}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-midnight-slate/50 border border-white/10 rounded-lg text-cloud-mist focus:outline-none focus:border-electric-azure/50 focus:ring-1 focus:ring-electric-azure/50 transition-colors"
                    >
                      <option value="1">1 unit</option>
                      <option value="2-5">2-5 units</option>
                      <option value="6-10">6-10 units</option>
                      <option value="11-50">11-50 units</option>
                      <option value="50+">50+ units</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-cloud-mist mb-2">
                      Additional Information
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-midnight-slate/50 border border-white/10 rounded-lg text-cloud-mist placeholder-cloud-mist/40 focus:outline-none focus:border-electric-azure/50 focus:ring-1 focus:ring-electric-azure/50 transition-colors resize-none"
                      placeholder="Tell us about your requirements, timeline, or any questions..."
                    />
                  </div>

                  <div className="pt-4">
                    <Button type="submit" variant="primary" size="lg" className="w-full">
                      Join Waiting List
                    </Button>
                  </div>

                  <p className="text-xs text-cloud-mist/50 text-center">
                    By submitting this form, you agree to be contacted by our sales team.
                    We respect your privacy and will never share your information.
                  </p>
                </form>
              </CardContent>
            </Card>
          </Reveal>

          {/* Trust Indicators */}
          <FadeIn delay={200}>
            <div className="mt-12 grid grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-2xl font-bold text-electric-azure">24-48h</div>
                <div className="text-sm text-cloud-mist/60">Response Time</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-electric-azure">85K+</div>
                <div className="text-sm text-cloud-mist/60">Happy Customers</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-electric-azure">365 Days</div>
                <div className="text-sm text-cloud-mist/60">Warranty</div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  )
}
