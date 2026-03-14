/** JSON'dan gelen ürün (görsel alanı sadece dosya adı, örn. "1.jpg") */
export interface ProductFromJson {
  id: string;
  name: string;
  code: string;
  description?: string | null;
  image: string;
  category: string;
  /** true ise anasayfadaki slider'da gösterilir */
  slider?: boolean;
}

/** Sayfada kullanılan ürün (image tam path) */
export interface Product {
  id: string;
  name: string;
  code: string;
  description: string | null;
  image: string;
  category: string;
}
