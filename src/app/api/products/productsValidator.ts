//@ts-nocheck
// Define allowed query parameters
export const ALLOWED_PARAMS = [
  "limit",
  "page",
  "category",
  "brand",
  "search",
  "priceMin",
  "priceMax",
] as const;

// Define parameter validation rules
export const PARAM_LIMITS = {
  limit: { min: 1, max: 1000 },
  page: { min: 1, max: 1000 },
} as const;

// Define default parameters
export const PARAM_DEFAULTS = {
  limit: "10",
  page: "1",
} as const;

export interface ValidationResult {
  isValid: boolean;
  error?: string;
  params?: Record<string, string>;
}

/**
 * Validates query parameters against allowed parameters and their constraints
 */
export function validateProductsQueryParams(
  searchParams: URLSearchParams
): ValidationResult {
  const queryParams: Record<string, string> = {};
  const invalidParams: string[] = [];

  // Check for invalid parameters
  for (const [key] of searchParams.entries()) {
    if (!ALLOWED_PARAMS.includes(key as any)) {
      invalidParams.push(key);
    }
  }

  if (invalidParams.length > 0) {
    return {
      isValid: false,
      error: `Invalid parameter(s): ${invalidParams.join(
        ", "
      )}. Allowed parameters are: ${ALLOWED_PARAMS.join(", ")}`,
    };
  }

  // Validate and set parameters with defaults
  const limit = searchParams.get("limit") || PARAM_DEFAULTS.limit;
  const page = searchParams.get("page") || PARAM_DEFAULTS.page;
  const category = searchParams.get("category");
  const brand = searchParams.get("brand");
  const search = searchParams.get("search");
  const priceMin = searchParams.get("priceMin");
  const priceMax = searchParams.get("priceMax");

  // Validate limit
  const limitNum = parseInt(limit);
  if (
    isNaN(limitNum) ||
    limitNum < PARAM_LIMITS.limit.min ||
    limitNum > PARAM_LIMITS.limit.max
  ) {
    return {
      isValid: false,
      error: `Invalid limit. Must be between ${PARAM_LIMITS.limit.min} and ${PARAM_LIMITS.limit.max}`,
    };
  }

  // Validate page
  const pageNum = parseInt(page);
  if (
    isNaN(pageNum) ||
    pageNum < PARAM_LIMITS.page.min ||
    pageNum > PARAM_LIMITS.page.max
  ) {
    return {
      isValid: false,
      error: `Invalid page. Must be between ${PARAM_LIMITS.page.min} and ${PARAM_LIMITS.page.max}`,
    };
  }

  // Build valid query parameters
  queryParams.limit = limit;
  queryParams.page = page;
  if (category) queryParams["filter[category]"] = category;
  if (brand) queryParams["filter[brand]"] = brand;
  if (search) queryParams["filter[brand]"] = search;
  if (priceMin) queryParams["filter[priceMin]"] = priceMin;
  if (priceMax) queryParams["filter[priceMax]"] = priceMax;

  return { isValid: true, params: queryParams };
}
