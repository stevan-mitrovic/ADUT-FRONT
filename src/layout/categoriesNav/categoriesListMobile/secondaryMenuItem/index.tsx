import React from "react";
import { clsx } from "clsx";
import styles from "./index.module.scss";
import { TCategoriesMenuItem } from "@/types/categoriesMenu";

type Props = {
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
    <div>
      <a
        href={data.href || ""}
        className={clsx(styles.title)}
      >
        {data?.icon ? data.icon : ""}
        {data?.title}
      </a>
      {list?.length && (
        <button
          className={styles.accordionTitle}
          onClick={() => toggleItem(data.key)}
          aria-controls={`accordion-content-${data.key}`}
          aria-expanded={activeSublistKey === data.key}
        >
          {data.title}
        </button>
      )}
    </div>
  );
};

export default SecondaryMenuItem;
