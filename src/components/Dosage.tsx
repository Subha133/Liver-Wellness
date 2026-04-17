import { Pill } from "lucide-react";
import type { Product } from "@/types/product";

export default function Dosage({ product }: { product: Product }) {
  return (
    <section className="py-12 md:py-16 bg-background">
      <div className="max-w-4xl mx-auto px-4">
        <div className="rounded-3xl bg-gradient-leaf p-8 md:p-12 shadow-card text-primary-foreground relative overflow-hidden">
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/10 rounded-full blur-2xl" />
          <div className="relative flex flex-col md:flex-row items-start gap-6">
            <div className="w-14 h-14 rounded-2xl bg-white/20 backdrop-blur flex items-center justify-center shrink-0">
              <Pill className="w-7 h-7" />
            </div>
            <div>
              <span className="inline-block px-3 py-1 rounded-full bg-white/20 text-xs font-semibold">DOSAGE</span>
              <h2 className="mt-3 text-2xl md:text-3xl font-bold">How to Take</h2>
              <p className="mt-3 text-base md:text-lg leading-relaxed text-primary-foreground/95">
                {product.dosage}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
