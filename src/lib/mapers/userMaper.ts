import { TUserData } from "@/types/user";
/**
 * Maps raw API user response data to a structured frontend-friendly format.
 *
 * @function UserResponseMapper
 * @param {any} data - The raw user data received from the API.
 * @returns {TUserData} A mapped user object with default values for missing fields.
 */
export function UserResponseMapper(data: any): TUserData {
  return {
    id: data?.id || null,
    firstName: data?.firstName || "",
    lastName: data?.lastName || "",
    phone: data?.phone || "",
    email: data?.email || "",
    address: data?.address || "",
    city: data?.city || "",
    municipality: data?.municipality || "",
  };
}
