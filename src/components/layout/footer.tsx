'use client'

import Link from 'next/link'
import Image from 'next/image'
import { footerLinks } from '@/data/navigation'

export function Footer() {
  return (
    <footer className="bg-midnight-slate border-t border-card-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block mb-4">
              <Image
                src="/centeraivisionLogo-light.png"
                alt="Center AI Vision"
                width={180}
                height={40}
                className="h-10 w-auto"
              />
            </Link>
            <p className="text-cloud-mist/60 text-sm leading-relaxed max-w-md">
              Leading provider of Bitcoin mining infrastructure and AI compute solutions.
              We deliver institutional-grade technology for the next generation of digital assets
              and artificial intelligence applications.
            </p>
            <div className="mt-6 text-sm text-cloud-mist/40">
              <Link href="/contact" className="hover:text-electric-azure transition-colors">
                Contact Us
              </Link>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-sm font-semibold text-cloud-mist mb-4 uppercase tracking-wider">
              Services
            </h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-cloud-mist/60 hover:text-electric-azure transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-sm font-semibold text-cloud-mist mb-4 uppercase tracking-wider">
              Resources
            </h4>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-cloud-mist/60 hover:text-electric-azure transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Investors */}
          <div>
            <h4 className="text-sm font-semibold text-cloud-mist mb-4 uppercase tracking-wider">
              Investors
            </h4>
            <ul className="space-y-3">
              {footerLinks.investors.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-cloud-mist/60 hover:text-electric-azure transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-card-border">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-cloud-mist/40">
              2026 Center AI Vision Inc. All rights reserved.
            </p>
            <div className="flex gap-6">
              {footerLinks.legal.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-sm text-cloud-mist/40 hover:text-cloud-mist/60 transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
