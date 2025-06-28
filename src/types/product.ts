import { TBrand } from "./brand";

export type TProduct = {
  id: number;
  name: string;
  slug: string;
    price: {
        retail: number;
        discounted: number;
    };
  displayLabel: {
    retailPrice: string;
      discountedRetailPrice: string;
  };
    brand: TBrand;
    categories: { id: number; name: string; }[];
};