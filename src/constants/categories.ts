import { CategoryImages } from "../../assets";

export interface UICategory {
  id: number;
  title: string;
  slug: string;
  image: any;
  icon?: string;
  backgroundColor?: string;
  apiCategories?: string[];
}

export const CATEGORIES: UICategory[] = [
  {
    id: 1,
    title: "Kitchen",
    slug: "kitchen",
    image: CategoryImages.kitchen,
    icon: "🍳",
    backgroundColor: "#E8F5E9",
  },
  {
    id: 2,
    title: "Cleaning",
    slug: "cleaning",
    image: CategoryImages.cleaning,
    icon: "🧹",
    backgroundColor: "#E3F2FD",
  },
  {
    id: 3,
    title: "Home Decor",
    slug: "decor",
    image: CategoryImages.decor,
    icon: "🖼️",
    backgroundColor: "#FCE4EC",
  },
  {
    id: 4,
    title: "Storage",
    slug: "storage",
    image: CategoryImages.storage,
    icon: "📦",
    backgroundColor: "#FFF3E0",
  },
  {
    id: 5,
    title: "Utility",
    slug: "utility",
    icon: "🔧",
    image: CategoryImages.utility,
    backgroundColor: "#FFF8E1",
  },
  {
    id: 6,
    title: "Daily Essentials",
    slug: "essentials",
    icon: "🧼",
    image: CategoryImages.essentials,
    backgroundColor: "#E0F7FA",
  },
];