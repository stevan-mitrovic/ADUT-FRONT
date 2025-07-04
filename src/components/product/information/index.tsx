"use client";
import React from "react";
import styles from "./index.module.scss";
import Typography from "@/ui/typography";
import { TProduct, TRefinedItem } from "@/types/product";
import RefinedItemSelector from "./refinedItemSelector";

interface InformationProps {
  product: TProduct;
  selectedRefinedItem: TRefinedItem;
  setSelectedRefinedItem: (refinedItem: TRefinedItem) => void;
}

export default function Information({
  product,
  selectedRefinedItem,
  setSelectedRefinedItem,
}: InformationProps) {
  const refinedItems = product.refinedItems;
  console.log("product refined items");
  console.log(refinedItems);

  return (
    <div className={styles.container}>
      <Typography
        variant="h3"
        as="h1"
        className={styles.title}
        fontWeight={"700"}
      >
        {product.name}
      </Typography>

      {refinedItems.length > 0 ? (
        <Typography
          variant="p3"
          className={styles.description}
          fontWeight={"400"}
        >
          {selectedRefinedItem.description}
        </Typography>
      ) : (
        <></>
      )}
      {refinedItems.length > 0 ? (
        <RefinedItemSelector
          refinedItems={refinedItems}
          selectedRefinedItem={selectedRefinedItem}
          setSelectedRefinedItem={setSelectedRefinedItem}
        />
      ) : (
        <></>
      )}
    </div>
  );
}
