import { TCategory, TCategoriesMenuItems } from "@/types/categoriesMenu";
import { getCategoryRoute, createSlug } from "@/lib/urlHandlers";

/**
 * Maps raw category response data from the backend to a structured format.
 *
 * @function CategoryResponseMapper
 * @param {Partial<TCategory>} data - The raw category response data from the backend.
 * @returns {TCategory} A formatted category object.
 */
export function CategoryResponseMapper(data: any): TCategory {
  return {
    id: data?.id || "",
    slug: data?.slug ? data?.slug : createSlug(data?.name || ""),
    href: getCategoryRoute(data?.slug, data?.name),
    title: data?.name || "",
    icon: null,
    children: data?.children || [],
  };
}

/**
 * Recursively maps an array of raw category data into structured `TCategory` objects.
 *
 * @function mapCategories
 * @param {TCategoriesMenuItems} categories - The raw category list from the backend.
 * @returns {TCategory[]} The structured category list.
 */
export function mapCategories(categories: TCategoriesMenuItems): TCategory[] {
  return categories.map((category) => ({
    ...CategoryResponseMapper(category),
    children: mapCategories(category.children), // Recursively map children
  }));
}
