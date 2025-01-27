import React from "react";
import RegisteredUserActions from "./RegisteredUserActions";
import GuestUserActions from "./GuestUserActions";

type Props = {
  isMobileView: boolean;
};

const ActionButtons: React.FC<Props> = ({ isMobileView }: Props) => {
  const isUserLoggedIn = false;

  return isUserLoggedIn ? (
    <RegisteredUserActions isMobileView={isMobileView} />
  ) : (
    <GuestUserActions isMobileView={isMobileView} />
  );
};

export default ActionButtons;
