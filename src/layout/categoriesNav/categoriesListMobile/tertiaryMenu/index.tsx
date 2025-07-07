import React from "react";
import styles from "./index.module.scss";
import { TCategoriesMenuItems } from "@/types/categoriesMenu";
import { clsx } from "clsx";
import Link from "next/link";

interface Props {
  list: TCategoriesMenuItems;
}

const TertiaryMenu: React.FC<Props> = ({ list = [] }: Props) => {
  return (
    <div className={clsx(styles.container)}>
      {!list?.length ? (
        <></>
      ) : (
        <div className={clsx(styles.list)}>
          {list?.map((item) => (
            <div key={item?.id}>
              <Link
                href={item.href || ""}
                className={clsx(
                  styles["list-title"],
                  styles.link,
                  styles["list-item"]
                )}
              >
                {item.title}
              </Link>
              <div className={clsx(styles.sublist)}>
                {!item?.children?.length ? (
                  <></>
                ) : (
                  item.children.map((subitem) => (
                    <Link
                      href={item.href || ""}
                      className={clsx(
                        styles["sublist-title"],
                        styles.link,
                        styles["list-item"]
                      )}
                      key={subitem.id}
                    >
                      {subitem.title}
                    </Link>
                  ))
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default TertiaryMenu;
