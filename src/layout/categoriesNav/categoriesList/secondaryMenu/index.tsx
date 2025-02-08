import React from "react";
import { clsx } from "clsx";
import styles from "./index.module.scss";
import { TCategoriesMenuItem } from "@/types/categoriesMenu";

interface Props {
  data: TCategoriesMenuItem;
  setActiveSublist: (key: string) => void;
};

const SecondaryMenu: React.FC<Props> = ({ data, setActiveSublist }: Props) => {
  const list = Array.isArray(data?.children) ? data.children : [];

  return (
    <a
      href={data.href || ""}
      onMouseEnter={() => setActiveSublist(data.key)}
      className={clsx(
        styles.title,
        list?.length && styles["has-children"]
      )}
    >
      {data?.icon ? data.icon : ""}
      {data?.title}
    </a>
  );
};

export default SecondaryMenu;
