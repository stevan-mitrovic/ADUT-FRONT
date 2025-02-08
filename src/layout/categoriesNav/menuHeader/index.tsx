import React from "react";
import { clsx } from "clsx";
import styles from "./index.module.scss";
import { TCategoriesMenuItems } from "@/types/categoriesMenu";
import HamburgerMenuIcon from "@/ui/icons/hamburgerMenu";

interface Props {
  menuItems: TCategoriesMenuItems;
  isOtherSubmenuVisible?: boolean;
  handleCategoriesSubmenuToggle: (isOpen?: boolean) => void;
  handleOtherSubmenuToggle: () => void;
};

const MenuHeader: React.FC<Props> = ({
  menuItems = [],
  isOtherSubmenuVisible = false,
  handleCategoriesSubmenuToggle,
  handleOtherSubmenuToggle,
}: Props) => {
  if (!menuItems.length) return null;

  //TODO handle click outside

  const [mainCategory, ...subMenuItems] = menuItems;

  return (
    <div className={styles.container}>
      <div
        className={clsx(styles.title)}
        // onClick={() => handleCategoriesSubmenuToggle()}
        onMouseOver={() => handleCategoriesSubmenuToggle(true)}
        onMouseLeave={() => handleCategoriesSubmenuToggle(false)}
        role="button"
        tabIndex={0}
      >
        {mainCategory?.icon ? mainCategory.icon : ""}
        {mainCategory?.title}
      </div>
      <div
        className={clsx(styles["sublist-toggle-button"])}
        onClick={handleOtherSubmenuToggle}
      >
        Meni <HamburgerMenuIcon />
      </div>
      <div
        className={clsx(
          styles.sublist,
          isOtherSubmenuVisible ? styles.active : styles.inactive
        )}
      >
        {subMenuItems.map((item) => (
          <a
            key={item?.key}
            href={item.href || ""}
            className={clsx(styles["sublist-item"])}
          >
            <span>{item?.icon ? item.icon : ""}</span>
            {item?.title}
          </a>
        ))}
      </div>
    </div>
  );
};

export default MenuHeader;
