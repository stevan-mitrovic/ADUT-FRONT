import React from "react";
import { clsx } from "clsx";
import styles from "./index.module.scss";
import { TCategoriesMenuItems } from "../../../types/categoriesMenu";
import SecondaryMenu from "./secondaryMenu";
import TertiaryMenu from "./tertiaryMenu";

interface Props {
  menuItems: TCategoriesMenuItems;
  isSubmenuVisible: boolean;
  setIsSubmenuOpen: (isOpen: boolean) => void;
};

const CategoriesList: React.FC<Props> = ({
  menuItems,
  isSubmenuVisible,
  setIsSubmenuOpen,
}: Props) => {
  const [activeSublistKey, setActiveSublistKey] = React.useState(
    menuItems?.[0].key || ""
  );

  return (
    <div
      className={clsx(
        styles.container,
        isSubmenuVisible ? styles.active : styles.inactive
      )}
      onMouseOver={() => setIsSubmenuOpen(true)}
      onMouseLeave={() => setIsSubmenuOpen(false)}
      role="menu"
      aria-hidden={!isSubmenuVisible}
    >
      <div className={styles["secondary-menu"]}>
        {menuItems?.map((item) => (
          <SecondaryMenu
            key={item?.key}
            data={item}
            setActiveSublist={setActiveSublistKey}
          />
        ))}
      </div>
      <div className={styles["tertiary-menu"]}>
        {menuItems?.map((item) => (
          <TertiaryMenu
            key={item?.key}
            isActive={activeSublistKey === item.key}
            list={item?.children}
          />
        ))}
      </div>
    </div>
  );
};

export default CategoriesList;
