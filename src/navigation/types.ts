// src/navigation/types.ts

export type RootStackParamList = {
  MainTabs: undefined;
  Products: {
    category?: string;
    label?: string;
  };
  ProductDetails: {
    productId: number;
  };
  Checkout: undefined;
  OrderSuccess: undefined;
};

export type BottomTabParamList = {
  Home: undefined;
  Categories: undefined;
  Cart: undefined;
};
