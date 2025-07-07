//@ts-nocheck
import { NextResponse } from "next/server";
import api from "@/lib/api/axiosConfig";
import { mapCategories } from "@/lib/mapers/categoryMaper";
import { TCategory } from "@/types/categoriesMenu";

type CacheType = {
  data: TCategory[];
  expires: number;
};

let cache: CacheType | null = null; // Global cache

const CACHE_TTL = 60 * 60 * 1000; // 60 minutes

/**
 * Handles the retrieval of the categories list.
 *
 * @async
 * @function GET
 * @returns {Promise<NextResponse>} A JSON response containing the mapped category list.
 */
export async function GET(): Promise<NextResponse> {
  try {
    const now = Date.now();

    // Return cached data if it's still valid
    if (cache && cache.expires > now) {
      return NextResponse.json({ data: cache.data }, { status: 200 });
    }

    const categoriesResponse = await api.get("/api/categories/tree");

    const categoriesRes = mapCategories(categoriesResponse.data.data.items);

    // Store in cache
    cache = {
      data: categoriesRes,
      expires: now + CACHE_TTL,
    };

    return NextResponse.json({ data: categoriesRes }, { status: 200 });
  } catch (error) {
    console.log("error");
    console.log(error);
    /**
     * If an error occurs, return a default category list instead of failing.
     */
    return NextResponse.json({ data: [] }, { status: 500 });
  }
}
