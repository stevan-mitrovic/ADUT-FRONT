"use client";
import { useEffect } from "react";
import Navigation from "../navigation";
import Footer from "../footer";
import styles from "./index.module.scss";
import clsx from "clsx";
import { useAuthStore } from "@/store/authStore";
import { useCategoryStore } from "@/store/categoryStore";

export default function PageLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const fetchUser = useAuthStore((state) => state.fetchUser);
  const fetchCategories = useCategoryStore((state) => state.fetchCategories);

  useEffect(() => {
    fetchUser();
    fetchCategories();
  }, [fetchUser]);
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
