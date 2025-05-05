"use client";
import React from "react";
import clsx from "clsx";
import styles from "./index.module.scss";
import {TProduct} from "@/types/product";
import ProductCard from "@/components/product-card";

type Props = {
  productList: TProduct[];
  className?: any;
}

export default function ProductsGrid({productList, className}: Props) {

  return (
    <div className={clsx(styles.container, className)}>
      {(productList || []).map((product,key) => <ProductCard.Extended key={`product-${key}`} product={product}/>)}
    </div>
  );
}
