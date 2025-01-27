import React from "react";
import { clsx } from "clsx";
import styles from "./index.module.scss";
import Logo from "../../ui/logo";
import SearchBar from "./searchBar";
import ActionButtons from "./actionButtons";

const NavigationDesktop: React.FC = () => {
  return (
    <div className={clsx(styles.container, styles["container-desktop"])}>
      <Logo />
      <SearchBar />
      <ActionButtons isMobileView={false} />
    </div>
  );
};

export default NavigationDesktop;
