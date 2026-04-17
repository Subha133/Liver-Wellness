import { createFileRoute } from "@tanstack/react-router";
import productData from "@/data/product.json";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Benefits from "@/components/Benefits";
import Ingredients from "@/components/Ingredients";
import WhyChoose from "@/components/WhyChoose";
import Dosage from "@/components/Dosage";
import Warnings from "@/components/Warnings";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Liver Wellness — Advanced Ayurvedic Liver Support | 100% Natural" },
      {
        name: "description",
        content:
          "Liver Wellness: Pure herbal Ayurvedic tablets with Kutki, Kalmegh & Curcumin. Detox, repair & shield your liver. GMP & ISO certified. Order on WhatsApp.",
      },
      { property: "og:title", content: "Liver Wellness — Advanced Liver Support" },
      {
        property: "og:description",
        content: "100% Ayurvedic liver support with proven herbs. ₹1199 — Order now via WhatsApp.",
      },
      {
        property: "og:image",
        content:
          "https://res.cloudinary.com/dqxrvtyii/image/upload/v1776332652/IMG-20260409-WA0038.jpg_xvxm8m.jpg",
      },
      {
        name: "twitter:image",
        content:
          "https://res.cloudinary.com/dqxrvtyii/image/upload/v1776332652/IMG-20260409-WA0038.jpg_xvxm8m.jpg",
      },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      {
        rel: "preconnect",
        href: "https://fonts.googleapis.com",
      },
      {
        rel: "preconnect",
        href: "https://fonts.gstatic.com",
        crossOrigin: "anonymous",
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Playfair+Display:wght@600;700;800&display=swap",
      },
    ],
  }),
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar product={productData} />
      <main>
        <Hero product={productData} />
        <Benefits product={productData} />
        <Ingredients product={productData} />
        <WhyChoose product={productData} />
        <Dosage product={productData} />
        <Warnings product={productData} />
      </main>
      <Footer product={productData} />
      <FloatingButtons product={productData} />
    </div>
  );
}
