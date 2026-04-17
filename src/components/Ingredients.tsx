import { Leaf } from "lucide-react";
import type { Product } from "@/types/product";

export default function Ingredients({ product }: { product: Product }) {
  return (
    <section className="py-12 md:py-20 bg-background">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto">
          <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold">INGREDIENTS</span>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold text-primary">Pure Active Herbs</h2>
          <p className="mt-2 text-muted-foreground">Each tablet is a synergy of nature's finest extracts</p>
        </div>

        <div className="mt-10 grid md:grid-cols-2 gap-8 items-center">
          <div className="grid grid-cols-2 sm:grid-cols-2 gap-3">
            {product.active_ingredients.map((ing, i) => (
              <div
                key={i}
                className="p-4 rounded-2xl bg-gradient-hero border border-primary/10 hover:shadow-card hover:-translate-y-0.5 transition-smooth"
              >
                <Leaf className="w-5 h-5 text-primary mb-2" />
                <p className="font-semibold text-foreground text-sm md:text-base">{ing}</p>
              </div>
            ))}
          </div>
          <div className="rounded-3xl overflow-hidden shadow-card bg-card">
            <img
              src={product.images.product_ingredient}
              alt="Active ingredients"
              loading="lazy"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
