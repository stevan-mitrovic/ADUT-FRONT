"use client";
import styles from "./index.module.scss";
import Typography from "@/ui/typography";
import Link from "next/link";
import PasswordChangedIcon from "@/ui/icons/passwordChanged";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function ChangPasswordSuccess() {
  const router = useRouter();

  useEffect(() => {
    const timeout = setTimeout(() => {
      router.push("/auth/login");
    }, 3000);
    return () => {
      clearTimeout(timeout);
    };
  }, []);

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
          Promjena lozinke
        </Typography>
        <Typography variant="p" className={styles.subtitle} textAlign="center">
          Vaša nova lozinka je upješno sačuvana.
        </Typography>
        <div className={styles["mail-sent-icon"]}>
          <PasswordChangedIcon />
        </div>
        <Typography variant="p3" textAlign="center" className={styles.info}>
          Bićete preusmjereni na login za 3, 2, 1.
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
