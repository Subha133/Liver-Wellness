import { Phone, MessageCircle } from "lucide-react";
import { generateExpertLink, PHONE_NUMBER } from "@/utils/whatsappHelper";
import type { Product } from "@/types/product";
import brandLogo from "@/assets/logo-RyT8xPCe.png";

export default function Navbar({ product }: { product: Product }) {
  return (
    <header className="sticky top-0 z-40 backdrop-blur-lg bg-background/85 border-b border-border">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between gap-3">
        <a href="#top" className="flex items-center gap-2 min-w-0">
          <img
            src={brandLogo}
            alt="Ayurnnath Herbal & Ayurveda"
            className="h-9 sm:h-11 w-auto max-w-[170px] sm:max-w-[220px] object-contain shrink-0"
          />
        </a>
        <div className="flex items-center gap-2">
          <a
            href={`tel:${PHONE_NUMBER}`}
            className="hidden sm:inline-flex items-center gap-1.5 px-3 py-2 rounded-full border border-primary/30 text-primary text-sm font-medium hover:bg-primary/10 transition-smooth"
          >
            <Phone className="w-4 h-4" /> Call Now
          </a>
          <a
            href={`tel:${PHONE_NUMBER}`}
            aria-label="Call Now"
            className="sm:hidden w-10 h-10 inline-flex items-center justify-center rounded-full border border-primary/30 text-primary"
          >
            <Phone className="w-4 h-4" />
          </a>
          <a
            href={generateExpertLink(product.product.name)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3 py-2 rounded-full bg-gradient-leaf text-primary-foreground text-sm font-medium shadow-soft hover:shadow-glow transition-smooth"
          >
            <MessageCircle className="w-4 h-4" />
            <span className="hidden xs:inline sm:inline">Talk to Expert</span>
            <span className="xs:hidden sm:hidden">Expert</span>
          </a>
        </div>
      </div>
    </header>
  );
}
