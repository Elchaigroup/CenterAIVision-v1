'use client'

import { useState, useRef, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion, AnimatePresence } from 'motion/react'
import { navigationItems, NavItem } from '@/data/navigation'
import { Button } from '@/components/ui/button'
import { useAuth } from '@/lib/auth-context'

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
          className="absolute top-full left-0 mt-2 w-56 bg-card-bg/95 backdrop-blur-md border border-card-border rounded-lg shadow-xl py-2 z-50"
        >
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
                className="block px-4 py-2.5 text-sm text-cloud-mist/80 hover:text-electric-azure hover:bg-midnight-slate/50 transition-colors"
              >
                {item.label}
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
        <motion.button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center gap-1 px-3 py-2 text-sm text-cloud-mist/80 hover:text-electric-azure transition-colors"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          {item.label}
          <motion.span
            className="text-xs ml-0.5"
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.2 }}
          >
            ▾
          </motion.span>
        </motion.button>
        <Dropdown items={item.dropdown} isOpen={isOpen} onClose={() => setIsOpen(false)} />
      </div>
    )
  }

  return (
    <Link
      href={item.href || '#'}
      className="px-3 py-2 text-sm text-cloud-mist/80 hover:text-electric-azure transition-colors"
    >
      <motion.span whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
        {item.label}
      </motion.span>
    </Link>
  )
}

interface NavbarProps {
  onSignInClick: () => void
  onSignUpClick: () => void
  btcPrice?: number
}

export function Navbar({ onSignInClick, onSignUpClick, btcPrice = 98350 }: NavbarProps) {
  const { isAuthenticated, user, signOut } = useAuth()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-midnight-slate/95 backdrop-blur-md border-b border-card-border">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Image
                src="/logo-light.png"
                alt="Center AI Vision"
                width={180}
                height={40}
                className="h-10 w-auto"
                priority
              />
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navigationItems.map((item) => (
              <NavItemWithDropdown key={item.label} item={item} />
            ))}
          </div>

          {/* Right Side */}
          <div className="flex items-center gap-4">
            {/* BTC Price Pill */}
            <motion.div
              className="hidden sm:flex items-center px-3 py-1.5 bg-card-bg border border-card-border rounded-full text-sm"
              whileHover={{ scale: 1.02, borderColor: 'rgba(44, 147, 255, 0.5)' }}
              transition={{ duration: 0.2 }}
            >
              <span className="text-cloud-mist/60 mr-2">BTC</span>
              <span className="text-cloud-mist font-medium">
                ${btcPrice.toLocaleString()}
              </span>
            </motion.div>

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
              <div className="flex items-center gap-3">
                <Button variant="ghost" size="sm" onClick={onSignInClick} className="hidden sm:inline-flex">
                  Sign In
                </Button>
                <Button variant="primary" size="sm" onClick={onSignUpClick}>
                  Sign Up
                </Button>
              </div>
            )}

            {/* Mobile Menu Button */}
            <motion.button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 text-cloud-mist"
              aria-label="Toggle menu"
              whileTap={{ scale: 0.95 }}
            >
              <div className="w-5 h-4 flex flex-col justify-between">
                <motion.span
                  className="h-0.5 bg-current origin-left"
                  animate={{
                    rotate: isMobileMenuOpen ? 45 : 0,
                    y: isMobileMenuOpen ? -1 : 0
                  }}
                  transition={{ duration: 0.2 }}
                />
                <motion.span
                  className="h-0.5 bg-current"
                  animate={{ opacity: isMobileMenuOpen ? 0 : 1 }}
                  transition={{ duration: 0.2 }}
                />
                <motion.span
                  className="h-0.5 bg-current origin-left"
                  animate={{
                    rotate: isMobileMenuOpen ? -45 : 0,
                    y: isMobileMenuOpen ? 1 : 0
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
              className="lg:hidden overflow-hidden border-t border-card-border"
            >
              <div className="py-4">
                {navigationItems.map((item, index) => (
                  <motion.div
                    key={item.label}
                    className="py-2"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05, duration: 0.2 }}
                  >
                    {item.dropdown ? (
                      <>
                        <div className="px-3 py-2 text-sm font-medium text-cloud-mist">
                          {item.label}
                        </div>
                        {item.dropdown.map((subItem) => (
                          <Link
                            key={subItem.label}
                            href={subItem.href || '#'}
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="block px-6 py-2 text-sm text-cloud-mist/70 hover:text-electric-azure"
                          >
                            {subItem.label}
                          </Link>
                        ))}
                      </>
                    ) : (
                      <Link
                        href={item.href || '#'}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="block px-3 py-2 text-sm text-cloud-mist/80 hover:text-electric-azure"
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
    </header>
  )
}
