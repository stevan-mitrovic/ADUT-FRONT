import { useState, useEffect } from "react";
import { CONFIG, DEVICE_TYPE, BREAKPOINT } from "../constants";
import { TDeviceType } from "../types/deviceType";

type DeviceType = "mobile" | "tablet" | "desktop";

const useDeviceDetect = (serverSideDeviceType?: TDeviceType) => {
  const [deviceType, setDeviceType] = useState<TDeviceType>(
    serverSideDeviceType || DEVICE_TYPE.DESKTOP
  );

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width <= BREAKPOINT.MOBILE) {
        setDeviceType(DEVICE_TYPE.MOBILE);
      } else if (width > BREAKPOINT.MOBILE && width <= BREAKPOINT.TABLET) {
        setDeviceType(DEVICE_TYPE.TABLET);
      } else {
        setDeviceType(DEVICE_TYPE.DESKTOP);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return deviceType;
};

export default useDeviceDetect;
