import React from "react";
import { clsx } from "clsx";
import styles from "./index.module.scss";
import { TCategoriesMenuItems } from "../../../types/categoriesMenu";
import SecondaryMenuItem from "./secondaryMenuItem";
import TertiaryMenu from "./tertiaryMenu";

interface Props {
  menuItems: TCategoriesMenuItems;
  isSubmenuVisible: boolean;
  setIsSubmenuOpen: (isOpen: boolean) => void;
};

const CategoriesListMobile: React.FC<Props> = ({
  menuItems,
  isSubmenuVisible,
  setIsSubmenuOpen,
}: Props) => {
  const [activeSublistKey, setActiveSublistKey] = React.useState("");

  const toggleItem = (id: string) => {
    setActiveSublistKey((prev) => (prev === id ? "" : id));
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
        <div key={item.id} aria-expanded={activeSublistKey === item.id}>
          <SecondaryMenuItem
            toggleItem={toggleItem}
            data={item}
            activeSublistKey={activeSublistKey}
          />
          <div
            id={`accordion-content-${item.id}`}
            className={styles.accordionContent}
            aria-hidden={activeSublistKey !== item.id}
          >
            <TertiaryMenu list={item?.children} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default CategoriesListMobile;
