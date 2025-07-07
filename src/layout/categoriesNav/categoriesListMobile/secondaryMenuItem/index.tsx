import React from "react";
import { clsx } from "clsx";
import styles from "./index.module.scss";
import { TCategoriesMenuItem } from "@/types/categoriesMenu";

interface Props {
  data: TCategoriesMenuItem;
  activeSublistKey: string;
  toggleItem: (key: string) => void;
};

const SecondaryMenuItem: React.FC<Props> = ({
  data,
  activeSublistKey,
  toggleItem,
}: Props) => {
  const list = Array.isArray(data?.children) ? data.children : [];

  return (
    <div className={styles.container}>
      <a href={data.href || ""} className={clsx(styles.title)}>
        {data?.icon ? data.icon : ""}
        {data?.title}
      </a>
      {list?.length ? (
        <button
          className={clsx(styles.accordionToggle)}
          onClick={() => toggleItem(data.id)}
          aria-controls={`accordion-content-${data.id}`}
          aria-expanded={activeSublistKey === data.id}
        ></button>
      ) : (
        ""
      )}
    </div>
  );
};

export default SecondaryMenuItem;
