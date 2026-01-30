'use client'

import { ReactNode, useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { cn } from '@/lib/utils'

interface Tab {
  id: string
  label: string
  content: ReactNode
}

interface TabsProps {
  tabs: Tab[]
  defaultTab?: string
  className?: string
}

export function Tabs({ tabs, defaultTab, className }: TabsProps) {
  const [activeTab, setActiveTab] = useState(defaultTab || tabs[0]?.id)
  const [indicatorStyle, setIndicatorStyle] = useState({ left: 0, width: 0 })
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([])

  useEffect(() => {
    const activeIndex = tabs.findIndex(tab => tab.id === activeTab)
    const activeRef = tabRefs.current[activeIndex]
    if (activeRef) {
      setIndicatorStyle({
        left: activeRef.offsetLeft,
        width: activeRef.offsetWidth
      })
    }
  }, [activeTab, tabs])

  return (
    <div className={className}>
      <div className="relative flex border-b border-card-border mb-6">
        {tabs.map((tab, index) => (
          <motion.button
            key={tab.id}
            ref={el => { tabRefs.current[index] = el }}
            onClick={() => setActiveTab(tab.id)}
            className={cn(
              'px-6 py-3 text-sm font-medium transition-colors duration-200 relative z-10',
              activeTab === tab.id
                ? 'text-electric-azure'
                : 'text-cloud-mist/60 hover:text-cloud-mist'
            )}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            {tab.label}
          </motion.button>
        ))}
        {/* Animated indicator */}
        <motion.div
          className="absolute bottom-0 h-0.5 bg-electric-azure"
          animate={{
            left: indicatorStyle.left,
            width: indicatorStyle.width
          }}
          transition={{
            type: 'spring',
            stiffness: 400,
            damping: 30
          }}
        />
      </div>
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.2 }}
        >
          {tabs.find((tab) => tab.id === activeTab)?.content}
        </motion.div>
      </AnimatePresence>
    </div>
  )
}
