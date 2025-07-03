"use client";
import React from "react";
import styles from "./index.module.scss";

interface ProductProps {
  slug?: string;
}


export default function Information({ slug }: ProductProps) {


  return (
    <div className={styles.container}>
      Information
    </div>
  );
}
