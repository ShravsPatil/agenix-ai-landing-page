import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Features } from "@/components/features"
import { Stats } from "@/components/stats"
import { UseCases } from "@/components/use-cases"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen main-bg relative overflow-hidden">
      <Header />
      <Hero />
      <Stats />
      <Features />
      <UseCases />
      <Footer />
    </main>
  )
}
