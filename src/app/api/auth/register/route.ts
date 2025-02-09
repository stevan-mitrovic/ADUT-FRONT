import { NextResponse } from "next/server";
import { setAuthCookie } from "@/lib/cookes";
import { testingData } from "@/constants/testingData";

/**
 * Handles the registration request.
 *
 * @param {Request} req - The incoming request object containing the user's data.
 * @returns {Promise<NextResponse>} - A JSON response indicating success or failure.
 */
export async function POST(req: Request): Promise<NextResponse> {
  try {
    /** @type {{ firstName: string, lastName: string, phone: string, email: string, password: string }} */
    const { firstName, lastName, phone, email, password } = await req.json(); // Parse request body

    /**
     * Simulates an registration process.
     * Resolves with a mocked JWT token.
     *
     * @returns {Promise<{ token: string }>}
     */
    const data = await new Promise<{ token: string }>((resolve, reject) => {
      setTimeout(() => {
        resolve({ token: testingData.USER.token });
      }, 500);
    });

    // Store JWT token in httpOnly cookies
    await setAuthCookie(data?.token);

    return NextResponse.json(
      { success: true, user: data?.token },
      { status: 200 }
    );
  } catch (error: any) {
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
}
