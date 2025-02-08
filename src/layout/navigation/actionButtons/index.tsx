import React from "react";
import RegisteredUserActions from "./RegisteredUserActions";
import GuestUserActions from "./GuestUserActions";
import { useAuthStore } from "@/store/authStore";
import { userType } from "@/constants/user";

interface Props {
  isMobileView: boolean;
}

const ActionButtons: React.FC<Props> = ({ isMobileView }: Props) => {
  const { userType: storeUserType } = useAuthStore();
  console.log("store user type");
  console.log(storeUserType);

  return storeUserType === userType.USER ? (
    <RegisteredUserActions isMobileView={isMobileView} />
  ) : (
    <GuestUserActions isMobileView={isMobileView} />
  );
};

export default ActionButtons;
