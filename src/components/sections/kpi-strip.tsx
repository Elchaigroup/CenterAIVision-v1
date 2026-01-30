'use client'

import { motion } from 'motion/react'
import { CounterUp, Reveal } from '@/components/ui/animations'
import { miningKPIs } from '@/data/mining-plans'
import { GradientText } from '@/components/ui/gradient-text'
import { Magnet } from '@/components/ui/magnet'

export function KPIStrip() {
  return (
    <Reveal>
      <section className="bg-card-bg/80 backdrop-blur-sm border-y border-electric-azure/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {miningKPIs.map((kpi, index) => (
              <Magnet key={index} padding={60} magnetStrength={5}>
                <motion.div
                  className="text-center p-4 rounded-xl hover:bg-electric-azure/5 transition-colors cursor-default"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="text-3xl md:text-4xl font-bold mb-1">
                    <GradientText
                      colors={['#2C93FF', '#60B5FF', '#2C93FF']}
                      animationSpeed={4}
                    >
                      <CounterUp
                        end={kpi.value}
                        duration={2000}
                        decimals={kpi.decimals || 0}
                        suffix={kpi.suffix}
                      />
                    </GradientText>
                  </div>
                  <div className="text-sm text-cloud-mist/60">{kpi.label}</div>
                </motion.div>
              </Magnet>
            ))}
          </div>
        </div>
      </section>
    </Reveal>
  )
}
