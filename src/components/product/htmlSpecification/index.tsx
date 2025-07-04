"use client";
import React from "react";
import styles from "./index.module.scss";

interface HtmlSpecificationProps {
  htmlSpecification?: string;
}

export default function HtmlSpecification({ htmlSpecification }: HtmlSpecificationProps) {
  return (
    <div
      className={styles.container}
      dangerouslySetInnerHTML={{ __html: htmlSpecification }}
    ></div>
  );
}
