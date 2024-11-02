export interface GameData {
  _id?: string;
  title: string;
  company: string;
  region: string;
  primaryImage: ImageType | null;
  additionalImages: ImageType[];
  multiplayer: boolean;
  info: GameDataInfo[];
  categories: Category[];
  tags: Tag[];
  createdAt?: string;
  comments?: Comment[];
  features: Feature[];
  additionalExplanations: string;
}
export interface GameDataInfo {
  platform: string;
  capacity: string;
  price: number;
  qty: number;
  inStock: boolean;
}
export interface Tag {
  tagName: string;
  createdAt: string;
  _id: string;
}
export interface Category {
  categoryName: string;
  createdAt: string;
  _id: string;
}

export interface ImageType {
  imageName: string;
  direction: string;
  createdAt: string;
  _id: string;
}

export interface Comment {
  body: string;
  // ! این تایپ باید درست بشه
  user: User;
  relatedId?: string;
  relatedModel: string;
  isValidated?: boolean;
  createdAt?: string;
  _id?: string;
  // ! حتما بعدا بررسی بشه
  relatedData?: Product | GameData;
}
export interface Feature {
  key: string;
  value: string;
}
export interface UserAddress {
  city: string;
  provider: string;
  address: string;
  plaque: string;
  unit: string;
  postalCode: string;
}
export interface decodedUser {
  email: string;
  isAdmin: boolean;
  userId: string;
}
export interface User {
  email: string;
  order?: string;
  address?: UserAddress;
  firstName?: string;
  lastName?: string;
  phone?: string;
  isAdmin: string;
  profile: string;
  createdAt?: string;
  _id?: string;
}
export interface Product {
  _id?: string;
  title: string;
  price: number;
  features: Feature[];
  Specifications: Feature[];
  description?: string;
  primaryImage: ImageType | null;
  comments?: Comment[];
  additionalImages?: ImageType[];
  tags?: Tag[];
  categories?: Category[];
  sellOne: boolean;
  quantity: number;
  inStock?: boolean;
  createdAt?: string;
  additionalExplanations?: string;
}

export interface Weblog {
  _id?: string;
  title: string;
  body: string;
  primaryImage?: ImageType | null;
  createdAt?: string;
}
export interface Order {
  _id?: string;
  createdAt?: string;
  user: User;
  items: OrderItems[];
  TrackingCode: string;
  status: string;
}
export interface OrderItems {
  _id?: string;
  id: string;
  ItemQty: number;
  SelectedPlatform: SelectedPlatform;
  itemType: string;
  populatedData: PopulatedData;
}
export interface SelectedPlatform {
  platform: string;
  capacity: string;
  price: string;
}
interface PopulatedData {
  primaryImage: string;
  title: string;
  _id: string;
  price: number | undefined;
}
