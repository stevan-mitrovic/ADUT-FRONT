/**
 * Maps raw authentication response data from the backend to a structured format.
 *
 * @function AuthResponseMapper
 * @param {any} data - The raw authentication response data from the backend.
 * @returns {Object} A formatted authentication response containing the token and user details.
 */
export function AuthResponseMapper(data: any): {
  token: string;
  user: {
    id: number;
    email: string;
    name: string;
  };
} {
  return {
    token: data.access_token, // Backend sends 'access_token', we rename to 'token'
    user: {
      id: data.user.id,
      email: data.user.email,
      name: data.user.name,
    },
  };
}
