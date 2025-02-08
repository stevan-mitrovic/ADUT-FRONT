import { create } from "zustand";
import axios from "axios";
import { UserType } from "@/types/user";
import { userType } from "@/constants/user";

/**
 * Represents the authentication state and available actions.
 * @typedef {Object} AuthState
 * @property {{ id: number, name: string, email: string } | null} user - The currently authenticated user or null if not logged in.
 * @property {boolean} isAuthenticated - Whether the user is authenticated.
 * @property {UserType} userType - The type of user (e.g., guest, admin).
 * @property {boolean} isLoading - Indicates if authentication data is being fetched.
 * @property {() => Promise<void>} fetchUser - Fetches the user data from the API if a valid token exists.
 * @property {() => void} logout - Logs out the user by clearing state and calling the logout API.
 */
interface AuthState {
  user: { id: number; name: string; email: string } | null;
  isAuthenticated: boolean;
  userType: UserType;
  isLoading: boolean;
  fetchUser: () => Promise<void>;
  logout: () => void;
}

/**
 * Zustand store for managing user authentication state.
 * Provides functions for fetching user data and logging out.
 *
 * @returns {AuthState} The authentication state and actions.
 */
export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  isAuthenticated: false,
  userType: userType.GUEST,
  isLoading: true,

  /**
   * Fetches user data from the API if a valid token exists in cookies.
   * Updates the Zustand store with the user details or sets state as guest if the request fails.
   *
   * @async
   * @function fetchUser
   * @returns {Promise<void>}
   */
  fetchUser: async () => {
    try {
      const response = await axios.get("/api/user");
      console.log("User API response:", response);

      set({
        user: response?.data?.data,
        isAuthenticated: true,
        userType: response?.data?.userType,
        isLoading: false,
      });
    } catch (error) {
      set({
        user: null,
        isAuthenticated: false,
        userType: userType.GUEST,
        isLoading: false,
      });
    }
  },

  /**
   * Logs out the user by calling the API and resetting the authentication state.
   *
   * @async
   * @function logout
   * @returns {Promise<void>}
   */
  logout: async () => {
    await axios.post("/api/logout");

    set({
      user: null,
      isAuthenticated: false,
      userType: userType.GUEST,
      isLoading: false,
    });
  },
}));
