import { NextResponse } from "next/server";
import { getAuthToken } from "@/lib/cookes";
import { TUserData } from "@/types/user";
import { userType } from "@/constants/user";
import { UserResponseMapper } from "@/lib/mapers/userMaper";
import { testingData } from "@/constants/testingData";
import { usersList } from "@/constants/testingData";

/**
 * Handles the retrieval of user data based on the authentication token.
 * If a valid token is found, it returns user details; otherwise, it returns guest status.
 *
 * @async
 * @function GET
 * @returns {Promise<NextResponse>} A JSON response containing user data or guest status.
 */
export async function GET(): Promise<NextResponse> {
  try {
    const token = await getAuthToken();
    console.log("Token:", token);

    // If no token, return guest status
    if (!token) {
      return NextResponse.json({ userType: userType.GUEST }, { status: 200 });
    }

    /**
     * Simulated API response delay.
     * This mimics fetching user data from a database or external API.
     *
     * @returns {Promise<{ data: TUserData }>}
     */
    const response = await new Promise<{ data: TUserData }>((resolve) => {
      setTimeout(() => {
        resolve({
          data: {
            id: testingData.USER.id,
            firstName: testingData.USER.firstName,
            lastName: testingData.USER.lastName,
            phone: testingData.USER.phone,
            email: testingData.USER.email,
            address: testingData.USER.address,
            city: testingData.USER.city,
            municipality: testingData.USER.municipality,
          },
        });
      }, 500); // Simulated 500ms delay
    });

    // Map raw API response to frontend-friendly format
    const userData = UserResponseMapper(response.data);

    return NextResponse.json(
      { data: userData, userType: userType.USER },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error fetching user:", error);

    return NextResponse.json(
      { userType: userType.GUEST, data: null },
      { status: 200 }
    );
  }
}


/**
 * Handles the update of user data based on the authentication token.
 * If a valid token is found, it sends request to change user details; otherwise, it changes local user data.
 *
 * @async
 * @function PUT
 * @returns {Promise<NextResponse>} A JSON response containing request status.
 */
export async function PUT(req: Request, { params }: { params: {id: string } }): Promise<NextResponse> {
  try {
    const userId = params?.id;

    // If no user id, return guest status
    if (!userId) {
      return NextResponse.json(
        { message: "Method not awailable!" },
        { status: 404 }
      );
    }

    const user = usersList.find((data) => data?.id?.toString() === userId);

    // If no user id, return guest status
    if (!user) {
      return NextResponse.json(
        { message: "User not found!" },
        { status: 404 }
      );
    }

    /** @type {{ firstName: string, lastName: string, phone: string, email: string, address: string, city: string, municipality: string }} */
    const { firstName, lastName, phone, email, address, city, municipality } =
      await req.json(); // Parse request body

    const updatedUser = {
      ...user,
      firstName: firstName,
      lastName: lastName,
      phone: phone,
      email: email,
      address: address,
      city: city,
      municipality: municipality
    }

    // const token = await getAuthToken();
    // console.log("Token:", token);

    // // If no token, return guest status
    // if (!token) {
    //   return NextResponse.json({ userType: userType.GUEST }, { status: 200 });
    // }

    /**
     * Simulates an registration process.
     * Resolves with a mocked JWT token.
     *
     * @returns {Promise<{ token: string }>}
     */
    const data = await new Promise<{ success: boolean }>((resolve, reject) => {
      setTimeout(() => {
        resolve({ success: true });
      }, 500);
    });

    return NextResponse.json({ success: data.success }, { status: 200 });
  } catch (error) {
    console.error("Error fetching user:", error);

    return NextResponse.json(
      { success: false },
      { status: 500 }
    );
  }
}