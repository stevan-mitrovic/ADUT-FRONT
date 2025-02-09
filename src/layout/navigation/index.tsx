import React from "react";
import styles from "./index.module.scss";
import dynamic from "next/dynamic";

const NavigationMobile = dynamic(() => import("./NavigationMobile"), {
  ssr: false,
});

const NavigationDesktop = dynamic(() => import("./NavigationDesktop"), {
  ssr: false,
});

const Navigation: React.FC = () => {

  return (
    <nav className={styles.navigation}>
      <div className={styles["nav-mobile"]}>
        <NavigationMobile />
      </div>
      <div className={styles["nav-desktop"]}>
        <NavigationDesktop />
      </div>
      {/* {isMobile ?  : } */}
    </nav>
  );
};

export default Navigation;
