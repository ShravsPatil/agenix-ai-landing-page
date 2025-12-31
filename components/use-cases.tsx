"use client"

import { Headphones, FileText, LineChart, DollarSign, Users, Megaphone } from "lucide-react"
import { FadeIn, StaggerContainer, StaggerItem } from "./motion-wrapper"

export function UseCases() {
  const useCases = [
    {
      icon: Headphones,
      title: "Customer Support",
      description:
        "Automate ticket routing, response generation, and follow-ups while maintaining personalized service.",
    },
    {
      icon: FileText,
      title: "Data Processing",
      description: "Extract, validate, and organize information from documents, emails, and forms automatically.",
    },
    {
      icon: LineChart,
      title: "Sales Operations",
      description: "Qualify leads, schedule meetings, and update CRM records without manual data entry.",
    },
    {
      icon: DollarSign,
      title: "Finance & Accounting",
      description: "Process invoices, reconcile transactions, and generate reports with accuracy and speed.",
    },
    {
      icon: Users,
      title: "HR & Recruitment",
      description: "Screen candidates, schedule interviews, and manage onboarding workflows efficiently.",
    },
    {
      icon: Megaphone,
      title: "Marketing Automation",
      description: "Personalize campaigns, analyze performance, and optimize content across channels.",
    },
  ]

  return (
    <section id="use-cases" className="relative py-24 md:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute top-0 left-0 right-0 h-px bg-border"></div>

      <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <FadeIn>
          <div className="text-center mb-16 md:mb-20">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary border border-border mb-6">
              <Users className="w-4 h-4 text-primary" />
              <span className="text-sm text-muted-foreground">Industry Solutions</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              <span className="text-foreground">Agents for </span>
              <span className="text-primary">every department</span>
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              From customer service to finance, deploy specialized agents that understand your industry.
            </p>
          </div>
        </FadeIn>

        {/* Use Cases Grid */}
        <StaggerContainer
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto"
          staggerDelay={0.08}
        >
          {useCases.map((useCase, index) => (
            <StaggerItem key={index}>
              <div className="glass-card rounded-2xl p-6 md:p-8 h-full group">
                {/* Icon */}
                <div className="w-12 h-12 rounded-xl icon-container flex items-center justify-center mb-5">
                  <useCase.icon className="w-6 h-6 text-primary" />
                </div>

                {/* Title */}
                <h3 className="text-lg md:text-xl font-semibold mb-3 text-foreground">
                  {useCase.title}
                </h3>

                {/* Description */}
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                  {useCase.description}
                </p>

                {/* Hover effect - Arrow */}
                <div className="mt-5 flex items-center gap-2 text-muted-foreground group-hover:text-primary transition-colors duration-300">
                  <span className="text-sm font-medium opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-300">Learn More</span>
                  <svg className="w-4 h-4 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  )
}
