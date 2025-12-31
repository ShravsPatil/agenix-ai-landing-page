"use client"

import { TrendingDown, Gauge, Clock, Shield } from "lucide-react"
import { FadeIn, StaggerContainer, StaggerItem } from "./motion-wrapper"

export function Stats() {
  const stats = [
    {
      value: "85%",
      label: "reduction in manual tasks",
      icon: TrendingDown,
    },
    {
      value: "10x",
      label: "faster processing time",
      icon: Gauge,
    },
    {
      value: "24/7",
      label: "continuous automation",
      icon: Clock,
    },
    {
      value: "99.9%",
      label: "uptime reliability",
      icon: Shield,
    },
  ]

  return (
    <section id="stats" className="relative py-24 md:py-32">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
        <FadeIn>
          <div className="text-center mb-16">
            <h2 className="text-sm font-semibold text-primary uppercase tracking-widest mb-3">
              By The Numbers
            </h2>
            <p className="text-2xl md:text-3xl font-semibold text-foreground">
              Real results from real businesses
            </p>
          </div>
        </FadeIn>

        <StaggerContainer className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat, index) => (
            <StaggerItem key={index}>
              <div className="glass-card rounded-2xl p-6 md:p-8 text-center">
                {/* Icon */}
                <div className="w-14 h-14 mx-auto mb-4 rounded-xl icon-container flex items-center justify-center">
                  <stat.icon className="w-7 h-7 text-primary" />
                </div>

                {/* Value */}
                <div className="text-3xl md:text-4xl lg:text-5xl font-bold mb-2 text-foreground">
                  {stat.value}
                </div>

                {/* Label */}
                <div className="text-sm text-muted-foreground leading-relaxed">
                  {stat.label}
                </div>

                {/* Decorative Line */}
                <div className="h-1 w-12 mx-auto mt-4 rounded-full bg-primary opacity-50"></div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  )
}
