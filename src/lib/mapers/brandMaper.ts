import { TBrand } from "@/types/brand";


/**
 * Maps raw API brand response data to a structured frontend-friendly format.
 *
 * @function BrandResponseMapper
 * @param {any} data - The raw brand data received from the API.
 * @returns {Object} A mapped brand object with default values for missing fields.
 */
export function BrandResponseMapper(data: any): TBrand {
  return {
    id: data?.id || null,
    name: data?.name || "",
  };
}
