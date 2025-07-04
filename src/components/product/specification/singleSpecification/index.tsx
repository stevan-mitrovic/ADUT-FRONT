"use client";
import React from "react";
import styles from "./index.module.scss";
import Typography from "@/ui/typography";
import { TRefinedItemSpecification } from "@/types/product";

interface SingleSpecificationProps {
  specification: TRefinedItemSpecification;
}

export default function SingleSpecification({
  specification,
}: SingleSpecificationProps) {
  return (
    <div className={styles.container}>
      <Typography variant="p3" fontWeight="400" className={styles.name}>
        {specification.name}:
      </Typography>
      <Typography variant="p2" fontWeight="400">
        {specification.value}
      </Typography>
    </div>
  );
}
