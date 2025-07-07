export type TCategoriesMenuItem = {
  id: string;
  href: string | null;
  slug: string;
  title: string;
  icon: string | null | any;
  children: TCategoriesMenuItem[];
};

export type TCategoriesMenuItems = TCategoriesMenuItem[];

export type TCategory = TCategoriesMenuItem;

export type TCategories = TCategory[];

export interface TFlattenedCategory extends TCategory {
  parentCategories: TCategory[];
  level: number;
}
