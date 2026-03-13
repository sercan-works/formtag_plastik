-- products tablosunda category_id yoksa ekle (eski şemalar için)
ALTER TABLE products ADD COLUMN IF NOT EXISTS category_id INTEGER REFERENCES categories(id) ON DELETE SET NULL;
