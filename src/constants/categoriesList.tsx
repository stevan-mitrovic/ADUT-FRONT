import { TCategoriesMenuItems } from "@/types/categoriesMenu";
import AllCategoriesIcon from "@/ui/icons/mainMenu/allCategoriesIcon";
import ExpressDeliveryIcon from "@/ui/icons/mainMenu/expressDeliveryIcon";
import PickUpIcon from "@/ui/icons/mainMenu/pickUpIcon";

export const homepageCategoryIds = {
  PHONES: 29,
  AIR_CONDITIONERS: 11,
  TVS: 14,
  PCS: 30,
};

export const homepageCategoryRoutes = {
  PHONES: `/c/telefoni`,
  AIR_CONDITIONERS: `/c/klima-ureaji`,
  TVS: `/c/televizori`,
  PCS: `/c/laptop`,
};

export const basicCategoriesMenu: TCategoriesMenuItems = [
  {
    id: "sve-kategorije",
    slug: "sve-kategorije",
    href: "/",
    title: "Sve kategorije",
    icon: <AllCategoriesIcon />,
    children: [],
  },
  {
    id: "express-dostava",
    slug: "express-dostava",
    href: "/",
    title: "Express dostava",
    icon: <ExpressDeliveryIcon />,
    children: [],
  },
  {
    id: "punktovi-za-preuzimanje",
    slug: "punktovi-za-preuzimanje",
    href: "/",
    title: "Punktovi za preuzimanje",
    icon: <PickUpIcon />,
    children: [],
  },
];
