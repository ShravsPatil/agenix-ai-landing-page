"use client"

import { useState } from "react"
import { Headphones, FileText, LineChart, DollarSign, Users, Megaphone } from "lucide-react"
import { FadeIn, StaggerContainer, StaggerItem } from "./motion-wrapper"
import { Modal } from "./modal"

const useCasesData = [
  {
    icon: Headphones,
    title: "Customer Support",
    description:
      "Automate ticket routing, response generation, and follow-ups while maintaining personalized service.",
    fullDescription:
      "Our AI-powered customer support agents transform how you handle customer inquiries. They understand context, sentiment, and urgency to provide instant, accurate responses 24/7.",
    details: [
      "AI analyzes incoming tickets and automatically categorizes them by topic, urgency, and sentiment",
      "Generates personalized responses based on customer history and your knowledge base",
      "Escalates complex issues to human agents with full context and suggested solutions",
      "Automatically follows up with customers to ensure satisfaction"
    ],
    benefits: [
      "Reduce response time from hours to seconds",
      "Handle 10x more tickets without hiring",
      "Improve customer satisfaction scores by 40%",
      "Free your team to focus on complex issues"
    ]
  },
  {
    icon: FileText,
    title: "Data Processing",
    description: "Extract, validate, and organize information from documents, emails, and forms automatically.",
    fullDescription:
      "Eliminate manual data entry with intelligent document processing. Our AI agents can read, understand, and extract structured data from any document format.",
    details: [
      "Upload documents in any format - PDFs, images, emails, or scanned files",
      "AI extracts relevant data fields with 99%+ accuracy using advanced OCR and NLP",
      "Validates extracted data against your business rules and existing records",
      "Exports clean, structured data to your preferred systems and databases"
    ],
    benefits: [
      "Process documents 50x faster than manual entry",
      "Eliminate human error in data extraction",
      "Handle any document format or language",
      "Seamlessly integrate with your existing workflows"
    ]
  },
  {
    icon: LineChart,
    title: "Sales Operations",
    description: "Qualify leads, schedule meetings, and update CRM records without manual data entry.",
    fullDescription:
      "Supercharge your sales team with AI agents that handle the busywork. From lead qualification to CRM updates, your team can focus on what they do best - closing deals.",
    details: [
      "AI scores and qualifies incoming leads based on your ideal customer profile",
      "Automatically enriches lead data with company info, social profiles, and intent signals",
      "Handles meeting scheduling, reminders, and follow-up sequences",
      "Updates CRM records in real-time after every interaction"
    ],
    benefits: [
      "Increase qualified leads by 3x",
      "Save 15+ hours per rep per week",
      "Never miss a follow-up again",
      "100% CRM data accuracy"
    ]
  },
  {
    icon: DollarSign,
    title: "Finance & Accounting",
    description: "Process invoices, reconcile transactions, and generate reports with accuracy and speed.",
    fullDescription:
      "Automate your financial operations with AI agents built for precision. From invoice processing to reconciliation, ensure accuracy while saving countless hours.",
    details: [
      "Automatically capture and extract data from invoices, receipts, and statements",
      "Match transactions across multiple accounts and flag discrepancies",
      "Generate financial reports and forecasts on demand",
      "Ensure compliance with automated audit trails"
    ],
    benefits: [
      "Close books 5x faster",
      "Reduce processing errors by 95%",
      "Real-time financial visibility",
      "Audit-ready documentation always"
    ]
  },
  {
    icon: Users,
    title: "HR & Recruitment",
    description: "Screen candidates, schedule interviews, and manage onboarding workflows efficiently.",
    fullDescription:
      "Transform your hiring process with AI agents that screen candidates, coordinate interviews, and streamline onboarding - all while providing a great candidate experience.",
    details: [
      "AI screens resumes and ranks candidates based on job requirements and culture fit",
      "Handles interview scheduling, rescheduling, and calendar coordination",
      "Sends personalized communications at every stage of the hiring process",
      "Automates onboarding paperwork, training assignments, and check-ins"
    ],
    benefits: [
      "Reduce time-to-hire by 60%",
      "Screen 100x more candidates objectively",
      "Improve candidate experience scores",
      "Seamless onboarding from day one"
    ]
  },
  {
    icon: Megaphone,
    title: "Marketing Automation",
    description: "Personalize campaigns, analyze performance, and optimize content across channels.",
    fullDescription:
      "Deploy AI agents that understand your audience and optimize every campaign. From content creation to performance analysis, achieve marketing excellence at scale.",
    details: [
      "AI analyzes your audience segments and creates personalized messaging",
      "Automatically A/B tests subject lines, content, and send times",
      "Monitors campaign performance and adjusts strategies in real-time",
      "Generates insights and recommendations for continuous improvement"
    ],
    benefits: [
      "Increase email open rates by 45%",
      "Personalize at scale without more work",
      "Data-driven decisions, automatically",
      "Consistent brand voice across channels"
    ]
  },
]

export function UseCases() {
  const [selectedUseCase, setSelectedUseCase] = useState<typeof useCasesData[0] | null>(null)

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
          {useCasesData.map((useCase, index) => (
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

                {/* Learn More Button */}
                <button
                  onClick={() => setSelectedUseCase(useCase)}
                  className="mt-5 flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors duration-300"
                >
                  <span className="text-sm font-medium">Learn More</span>
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </button>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>

      {/* Modal */}
      {selectedUseCase && (
        <Modal
          isOpen={!!selectedUseCase}
          onClose={() => setSelectedUseCase(null)}
          title={selectedUseCase.title}
          description={selectedUseCase.fullDescription}
          details={selectedUseCase.details}
          benefits={selectedUseCase.benefits}
          icon={selectedUseCase.icon}
        />
      )}
    </section>
  )
}
