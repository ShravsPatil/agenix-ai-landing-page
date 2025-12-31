export function Stats() {
  const stats = [
    { value: "85%", label: "reduction in manual tasks" },
    { value: "10x", label: "faster processing time" },
    { value: "24/7", label: "continuous automation" },
    { value: "99.9%", label: "uptime reliability" },
  ]

  return (
    <section className="py-16 border-y border-border bg-muted/30">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-semibold mb-2">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
