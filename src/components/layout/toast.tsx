'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { SlideIn } from '@/components/ui/animations'

export function GlobalToast() {
  const [isMinimized, setIsMinimized] = useState(false)

  if (isMinimized) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4">
      <SlideIn direction="up" duration={400}>
        <div className="max-w-4xl mx-auto bg-core-blue/90 backdrop-blur-md border border-electric-azure/30 rounded-lg px-6 py-4 flex items-center justify-between gap-4 shadow-xl">
          <p className="text-sm text-cloud-mist">
            This is the frontend-only preview. Please explore the app while we are spinning up servers in the background.
          </p>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setIsMinimized(true)}
            className="text-cloud-mist/80 hover:text-cloud-mist shrink-0"
          >
            Minimize
          </Button>
        </div>
      </SlideIn>
    </div>
  )
}
