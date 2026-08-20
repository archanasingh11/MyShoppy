import { Address } from "./address";
import { CartItem } from "./cart";

export interface Order {
  id: string;

  items: CartItem[];

  address: Address;

  total: number;

  createdAt: string;
}