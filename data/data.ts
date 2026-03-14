/** Stub: Sadece products.json kullanılıyor. Bu dosya şablon sayfalarının import hatası vermemesi için boş veri döner. */
/** Stub: Sadece products.json kullanılıyor. Bu dosya şablon sayfalarının import hatası vermemesi için boş veri döner. */

export interface BlogData {
  id: number;
  Image: string;
  title: string;
  desc: string;
  date: string;
}
export const blogData: BlogData[] = [];

export const teams = [];

export interface TeamDataItem {
  background: string;
  image: string;
  name: string;
  title: string;
  desc: string;
}
export const teamData: TeamDataItem[] = [];

export interface ProductDataItem {
  id: number;
  image: string;
  name: string;
  tag?: string;
  tagBg?: string;
  descAmount: string;
  amount: string;
  gender?: string;
}
export const productData: ProductDataItem[] = [];

export interface PropertyDataItem {
  id: number;
  address: string;
  image: string;
  sqrt: string;
  beds: string;
  bath: string;
}
export const propertyData: PropertyDataItem[] = [];

export interface JobDataItem {
  id: number;
  image: string;
  name: string;
  title: string;
  posted: string;
  jobTitle: string;
  package: string;
  location: string;
}
export const jobData: JobDataItem[] = [];

export interface CandidateItem {
  id: number;
  image: string;
  name: string;
}
export const candidates: CandidateItem[] = [];

export interface CourseDataItem {
  id: number;
  subTitle: string;
  image2: string;
  image: string;
  name: string;
  designation: string;
  title: string;
  desc: string;
}
export const courcesData: CourseDataItem[] = [];

export interface WalletDataItem {
  Id?: number;
  image: string;
  name: string;
  title: string;
  time: string;
}
export const walletData: WalletDataItem[] = [];

export const nftCollection = [];

export interface NftProductItem {
  id: number;
  image: string;
  title: string;
  amount: string;
  like: string;
  date?: string;
  dataGroup: string;
  category: string;
}
export const nftProdectData: NftProductItem[] = [];

export interface NftServiceItem {
  id: string;
  Id: number;
  background: string;
  image: string;
  name: string;
}
export const NftServices: NftServiceItem[] = [];

export const NFTAboutData = [];
export const KeyFeatures = [];

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export interface KeyFeatureItem {
  icon: any;
  title: string;
  desc: string;
}
export const KeyFeaturestwo: KeyFeatureItem[] = [];

export const masonryimages: string[] = [];

export interface MesonaryDataItem {
  id: number;
  dataGroup: string;
  image: string;
  category: string;
}
export const mesonaryData: MesonaryDataItem[] = [];
export interface PortfolioClassicItem {
  image: string;
  name: string;
  role: string;
  category: string;
}
export const portfolioClassic: PortfolioClassicItem[] = [];

export interface PortfolioOneItem {
  id: number;
  image: string;
  name: string;
  dataGroup: string;
  category: string;
}
export const portfolioOne: PortfolioOneItem[] = [];
export const portfolioOneImage: string[] = [];
export const clientsData = [];
export const clientsDataTwo = [];
export const SeoServece = [];
export const hosting = [];
export const hostingData = [];
export const hostingServices = [];
export interface RestaurentDataItem {
  category: string;
  image: string;
  dish: string;
}
export const restaurentData: RestaurentDataItem[] = [];

export interface RestaurentAboutItem {
  icon: string;
  title: string;
  desc: string;
}
export const restaurentAboutData: RestaurentAboutItem[] = [];
export const jobServices = [];
export interface FeatureFiveItem {
  icon: string;
  title: string;
  desc: string;
}
export const featureFive: FeatureFiveItem[] = [];
export const digitalServices = [];
export const digitalProduct = [];
export const hotelData = [];
export const cafeData = [];
export const service2 = [];
export const meditationData = [];
export const yogaTeam = [];
export const workData = [];
export const ourCausesData = [];
export const gymServices = [];
export const coachServices = [];
export const cources = [];
export const contactData = [];
export const itSolutionData = [];
export interface TimeDataItem {
  time: string;
  image: string;
  title: string;
  name: string;
}
export const timeData: TimeDataItem[] = [];
