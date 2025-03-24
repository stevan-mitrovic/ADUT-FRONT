export type TUserType = "guest" | "user";

export type TUserData = {
  id: number | null;
  firstName?: string;
  lastName?: string;
  phone?: string;
  email?: string;
  address?: string;
  city?: string;
  municipality?: string;
};