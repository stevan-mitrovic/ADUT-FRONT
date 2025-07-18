"use client";
import styles from "./index.module.scss";
import Typography from "@/ui/typography";
import Link from "next/link";
import MailSentIcon from "@/ui/icons/mailSent";

export default function ForgotPasswordSuccess() {
  return (
    <div className={styles.container}>
      <div className={styles.form}>
        <Typography
          variant="h4"
          as="h1"
          className={styles.title}
          textAlign="center"
          fontWeight={"700"}
        >
          Zaboravljena lozinka
        </Typography>
        <Typography variant="p" className={styles.subtitle} textAlign="center">
          Link za promjenu lozinke je uspješno poslat na vaš e-mail.
        </Typography>
        <div className={styles["mail-sent-icon"]}>
          <MailSentIcon />
        </div>
        <Typography variant="p3" textAlign="center" className={styles.info}>
          Molimo vas pratite uputstva iz e-maila da bi ste promijenili lozinku.
        </Typography>
        <Link href="/auth/login">
          <Typography
            variant="span"
            className={styles["forgot-password"]}
            textAlign="center"
          >
            {"< Nazad na login"}
          </Typography>
        </Link>
      </div>
    </div>
  );
}
