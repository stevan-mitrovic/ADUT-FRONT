//@ts-nocheck
/**
 * Validates query parameters for product endpoint
 * Ensures either 'id' or 'slug' is provided but not both
 */
interface ProductQueryParams {
  id?: string;
  slug?: string;
}

interface ValidationResult {
  isValid: boolean;
  params?: ProductQueryParams;
  error?: string;
}

export function validateProductQueryParams(
  searchParams: URLSearchParams
): ValidationResult {
  const id = searchParams.get("id");
  const slug = searchParams.get("slug");

  // Check if neither id nor slug is provided
  if (!id && !slug) {
    return {
      isValid: false,
      error: "Either 'id' or 'slug' parameter is required",
    };
  }

  // Check if both id and slug are provided
  if (id && slug) {
    return {
      isValid: false,
      error: "Cannot provide both 'id' and 'slug' parameters. Use only one.",
    };
  }

  // Validate id format (should be numeric or UUID depending on your backend)
  if (id) {
    // Adjust this validation based on your ID format
    if (
      !/^\d+$/.test(id) &&
      !/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(
        id
      )
    ) {
      return {
        isValid: false,
        error: "Invalid id format. Expected numeric ID or UUID.",
      };
    }
  }

  // Validate slug format (alphanumeric with hyphens and underscores)
  if (slug) {
    if (!/^[a-zA-Z0-9_-]+$/.test(slug)) {
      return {
        isValid: false,
        error:
          "Invalid slug format. Only alphanumeric characters, hyphens, and underscores are allowed.",
      };
    }

    if (slug.length < 1 || slug.length > 100) {
      return {
        isValid: false,
        error: "Slug must be between 1 and 100 characters long.",
      };
    }
  }

  return {
    isValid: true,
    params: { id: id || undefined, slug: slug || undefined },
  };
}
