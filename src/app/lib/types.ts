export interface Category {
  id: number;
  name: string;
  slug: string;
}

export interface Product {
  id: number;
  name: string;
  code: string;
  description: string | null;
  image_url: string | null;
  category_id: number | null;
  created_at: string;
  updated_at: string;
  category_name?: string | null;
}

export interface AdminUser {
  id: number;
  email: string;
  password_hash: string;
  created_at: string;
}

