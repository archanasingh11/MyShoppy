import { PRODUCTS } from "../data/product";
import { Product } from "../types";

const delay = (ms: number = 300) =>
  new Promise(resolve => setTimeout(resolve, ms));

export const productApi = {
  async getAll(): Promise<Product[]> {
    await delay();
    return PRODUCTS;
  },

  async getById(id: number): Promise<Product | undefined> {
    await delay();
    return PRODUCTS.find(product => product.id === id);
  },

  async getByCategory(category: string): Promise<Product[]> {
    await delay();
    if (!category) return PRODUCTS;
    return PRODUCTS.filter(product => product.category.toLowerCase() === category.toLowerCase());
  },

  async getByUICategory(categorySlug: string): Promise<{ products: Product[] }> {
    await delay();
    if (!categorySlug) return { products: PRODUCTS };
    const filtered = PRODUCTS.filter(
      product => product.category.toLowerCase() === categorySlug.toLowerCase()
    );
    return { products: filtered };
  },


  async getFeatured(): Promise<Product[]> {
    await delay();
    return PRODUCTS.filter(product => product.featured);
  },

  async getPopular(): Promise<Product[]> {
    await delay();
    return PRODUCTS.filter(product => product.popular);
  },

  async getNewArrivals(): Promise<Product[]> {
    await delay();
    return PRODUCTS.filter(product => product.isNew);
  },

  async getBestDeals(): Promise<Product[]> {
    await delay();
    return PRODUCTS
      .filter(product => product.discount > 0)
      .sort((a, b) => b.discount - a.discount);
  },

  async search(query: string): Promise<Product[]> {
    await delay();

    const search = query.toLowerCase();

    return PRODUCTS.filter(
      product =>
        product.name.toLowerCase().includes(search) ||
        product.brand.toLowerCase().includes(search)
    );
  },
};