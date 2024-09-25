export interface GameData {
  _id?: string;
  title: string;
  company: string;
  region: string;
  image: Image[];
  multiplayer: boolean;
  info: GameDataInfo[];
  categories: Category[];
  tags: Tag[];
  createdAt?: string;
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
