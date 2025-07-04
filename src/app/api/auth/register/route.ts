//@ts-nocheck
import { NextResponse } from "next/server";
import { setAuthCookie } from "@/lib/cookes";
import { usersList } from "@/constants/testingData";

function getRandomIdNotInList(min = 1, max = 1000) {
  const ids = usersList.map((item) => item.id);

  let randomId;
  do {
    randomId = Math.floor(Math.random() * (max - min + 1)) + min;
  } while (ids.includes(randomId));

  return randomId;
}

function getRandomString(length = 10) {
  const chars =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let result = "";

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * chars.length);
    result += chars[randomIndex];
  }

  return result;
}

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

    const newUserToken = getRandomString();

    const newUser = {
      id: getRandomIdNotInList(),
      firstName: firstName,
      lastName: lastName,
      phone: phone,
      email: email,
      address: "",
      city: "",
      municipality: "",
      password: password,
      token: "mocked-jwt-token",
    };

    /**
     * Simulates an registration process.
     * Resolves with a mocked JWT token.
     *
     * @returns {Promise<{ token: string }>}
     */
    const data = await new Promise<{ token: string }>((resolve, reject) => {
      setTimeout(() => {
        usersList.push(newUser)
        resolve({ token: newUserToken });
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
