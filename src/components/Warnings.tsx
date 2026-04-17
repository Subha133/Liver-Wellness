import { AlertTriangle } from "lucide-react";
import type { Product } from "@/types/product";

export default function Warnings({ product }: { product: Product }) {
  return (
    <section className="py-12 md:py-16 bg-secondary/40">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center">
          <span className="inline-block px-3 py-1 rounded-full bg-gold/20 text-foreground text-xs font-semibold">IMPORTANT</span>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold text-primary">Warnings & Precautions</h2>
        </div>
        <ul className="mt-8 space-y-3">
          {product.warnings.map((w, i) => (
            <li
              key={i}
              className="flex gap-3 items-start p-4 rounded-2xl bg-card shadow-soft"
            >
              <AlertTriangle className="w-5 h-5 text-gold shrink-0 mt-0.5" />
              <span className="text-foreground/90">{w}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
