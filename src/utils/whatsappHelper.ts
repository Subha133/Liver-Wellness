import type { Product } from "@/types/product";

export const WHATSAPP_NUMBER = "917547996250";
export const PHONE_NUMBER = "7547996250";

export const generateWhatsAppLink = (product: Product): string => {
  const message = `Hello, I want to order ${product.product.name}.

Product Details:
- Name: ${product.product.name}
- Quantity: 1
- MRP: ₹${product.pricing.mrp_inr}
- Price: ₹${product.pricing.rate_inr}

My Details:
Name:
Address:
Pincode:`;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
};

export const generateExpertLink = (productName: string): string => {
  const message = `Hello, I'd like to talk to an expert about ${productName}.`;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
};
