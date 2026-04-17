import { ShoppingBag, Star, ShieldCheck, Leaf } from "lucide-react";
import { generateWhatsAppLink } from "@/utils/whatsappHelper";
import type { Product } from "@/types/product";

export default function Hero({ product }: { product: Product }) {
  const buyLink = generateWhatsAppLink(product);
  return (
    <section id="top" className="relative overflow-hidden bg-gradient-hero">
      <div className="absolute -top-20 -right-20 w-72 h-72 rounded-full bg-primary/10 blur-3xl" />
      <div className="absolute -bottom-20 -left-20 w-72 h-72 rounded-full bg-primary-glow/15 blur-3xl" />
      <div className="relative max-w-6xl mx-auto px-4 pt-8 pb-12 md:py-20 grid md:grid-cols-2 gap-8 items-center">
        <div className="order-2 md:order-1 text-center md:text-left">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold">
            <Leaf className="w-3.5 h-3.5" /> {product.product.type}
          </span>
          <h1 className="mt-4 text-4xl sm:text-5xl md:text-6xl font-bold text-primary leading-[1.05]">
            {product.product.name}
          </h1>
          <p className="mt-3 text-lg sm:text-xl text-foreground/80 font-medium">
            {product.product.tagline}
          </p>
          <p className="mt-2 text-sm text-muted-foreground">
            {product.product.quantity} {product.product.form} · 100% Ayurvedic Formula
          </p>

          <div className="mt-5 flex items-center justify-center md:justify-start gap-1 text-gold">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-current" />
            ))}
            <span className="ml-2 text-xs text-muted-foreground">Trusted wellness</span>
          </div>

          {(() => {
            const off = Math.round(
              ((product.pricing.mrp_inr - product.pricing.rate_inr) / product.pricing.mrp_inr) * 100
            );
            return (
              <div className="mt-6 flex flex-wrap items-baseline justify-center md:justify-start gap-3">
                <span className="text-4xl font-bold text-primary">₹{product.pricing.rate_inr}/-</span>
                <span className="text-lg text-muted-foreground line-through">₹{product.pricing.mrp_inr}/-</span>
                <span className="px-2 py-1 rounded-full bg-gold/20 text-foreground text-xs font-bold">
                  {off}% OFF
                </span>
              </div>
            );
          })()}
          <p className="mt-1 text-xs text-muted-foreground">Inclusive of all taxes</p>

          <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
            <a
              href={buyLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full bg-gradient-leaf text-primary-foreground font-bold shadow-card hover:shadow-glow hover:-translate-y-0.5 transition-smooth"
            >
              <ShoppingBag className="w-5 h-5" /> Buy Now on WhatsApp
            </a>
          </div>

          <div className="mt-5 flex items-center justify-center md:justify-start gap-4 text-xs text-muted-foreground">
            <span className="flex items-center gap-1"><ShieldCheck className="w-4 h-4 text-primary" /> GMP Certified</span>
            <span className="flex items-center gap-1"><Leaf className="w-4 h-4 text-primary" /> 100% Natural</span>
          </div>
        </div>

        <div className="order-1 md:order-2 relative">
          <div className="absolute inset-0 bg-gradient-leaf opacity-20 blur-3xl rounded-full" />
          <div className="relative aspect-square max-w-md mx-auto rounded-3xl overflow-hidden shadow-card bg-cream">
            <img
              src={product.images.product_image}
              alt={`${product.product.name} - ${product.product.tagline}`}
              loading="eager"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
