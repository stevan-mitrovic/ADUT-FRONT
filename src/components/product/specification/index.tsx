"use client";
import React from "react";
import styles from "./index.module.scss";

interface ProductProps {
  slug?: string;
}


export default function Specification({ slug }: ProductProps) {

  return (
    <div className={styles.container}>
      Specification
    </div>
  );
}
