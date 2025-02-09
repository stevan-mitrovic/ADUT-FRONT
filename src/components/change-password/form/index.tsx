"use client";
import styles from "./index.module.scss";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import InputField from "@/ui/form/inputField";
import Typography from "@/ui/typography";
import { Button } from "@/ui/buttons";
import { changePasswordSchema } from "@/schemas/changePasswordSchema";
import axios from "axios";
import { useRouter } from "next/navigation";

export default function ChangePassword() {
  const router = useRouter();
  const { control, handleSubmit } = useForm({
    resolver: yupResolver(changePasswordSchema),
    defaultValues: {
      password: "",
      confirmPassword: ""
    },
  });

  const onSubmit = async (formData: any, event: any) => {
    console.log("Form Data:", formData);

    event.preventDefault();

    try {
      const response = await axios.post("/api/auth/change-password", formData);
      console.log("response");
      console.log(response);
      router.push("/auth/change-password/success");
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
          Promjena lozinke
        </Typography>
        <InputField
          name="password"
          control={control}
          label="Lozinka"
          type="password"
          placeholder="*********"
          textAlign="center"
        />
        <InputField
          name="confirmPassword"
          control={control}
          label="Ponovi lozinku"
          type="password"
          placeholder="*********"
          textAlign="center"
        />
        <Button.Primary type="submit" widthFull font="bold" size="large">
          Sačuvaj
        </Button.Primary>
      </form>
    </div>
  );
}
