import React from "react";
import styles from "./index.module.scss";
import MenuHeader from "./menuHeader";
import { TCategoriesMenuItems } from "@/types/categoriesMenu";
import CategoriesList from "./categoriesList";
import CategoriesListMobile from "./categoriesListMobile";

type Props = {
  menuItems: TCategoriesMenuItems;
};

const CategoriesMenu: React.FC<Props> = ({ menuItems }: Props) => {
  const [isSubmenuOpen, setIsSubmenuOpen] = React.useState(false);

  const handleSubmenuToggle = (isOpen: boolean) => setIsSubmenuOpen(isOpen);

  return (
    <div className={styles["categories-menu"]}>
      <MenuHeader
        menuItems={menuItems}
        setIsSubmenuOpen={handleSubmenuToggle}
      />
      <CategoriesList
        menuItems={menuItems[0]?.children || []}
        isSubmenuVisible={isSubmenuOpen}
        setIsSubmenuOpen={handleSubmenuToggle}
      />

      <CategoriesListMobile
        menuItems={menuItems[0]?.children || []}
        isSubmenuVisible={isSubmenuOpen}
        setIsSubmenuOpen={handleSubmenuToggle}
      />
    </div>
  );
};

export default CategoriesMenu;
