# Formtag Plastik

Next.js ile Formtag Plastik kurumsal sitesi. Ürünler JSON dosyası ve yerel görsellerle yönetilir.

## Çalıştırma

```bash
npm install
npm run dev
```

Tarayıcıda [http://localhost:3000](http://localhost:3000) açın.

## Ürünler (JSON + yerel görseller)

Veritabanı yok; ürünler **`src/app/Data/products.json`** dosyasından okunur.

### JSON yapısı

- **vitrin** – Anasayfada üstte kısaca gösterilen öne çıkan ürünler.
- **anasayfa** – “Ürünlerimiz” bölümünde listelenen ürünler.

Her ürün: `id`, `name`, `code`, `category`, `description`, **`image`** (sadece dosya adı, örn. `"urun-1.jpg"`).

### Görseller

- Görselleri **`public/images/products/`** klasörüne koyun.
- JSON’da sadece **dosya adını** yazın (örn. `"image": "urun-1.jpg"`).
- Örnek: `public/images/products/urun-1.jpg` → JSON’da `"image": "urun-1.jpg"`.

### Örnek `products.json`

```json
{
  "vitrin": [
    {
      "id": "1",
      "name": "Ürün Adı",
      "category": "Kategori",
      "image": "dosya.jpg",
      "description": "Kısa açıklama.",
      "code": "FP-001"
    }
  ],
  "anasayfa": [
    { ... aynı yapı ... }
  ]
}
```

Vitrin ve anasayfa listesini aynı veya farklı ürünlerle doldurabilirsiniz.

## Deploy (Vercel)

```bash
npm run build
```

Vercel’e deploy etmek için projeyi bağlayıp push etmeniz yeterli. Veritabanı veya ek env gerekmez; `products.json` ve `public/images/products/` repo’da olduğu sürece çalışır.
