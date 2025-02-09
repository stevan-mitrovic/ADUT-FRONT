"use client";
import styles from "./index.module.scss";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import InputField from "@/ui/form/inputField";
import Typography from "@/ui/typography";
import { Button } from "@/ui/buttons";
import { registrationSchema } from "@/schemas/registrationSchema";
import { useRouter } from "next/navigation";
import axios from "axios";
import { useAuthStore } from "@/store/authStore";

export default function Register() {
  const router = useRouter();
  const fetchUser = useAuthStore((state) => state.fetchUser);
  const { control, handleSubmit } = useForm({
    resolver: yupResolver(registrationSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      phone: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  const onSubmit = async (formData: any, event: any) => {
    console.log("Form Data:", formData);

    event.preventDefault();

    try {
      const response = await axios.post("/api/auth/register", formData);
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
          Registracija
        </Typography>
        <div className={styles["name-box"]}>
          <InputField
            name="firstName"
            control={control}
            label="Ime"
            placeholder="Ime"
          />
          <InputField
            name="lastName"
            control={control}
            label="Prezime"
            placeholder="Prezime"
          />
        </div>
        <InputField
          name="phone"
          control={control}
          label="Telefon"
          placeholder="Telefon"
        />
        <InputField
          name="email"
          control={control}
          label="Email"
          placeholder="npr. myemail@email.com"
        />
        <InputField
          name="password"
          control={control}
          label="Lozinka"
          type="password"
          placeholder="*********"
        />
        <InputField
          name="confirmPassword"
          control={control}
          label="Ponovi lozinku"
          type="password"
          placeholder="*********"
        />
        <Button.Primary type="submit" widthFull font="bold" size="large">
          Registruj se
        </Button.Primary>
      </form>
    </div>
  );
}
