"use client";
import React from "react";
import styles from "./index.module.scss";

interface ProductProps {
  slug?: string;
}


export default function Pricing({ slug }: ProductProps) {



  return (
    <div className={styles.container}>
      Pricing
    </div>
  );
}
