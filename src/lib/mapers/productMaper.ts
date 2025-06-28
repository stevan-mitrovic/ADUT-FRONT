import { TProduct } from "@/types/product";
import { BrandResponseMapper } from "./brandMaper";
import { formatEuroPrice } from "../formatters";

/**
 * Maps raw API user response data to a structured frontend-friendly format.
 *
 * @function ProductResponseMapper
 * @param {any} data - The raw product data received from the API.
 * @returns {Object} A mapped product object with default values for missing fields.
 */
export function ProductResponseMapper(data: any): TProduct {
  return {
    id: data?.id || null,
    name: data?.name || "",
    slug: data?.slug || "",
    brand: BrandResponseMapper(data?.brand),
    categories: data?.categories || [],
    price: {
      retail: data?.retail_price || 0,
      discounted: data?.discounted_retail_price || 0,
    },
    displayLabel: {
      retailPrice: formatEuroPrice(data?.retail_price),
      discountedRetailPrice: formatEuroPrice(data?.discounted_retail_price),
    },
  };
}

/**
 * Recursively maps an array of raw product data into structured `TProduct` objects.
 *
 * @function mapProducts
 * @param {any} products - The raw product list from the backend.
 * @returns {TMunicipality[]} The structured product list.
 */
export function mapProducts(products: any[]): TProduct[] {
  return products.map((product) => ProductResponseMapper(product));
}
