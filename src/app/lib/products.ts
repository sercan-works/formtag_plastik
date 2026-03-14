import fs from 'fs';
import path from 'path';
import type { Product, ProductFromJson } from './types';

const PRODUCTS_JSON_PATH = path.join(process.cwd(), 'data', 'products.json');
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
const PUBLIC_PRODUCTS_DIR = path.join(process.cwd(), 'public', 'images', 'products');

/** Resim değişince önbelleğin kırılması için dosya güncelleme zamanını URL'e ekler */
function imagePathWithCacheBust(imageValue: string): string {
  if (!imageValue || imageValue.startsWith('/')) return imageValue || FALLBACK_IMAGE;
  const basePath = `${IMAGE_BASE}/${imageValue}`;
  try {
    const filePath = path.join(PUBLIC_PRODUCTS_DIR, path.basename(imageValue));
    const stat = fs.statSync(filePath);
    return `${basePath}?t=${stat.mtimeMs}`;
  } catch {
    return basePath;
  }
}

function toProduct(p: ProductFromJson): Product {
  const imagePath = !p.image
    ? FALLBACK_IMAGE
    : imagePathWithCacheBust(p.image);
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

/** Slider'da gösterilecek ürünler (anasayfa içinde slider: true olanlar) */
export function getSliderProducts(): Product[] {
  const { anasayfa } = loadProductsJson();
  return anasayfa.filter((p) => p.slider === true).map(toProduct);
}
