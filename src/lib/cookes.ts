"use server";

import { cookies } from "next/headers";

/**
 * Sets an authentication token in the HTTP-only cookies.
 *
 * @async
 * @function setAuthCookie
 * @param {string} token - The JWT token to store in cookies.
 * @returns {Promise<void>}
 */
export async function setAuthCookie(token: string): Promise<void> {
  const cookieStore = await cookies();

  cookieStore.set("auth_token", token, {
    httpOnly: true, // Prevents JavaScript access (security best practice)
    secure: process.env.NODE_ENV === "production", // Only secure in production
    sameSite: "strict", // Prevents CSRF attacks
    maxAge: 60 * 60, // Token expires in 1 hour
    path: "/",
  });
}

/**
 * Removes the authentication token from cookies.
 *
 * @async
 * @function removeAuthCookie
 * @returns {Promise<void>}
 */
export async function removeAuthCookie(): Promise<void> {
  const cookieStore = await cookies();
  console.log("Deleting auth cookie");
  cookieStore.delete("auth_token");
}

/**
 * Retrieves the authentication token from cookies.
 *
 * @async
 * @function getAuthToken
 * @returns {Promise<string | null>} The authentication token if available, otherwise null.
 */
export async function getAuthToken(): Promise<string | null> {
  const cookieStore = await cookies();
  return cookieStore.get("auth_token")?.value || null;
}
