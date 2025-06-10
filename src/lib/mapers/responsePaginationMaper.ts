import { isPositiveNumber } from "@/lib/validators";

type TPagination = {
  current: number;
  limit: number;
  totalPages: number;
  totalItems: number;
};

/**
 * Maps raw API user response data to a structured frontend-friendly format.
 *
 * @function PaginationResponseMapper
 * @param {any} data - The raw product data received from the API.
 * @returns {Object} A mapped pagination object.
 */
export function PaginationResponseMapper(data: any): TPagination {
  return {
    current: data?.current_page || null,
    limit: data?.per_page || null,
    totalPages: isPositiveNumber(data?.total_pages) ? data?.total_pages : null,
    totalItems: isPositiveNumber(data?.total_items) ? data?.total_items : null,
  };
}
