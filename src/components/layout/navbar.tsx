'use client'

import { useState, useRef, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion, AnimatePresence } from 'motion/react'
import { navigationItems, NavItem } from '@/data/navigation'
import { Button } from '@/components/ui/button'
import { useAuth } from '@/lib/auth-context'
import { useMarket } from '@/lib/market-context'
import { cn } from '@/lib/utils'

interface DropdownProps {
  items: NavItem[]
  isOpen: boolean
  onClose: () => void
}

function Dropdown({ items, isOpen, onClose }: DropdownProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -8, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -8, scale: 0.96 }}
          transition={{ duration: 0.2, ease: [0.25, 0.4, 0.25, 1] }}
          className="absolute top-full left-0 mt-2 w-56 bg-card-bg/95 backdrop-blur-xl border border-electric-azure/20 rounded-xl shadow-2xl shadow-electric-azure/10 py-2 z-50 overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-b from-electric-azure/5 to-transparent pointer-events-none" />
          {items.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.05, duration: 0.2 }}
            >
              <Link
                href={item.href || '#'}
                onClick={onClose}
                className="relative block px-4 py-2.5 text-sm text-cloud-mist/80 hover:text-electric-azure transition-all duration-200 group"
              >
                <span className="relative z-10">{item.label}</span>
                <motion.div
                  className="absolute inset-0 bg-electric-azure/10 opacity-0 group-hover:opacity-100 transition-opacity"
                  layoutId="dropdown-hover"
                />
              </Link>
            </motion.div>
          ))}
        </motion.div>
      )}
    </AnimatePresence>
  )
}

interface NavItemWithDropdownProps {
  item: NavItem
}

function NavItemWithDropdown({ item }: NavItemWithDropdownProps) {
  const [isOpen, setIsOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  if (item.dropdown) {
    return (
      <div ref={ref} className="relative">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-cloud-mist/80 hover:text-electric-azure transition-colors rounded-lg hover:bg-electric-azure/5"
        >
          {item.label}
          <motion.span
            className="text-xs ml-0.5 text-electric-azure/60"
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.2 }}
          >
            ▾
          </motion.span>
        </button>
        <Dropdown items={item.dropdown} isOpen={isOpen} onClose={() => setIsOpen(false)} />
      </div>
    )
  }

  return (
    <Link
      href={item.href || '#'}
      className="block px-4 py-2 text-sm font-medium text-cloud-mist/80 hover:text-electric-azure transition-colors rounded-lg hover:bg-electric-azure/5"
    >
      {item.label}
    </Link>
  )
}

interface NavbarProps {
  onSignInClick: () => void
  onSignUpClick: () => void
}

