'use client'

import { useState, Suspense, useRef } from 'react'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import { motion, useMotionValue, useSpring, useTransform } from 'motion/react'
import { FadeIn } from '@/components/ui/animations'
import { Button } from '@/components/ui/button'
import { Hyperspeed } from '@/components/ui/hyperspeed'

function FloatingParticle({ delay }: { delay: number }) {
  return (
    <motion.div
      className="absolute w-1 h-1 bg-electric-azure/40 rounded-full"
      initial={{ opacity: 0, scale: 0 }}
      animate={{
        opacity: [0, 1, 0],
        scale: [0, 1.5, 0],
        y: [0, -100],
        x: [0, Math.random() * 40 - 20],
      }}
      transition={{
        duration: 3,
        delay,
        repeat: Infinity,
        ease: 'easeOut',
      }}
      style={{
        left: `${Math.random() * 100}%`,
        bottom: '20%',
      }}
    />
  )
}

function GlowingOrb({ className }: { className?: string }) {
  return (
    <motion.div
      className={`absolute rounded-full blur-3xl ${className}`}
      animate={{
        scale: [1, 1.2, 1],
        opacity: [0.3, 0.5, 0.3],
      }}
      transition={{
        duration: 4,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
    />
  )
}

function InteractiveCard({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const mouseXSpring = useSpring(x)
  const mouseYSpring = useSpring(y)

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ['7deg', '-7deg'])
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ['-7deg', '7deg'])

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return
    const rect = ref.current.getBoundingClientRect()
    const width = rect.width
    const height = rect.height
    const mouseX = e.clientX - rect.left
    const mouseY = e.clientY - rect.top
    const xPct = mouseX / width - 0.5
    const yPct = mouseY / height - 0.5
    x.set(xPct)
    y.set(yPct)
  }

  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: 'preserve-3d',
      }}
      className="relative"
    >
      {/* Glow effect */}
      <motion.div
        className="absolute -inset-1 bg-gradient-to-r from-electric-azure/30 via-purple-500/30 to-cyan-500/30 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity"
        style={{
          transform: 'translateZ(-10px)',
        }}
      />
      {children}
    </motion.div>
  )
}

