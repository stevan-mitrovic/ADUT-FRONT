import React from "react";
import { clsx } from "clsx";
import styles from "./index.module.scss";
import Logo from "../../ui/logo";
import { Button } from "../../ui/buttons";
import { COMPANY_INFO } from "../../constants/companyInfo";
import FooterIcon from "../../ui/icons/footerIcon";
import FooterIconMobile from "../../ui/icons/footerIconMobile";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={clsx(styles.footer)}>
      <div>
        <div className={styles.icon}>
          <FooterIcon />
          <FooterIconMobile />
        </div>
        <div className={styles.container}>
          <div className={styles.leftSide}>
            <Logo />
            <ul>
              <li>
                <a href="/">Opšti uslovi</a>
              </li>
              <li>
                <a href="/">Politika privatnosti</a>
              </li>
              <li>
                <a href="/">Kupovina na rate</a>
              </li>
              <li>
                <a href="/">Online plaćanje</a>
              </li>
              <li>
                <a href="/">Ovlašćeni servisi</a>
              </li>
            </ul>
          </div>
          <div className={styles.rightSide}>
            <div className={styles.address}>
              <a href="/" className={styles.bold}>
                {COMPANY_INFO.FULL_NAME}
              </a>
              <a
                href={COMPANY_INFO.ADDRESS}
                target="_blank"
                rel="noopener noreferrer"
              >
                {COMPANY_INFO.STREET}
              </a>

              <span>
                {COMPANY_INFO.CITY}, {COMPANY_INFO.COUNTRY}
              </span>
            </div>
            <div className={styles.contact}>
              <a href={`mailto:${COMPANY_INFO.EMAIL}`}>{COMPANY_INFO.EMAIL}</a>
              <a href={`tel:${COMPANY_INFO.PHONE}`}>{COMPANY_INFO.PHONE}</a>
            </div>
            <div className={styles.actions}>
              <Button.White
                className={styles.btn}
                onClick={() => console.log("Postavi pitanje")}
              >
                Postavi pitanje
              </Button.White>
              <Button.Black
                className={styles.btn}
                onClick={() => console.log("Postani partner")}
              >
                Postani partner
              </Button.Black>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.copyright}>
        <div>
          &#169; {currentYear} {COMPANY_INFO.FULL_NAME.toLocaleLowerCase()}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
