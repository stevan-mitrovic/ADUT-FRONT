import { TRefinedItem, TRefinedItemSpecification } from "@/types/product";
import { BrandResponseMapper } from "./brandMaper";
import { formatEuroPrice } from "../formatters";

/**
 * Maps raw API user response data to a structured frontend-friendly format.
 *
 * @function RefinedItemSpecificationResponseMapper
 * @param {any} data - The raw refined item specification data received from the API.
 * @returns {Object} A mapped refined item specification object with default values for missing fields.
 */
export function RefinedItemSpecificationResponseMapper(
  data: any
): TRefinedItemSpecification {
  return {
    id: data?.id || null,
    name: data?.name || "",
    value: data?.value || "",
    colorHex: data?.color_hex || null,
    isHighlited: data?.isHighlited,
  };
}

/**
 * Recursively maps an array of raw refined item specification data into structured `TRefinedItemSpecification` objects.
 *
 * @function mapRefinedItemSpecifications
 * @param {any} refinedItemSpecification - The raw refined item specifications list from the backend.
 * @returns {TMunicipality[]} The structured refined item specifications list.
 */
export function mapRefinedItemSpecifications(
  refinedItemSpecifications: any[]
): TRefinedItemSpecification[] {
  return refinedItemSpecifications.map((refinedItemSpecification) =>
    RefinedItemSpecificationResponseMapper(refinedItemSpecifications)
  );
}

/**
 * Maps raw API user response data to a structured frontend-friendly format.
 *
 * @function RefinedItemResponseMapper
 * @param {any} data - The raw refined item data received from the API.
 * @returns {Object} A mapped refined item object with default values for missing fields.
 */
export function RefinedItemResponseMapper(data: any): TRefinedItem {
  return {
    id: data?.id || null,
    name: data?.name || "",
    brand: BrandResponseMapper(data?.brand),
    category: data?.category,
    specification: mapRefinedItemSpecifications(data?.refined_items || []),
    productId: data?.product_id || null,
    description: data?.description || "",
    images: data?.images || [],
    distinctiveTrait: data?.distinctive_trait_id
      ? {
          id: data?.distinctive_trait_id,
          name: data?.distinctive_trait_name || "",
          value: data?.distinctive_trait_value || "",
          additional: data?.distinctive_trait_additional || "",
        }
      : null,
    price: {
      retail: data?.retail_price || 0,
      discounted: data?.discounted_retail_price || 0,
    },
    displayLabel: {
      retailPrice: formatEuroPrice(data?.retail_price),
      discountedRetailPrice: formatEuroPrice(data?.discounted_retail_price),
    },
    isAvailable: data?.is_available,
  };
}

/**
 * Recursively maps an array of raw refined items data into structured `TRefinedItem` objects.
 *
 * @function mapRefinedItems
 * @param {any} products - The raw refined items list from the backend.
 * @returns {TMunicipality[]} The structured refined items list.
 */
export function mapRefinedItems(refinedItems: any[]): TRefinedItem[] {
  return refinedItems.map((refinedItem) =>
    RefinedItemResponseMapper(refinedItem)
  );
}
