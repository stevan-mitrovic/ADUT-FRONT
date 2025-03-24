"use client";
import React from "react";
import styles from "./index.module.scss";
import Typography from "@/ui/typography";

export default function PaymentCards() {
  return (
    <div className={styles.container}>
      <Typography
        variant="h4"
        as="h3"
        className={styles.title}
        fontWeight={"700"}
      >
        Platne kartice
      </Typography>
    </div>
  );
}
