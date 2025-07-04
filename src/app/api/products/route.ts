//@ts-nocheck
import { NextResponse } from "next/server";
import api from "@/lib/api/axiosConfig";
import { validateProductsQueryParams } from "./productsValidator";
import { mapProducts } from "@/lib/mapers/productMaper";
import { PaginationResponseMapper } from "@/lib/mapers/responsePaginationMaper";

/**
 * Handles the retrieval of products list.
 * This request does not require user token.
 *
 * @async
 * @function GET
 * @param {Request} request - The incoming request object
 * @returns {Promise<NextResponse>} A JSON response containing products list.
 */
export async function GET(request: Request): Promise<NextResponse> {
  try {
    // Extract query parameters from the URL
    const { searchParams } = new URL(request.url);

    // Validate query parameters
    const validation = validateProductsQueryParams(searchParams);

    if (!validation.isValid) {
      return NextResponse.json({ error: validation.error }, { status: 400 });
    }

    // Make request to external API using configured axios instance
    const response = await api.get("/api/products", {
      params: validation.params,
    });


    // Map raw API response to frontend-friendly format
    const productsRes = mapProducts(response.data.data.items);

    const paginationRes = PaginationResponseMapper(
      response.data.data.pagination
    );

    return NextResponse.json(
      { items: productsRes, pagination: paginationRes },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error fetching products:", error);

    // Handle axios error specifically
    if (api.isAxiosError && api.isAxiosError(error)) {
      const status = error?.response?.status || 500;
      const message =
        error?.response?.data?.message || "Failed to fetch products";

      return NextResponse.json({ error: message }, { status });
    }

    return NextResponse.json(
      { error: "Failed to fetch products" },
      { status: 500 }
    );
  }
}
