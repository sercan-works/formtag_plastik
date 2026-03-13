import fs from 'fs';
import path from 'path';
import type { Product, ProductFromJson } from './types';

const PRODUCTS_JSON_PATH = path.join(process.cwd(), 'src', 'app', 'Data', 'products.json');
const IMAGE_BASE = '/images/products';

function loadProductsJson(): { vitrin: ProductFromJson[]; anasayfa: ProductFromJson[] } {
  try {
    const raw = fs.readFileSync(PRODUCTS_JSON_PATH, 'utf8');
    const data = JSON.parse(raw) as { vitrin?: ProductFromJson[]; anasayfa?: ProductFromJson[] };
    return {
      vitrin: Array.isArray(data.vitrin) ? data.vitrin : [],
      anasayfa: Array.isArray(data.anasayfa) ? data.anasayfa : [],
    };
  } catch {
    return { vitrin: [], anasayfa: [] };
  }
}

const FALLBACK_IMAGE = '/vercel.svg';

function toProduct(p: ProductFromJson): Product {
  const imagePath = p.image ? `${IMAGE_BASE}/${p.image}` : FALLBACK_IMAGE;
  return {
    id: p.id,
    name: p.name,
    code: p.code,
    description: p.description ?? null,
    image: imagePath,
    category: p.category ?? '',
  };
}

/** Vitrin (öne çıkan) ürünler */
export function getVitrinProducts(): Product[] {
  const { vitrin } = loadProductsJson();
  return vitrin.map(toProduct);
}

/** Anasayfa ürün listesi */
export function getAnasayfaProducts(): Product[] {
  const { anasayfa } = loadProductsJson();
  return anasayfa.map(toProduct);
}
