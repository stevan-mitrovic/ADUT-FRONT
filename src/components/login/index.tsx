"use client";
import styles from "./index.module.scss";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import InputField from "@/ui/form/inputField";
import Typography from "@/ui/typography";
import { Button } from "@/ui/buttons";
import { loginSchema } from "@/schemas/loginSchema";
import { useRouter } from "next/navigation";
import axios from "axios";
import { useAuthStore } from "@/store/authStore";

export default function Login() {
  const router = useRouter();
  const fetchUser = useAuthStore((state) => state.fetchUser);
  const { control, handleSubmit } = useForm({
    resolver: yupResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (formData: any, event: any) => {
    console.log("Form Data:", formData);

    event.preventDefault();

    try {
      const response = await axios.post("/api/login", formData);
      console.log("response");
      console.log(response);

      await fetchUser();

      router.push("/");
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
          Log in
        </Typography>
        <InputField
          name="email"
          control={control}
          label="Email"
          placeholder="ex. myemail@email.com"
          textAlign="center"
        />
        <InputField
          name="password"
          control={control}
          label="Lozinka"
          type="password"
          placeholder="*********"
          textAlign="center"
        />
        <Typography
          variant="span"
          className={styles["forgot-password"]}
          textAlign="center"
        >
          Zaboravili ste lozinku?
        </Typography>
        <Button.Primary type="submit" widthFull font="bold" size="large">
          Login
        </Button.Primary>
      </form>
    </div>
  );
}
