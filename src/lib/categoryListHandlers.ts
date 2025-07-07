import { TCategory, TFlattenedCategory } from "@/types/categoriesMenu";

/**
 * Flattens a nested categories tree into a flat list where each category
 * includes its complete parent hierarchy
 *
 * @param categories - The nested categories array
 * @returns A flat array of categories with parent hierarchy information
 *
 * @example
 * const nestedCategories = [
 *   {
 *     id: 1,
 *     title: "Electronics",
 *     children: [
 *       {
 *         id: 2,
 *         title: "Phones",
 *         children: []
 *       }
 *     ]
 *   }
 * ];
 *
 * const flat = flattenCategories(nestedCategories);
 * // Result:
 * // [
 * //   { id: 1, title: "Electronics", parentCategories: [Electronics], level: 0 },
 * //   { id: 2, title: "Phones", parentCategories: [Electronics, Phones], level: 1 }
 * // ]
 */
export const flattenCategories = (
  categories: TCategory[]
): TFlattenedCategory[] => {
  const result: TFlattenedCategory[] = [];

  /**
   * Recursive function to traverse the category tree
   * @param categoryList - Current level categories
   * @param parentPath - Array of parent categories leading to current level
   * @param currentLevel - Current depth level (0-based)
   */
  const traverse = (
    categoryList: TCategory[],
    parentPath: TCategory[] = [],
    currentLevel: number = 0
  ): void => {
    categoryList.forEach((category) => {
      // Create the current category's full path (including itself)
      const currentPath = [...parentPath, category];

      // Create flattened category object without children property
      const flattenedCategory: TFlattenedCategory = {
        id: category.id,
        slug: category.slug,
        href: category.href,
        title: category.title,
        icon: category.icon,
        children: category.children,
        parentCategories: currentPath,
        level: currentLevel,
      };

      // Add to result
      result.push(flattenedCategory);

      // Recursively process children if they exist
      if (category.children && category.children.length > 0) {
        traverse(category.children, currentPath, currentLevel + 1);
      }
    });
  };

  // Start traversal from root level
  traverse(categories);

  return result;
};

/**
 * Finds a category by propery in the flattened list
 *
 * @param flatCategories - The flattened categories array
 * @param categoryProperty - The property name of the category to find
 * @param propertyValue - The value of the category to find
 * @returns The found category or undefined
 *
 * @example
 * const category = findCategoryByProperty(flatCategories, 'id', 39);
 * console.log(category?.title); // "Solarne Ploče"
 * console.log(category?.parentCategories.map(c => c.title));
 * // ["Bijela Tehnika", "Aspiratori", "Solarne Ploče"]
 */
export const findCategoryByProperty = (
  flatCategories: TFlattenedCategory[],
  categoryProperty: "id" | "slug",
  propertyValue: string
): TFlattenedCategory | undefined => {
  return flatCategories.find(
    (category) => category[categoryProperty] === propertyValue
  );
};

/**
 * Finds categories by a specific level (depth)
 *
 * @param flatCategories - The flattened categories array
 * @param level - The level to filter by (0 = root level)
 * @returns Array of categories at the specified level
 *
 * @example
 * const rootCategories = findCategoriesByLevel(flatCategories, 0);
 * const secondLevelCategories = findCategoriesByLevel(flatCategories, 1);
 */
export const findCategoriesByLevel = (
  flatCategories: TFlattenedCategory[],
  level: number
): TFlattenedCategory[] => {
  return flatCategories.filter((category) => category.level === level);
};

/**
 * Gets the parent titles as a breadcrumb string
 *
 * @param category - The flattened category
 * @param separator - The separator to use between titles (default: " > ")
 * @returns Breadcrumb string of parent titles
 *
 * @example
 * const breadcrumb = getCategoryBreadcrumb(solarneCategory);
 * // Returns: "Bijela Tehnika > Aspiratori > Solarne Ploče"
 */
export const getCategoryBreadcrumb = (
  category: TFlattenedCategory
): { href: string; title: string }[] => {
  return category.parentCategories.map((cat) => ({
    href: cat.href,
    title: cat.title,
  }));
};

/**
 * Finds all children of a specific category in the flattened list
 *
 * @param flatCategories - The flattened categories array
 * @param parentId - The ID of the parent category
 * @returns Array of direct and indirect children
 *
 * @example
 * const children = findChildrenOfCategory(flatCategories, 1); // Bijela Tehnika
 * // Returns all subcategories under "Bijela Tehnika"
 */
export const findChildrenOfCategory = (
  flatCategories: TFlattenedCategory[],
  parentId: string
): TFlattenedCategory[] => {
  return flatCategories.filter(
    (category) =>
      category.parentCategories.some((parent) => parent.id === parentId) &&
      category.id !== parentId // Exclude the parent itself
  );
};
