import { ImageSourcePropType } from "react-native";

export interface Category {
  id: number;

  name: string;

  slug: string;

  image: ImageSourcePropType;
}