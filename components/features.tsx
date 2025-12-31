import { Bot, Zap, Shield, BarChart3 } from "lucide-react"
import { Card } from "@/components/ui/card"

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
    <section id="features" className="py-20 md:py-32">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-semibold mb-4 text-balance">Built for modern businesses</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Enterprise-grade AI agents that integrate seamlessly with your existing tools and workflows.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {features.map((feature, index) => (
            <Card key={index} className="p-8 border-border">
              <feature.icon className="h-10 w-10 mb-4 text-foreground" />
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
