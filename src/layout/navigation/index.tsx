import React from "react";
import styles from "./index.module.scss";
import NavigationDesktop from "./NavigationDesktop";
import NavigationMobile from "./NavigationMobile";
import useDeviceDetect from "../../hooks/useDeviceDetect";
import { DEVICE_TYPE } from "../../constants";
import { log } from "console";

const Navigation: React.FC = () => {
  const isMobile = useDeviceDetect() === DEVICE_TYPE.MOBILE;

  console.log("is mobile ", isMobile);

  return (
    <nav className={styles.navigation}>
      {isMobile ? <NavigationMobile /> : <NavigationDesktop />}
    </nav>
  );
};

export default Navigation;
