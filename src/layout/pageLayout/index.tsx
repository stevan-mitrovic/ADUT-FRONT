"use client";
import Navigation from "../navigation";
import Footer from "../footer";
import styles from "./index.module.scss";
import clsx from "clsx";

export default function PageLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className={clsx(styles.container)}>
      <Navigation />
      <div className={clsx(styles["content-container"])}>
        <div className={clsx(styles.content)}>{children}</div>
      </div>
      <Footer />
    </div>
  );
}
