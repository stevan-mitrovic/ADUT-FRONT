import { TBrand } from "./brand";

export type TProductCategory = {
  id: number;
  name: string;
  isLeaf?: boolean;
};

export type TRefinedItemSpecification = {
  id: number;
  name: string;
  value: string;
  colorHex: string | null;
  isHighlited: boolean;
};

export type TRefinedItemDistinctiveTrait = {
  id: number;
  name: string;
  value: string;
  additional: string;
};

export type TRefinedItem = {
  id: number;
  name: string;
  brand: TBrand;
  category: TProductCategory;
  specification: TRefinedItemSpecification[];
  productId: number | null;
  description: string;
  images: string[];
  isAvailable: boolean;
  distinctiveTrait: TRefinedItemDistinctiveTrait | null;
  price: {
    retail: number;
    discounted: number;
    diff: number;
  };
  displayLabel: {
    retailPrice: string;
    discountedRetailPrice: string;
    diff: string;
  };
};

export type TProduct = {
  id: number;
  name: string;
  slug: string;
  price: {
    retail: number;
    discounted: number;
    diff: number;
  };
  displayLabel: {
    retailPrice: string;
    discountedRetailPrice: string;
    diff: string;
  };
  brand: TBrand;
  categories: TProductCategory[];
  htmlSpecification: string;
  description: string;
  refinedItems: TRefinedItem[];
};
