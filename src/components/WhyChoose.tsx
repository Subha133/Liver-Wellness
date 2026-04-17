import { ShieldCheck } from "lucide-react";
import type { Product } from "@/types/product";

export default function WhyChoose({ product }: { product: Product }) {
  return (
    <section className="py-12 md:py-20 bg-secondary/40">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto">
          <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold">WHY CHOOSE US</span>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold text-primary">Certified Quality You Can Trust</h2>
        </div>

        <div className="mt-10 grid md:grid-cols-2 gap-8 items-center">
          <div className="rounded-3xl overflow-hidden shadow-card bg-card">
            <img
              src={product.images.why_choose_our_product}
              alt="Why choose us"
              loading="lazy"
              className="w-full h-auto object-cover"
            />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {product.certifications.map((cert, i) => (
              <div
                key={i}
                className="p-5 rounded-2xl bg-card shadow-soft hover:shadow-card hover:-translate-y-0.5 transition-smooth flex items-start gap-3"
              >
                <div className="w-10 h-10 rounded-xl bg-gradient-leaf flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-5 h-5 text-primary-foreground" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">{cert}</p>
                  <p className="text-xs text-muted-foreground mt-0.5">Verified</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
