import React from "react";
import styles from "./index.module.scss";
import MenuHeader from "./menuHeader";
import { TCategoriesMenuItems } from "@/types/categoriesMenu";
import CategoriesList from "./categoriesList";
import CategoriesListMobile from "./categoriesListMobile";
import { log } from "console";

interface Props {
  menuItems: TCategoriesMenuItems;
};

const CategoriesMenu: React.FC<Props> = ({ menuItems }: Props) => {
  const menuRef = React.useRef<HTMLDivElement>(null);

  const [isSubmenuOpen, setIsSubmenuOpen] = React.useState({
    categories: false,
    other: false,
  });

  const handleCategoriesSubmenuToggle = (isOpen?: boolean) => {
    console.log("handle categories open ", isOpen);
    setIsSubmenuOpen((prev) => ({
      other: false,
      categories: isOpen !== undefined ? isOpen : !prev?.categories,
    }));
  };

  const handleOtherSubmenuToggle = () => {
    setIsSubmenuOpen((prev) => ({ categories: false, other: !prev?.other }));
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
      setIsSubmenuOpen({ categories: false, other: false }); // Close all submenus
    }
  };

  React.useEffect(() => {
    if (document) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      if (document) {
        document.removeEventListener("mousedown", handleClickOutside);
      }
    };
  }, []);

  return (
    <div ref={menuRef} className={styles["categories-menu"]}>
      <MenuHeader
        menuItems={menuItems}
        isOtherSubmenuVisible={isSubmenuOpen?.other}
        handleCategoriesSubmenuToggle={handleCategoriesSubmenuToggle}
        handleOtherSubmenuToggle={handleOtherSubmenuToggle}
      />
      <CategoriesList
        menuItems={menuItems[0]?.children || []}
        isSubmenuVisible={isSubmenuOpen?.categories}
        setIsSubmenuOpen={handleCategoriesSubmenuToggle}
      />

      <CategoriesListMobile
        menuItems={menuItems[0]?.children || []}
        isSubmenuVisible={isSubmenuOpen?.categories}
        setIsSubmenuOpen={handleCategoriesSubmenuToggle}
      />
    </div>
  );
};

export default CategoriesMenu;
