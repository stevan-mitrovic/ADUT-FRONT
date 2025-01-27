import React from "react";
import clsx from "clsx";
import styles from "./index.module.scss";
import Logo from "../../ui/logo";
import SearchBar from "./searchBar";
import ActionButtons from "./actionButtons";

const NavigationMobile: React.FC = () => {
  return (
    <div className={clsx(styles.container, styles["container-mobile"])}>
      <Logo short />
      <SearchBar />
      <ActionButtons isMobileView={true} />
    </div>
  );
};

export default NavigationMobile;
