This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Veritabanı ve Seed

Proje Vercel Postgres (Neon) kullanır. İlk kurulumda tabloları oluşturup örnek veriyi yüklemek için:

### 1. Migration (tabloları oluşturma)

```bash
npm run db:migrate
```

Bu komut `db/migrations/001_init.sql` dosyasını çalıştırır ve `categories`, `products`, `admin_users` tablolarını oluşturur. `.env.local` içinde `POSTGRES_URL` veya `DATABASE_URL` tanımlı olmalıdır.

### 2. Seed (örnek ürünler)

Seed şunları yapar:

- **Kategoriler:** `src/app/Data/products.json` dosyasındaki her benzersiz `category` değeri için bir kategori eklenir (slug otomatik üretilir).
- **Ürünler:** Aynı JSON dosyasındaki her ürün `products` tablosuna eklenir. Aynı `code` zaten varsa atlanır (`ON CONFLICT DO NOTHING`). Script: `scripts/seed.js`.

**Seed’i çalıştırmak:**

```bash
npm run db:seed
```

- Önce migration’ı çalıştırmış olmalısınız (`npm run db:migrate`).
- Seed'i birden fazla kez çalıştırabilirsiniz.

**Admin girişi:** JWT yok; `.env.local` içinde `ADMIN_USER` (örn. suamb), `ADMIN_PASSWORD` (örn. Ankara06) ve `ADMIN_SESSION_SECRET` ile `/admin/login` üzerinden giriş yapılır.

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
