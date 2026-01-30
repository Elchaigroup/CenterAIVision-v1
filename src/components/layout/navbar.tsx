'use client'

import { useState, useRef, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { navigationItems, NavItem } from '@/data/navigation'
import { Button } from '@/components/ui/button'
import { useAuth } from '@/lib/auth-context'
import { SlideIn } from '@/components/ui/animations'

interface DropdownProps {
  items: NavItem[]
  isOpen: boolean
  onClose: () => void
}

function Dropdown({ items, isOpen, onClose }: DropdownProps) {
  if (!isOpen) return null

  return (
    <SlideIn direction="down" duration={200}>
      <div className="absolute top-full left-0 mt-2 w-56 bg-card-bg border border-card-border rounded-lg shadow-xl py-2 z-50">
        {items.map((item) => (
          <Link
            key={item.label}
            href={item.href || '#'}
            onClick={onClose}
            className="block px-4 py-2.5 text-sm text-cloud-mist/80 hover:text-electric-azure hover:bg-midnight-slate/50 transition-colors"
          >
            {item.label}
          </Link>
        ))}
      </div>
    </SlideIn>
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
          className="flex items-center gap-1 px-3 py-2 text-sm text-cloud-mist/80 hover:text-electric-azure transition-colors"
        >
          {item.label}
          <span className="text-xs ml-0.5">▾</span>
        </button>
        <Dropdown items={item.dropdown} isOpen={isOpen} onClose={() => setIsOpen(false)} />
      </div>
    )
  }

  return (
    <Link
      href={item.href || '#'}
      className="px-3 py-2 text-sm text-cloud-mist/80 hover:text-electric-azure transition-colors"
    >
      {item.label}
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
            <Image
              src="/logo-light.png"
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
            {/* BTC Price Pill */}
            <div className="hidden sm:flex items-center px-3 py-1.5 bg-card-bg border border-card-border rounded-full text-sm">
              <span className="text-cloud-mist/60 mr-2">BTC</span>
              <span className="text-cloud-mist font-medium">
                ${btcPrice.toLocaleString()}
              </span>
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
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 text-cloud-mist"
              aria-label="Toggle menu"
            >
              <div className="w-5 h-4 flex flex-col justify-between">
                <span className={`h-0.5 bg-current transition-transform ${isMobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`} />
                <span className={`h-0.5 bg-current transition-opacity ${isMobileMenuOpen ? 'opacity-0' : ''}`} />
                <span className={`h-0.5 bg-current transition-transform ${isMobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`} />
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-card-border">
            {navigationItems.map((item) => (
              <div key={item.label} className="py-2">
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
              </div>
            ))}
          </div>
        )}
      </nav>
    </header>
  )
}
