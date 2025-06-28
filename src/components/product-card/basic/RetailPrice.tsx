"use client";
import React from "react";
import Typography from "@/ui/typography";
import styles from "./index.module.scss";

export default function RetailPrice({
    diff,
    retailPrice,
}: {
    diff: number;
    retailPrice: string;
}) {
    const isDiff = React.useMemo(
        () => diff > 0,
        [diff]
  );

  return isDiff ? (
    <Typography
      variant="p"
      as="span"
      className={styles["old-price"]}
      textAlign="center"
      fontWeight={"600"}
      color={"#6D6D6D"}
    >
      {retailPrice}
    </Typography>
  ) : (
    <></>
  );
}
