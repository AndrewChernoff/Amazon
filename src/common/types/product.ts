export type ProductType = {
    id: string;
    name: string;
    description: string;
    price: number;
    categories: CategoriesType[];
    images: ImageType[];
    reviews: ReviewType[];
  }
  
  export type CategoriesType = {
    id: string;
    name: string;
  }
  
  export type ImageType = {
    width: number;
    height: number;
    fileName: string;
    url: string;
  }
  
  export type ReviewType = {
    id: string;
    rating: string;
    email: string;
    name: string;
    headline: string;
    content: string;
  }