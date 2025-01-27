import React from "react";
import { clsx } from "clsx";
import styles from "./index.module.scss";
import { TCategoriesMenuItems } from "@/types/categoriesMenu";
import HamburgerMenuIcon from "@/ui/icons/hamburgerMenu";

type Props = {
  menuItems: TCategoriesMenuItems;
  setIsSubmenuOpen: (isOpen: boolean) => void;
};

const MenuHeader: React.FC<Props> = ({
  menuItems = [],
  setIsSubmenuOpen,
}: Props) => {
  if (!menuItems.length) return null;

  //TODO handle click outside

  const [mainCategory, ...subMenuItems] = menuItems;
  const [sublistOpen, setSublistOpen] = React.useState(false);

  const toggleSublist = () => setSublistOpen((prev) => !prev);

  return (
    <div className={styles.container}>
      <div
        className={clsx(styles.title)}
        onMouseOver={() => setIsSubmenuOpen(true)}
        onMouseLeave={() => setIsSubmenuOpen(false)}
        // onFocus={() => setIsSubmenuOpen(true)}
        // onBlur={() => setIsSubmenuOpen(false)}
        role="button"
        tabIndex={0}
      >
        {mainCategory?.icon ? mainCategory.icon : ""}
        {mainCategory?.title}
      </div>
      <div
        className={clsx(styles["sublist-toggle-button"])}
        onClick={toggleSublist}
      >
        Meni <HamburgerMenuIcon />
      </div>
      <div className={clsx(
        styles.sublist,
        sublistOpen ? styles.active : styles.inactive)}>
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
