import type { Product } from "@/types/product";

export default function ProductImage({ product }: { product: Product }) {
  return (
    <section className="py-12 md:py-16 bg-background">
      <div className="max-w-5xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-primary">The Product</h2>
        <p className="mt-2 text-muted-foreground">Crafted with pure Ayurvedic herbs</p>
        <div className="mt-8 rounded-3xl overflow-hidden shadow-card bg-cream">
          <img
            src={product.images.product_image}
            alt={product.product.name}
            loading="lazy"
            className="w-full h-auto object-cover"
          />
        </div>
      </div>
    </section>
  );
}
