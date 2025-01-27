import React from "react";
import { categoriesMenu } from "@/constants/categoriesList";
import CategoriesMenu from "./CategoriesMenu";

const CategoriesNav: React.FC = () => {
  return <CategoriesMenu menuItems={categoriesMenu} />;
};

export default CategoriesNav;
