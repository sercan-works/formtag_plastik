/** Stub: Sadece products.json kullanılıyor. Bu dosya şablon sayfalarının import hatası vermemesi için boş veri döner. */

export const desc1 = [];
export const desc2 = [];
export const desc3 = [];
export const desc4 = [];

export interface PhotoPortfolioItem {
  category: string;
  id: number;
  image: string;
}
export const photoPortfolio: PhotoPortfolioItem[] = [];
export const photoPortfolioImage: string[] = [];

export const shopFeature = [];

export interface ShopGridItem {
  id: number | string;
  image: string;
  name: string;
  tag?: string;
  tagBg?: string;
  descAmount?: string;
  amount?: string;
  gender?: string;
}
export const shopGrid: ShopGridItem[] = [];

export interface PaymentMethodItem {
  image: string;
  title: string;
  time: string;
}
export const paymentMethod: PaymentMethodItem[] = [];

export const christmasFeature = [];
export const photoAboutImage: string[] = [];
