import { put, del } from '@vercel/blob';

const BLOB_PREFIX = 'blob.vercel-storage.com';

/** Ürün görselini Vercel Blob'a yükler. Token yoksa null döner. */
export async function uploadProductImage(file: File): Promise<string | null> {
  if (!process.env.BLOB_READ_WRITE_TOKEN) return null;
  const pathname = `products/${Date.now()}-${file.name.replace(/[^a-zA-Z0-9.-]/g, '_')}`;
  const blob = await put(pathname, file, { access: 'public', addRandomSuffix: true });
  return blob.url;
}

/** URL bizim Blob store'da ise siler. Dış linklere dokunmaz. */
export async function deleteProductImageIfOurs(imageUrl: string | null | undefined): Promise<void> {
  if (!imageUrl || !imageUrl.includes(BLOB_PREFIX)) return;
  if (!process.env.BLOB_READ_WRITE_TOKEN) return;
  try {
    await del(imageUrl);
  } catch {
    // Blob zaten silinmiş veya hata; devam et
  }
}
