import React from "react";
import Link from "next/link";
import styles from "./index.module.scss";
import { fonts } from "../fonts";
import { COMPANY_INFO } from "../../constants/companyInfo";

/**
 * Logo Component
 * A reusable logo component that can optionally display a shortened version.
 *
 * @module Logo
 */

/**
 * Props for the Logo component.
 *
 * @typedef {Object} Props
 * @property {boolean} [short=false] - If true, only the logo image is displayed; otherwise, the company name is also displayed.
 */
type Props = {
  short?: boolean;
};

/**
 * Logo Component
 * Renders the company logo, with an optional flag to show only the logo image or include the company name.
 *
 * @param {Props} props - The properties object for the Logo component.
 * @returns {JSX.Element} - The rendered Logo component.
 */
const Logo: React.FC<Props> = ({ short = false }: Props) => {
  return (
    <Link href="/" className={styles.container}>
      <img src="/logo.svg" alt="Adut" />
      {!short && <span className={fonts.lexend}>{COMPANY_INFO.NAME}</span>}
    </Link>
  );
};

export default Logo;
