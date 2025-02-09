import { NextResponse } from "next/server";
import {
  allSubcategories,
} from "@/constants/categoriesList";
import {
  mapCategories,
} from "@/lib/mapers/categoryMaper";
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

    console.log("cache");
    console.log(cache);

    // Return cached data if it's still valid
    if (cache && cache.expires > now) {
      return NextResponse.json({ data: cache.data }, { status: 200 });
    }

    /**
     * Simulated API response delay to mimic fetching categories from a database or external API.
     *
     * @returns {Promise<{ data: TCategory[] }>} A promise resolving to the category data.
     */
    const response = await new Promise<TCategory[]>((resolve) => {
      setTimeout(() => {

        resolve(mapCategories(allSubcategories));
      }, 500); // Simulated 500ms delay
    });

    // Store in cache
    cache = {
      data: response,
      expires: now + CACHE_TTL,
    };

    return NextResponse.json({ data: response }, { status: 200 });
  } catch (error) {

    /**
     * If an error occurs, return a default category list instead of failing.
     */
    return NextResponse.json(
      { data: [] },
      { status: 200 }
    );
  }
}
