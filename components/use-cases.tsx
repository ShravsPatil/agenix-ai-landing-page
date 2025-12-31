import { Card } from "@/components/ui/card"

export function UseCases() {
  const useCases = [
    {
      title: "Customer Support",
      description:
        "Automate ticket routing, response generation, and follow-ups while maintaining personalized service.",
    },
    {
      title: "Data Processing",
      description: "Extract, validate, and organize information from documents, emails, and forms automatically.",
    },
    {
      title: "Sales Operations",
      description: "Qualify leads, schedule meetings, and update CRM records without manual data entry.",
    },
    {
      title: "Finance & Accounting",
      description: "Process invoices, reconcile transactions, and generate reports with accuracy and speed.",
    },
    {
      title: "HR & Recruitment",
      description: "Screen candidates, schedule interviews, and manage onboarding workflows efficiently.",
    },
    {
      title: "Marketing Automation",
      description: "Personalize campaigns, analyze performance, and optimize content across channels.",
    },
  ]

  return (
    <section id="use-cases" className="py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-semibold mb-4 text-balance">Agents for every department</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            From customer service to finance, deploy specialized agents that understand your industry.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {useCases.map((useCase, index) => (
            <Card key={index} className="p-6 border-border">
              <h3 className="text-lg font-semibold mb-2">{useCase.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{useCase.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
