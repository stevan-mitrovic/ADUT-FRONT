import React from "react";
import styles from "./index.module.scss";
import { TCategoriesMenuItems } from "@/types/categoriesMenu";
import { clsx } from "clsx";
import Link from "next/link";
import { sessionSetCategoryId } from "@/lib/storageHandlers";

interface Props {
  isActive: boolean;
  list: TCategoriesMenuItems;
}

const TertiaryMenu: React.FC<Props> = ({ isActive, list = [] }: Props) => {
  return (
    <div
      className={clsx(
        styles.container,
        isActive ? styles.active : styles.inactive
      )}
    >
      {!list?.length ? (
        <></>
      ) : (
        <div className={clsx(styles.list)}>
          {list?.map((item) => (
            <div key={item?.id}>
              <Link
                href={item.href || ""}
                onClick={() => sessionSetCategoryId(item?.slug, item?.id)}
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
                      href={subitem.href || ""}
                      onClick={() =>
                        sessionSetCategoryId(subitem?.slug, subitem?.id)
                      }
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
