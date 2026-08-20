import { Category } from "../types";
import { CategoryImages } from "../../assets";

export const CATEGORIES: Category[] = [
  {
    id: 1,
    name: "Kitchen",
    slug: "kitchen",
    image: CategoryImages.kitchen,
  },
  {
    id: 2,
    name: "Cleaning",
    slug: "cleaning",
    image: CategoryImages.cleaning,
  },
  {
    id: 3,
    name: "Home Decor",
    slug: "decor",
    image: CategoryImages.decor,
  },
  {
    id: 4,
    name: "Storage",
    slug: "storage",
    image: CategoryImages.storage,
  },
  {
    id: 5,
    name: "Utility",
    slug: "utility",
    image: CategoryImages.utility,
  },
  {
    id: 6,
    name: "Daily Essentials",
    slug: "essentials",
    image: CategoryImages.essentials,
  },
];