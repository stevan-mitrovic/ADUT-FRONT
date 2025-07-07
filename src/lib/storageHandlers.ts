/**
 * Storage handlers for managing category and product IDs in session storage
 * These handlers provide a clean interface for storing and retrieving navigation state
 */

/**
 * Sets a category ID in session storage for a given category slug
 *
 * @param slug - The category slug (e.g., 'electronics', 'clothing')
 * @param categoryId - The category ID to store
 * @returns void
 *
 * @example
 * sessionSetCategoryId('electronics', '123');
 * // Stores 'category_electronics' -> '123' in sessionStorage
 */
export const sessionSetCategoryId = (
  slug: string,
  categoryId: string
): void => {
  try {
    if (isSessionStorageAvailable() && slug && categoryId) {
      sessionStorage.setItem(`category_${slug}`, categoryId);
    }
  } catch (error) {
    console.warn("Failed to set category ID in session storage:", error);
  }
};

/**
 * Retrieves a category ID from session storage for a given category slug
 *
 * @param slug - The category slug to retrieve the ID for
 * @returns The category ID if found, null otherwise
 *
 * @example
 * const categoryId = sessionGetCategoryId('electronics');
 * // Returns '123' if previously stored, null if not found
 *
 */
export const sessionGetCategoryId = (slug: string): string | null => {
  try {
    const key = `category_${slug}`;
    const categoryId = isSessionStorageAvailable()
      ? sessionStorage.getItem(key)
      : undefined;

    return categoryId;
  } catch (error) {
    console.warn("Failed to get category ID from session storage:", error);
    return null;
  }
};

/**
 * Sets a product ID in session storage for a given product slug
 *
 * @param slug - The product slug (e.g., 'awesome-widget', 'super-gadget')
 * @param productId - The product ID to store
 * @returns void
 *
 * @example
 * sessionSetProductId('awesome-widget', '456');
 * // Stores 'product_awesome-widget' -> '456' in sessionStorage
 */
export const sessionSetProductId = (slug: string, productId: number): void => {
  try {
    if (isSessionStorageAvailable() && slug && productId) {
      sessionStorage.setItem(`product_${slug}`, productId.toString());
    }
  } catch (error) {
    console.warn("Failed to set product ID in session storage:", error);
  }
};

/**
 * Retrieves a product ID from session storage for a given product slug
 *
 * @param slug - The product slug to retrieve the ID for
 * @returns The product ID if found, null otherwise
 *
 * @example
 * const productId = sessionGetProductId('awesome-widget');
 * // Returns '456' if previously stored, null if not found
 *
 */
export const sessionGetProductId = (slug: string): string | null => {
  try {
    const key = `product_${slug}`;
    const productId = isSessionStorageAvailable()
      ? sessionStorage.getItem(key)
        : undefined;

    return productId;
  } catch (error) {
    console.warn("Failed to get product ID from session storage:", error);
    return null;
  }
};

/**
 * Clears all category and product IDs from session storage
 * This is useful for cleanup operations or when user logs out
 *
 * @returns void
 *
 * @example
 * clearAllSessionIds();
 * // Removes all 'category_*' and 'product_*' items from sessionStorage
 */
export const clearAllSessionIds = (): void => {
  try {
    const keys = Object.keys(sessionStorage);
    keys.forEach((key) => {
      if (key.startsWith("category_") || key.startsWith("product_")) {
        sessionStorage.removeItem(key);
      }
    });
  } catch (error) {
    console.warn("Failed to clear storage IDs:", error);
  }
};

/**
 * Checks if session storage is available in the current environment
 *
 * @returns true if sessionStorage is available, false otherwise
 *
 * @example
 * if (isSessionStorageAvailable()) {
 *   setProductId('my-product', '123');
 * }
 */
export const isSessionStorageAvailable = (): boolean => {
  try {
    return (
      typeof window !== "undefined" && typeof sessionStorage !== "undefined"
    );
  } catch (error) {
    return false;
  }
};

/**
 * Type definitions for better type safety
 */
export type StorageKey = `category_${string}` | `product_${string}`;
export type StorageValue = string | null;
