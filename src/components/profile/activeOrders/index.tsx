"use client";
import React from "react";
import styles from "./index.module.scss";
import Typography from "@/ui/typography";

export default function ActiveOrders() {


  return (
    <div className={styles.container}>
      <Typography
        variant="h4"
        as="h3"
        className={styles.title}
        fontWeight={"700"}
      >
        Aktivne porudžbine
      </Typography>

    </div>
  );
}
