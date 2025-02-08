import { NextResponse } from "next/server";
import { removeAuthCookie } from "@/lib/cookes";
import { userType } from "@/constants/user";

/**
 * Handles user logout by removing the authentication cookie and returning a success response.
 *
 * @async
 * @function POST
 * @returns {Promise<NextResponse>} A JSON response indicating success and setting the user type to guest.
 */
export async function POST(): Promise<NextResponse> {
  await removeAuthCookie();
  console.log("Auth cookie removed");

  return NextResponse.json(
    { success: true, userType: userType.GUEST },
    { status: 200 }
  );
}
