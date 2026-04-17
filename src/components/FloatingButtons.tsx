import { MessageCircle, Phone, ShoppingBag } from "lucide-react";
import { generateExpertLink, generateWhatsAppLink, PHONE_NUMBER } from "@/utils/whatsappHelper";
import type { Product } from "@/types/product";

export default function FloatingButtons({ product }: { product: Product }) {
  return (
    <>
      {/* Floating buttons */}
      <div className="fixed right-4 bottom-24 md:bottom-6 z-40 flex flex-col gap-3">
        <a
          href={generateExpertLink(product.product.name)}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="WhatsApp"
          className="w-14 h-14 rounded-full bg-whatsapp text-primary-foreground flex items-center justify-center shadow-card hover:shadow-glow hover:scale-110 transition-smooth"
        >
          <MessageCircle className="w-6 h-6" />
        </a>
        <a
          href={`tel:${PHONE_NUMBER}`}
          aria-label="Call"
          className="w-14 h-14 rounded-full bg-primary text-primary-foreground flex items-center justify-center shadow-card hover:shadow-glow hover:scale-110 transition-smooth"
        >
          <Phone className="w-6 h-6" />
        </a>
      </div>

      {/* Sticky mobile Buy Now */}
      <div className="fixed inset-x-0 bottom-0 z-30 md:hidden p-3 bg-background/95 backdrop-blur border-t border-border">
        <a
          href={generateWhatsAppLink(product)}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-full bg-gradient-leaf text-primary-foreground font-bold shadow-card"
        >
          <ShoppingBag className="w-5 h-5" /> Buy Now · ₹{product.pricing.rate_inr}
          <span className="ml-1 text-xs line-through opacity-70">₹{product.pricing.mrp_inr}</span>
        </a>
      </div>
    </>
  );
}
