//@ts-nocheck
import { NextResponse } from "next/server";
// import { setAuthCookie } from "@/lib/cookes";
// import { testingData } from "@/constants/testingData";

/**
 * Handles the request for changed password.
 *
 * @param {Request} req - The incoming request object containing the user's new password.
 * @returns {Promise<NextResponse>} - A JSON response indicating success or failure.
 */
export async function POST(req: Request): Promise<NextResponse> {
  try {
    /** @type {{ email: string }} */
    // const { password } = await req.json(); // Parse request body

    /**
     * Simulates the process.
     * Resolves with a success.
     *
     * @returns {Promise<{ token: string }>}
     */
    // const data = await new Promise<{ success: boolean }>((resolve, reject) => {
    //   setTimeout(() => {
    //     resolve({ success: true });
    //   }, 500);
    // });

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error: any) {
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
}
