//@ts-nocheck
import { NextResponse } from "next/server";
import api from "@/lib/api/axiosConfig";
import { validateProductQueryParams } from "./productValidator";
import { ProductResponseMapper } from "@/lib/mapers/productMaper";

/**
 * Handles the retrieval of a single product by ID or slug.
 * This request does not require user token.
 *
 * @async
 * @function GET
 * @param {Request} request - The incoming request object
 * @returns {Promise<NextResponse>} A JSON response containing the product data.
 */
export async function GET(request: Request): Promise<NextResponse> {
  try {
    // Extract query parameters from the URL
    const { searchParams } = new URL(request.url);

    // Validate query parameters
    const validation = validateProductQueryParams(searchParams);

    if (!validation.isValid) {
      return NextResponse.json({ error: validation.error }, { status: 400 });
    }

    const { id, slug } = validation.params;

    // Make request to external API using configured axios instance
    const response = await api.get(`/api/products/${id ? id : slug}`);
    
    // Map raw API response to frontend-friendly format
    const productRes = ProductResponseMapper(response.data.data.item);

    return NextResponse.json({ product: productRes }, { status: 200 });
  } catch (error) {
    console.error("Error fetching products:", error);

    // Handle axios error specifically
    if (api.isAxiosError && api.isAxiosError(error)) {
      const status = error?.response?.status || 500;
      const message =
        error?.response?.data?.message || "Failed to fetch product";

      return NextResponse.json({ error: message }, { status });
    }

    return NextResponse.json(
      { error: "Failed to fetch product" },
      { status: 500 }
    );
  }
}
