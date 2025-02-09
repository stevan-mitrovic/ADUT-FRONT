export type TCategoriesMenuItem = {
    key: string;
    href: string | null;
    title: string;
    icon: string | null | any;
    children: TCategoriesMenuItem[];
}

export type TCategoriesMenuItems = TCategoriesMenuItem[];

export type TCategory = TCategoriesMenuItem & {
  id: string;
};

export type TCategories = TCategory[];