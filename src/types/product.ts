export type Product = {
  product: { name: string; tagline: string; type: string; form: string; quantity: number };
  images: {
    product_image: string;
    product_benefits: string;
    product_ingredient: string;
    why_choose_our_product: string;
  };
  active_ingredients: string[];
  indications: string[];
  dosage: string;
  warnings: string[];
  manufacturing: {
    manufactured_by: string;
    address: string;
    manufacturing_license: string;
    batch_number: string;
    manufacturing_date: string;
    expiry_date: string;
  };
  marketing: { marketed_by: string; address: string; license_number: string };
  pricing: { mrp_inr: number; rate_inr: number };
  contact: { website: string; email: string; phone: string };
  certifications: string[];
};
