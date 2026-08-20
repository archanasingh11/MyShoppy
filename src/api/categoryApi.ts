import { CATEGORIES } from "../data/categories";
import { Category } from "../types";

const delay = (ms: number = 300) =>
  new Promise(resolve => setTimeout(resolve, ms));

export const categoryApi = {
  async getAll(): Promise<Category[]> {
    await delay();
    return CATEGORIES;
  },

  async getBySlug(slug: string): Promise<Category | undefined> {
    await delay();
    return CATEGORIES.find(category => category.slug === slug);
  },

  async getById(id: number): Promise<Category | undefined> {
    await delay();
    return CATEGORIES.find(category => category.id === id);
  },
};