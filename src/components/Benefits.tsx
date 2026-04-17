import { Check } from "lucide-react";
import type { Product } from "@/types/product";

export default function Benefits({ product }: { product: Product }) {
  return (
    <section className="py-12 md:py-20 bg-secondary/40">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto">
          <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold">BENEFITS</span>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold text-primary">Why your liver will love it</h2>
          <p className="mt-2 text-muted-foreground">Powerful indications backed by traditional Ayurveda</p>
        </div>

        <div className="mt-10 grid md:grid-cols-2 gap-8 items-center">
          <div className="rounded-3xl overflow-hidden shadow-card bg-card order-2 md:order-1">
            <img
              src={product.images.product_benefits}
              alt="Product benefits"
              loading="lazy"
              className="w-full h-auto object-cover"
            />
          </div>
          <ul className="space-y-3 order-1 md:order-2">
            {product.indications.map((item, i) => (
              <li
                key={i}
                className="flex gap-3 items-start p-4 rounded-2xl bg-card shadow-soft hover:shadow-card hover:-translate-y-0.5 transition-smooth"
              >
                <div className="w-8 h-8 rounded-full bg-gradient-leaf flex items-center justify-center shrink-0">
                  <Check className="w-4 h-4 text-primary-foreground" />
                </div>
                <span className="text-foreground/90 leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
