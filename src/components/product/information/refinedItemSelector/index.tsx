"use client";
import React from "react";
import styles from "./index.module.scss";
import Typography from "@/ui/typography";
import { TRefinedItem } from "@/types/product";
import SingleRefinedItem from "./singleRefinedItem";

interface RefinedItemSelectorProps {
  refinedItems: TRefinedItem[];
  selectedRefinedItem: TRefinedItem;
  setSelectedRefinedItem: (refinedItem: TRefinedItem) => void;
}

export default function RefinedItemSelector({
  refinedItems,
  selectedRefinedItem,
  setSelectedRefinedItem,
}: RefinedItemSelectorProps) {
  const distinctiveTraitName = refinedItems[0].distinctiveTrait
    ? refinedItems[0].distinctiveTrait.name
    : "";

  return (
    <div className={styles.container}>
      {distinctiveTraitName ? (
        <Typography variant="p" className={styles.title} fontWeight={"700"}>
          {distinctiveTraitName}:
        </Typography>
      ) : (
        <></>
      )}
      <div className={styles.list}>
        {refinedItems.map((refinedItem) => (
          <SingleRefinedItem
            key={`product-refined-item-${refinedItem.id}`}
            isSelected={selectedRefinedItem.id === refinedItem.id}
            data={refinedItem.distinctiveTrait}
            onSelect={() => setSelectedRefinedItem(refinedItem)}
          />
        ))}
      </div>
    </div>
  );
}
