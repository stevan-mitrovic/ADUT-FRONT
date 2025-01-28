import React from "react";
import { clsx } from "clsx";
import styles from "./index.module.scss";
import { TCategoriesMenuItems } from "../../../types/categoriesMenu";
import SecondaryMenuItem from "./secondaryMenuItem";
import TertiaryMenu from "./tertiaryMenu";

type Props = {
  menuItems: TCategoriesMenuItems;
  isSubmenuVisible: boolean;
  setIsSubmenuOpen: (isOpen: boolean) => void;
};

const CategoriesListMobile: React.FC<Props> = ({
  menuItems,
  isSubmenuVisible,
  setIsSubmenuOpen,
}: Props) => {
  const [activeSublistKey, setActiveSublistKey] = React.useState(
    menuItems?.[0].key || ""
  );

  const toggleItem = (key: string) => {
    setActiveSublistKey((prev) => (prev === key ? "" : key));
  };

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
      {menuItems.map((item) => (
        <div key={item.key} aria-expanded={activeSublistKey === item.key}>
          <SecondaryMenuItem
            toggleItem={toggleItem}
            data={item}
            activeSublistKey={activeSublistKey}
          />
          <div
            id={`accordion-content-${item.key}`}
            className={styles.accordionContent}
            aria-hidden={activeSublistKey !== item.key}
          >
            <TertiaryMenu list={item?.children} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default CategoriesListMobile;
