"use client";
import styles from "./index.module.scss";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import InputField from "@/ui/form/inputField";
import Typography from "@/ui/typography";
import { Button } from "@/ui/buttons";
import { forgotPasswordSchema } from "@/schemas/forgotPasswordSchema";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function ForgotPassword() {
  const router = useRouter();
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
      router.push("/auth/forgot-password/success");
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
        <Typography
          variant="p"
          className={styles.title}
          textAlign="center"
          fontWeight={"400"}
        >
          Unesite vaš email da bi ste dobili link za promjenu lozinke
        </Typography>
        <InputField
          name="email"
          control={control}
          label="Email"
          placeholder="npr. myemail@email.com"
          textAlign="center"
        />
        <Link href="/auth/login">
          <Typography
            variant="span"
            className={styles["forgot-password"]}
            textAlign="center"
            // color="#76AD30"
          >
            {"< Nazad na login"}
          </Typography>
        </Link>
        <Button.Primary type="submit" widthFull font="bold" size="large">
          Pošalji link
        </Button.Primary>
      </form>
    </div>
  );
}
