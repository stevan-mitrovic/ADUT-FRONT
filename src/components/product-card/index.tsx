"use client";
import React from "react";
import { TProduct } from "@/types/product";
import ProductCardBasic from "./basic";
import ProductCardExtended from "./extended";

export type ProductCardProps = {
  product: TProduct;
};

const ProductCard = (props: ProductCardProps) => (
  <ProductCardBasic {...props} />
);

ProductCard.Basic = (props: ProductCardProps) => (
  <ProductCardBasic {...props} />
);
// @ts-ignore
ProductCard.Basic.displayName = "ProductCard.Basic";

ProductCard.Extended = (props: ProductCardProps) => (
  <ProductCardExtended {...props} />
);
// @ts-ignore
ProductCard.Extended.displayName = "ProductCard.Extended";

export default ProductCard;
