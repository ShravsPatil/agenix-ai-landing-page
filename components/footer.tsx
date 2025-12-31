"use client"

import Link from "next/link"
import Image from "next/image"
import { Github, Twitter, Linkedin } from "lucide-react"
import { FadeIn } from "./motion-wrapper"

export function Footer() {
  const footerLinks = {
    product: [
      { label: "Features", href: "#features" },
      { label: "Use Cases", href: "#use-cases" },
      { label: "Stats", href: "#stats" },
    ],
    company: [
      { label: "About", href: "#" },
      { label: "Blog", href: "#" },
      { label: "Careers", href: "#" },
    ],
    resources: [
      { label: "Documentation", href: "#" },
      { label: "API Reference", href: "#" },
      { label: "Support", href: "#" },
    ],
  }

  return (
    <footer className="relative border-t border-border pt-16 md:pt-20 pb-8">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
        <FadeIn>
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
            {/* Brand Column */}
            <div className="lg:col-span-2">
              <Link href="/" className="flex items-center gap-3 mb-5">
                <Image
                  src="/favicon.png"
                  alt="Agenix AI Logo"
                  width={40}
                  height={40}
                  className="rounded-xl"
                />
                <div className="text-xl font-bold text-foreground">Agenix AI</div>
              </Link>
              <p className="text-muted-foreground leading-relaxed mb-6 max-w-sm">
                AI agents that automate real business tasks. Transform your operations with intelligent automation.
              </p>

              {/* Social Links */}
              <div className="flex items-center gap-3">
                <a href="#" className="w-10 h-10 rounded-xl bg-secondary border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-all duration-300">
                  <Twitter className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 rounded-xl bg-secondary border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-all duration-300">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 rounded-xl bg-secondary border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-all duration-300">
                  <Github className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Link Columns */}
            <div>
              <h4 className="text-sm font-semibold text-foreground mb-4">Product</h4>
              <ul className="space-y-3">
                {footerLinks.product.map((link, i) => (
                  <li key={i}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-semibold text-foreground mb-4">Company</h4>
              <ul className="space-y-3">
                {footerLinks.company.map((link, i) => (
                  <li key={i}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-semibold text-foreground mb-4">Resources</h4>
              <ul className="space-y-3">
                {footerLinks.resources.map((link, i) => (
                  <li key={i}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </FadeIn>

        {/* Bottom Bar */}
        <FadeIn delay={0.2}>
          <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Agenix AI. All rights reserved.
            </p>
            <div className="flex items-center gap-1 text-sm text-muted-foreground">
              <span>Made with</span>
              <span className="text-red-500">❤</span>
              <span>by Agenix Team</span>
            </div>
          </div>
        </FadeIn>
      </div>
    </footer>
  )
}
