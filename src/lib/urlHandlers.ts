// Route generation functions for ecommerce site

import { TCategories, TCategory } from "@/types/categoriesMenu";
import { TProduct } from "@/types/product";

/**
 * Create a URL-friendly slug from a string
 * @param {string} text - The text to convert to a slug
 * @returns {string} URL-friendly slug
 */
export const createSlug = (text: string) => {
  return text
    .toLowerCase()                    // Convert to lowercase
    .trim()                          // Remove leading/trailing whitespace
    .replace(/[^\w\s-]/g, '')        // Remove all non-word chars except spaces and hyphens
    .replace(/[\s_-]+/g, '-')        // Replace spaces, underscores, and multiple hyphens with single hyphen
    .replace(/^-+|-+$/g, '');        // Remove leading/trailing hyphens
};

/**
 * Generate route to product page
 * @param {Object} product - Product object with slug property
 * @param {string} product.slug - Product slug
 * @returns {string} Product page route
 */
export const getProductRoute = (product: TProduct) => {
  return `/p/${product.slug}`;
};

/**
 * Generate route to category page
 * @param {Object} category - Category object with name property
 * @param {string} category.title - Category name
 * @returns {string} Category page route
 */
export const getCategoryRoute = (category: TCategory) => {
    const slug = createSlug(category.title);
  return `/c/${slug}`;
};

/**
 * Generate route to subcategory page
 * @param {Object} category - Parent category object with slug property
 * @param {Object} subcategory - Subcategory object with slug property
 * @returns {string} Subcategory page route
 */
export const getSubcategoryRoute = (category: TCategory, subcategory: TCategory) => {
  return `/c/${category.title}/${subcategory.title}`;
};

// Optional: Route constants for static pages
export const ROUTES = {
  HOME: "/",
  CART: "/cart",
  CHECKOUT: "/checkout",
  ACCOUNT: "/account",
  SEARCH: "/search",
  ABOUT: "/about",
  CONTACT: "/contact",
};
