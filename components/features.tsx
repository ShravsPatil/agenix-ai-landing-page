"use client"

import { Bot, Zap, Shield, BarChart3 } from "lucide-react"
import { FadeIn, StaggerContainer, StaggerItem } from "./motion-wrapper"

export function Features() {
  const features = [
    {
      icon: Bot,
      title: "Intelligent Automation",
      description:
        "AI agents learn from your workflows and adapt to handle complex business processes with minimal oversight.",
    },
    {
      icon: Zap,
      title: "Instant Deployment",
      description: "Deploy pre-built agents in minutes or customize them to fit your specific business requirements.",
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "Bank-level encryption and compliance with SOC 2, GDPR, and HIPAA standards to protect your data.",
    },
    {
      icon: BarChart3,
      title: "Real-Time Analytics",
      description: "Monitor agent performance, track efficiency gains, and optimize workflows with detailed insights.",
    },
  ]

  return (
    <section id="features" className="relative py-24 md:py-32 overflow-hidden">
      {/* Background Orb */}
      <div className="orb orb-2"></div>

      <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <FadeIn>
          <div className="text-center mb-16 md:mb-20">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary border border-border mb-6">
              <Zap className="w-4 h-4 text-primary" />
              <span className="text-sm text-muted-foreground">Powerful Features</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              <span className="text-foreground">Built for </span>
              <span className="text-primary">modern businesses</span>
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Enterprise-grade AI agents that integrate seamlessly with your existing tools and workflows.
            </p>
          </div>
        </FadeIn>

        {/* Features Grid */}
        <StaggerContainer className="grid md:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto">
          {features.map((feature, index) => (
            <StaggerItem key={index}>
              <div className="glass-card rounded-3xl p-8 md:p-10 h-full">
                {/* Icon Container */}
                <div className="w-14 h-14 rounded-2xl icon-container flex items-center justify-center mb-6">
                  <feature.icon className="h-7 w-7 text-primary" />
                </div>

                {/* Title */}
                <h3 className="text-xl md:text-2xl font-semibold mb-4 text-foreground">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-muted-foreground leading-relaxed text-base md:text-lg">
                  {feature.description}
                </p>

                {/* Hover Accent Line */}
                <div className="h-1 w-0 group-hover:w-20 mt-6 rounded-full bg-primary transition-all duration-300"></div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  )
}
