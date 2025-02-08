import React from "react";
import styles from "../index.module.scss";
import { Button } from "@/ui/buttons";
import UserIcon from "@/ui/icons/user";
import ShoppingCartIcon from "@/ui/icons/shoppingCart";
import { useAuthStore } from "@/store/authStore";

interface Props {
  isMobileView: boolean;
}

const RegisteredUserActions: React.FC<Props> = ({ isMobileView }: Props) => {
  const { logout } = useAuthStore();
  const onProfileClick = () => {
    logout();
  };
  const onCardClick = () => {
    console.log("Go to profile");
  };

  console.log("is mobile registered ", isMobileView);

  return (
    <div className={styles.buttons}>
      {isMobileView ? (
        <>
          <Button.Icon onClick={onProfileClick} icon={<UserIcon />} />
          <Button.Icon onClick={onCardClick} icon={<ShoppingCartIcon />} />
        </>
      ) : (
        <>
          <Button.White onClick={onProfileClick} icon={<UserIcon />}>
            Moj nalog
          </Button.White>
          <Button.White onClick={onCardClick} icon={<ShoppingCartIcon />}>
            Korpa
          </Button.White>
        </>
      )}
    </div>
  );
};

export default RegisteredUserActions;
