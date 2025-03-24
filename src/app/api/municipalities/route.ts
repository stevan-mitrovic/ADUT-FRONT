import { NextResponse } from "next/server";
import { MunicipalityResponseMapper } from "@/lib/mapers/municipalityMaper";
import { municipalities } from "@/constants/testingData";

/**
 * Handles the retrieval of municipalities list.
 * This request does not require user token.
 *
 * @async
 * @function GET
 * @returns {Promise<NextResponse>} A JSON response containing municipalities status.
 */
export async function GET(): Promise<NextResponse> {
  try {
    /**
     * Simulated API response delay.
     * This mimics fetching municipalities from a database or external API.
     *
     * @returns {Promise<{ data: any }>}
     */
    const response = await new Promise<{ data: any }>((resolve, reject) => {
      setTimeout(() => {
        try {
          resolve({
            data: municipalities,
          });
        } catch (err) {
          reject({ message: err });
        }
      }, 500); // Simulated 500ms delay
    });

    // Map raw API response to frontend-friendly format
    const municipalitiesRes = response.data.map((municipality: any) =>
      MunicipalityResponseMapper(municipality)
    );

    return NextResponse.json(municipalitiesRes, { status: 200 });
  } catch (error) {
    console.error("Error fetching municipalities:", error);

    return NextResponse.json([], { status: 500 });
  }
}
