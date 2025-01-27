import React from "react";
import styles from "../index.module.scss";
import { Button } from "../../../ui/buttons";
import UserPlusIcon from "../../../ui/icons/userPlus";
import LoginIcon from "../../../ui/icons/login";

type Props = {
  isMobileView: boolean;
};

const GuestUserActions: React.FC<Props> = ({ isMobileView }: Props) => {
  const onProfileClick = () => {
    console.log("Go to profile");
  };
  const onCardClick = () => {
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
          <Button.Icon onClick={onCardClick} as="a" icon={<LoginIcon />} />
        </>
      ) : (
        <>
          <Button.White as="a" onClick={onProfileClick} icon={<UserPlusIcon />}>
            Registracija
          </Button.White>
          <Button.White as="a" onClick={onCardClick} icon={<LoginIcon />}>
            Login
          </Button.White>
        </>
      )}
    </div>
  );
};

export default GuestUserActions;
