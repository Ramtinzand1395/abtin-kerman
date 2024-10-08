export interface GameData {
  _id?: string;
  title: string;
  company: string;
  region: string;
  primaryImage: Image | null;
  additionalImages: Image[];
  multiplayer: boolean;
  info: GameDataInfo[];
  categories: Category[];
  tags: Tag[];
  createdAt?: string;
  comments?: Comment[];
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

export interface Image {
  imageName: string;
  direction: string;
  createdAt: string;
  _id: string;
}

export interface Comment {
  body: string;
  // ! این تایپ باید درست بشه
  user: { email: string; profile: string };
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

export interface Product {
  _id: string;
  title: string;
  price: number;
  features: Feature[];
  description?: string;
  primaryImage: Image | null;
  comments?: Comment[];
  additionalImages?: Image[];
  tags?: Tag[];
  categories?: Category[];
  sellOne: boolean;
  quantity: number;
  inStock?: boolean;
  createdAt?: Date;
}