export function Navbar({ onSignInClick, onSignUpClick }: NavbarProps) {
  const { isAuthenticated, user, signOut } = useAuth()
  const { btc, eth, isLoading } = useMarket()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-midnight-slate/90 backdrop-blur-xl'
          : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: [0.25, 0.4, 0.25, 1] }}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/centeraivisionLogo-light.png"
              alt="Center AI Vision"
              width={180}
              height={40}
              className="h-10 w-auto"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navigationItems.map((item) => (
              <NavItemWithDropdown key={item.label} item={item} />
            ))}
          </div>

          {/* Right Side */}
          <div className="flex items-center gap-4">
            {/* Live Crypto Prices */}
            <div className="hidden sm:flex items-center gap-3">
              {/* BTC Price */}
              <div className="flex items-center px-3 py-1.5 bg-card-bg/80 rounded-full text-sm backdrop-blur-sm">
                <span className="text-electric-azure/80 mr-2 font-medium">BTC</span>
                {isLoading ? (
                  <span className="text-cloud-mist/50 animate-pulse">...</span>
                ) : btc ? (
                  <>
                    <span className="text-cloud-mist font-semibold">
                      ${btc.regularMarketPrice.toLocaleString(undefined, { maximumFractionDigits: 0 })}
                    </span>
                    <span className={cn(
                      'ml-1.5 text-xs',
                      btc.regularMarketChange >= 0 ? 'text-positive' : 'text-negative'
                    )}>
                      {btc.regularMarketChange >= 0 ? '+' : ''}{btc.regularMarketChangePercent.toFixed(1)}%
                    </span>
                  </>
                ) : (
                  <span className="text-cloud-mist font-semibold">$--</span>
                )}
              </div>
              {/* ETH Price - Hidden on smaller screens */}
              <div className="hidden lg:flex items-center px-3 py-1.5 bg-card-bg/80 rounded-full text-sm backdrop-blur-sm">
                <span className="text-electric-azure/80 mr-2 font-medium">ETH</span>
                {isLoading ? (
                  <span className="text-cloud-mist/50 animate-pulse">...</span>
                ) : eth ? (
                  <>
                    <span className="text-cloud-mist font-semibold">
                      ${eth.regularMarketPrice.toLocaleString(undefined, { maximumFractionDigits: 0 })}
                    </span>
                    <span className={cn(
                      'ml-1.5 text-xs',
                      eth.regularMarketChange >= 0 ? 'text-positive' : 'text-negative'
                    )}>
                      {eth.regularMarketChange >= 0 ? '+' : ''}{eth.regularMarketChangePercent.toFixed(1)}%
                    </span>
                  </>
                ) : (
                  <span className="text-cloud-mist font-semibold">$--</span>
                )}
              </div>
            </div>

            {isAuthenticated ? (
              <div className="flex items-center gap-4">
                <span className="text-sm text-cloud-mist/70 hidden sm:block">
                  {user?.name}
                </span>
                <Button variant="ghost" size="sm" onClick={signOut}>
                  Sign Out
                </Button>
              </div>
            ) : (
              <Link
                href="/waitlist"
                className="relative inline-flex items-center px-6 py-2.5 text-sm font-semibold text-white rounded-full bg-gradient-to-r from-[#2C93FF] via-[#003296] to-[#2C93FF] bg-[length:200%_100%] hover:bg-[position:100%_0] transition-all duration-500 shadow-lg shadow-electric-azure/25 hover:shadow-electric-azure/40 hover:scale-105"
              >
                Join the Waitlist
              </Link>
            )}

            {/* Mobile Menu Button */}
            <motion.button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 text-cloud-mist rounded-lg hover:bg-electric-azure/10 transition-colors"
              aria-label="Toggle menu"
              whileTap={{ scale: 0.95 }}
            >
              <div className="w-5 h-4 flex flex-col justify-between">
                <motion.span
                  className="h-0.5 bg-current origin-left rounded-full"
                  animate={{
                    rotate: isMobileMenuOpen ? 45 : 0,
                    y: isMobileMenuOpen ? -1 : 0,
                    width: isMobileMenuOpen ? '141%' : '100%'
                  }}
                  transition={{ duration: 0.2 }}
                />
                <motion.span
                  className="h-0.5 bg-current rounded-full"
                  animate={{
                    opacity: isMobileMenuOpen ? 0 : 1,
                    x: isMobileMenuOpen ? 10 : 0
                  }}
                  transition={{ duration: 0.2 }}
                />
                <motion.span
                  className="h-0.5 bg-current origin-left rounded-full"
                  animate={{
                    rotate: isMobileMenuOpen ? -45 : 0,
                    y: isMobileMenuOpen ? 1 : 0,
                    width: isMobileMenuOpen ? '141%' : '100%'
                  }}
                  transition={{ duration: 0.2 }}
                />
              </div>
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: [0.25, 0.4, 0.25, 1] }}
              className="lg:hidden overflow-hidden border-t border-electric-azure/10"
            >
              <div className="py-4 space-y-1">
                {navigationItems.map((item, index) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05, duration: 0.2 }}
                  >
                    {item.dropdown ? (
                      <div className="py-2">
                        <div className="px-4 py-2 text-sm font-semibold text-electric-azure/80">
                          {item.label}
                        </div>
                        {item.dropdown.map((subItem) => (
                          <Link
                            key={subItem.label}
                            href={subItem.href || '#'}
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="block px-8 py-2.5 text-sm text-cloud-mist/70 hover:text-electric-azure hover:bg-electric-azure/5 rounded-lg mx-2 transition-colors"
                          >
                            {subItem.label}
                          </Link>
                        ))}
                      </div>
                    ) : (
                      <Link
                        href={item.href || '#'}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="block px-4 py-2.5 text-sm font-medium text-cloud-mist/80 hover:text-electric-azure hover:bg-electric-azure/5 rounded-lg mx-2 transition-colors"
                      >
                        {item.label}
                      </Link>
                    )}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  )
}
