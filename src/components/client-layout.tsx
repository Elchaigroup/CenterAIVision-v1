'use client'

import { useState, ReactNode } from 'react'
import { AuthProvider } from '@/lib/auth-context'
import { MarketProvider } from '@/lib/market-context'
import { Navbar } from '@/components/layout/navbar'
import { Footer } from '@/components/layout/footer'
import { SignInModal } from '@/components/auth/sign-in-modal'
import { SignUpModal } from '@/components/auth/sign-up-modal'

interface ClientLayoutProps {
  children: ReactNode
}

export function ClientLayout({ children }: ClientLayoutProps) {
  const [showSignIn, setShowSignIn] = useState(false)
  const [showSignUp, setShowSignUp] = useState(false)

  const handleSwitchToSignUp = () => {
    setShowSignIn(false)
    setShowSignUp(true)
  }

  const handleSwitchToSignIn = () => {
    setShowSignUp(false)
    setShowSignIn(true)
  }

  return (
    <AuthProvider>
      <MarketProvider>
        <div className="min-h-screen bg-midnight-slate flex flex-col">
          <Navbar
            onSignInClick={() => setShowSignIn(true)}
            onSignUpClick={() => setShowSignUp(true)}
          />
          <main className="flex-1">{children}</main>
          <Footer />
          <SignInModal
            isOpen={showSignIn}
            onClose={() => setShowSignIn(false)}
            onSwitchToSignUp={handleSwitchToSignUp}
          />
          <SignUpModal
            isOpen={showSignUp}
            onClose={() => setShowSignUp(false)}
            onSwitchToSignIn={handleSwitchToSignIn}
          />
        </div>
      </MarketProvider>
    </AuthProvider>
  )
}
