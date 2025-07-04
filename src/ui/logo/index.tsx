import React from "react";
import Link from "next/link";
import styles from "./index.module.scss";
import { fonts } from "../fonts";
import { COMPANY_INFO } from "@/constants/companyInfo";

/**
 * A reusable logo component that displays the company logo and optionally the company name.
 *
 * @example
 * // Default logo with company name
 * <Logo />
 *
 * @example
 * // Short version with only the logo image
 * <Logo short={true} />
 */
interface Props {
    /**
     * If true, only the logo image is displayed without the company name.
     * @default false
     */
    short?: boolean;
}

/**
 * Logo Component
 *
 * Displays the company logo with an optional company name. Links to the homepage when clicked.
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