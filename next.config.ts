import type { NextConfig } from "next";
const path = require("path");

const nextConfig: NextConfig = {
  /* config options here */
  sassOptions: {
    includePaths: [path.join(__dirname, "src", "ui", "variables")],
    prependData: `@import "_colors.scss"; @import "_global.scss";`,
  },
};

export default nextConfig;
