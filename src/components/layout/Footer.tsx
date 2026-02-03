import { motion } from "framer-motion";
import logo from "@/assets/oakheart-logo.png";

const footerLinks = {
  company: [
    { label: "About Us", href: "/about" },
    { label: "Our Process", href: "/process" },
    { label: "Materials", href: "/materials" },
    { label: "Games", href: "/Games" },
    { label: "FAQ", href: "/FAQ" },
  ],
  guides: [
    { label: "All Guides", href: "/guides" },
    { label: "Manufacturing 101", href: "/guides/manufacturing-101" },
    { label: "Game Design 101", href: "/guides/board-game-design-101" },
    { label: "Kickstarter Guide", href: "/guides/kickstarter-masterclass" },
    { label: "Publishing 101", href: "/guides/publishing-101" },
  ],
  resources: [
    { label: "Blog", href: "/blog" },
    { label: "Game Rankings", href: "/rankings" },
    { label: "Publishers", href: "/publishers" },
    { label: "Cost Calculator", href: "/cost-calculator" },
    { label: "Case Studies", href: "/case-studies/realm-of-shadows" },
    { label: "Get Quote", href: "/quote" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <img src={logo.src} alt="Oakheart Games Manufacturing" className="h-16 w-auto mb-6 brightness-200" />
            <p className="text-primary-foreground/70 font-body max-w-sm leading-relaxed">
              Crafting exceptional board games with artisan quality and timeless craftsmanship since establishment.
            </p>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-primary-foreground/70 hover:text-primary-foreground transition-colors font-body text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Guides Links */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-4">Guides</h4>
            <ul className="space-y-3">
              {footerLinks.guides.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-primary-foreground/70 hover:text-primary-foreground transition-colors font-body text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Links */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-4">Resources</h4>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-primary-foreground/70 hover:text-primary-foreground transition-colors font-body text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-primary-foreground/60 text-sm font-body">
            © {new Date().getFullYear()} Oakheart Games Manufacturing. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-primary-foreground/60 hover:text-primary-foreground text-sm font-body transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-primary-foreground/60 hover:text-primary-foreground text-sm font-body transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
