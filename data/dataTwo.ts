/** Stub: Sadece products.json kullanılıyor. Bu dosya şablon sayfalarının import hatası vermemesi için boş veri döner. */

export interface MasonryData {
  id: number;
  image: string;
  title: string;
  desc: string;
  category: string;
  date: string;
}

export interface AccordionDataItem {
  id: number;
  title: string;
  content: string;
}
export const accordionData: AccordionDataItem[] = [];

export const aboutServices = [];
export const masonryData: MasonryData[] = [];
export const courseData = [];

export interface FoodServiceItem {
  image: string;
  title: string;
  description: string;
  imageList: string;
  name: string;
}
export const foodServices: FoodServiceItem[] = [];

export interface PortfolioItem {
  id: number;
  image: string;
  category: string;
}
export const portfolio: PortfolioItem[] = [];
export const portfolioImage: string[] = [];

export interface PortfolioTwoItem {
  image: string;
  name: string;
  role: string;
}
export const portfolioImageTwo: string[] = [];
export const portfolioTwo: PortfolioTwoItem[] = [];

export interface ProjectDataItem {
  image: string;
  name: string;
  title: string;
}
export const projectData: ProjectDataItem[] = [];
export const projectImage: string[] = [];
export const foodImage = [];
export const podcastData = [];
export const coworkTab = [];

export interface StudioPortfolioItem {
  image: string;
  title: string;
  name: string;
}
export const studioPortfolio: StudioPortfolioItem[] = [];

export const yogaImage: string[] = [];

export interface TopicItem {
  title: string;
  name: string;
}
export const topicsData: TopicItem[] = [];

export interface CoWorkService {
  image: string;
  name: string;
  role: string;
}
export const coWorkServices: CoWorkService[] = [];

export const insuranceServicesTwo = [];
export const foodComment = [];
export const lowServices = [];
export const insuranceTab = [];
export const furnitureService = [];

export interface RecentPostItem {
  Image: string;
  Title: string;
  Date: string;
}
export const RecentPostData: RecentPostItem[] = [];

export const TagscloudItem = [];
export const authorData = [];
export const helpData = [];
export const userProfile = [];
export interface CourseDetailItem {
  id: number;
  subTitle?: string;
  image2?: string;
  name: string;
  heading: string;
  ls1: string;
  ls2: string;
  ls3: string;
  ls4: string;
}
export const courseDetail: CourseDetailItem[] = [];
export const appFeature = [];
export interface DestinationDataItem {
  category: string;
  image: string;
  place: string;
  amount: number;
}
export const destinationData: DestinationDataItem[] = [];
export const eventOne = [];
export const eventTwo = [];
export const eventThree = [];
export const realEstateServices = [];
export const insuranceServices = [];
export const foodBlogData = [];
export const clientsData = [];
export const contactData = [];
