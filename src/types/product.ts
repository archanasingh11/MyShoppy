import { ImageSourcePropType } from "react-native";

export interface Product {
  id: number;

  name: string;

  title?: string;

  brand: string;

  description: string;

  category: string;

  price: number;

  discount: number;

  rating: number;

  stock: number;

  featured: boolean;

  popular: boolean;

  isNew: boolean;

  image: ImageSourcePropType;

  thumbnail?: any;
}