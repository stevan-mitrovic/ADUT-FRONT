"use client";
import styles from "./index.module.scss";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Typography from "@/ui/typography";
import { Button } from "@/ui/buttons";
import { forgotPasswordSchema } from "@/schemas/forgotPasswordSchema";
import axios from "axios";
import Link from "next/link";
import MailSentIcon from "@/ui/icons/mailSent";

export default function ForgotPasswordSuccess() {
  const { control, handleSubmit } = useForm({
    resolver: yupResolver(forgotPasswordSchema),
    defaultValues: {
      email: "",
    },
  });

  const onSubmit = async (formData: any, event: any) => {
    console.log("Form Data:", formData);

    event.preventDefault();

    try {
      const response = await axios.post("/api/auth/forgot-password", formData);
      console.log("response");
      console.log(response);
    } catch (error) {
      console.log("error");
      console.log(error);
    }
  };

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
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
      </form>
    </div>
  );
}
