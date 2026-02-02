'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion } from 'motion/react'
import { Mail, MapPin, Send } from 'lucide-react'

const fadeInUp = {
  hidden: { opacity: 0, y: 12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }
  }
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.1 }
  }
}

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!formData.name || !formData.email || !formData.message) return

    setLoading(true)
    setError('')

    try {
      const response = await fetch(`https://formspree.io/f/${process.env.NEXT_PUBLIC_FORMSPREE_ID}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.subject || 'General Inquiry',
          message: formData.message,
          _subject: `Contact Form: ${formData.subject || 'General Inquiry'}`,
          _replyto: formData.email
        }),
      })

      if (!response.ok) {
        throw new Error('Failed to send message')
      }

      setSubmitted(true)
    } catch (err) {
      setError('Something went wrong. Please try again or email us directly.')
    } finally {
      setLoading(false)
    }
  }

  if (submitted) {
    return (
      <div className="relative min-h-screen overflow-hidden">
        <div className="fixed inset-0 -z-10 overflow-hidden">
          <div className="absolute top-0 left-1/4 w-[800px] h-[800px] bg-electric-azure/[0.03] rounded-full blur-[120px] animate-pulse" style={{ animationDuration: '8s' }} />
          <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-core-blue/[0.05] rounded-full blur-[100px] animate-pulse" style={{ animationDuration: '12s', animationDelay: '2s' }} />
        </div>

        <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4">
          <motion.div
            className="text-center max-w-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-green-500/20 flex items-center justify-center backdrop-blur-sm">
              <svg className="w-8 h-8 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-cloud-mist mb-4">
              Message Sent!
            </h1>
            <p className="text-cloud-mist/70 mb-8">
              Thank you for reaching out. We&apos;ll get back to you as soon as possible.
            </p>
            <Link
              href="/"
              className="inline-block px-6 py-3 bg-electric-azure text-white font-medium rounded-xl hover:bg-electric-azure/90 transition-colors"
            >
              Back to Home
            </Link>
          </motion.div>
        </div>
      </div>
    )
  }

  return (
    <div className="relative min-h-screen">
      {/* Animated Background */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-[800px] h-[800px] bg-electric-azure/[0.03] rounded-full blur-[120px] animate-pulse" style={{ animationDuration: '8s' }} />
        <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-core-blue/[0.05] rounded-full blur-[100px] animate-pulse" style={{ animationDuration: '12s', animationDelay: '2s' }} />
        <div className="absolute inset-0 opacity-[0.015]" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat'
        }} />
      </div>

      <div className="relative z-10 py-24 md:py-32">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <motion.div
            className="text-center mb-12 md:mb-16"
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp} className="flex justify-center mb-6">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-electric-azure bg-electric-azure/10 rounded-full border border-electric-azure/20">
                <Mail className="w-3.5 h-3.5" />
                Get in Touch
              </span>
            </motion.div>
            <motion.h1
              variants={fadeInUp}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-cloud-mist leading-[1.1] mb-4"
            >
              Contact Us
            </motion.h1>
            <motion.p
              variants={fadeInUp}
              className="text-lg md:text-xl text-cloud-mist/70 max-w-2xl mx-auto"
            >
              Have questions about our AI compute infrastructure or services? We&apos;d love to hear from you.
            </motion.p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
            {/* Contact Info */}
            <motion.div
              className="lg:col-span-1 space-y-6"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="p-6 rounded-2xl bg-card-bg/50 border border-card-border backdrop-blur-sm">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-electric-azure/10 flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5 text-electric-azure" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-cloud-mist mb-1">Email</h3>
                    <a
                      href="mailto:info@centeraivision.com"
                      className="text-cloud-mist/70 hover:text-electric-azure transition-colors"
                    >
                      info@centeraivision.com
                    </a>
                  </div>
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-card-bg/50 border border-card-border backdrop-blur-sm">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-electric-azure/10 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-electric-azure" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-cloud-mist mb-1">Headquarters</h3>
                    <p className="text-cloud-mist/70">
                      Global Operations
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-gradient-to-br from-electric-azure/10 to-core-blue/10 border border-electric-azure/20">
                <h3 className="text-sm font-semibold text-cloud-mist mb-2">Enterprise Inquiries</h3>
                <p className="text-sm text-cloud-mist/70">
                  For enterprise partnerships, GPU compute access, or infrastructure solutions, please include your company details in the message.
                </p>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              className="lg:col-span-2"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <form onSubmit={handleSubmit} className="p-6 md:p-8 rounded-2xl bg-card-bg/50 border border-card-border backdrop-blur-sm">
                <div className="grid sm:grid-cols-2 gap-5 mb-5">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-cloud-mist mb-2">
                      Name <span className="text-electric-azure">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      disabled={loading}
                      placeholder="Your name"
                      className="w-full px-4 py-3 bg-midnight-slate/50 border border-card-border rounded-xl text-cloud-mist placeholder-cloud-mist/40 focus:outline-none focus:border-electric-azure/50 focus:ring-1 focus:ring-electric-azure/50 transition-colors disabled:opacity-50"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-cloud-mist mb-2">
                      Email <span className="text-electric-azure">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      disabled={loading}
                      placeholder="your@email.com"
                      className="w-full px-4 py-3 bg-midnight-slate/50 border border-card-border rounded-xl text-cloud-mist placeholder-cloud-mist/40 focus:outline-none focus:border-electric-azure/50 focus:ring-1 focus:ring-electric-azure/50 transition-colors disabled:opacity-50"
                    />
                  </div>
                </div>

                <div className="mb-5">
                  <label htmlFor="subject" className="block text-sm font-medium text-cloud-mist mb-2">
                    Subject
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    disabled={loading}
                    className="w-full px-4 py-3 bg-midnight-slate/50 border border-card-border rounded-xl text-cloud-mist focus:outline-none focus:border-electric-azure/50 focus:ring-1 focus:ring-electric-azure/50 transition-colors disabled:opacity-50"
                  >
                    <option value="">Select a topic</option>
                    <option value="GPU Compute">GPU Compute</option>
                    <option value="Mining Infrastructure">Mining Infrastructure</option>
                    <option value="Enterprise Partnership">Enterprise Partnership</option>
                    <option value="Investment Inquiry">Investment Inquiry</option>
                    <option value="Technical Support">Technical Support</option>
                    <option value="General Inquiry">General Inquiry</option>
                  </select>
                </div>

                <div className="mb-6">
                  <label htmlFor="message" className="block text-sm font-medium text-cloud-mist mb-2">
                    Message <span className="text-electric-azure">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    disabled={loading}
                    rows={5}
                    placeholder="Tell us how we can help..."
                    className="w-full px-4 py-3 bg-midnight-slate/50 border border-card-border rounded-xl text-cloud-mist placeholder-cloud-mist/40 focus:outline-none focus:border-electric-azure/50 focus:ring-1 focus:ring-electric-azure/50 transition-colors resize-none disabled:opacity-50"
                  />
                </div>

                {error && (
                  <div className="mb-4 p-3 rounded-lg bg-red-500/10 border border-red-500/20">
                    <p className="text-red-400 text-sm">{error}</p>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-electric-azure text-white font-semibold rounded-xl hover:bg-electric-azure/90 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {loading ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}
