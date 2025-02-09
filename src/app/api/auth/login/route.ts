import { NextResponse } from "next/server";
import { setAuthCookie } from "@/lib/cookes";
import { testingData } from "@/constants/testingData";

/**
 * Handles the login request.
 *
 * @param {Request} req - The incoming request object containing the user's email and password.
 * @returns {Promise<NextResponse>} - A JSON response indicating success or failure.
 */
export async function POST(req: Request): Promise<NextResponse> {
  try {
    /** @type {{ email: string, password: string }} */
    const { email, password } = await req.json(); // Parse request body

    /**
     * Simulates an authentication process.
     * Resolves with a mocked JWT token if credentials match.
     * Rejects with "Invalid credentials" otherwise.
     *
     * @returns {Promise<{ token: string }>}
     */
    const data = await new Promise<{ token: string }>((resolve, reject) => {
      setTimeout(() => {
        if (
          email === testingData.USER.email &&
          password === testingData.USER.password
        ) {
          resolve({ token: testingData.USER.token });
        } else {
          reject("Invalid credentials"); // Rejecting with a string
        }
      }, 500);
    });

    // Store JWT token in httpOnly cookies
    await setAuthCookie(data?.token);

    return NextResponse.json(
      { success: true, user: data?.token },
      { status: 200 }
    );
  } catch (error: any) {
    if (error === "Invalid credentials") {
      return NextResponse.json(
        { message: "Invalid credentials" },
        { status: 401 }
      );
    }

    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
}
