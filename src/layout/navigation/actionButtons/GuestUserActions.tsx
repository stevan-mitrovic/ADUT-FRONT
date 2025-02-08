import React from "react";
import styles from "../index.module.scss";
import { Button } from "../../../ui/buttons";
import UserPlusIcon from "../../../ui/icons/userPlus";
import LoginIcon from "../../../ui/icons/login";

interface Props {
  isMobileView: boolean;
}

const GuestUserActions: React.FC<Props> = ({ isMobileView }: Props) => {
  const onProfileClick = () => {
    console.log("Go to profile");
  };

  return (
    <div className={styles.buttons}>
      {isMobileView ? (
        <>
          <Button.Icon
            onClick={onProfileClick}
            as="a"
            icon={<UserPlusIcon />}
          />
          <Button.Icon as="a" href={"/login"} icon={<LoginIcon />} />
        </>
      ) : (
        <>
          <Button.White as="a" onClick={onProfileClick} icon={<UserPlusIcon />}>
            Registracija
          </Button.White>
          <Button.White as="a" href={"/login"} icon={<LoginIcon />}>
            Login
          </Button.White>
        </>
      )}
    </div>
  );
};

export default GuestUserActions;
