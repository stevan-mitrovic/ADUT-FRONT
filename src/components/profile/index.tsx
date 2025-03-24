"use client";
import React from "react";
import styles from "./index.module.scss";
import clsx from "clsx";
import UserDataForm from "./userDataForm";
import Typography from "@/ui/typography";
import PaymentCards from "./paymentCards";
import ActiveOrders from "./activeOrders";

export default function UserProfile() {
  return (
    <div className={styles.container}>
      <Typography
        variant="h3"
        as="h2"
        className={styles.title}
        fontWeight={"700"}
      >
        Moj nalog
      </Typography>

      <div className={styles["content-container"]}>
        <div className={clsx(styles.column, styles["left-column"])}>
          <UserDataForm />
          <PaymentCards />
        </div>
        <div className={clsx(styles.column, styles["right-column"])}>
          <ActiveOrders />
        </div>
      </div>
    </div>
  );
}
