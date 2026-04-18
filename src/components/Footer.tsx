import { Mail, Globe, Phone, MapPin } from "lucide-react";
import type { Product } from "@/types/product";

export default function Footer({ product }: { product: Product }) {
  return (
    <footer className="bg-primary text-primary-foreground pt-16 pb-28 md:pb-10">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-10">
          {/* <div>
            <h3 className="font-display text-2xl font-bold">Manufactured By</h3>
            <p className="mt-3 font-semibold">{product.manufacturing.manufactured_by}</p>
            <p className="text-sm opacity-90 flex items-start gap-2 mt-1">
              <MapPin className="w-4 h-4 mt-0.5 shrink-0" />
              {product.manufacturing.address}
            </p>
            <div className="mt-3 text-xs opacity-80 space-y-1">
              <p>License: {product.manufacturing.manufacturing_license}</p>
              <p>Batch: {product.manufacturing.batch_number}</p>
              <p>Mfg: {product.manufacturing.manufacturing_date}</p>
              <p>Exp: {product.manufacturing.expiry_date}</p>
            </div>
          </div> */}
          <div>
            <h3 className="font-display text-2xl font-bold">Manufactured in & Marketed By</h3>
            <p className="mt-3 font-semibold">{product.marketing.marketed_by}</p>
            <p className="text-sm opacity-90 flex items-start gap-2 mt-1">
              <MapPin className="w-4 h-4 mt-0.5 shrink-0" />
              {product.marketing.address}
            </p>
            <p className="text-xs opacity-80 mt-2">License: {product.marketing.license_number}</p>
          </div>
          <div>
            <h3 className="font-display text-2xl font-bold">Contact</h3>
            <ul className="mt-3 space-y-2 text-sm">
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <a href={`tel:${product.contact.phone.replace(/\s/g, "")}`} className="hover:underline">
                  {product.contact.phone}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <a href={`mailto:${product.contact.email}`} className="hover:underline">
                  {product.contact.email}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Globe className="w-4 h-4" />
                <a href={`https://${product.contact.website}`} target="_blank" rel="noopener noreferrer" className="hover:underline">
                  {product.contact.website}
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-6 border-t border-primary-foreground/20 text-center text-xs opacity-75">
          © {new Date().getFullYear()} {product.marketing.marketed_by}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
