//@ts-nocheck
"use client";
import React from "react";
import styles from "./index.module.scss";
import clsx from "clsx";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import InputField from "@/ui/form/inputField";
import Typography from "@/ui/typography";
import { Button } from "@/ui/buttons";
import { userProfileSchema } from "@/schemas/userProfileSchema";
import { useRouter } from "next/navigation";
import axios from "axios";
import { useAuthStore } from "@/store/authStore";
import { SelectField } from "@/ui/form/selectField";

export default function UserDataForm() {
  const router = useRouter();
  const user = useAuthStore((state) => state.user);
  const [municipalities, setMunicipalities] = React.useState([]);

  const { control, handleSubmit } = useForm({
    resolver: yupResolver(userProfileSchema),
    defaultValues: {
      firstName: user?.firstName,
      lastName: user?.lastName,
      email: user?.email,
      phone: user?.phone,
      address: user?.address,
      city: user?.city,
      municipality: user?.municipality,
    },
  });

  const onSubmit = async (formData: any, event: any) => {
    console.log("Form Data:", formData);

    event.preventDefault();

    // try {
    //   const response = await axios.post("/api/auth/login", formData);
    //   console.log("response");
    //   console.log(response);

    //   router.push("/");
    // } catch (error) {
    //   console.log("error");
    //   console.log(error);
    // }
  };

  React.useEffect(() => {
    const fetchMunicipalities = async () => {
      try {
        const response = await axios.get("/api/municipalities");
        setMunicipalities(response.data || []);
        console.log("Municipalities API response:", response);
      } catch (err) {
        console.log("There has been an error");
      }
    };

    fetchMunicipalities();
  }, []);

  return (
    <div className={styles.container}>
      <Typography
        variant="h4"
        as="h3"
        className={styles.title}
        fontWeight={"700"}
      >
        Osnovni podaci
      </Typography>
      <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
        <div className={clsx(styles["field-group"], styles["user-name-group"])}>
          <InputField
            name="firstName"
            control={control}
            label="Ime"
            placeholder="Marko"
          />
          <InputField
            name="lastName"
            control={control}
            label="Prezime"
            placeholder="Marković"
          />
        </div>
        <div className={clsx(styles["field-group"], styles["contact-group"])}>
          <InputField
            name="email"
            control={control}
            label="Email"
            placeholder="npr. marko@marko.me"
          />
          <InputField
            name="phone"
            control={control}
            label="Telefon"
            placeholder="+38268123456"
          />
        </div>
        <InputField
          name="address"
          control={control}
          label="Adresa za dostavu"
          placeholder="Unesi adresu"
        />
        <div className={clsx(styles["field-group"], styles["address-group"])}>
          <InputField
            name="city"
            control={control}
            label="Grad/Mjesto"
            placeholder="Unesi grad"
          />
          <SelectField.Single
            name="municipality"
            control={control}
            label="Opština"
            placeholder="Odaberi opštinu"
            options={municipalities || []}
          />
        </div>

        <Button.Primary type="submit" widthFull font="bold" size="large">
          Login
        </Button.Primary>
      </form>
    </div>
  );
}
