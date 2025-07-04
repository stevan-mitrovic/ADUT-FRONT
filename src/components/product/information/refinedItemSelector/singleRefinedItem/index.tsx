"use client";
import React from "react";
import styles from "./index.module.scss";
import Typography from "@/ui/typography";
import { TRefinedItemDistinctiveTrait } from "@/types/product";
import clsx from "clsx";

interface ProductProps {
  data: TRefinedItemDistinctiveTrait;
  isSelected: boolean;
  onSelect: () => void;
}

export default function SingleRefinedItem({
  data,
  isSelected,
  onSelect,
}: ProductProps) {
  return data ? (
    <div
      className={clsx(styles.container, isSelected && styles.selected)}
      onClick={() => onSelect()}
    >
      {data.additional ? (
        <span style={{ backgroundColor: data.additional }} />
      ) : (
        <></>
      )}
      <Typography variant="p" fontWeight={"400"}>
        {data.value}
      </Typography>
    </div>
  ) : (
    <></>
  );
}