function WaitlistForm() {
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
  const [focusedField, setFocusedField] = useState<string | null>(null)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  if (submitted) {
    return (
      <>
        <Hyperspeed />

        {/* Floating particles */}
        {[...Array(20)].map((_, i) => (
          <FloatingParticle key={i} delay={i * 0.2} />
        ))}

        {/* Glowing orbs */}
        <GlowingOrb className="w-96 h-96 bg-electric-azure/20 -top-48 -left-48" />
        <GlowingOrb className="w-64 h-64 bg-purple-500/20 top-1/2 -right-32" />

        <section className="relative min-h-screen pt-32 pb-20 overflow-hidden flex items-center justify-center">
          <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <FadeIn>
              <InteractiveCard>
                <motion.div
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ type: 'spring', duration: 0.8 }}
                  className="relative bg-gradient-to-br from-card-bg/80 to-card-bg/40 backdrop-blur-xl rounded-2xl border border-white/10 p-8 md:p-12 text-center overflow-hidden group"
                >
                  {/* Inner glow */}
                  <div className="absolute inset-0 bg-gradient-to-br from-electric-azure/5 via-transparent to-purple-500/5" />

                  {/* Success animation */}
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: 'spring', delay: 0.2, stiffness: 200 }}
                    className="relative w-24 h-24 mx-auto mb-8"
                  >
                    <motion.div
                      className="absolute inset-0 rounded-full bg-green-500/20"
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                    <div className="absolute inset-2 rounded-full bg-gradient-to-br from-green-400/30 to-emerald-500/30 flex items-center justify-center">
                      <motion.svg
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 0.5, delay: 0.5 }}
                        className="w-12 h-12 text-green-400"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <motion.path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </motion.svg>
                    </div>
                  </motion.div>

                  <motion.h1
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    className="relative text-3xl md:text-4xl font-bold text-cloud-mist mb-4"
                  >
                    You&apos;re on the List!
                  </motion.h1>

                  <motion.p
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="relative text-cloud-mist/70 mb-8 max-w-md mx-auto text-lg"
                  >
                    Thank you for your interest in <span className="text-electric-azure font-semibold">{product}</span>.
                    Our sales team will contact you within 24-48 hours.
                  </motion.p>

                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.6 }}
                    className="relative flex flex-wrap justify-center gap-4"
                  >
                    <Link href="/hardware/miners">
                      <Button variant="outline" className="group/btn">
                        <span className="relative z-10">Browse Miners</span>
                      </Button>
                    </Link>
                    <Link href="/hardware/gpus">
                      <Button variant="outline" className="group/btn">
                        <span className="relative z-10">Browse GPUs</span>
                      </Button>
                    </Link>
                    <Link href="/">
                      <Button variant="primary">Back to Home</Button>
                    </Link>
                  </motion.div>
                </motion.div>
              </InteractiveCard>
            </FadeIn>
          </div>
        </section>
      </>
    )
  }

  return (
    <>
      <Hyperspeed />

      {/* Floating particles */}
      {[...Array(15)].map((_, i) => (
        <FloatingParticle key={i} delay={i * 0.3} />
      ))}

      {/* Glowing orbs */}
      <GlowingOrb className="w-96 h-96 bg-electric-azure/20 -top-48 -left-48" />
      <GlowingOrb className="w-64 h-64 bg-purple-500/20 top-1/4 -right-32" />
      <GlowingOrb className="w-48 h-48 bg-cyan-500/15 bottom-1/4 -left-24" />

      {/* Hero Section */}
      <section className="relative pt-32 pb-8 overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <FadeIn>
            <div className="text-center">
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ type: 'spring', duration: 0.6 }}
              >
                <span className="inline-flex items-center gap-2 px-4 py-2 mb-6 text-sm font-medium text-electric-azure bg-electric-azure/10 rounded-full border border-electric-azure/20 backdrop-blur-sm">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-electric-azure opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-electric-azure" />
                  </span>
                  Limited Availability
                </span>
              </motion.div>

              <motion.h1
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.1 }}
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-cloud-mist leading-tight mb-6"
              >
                Join the{' '}
                <span className="relative">
                  <span className="bg-gradient-to-r from-electric-azure via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                    Waiting List
                  </span>
                  <motion.span
                    className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-electric-azure via-purple-400 to-cyan-400 rounded-full"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                  />
                </span>
              </motion.h1>

              <motion.p
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-lg md:text-xl text-cloud-mist/70 max-w-2xl mx-auto"
              >
                {product !== 'Hardware' ? (
                  <>
                    Reserve your <span className="text-electric-azure font-semibold">{product}</span> today.
                    Due to high demand, we operate on a first-come, first-served basis.
                  </>
                ) : (
                  'Reserve your hardware today. Due to high demand, we operate on a first-come, first-served basis.'
                )}
              </motion.p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-8 pb-24 relative z-10">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <InteractiveCard>
            <motion.div
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3, type: 'spring' }}
              className="relative bg-gradient-to-br from-card-bg/90 to-card-bg/60 backdrop-blur-xl rounded-2xl border border-white/10 p-6 md:p-8 overflow-hidden group"
            >
              {/* Animated border gradient */}
              <div className="absolute inset-0 rounded-2xl p-[1px] bg-gradient-to-r from-electric-azure/50 via-purple-500/50 to-cyan-500/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Inner glow on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-electric-azure/5 via-transparent to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity" />

              <form onSubmit={handleSubmit} className="relative space-y-6">
                {product !== 'Hardware' && (
                  <motion.div
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    className="p-4 rounded-xl bg-gradient-to-r from-electric-azure/10 to-purple-500/10 border border-electric-azure/20"
                  >
                    <p className="text-sm text-electric-azure font-medium">Selected Product</p>
                    <p className="text-cloud-mist font-semibold text-lg">{product}</p>
                  </motion.div>
                )}

                <div className="grid md:grid-cols-2 gap-6">
                  {[
                    { id: 'name', label: 'Full Name', type: 'text', placeholder: 'John Doe', required: true },
                    { id: 'email', label: 'Email Address', type: 'email', placeholder: 'john@company.com', required: true },
                  ].map((field, index) => (
                    <motion.div
                      key={field.id}
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.4 + index * 0.1 }}
                    >
                      <label htmlFor={field.id} className="block text-sm font-medium text-cloud-mist mb-2">
                        {field.label} {field.required && <span className="text-electric-azure">*</span>}
                      </label>
                      <div className="relative">
                        <input
                          type={field.type}
                          id={field.id}
                          name={field.id}
                          required={field.required}
                          value={formData[field.id as keyof typeof formData]}
                          onChange={handleChange}
                          onFocus={() => setFocusedField(field.id)}
                          onBlur={() => setFocusedField(null)}
                          className="w-full px-4 py-3.5 bg-midnight-slate/50 border border-white/10 rounded-xl text-cloud-mist placeholder-cloud-mist/40 focus:outline-none focus:border-electric-azure/50 focus:ring-2 focus:ring-electric-azure/20 transition-all duration-300"
                          placeholder={field.placeholder}
                        />
                        {focusedField === field.id && (
                          <motion.div
                            layoutId="focus-indicator"
                            className="absolute inset-0 rounded-xl border-2 border-electric-azure/50 pointer-events-none"
                            initial={false}
                            transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                          />
                        )}
                      </div>
                    </motion.div>
                  ))}
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  {[
                    { id: 'company', label: 'Company Name', type: 'text', placeholder: 'Company Inc.', required: false },
                    { id: 'phone', label: 'Phone Number', type: 'tel', placeholder: '+1 (555) 000-0000', required: false },
                  ].map((field, index) => (
                    <motion.div
                      key={field.id}
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.6 + index * 0.1 }}
                    >
                      <label htmlFor={field.id} className="block text-sm font-medium text-cloud-mist mb-2">
                        {field.label}
                      </label>
                      <div className="relative">
                        <input
                          type={field.type}
                          id={field.id}
                          name={field.id}
                          value={formData[field.id as keyof typeof formData]}
                          onChange={handleChange}
                          onFocus={() => setFocusedField(field.id)}
                          onBlur={() => setFocusedField(null)}
                          className="w-full px-4 py-3.5 bg-midnight-slate/50 border border-white/10 rounded-xl text-cloud-mist placeholder-cloud-mist/40 focus:outline-none focus:border-electric-azure/50 focus:ring-2 focus:ring-electric-azure/20 transition-all duration-300"
                          placeholder={field.placeholder}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>

                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.8 }}
                >
                  <label htmlFor="quantity" className="block text-sm font-medium text-cloud-mist mb-2">
                    Quantity Interested In
                  </label>
                  <select
                    id="quantity"
                    name="quantity"
                    value={formData.quantity}
                    onChange={handleChange}
                    className="w-full px-4 py-3.5 bg-midnight-slate/50 border border-white/10 rounded-xl text-cloud-mist focus:outline-none focus:border-electric-azure/50 focus:ring-2 focus:ring-electric-azure/20 transition-all duration-300 cursor-pointer"
                  >
                    <option value="1">1 unit</option>
                    <option value="2-5">2-5 units</option>
                    <option value="6-10">6-10 units</option>
                    <option value="11-50">11-50 units</option>
                    <option value="50+">50+ units (Enterprise)</option>
                  </select>
                </motion.div>

                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.9 }}
                >
                  <label htmlFor="message" className="block text-sm font-medium text-cloud-mist mb-2">
                    Additional Information
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    onFocus={() => setFocusedField('message')}
                    onBlur={() => setFocusedField(null)}
                    className="w-full px-4 py-3.5 bg-midnight-slate/50 border border-white/10 rounded-xl text-cloud-mist placeholder-cloud-mist/40 focus:outline-none focus:border-electric-azure/50 focus:ring-2 focus:ring-electric-azure/20 transition-all duration-300 resize-none"
                    placeholder="Tell us about your requirements, timeline, or any questions..."
                  />
                </motion.div>

                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 1 }}
                  className="pt-2"
                >
                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full relative overflow-hidden group/btn px-8 py-4 rounded-xl font-semibold text-white bg-gradient-to-r from-electric-azure via-blue-500 to-electric-azure bg-[length:200%_100%] transition-all duration-500 hover:bg-[position:100%_0] shadow-lg shadow-electric-azure/25 hover:shadow-electric-azure/40"
                  >
                    <span className="relative z-10 flex items-center justify-center gap-2">
                      Join Waiting List
                      <motion.svg
                        className="w-5 h-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        animate={{ x: [0, 5, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </motion.svg>
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover/btn:translate-x-full transition-transform duration-700" />
                  </motion.button>
                </motion.div>

                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.1 }}
                  className="text-xs text-cloud-mist/50 text-center"
                >
                  By submitting this form, you agree to be contacted by our sales team.
                  We respect your privacy and will never share your information.
                </motion.p>
              </form>
            </motion.div>
          </InteractiveCard>

          {/* Trust Indicators */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="mt-12 grid grid-cols-3 gap-6"
          >
            {[
              { value: '24-48h', label: 'Response Time', icon: '⚡' },
              { value: '85K+', label: 'Happy Customers', icon: '🌟' },
              { value: '365 Days', label: 'Warranty', icon: '🛡️' },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                whileHover={{ y: -5, scale: 1.05 }}
                className="text-center p-4 rounded-xl bg-card-bg/30 backdrop-blur-sm border border-white/5 hover:border-electric-azure/20 transition-colors"
              >
                <div className="text-2xl mb-1">{stat.icon}</div>
                <div className="text-xl md:text-2xl font-bold bg-gradient-to-r from-electric-azure to-cyan-400 bg-clip-text text-transparent">
                  {stat.value}
                </div>
                <div className="text-sm text-cloud-mist/60">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  )
}

function WaitlistLoading() {
  return (
    <section className="relative min-h-screen pt-32 pb-20 overflow-hidden flex items-center justify-center">
      <div className="absolute inset-0 bg-gradient-to-b from-core-blue/20 via-midnight-slate to-midnight-slate" />
      <div className="relative text-center">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
          className="w-16 h-16 mx-auto mb-4 border-2 border-electric-azure/30 border-t-electric-azure rounded-full"
        />
        <p className="text-cloud-mist/60">Loading...</p>
      </div>
    </section>
  )
}

export default function WaitlistPage() {
  return (
    <Suspense fallback={<WaitlistLoading />}>
      <WaitlistForm />
    </Suspense>
  )
}
