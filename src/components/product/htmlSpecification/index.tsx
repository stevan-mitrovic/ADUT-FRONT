"use client";
import React from "react";
import styles from "./index.module.scss";

interface ProductProps {
  slug?: string;
}

export default function HtmlSpecification({ slug }: ProductProps) {


  return (
    <div className={styles.container}>
      Html specification
    </div>
  );
}
