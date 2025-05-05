"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import {ProductCardProps} from "@/components/product-card";
import Typography from "@/ui/typography";
import ProductCardImage from "../productCard.svg";
import styles from "./index.module.scss";


export default function ProductCardBasic({product}: ProductCardProps) {
  const router = useRouter();

  // router.push("/");

  return (
    <Link className={styles.container} href={"/profile"}>

        <Image src={ProductCardImage} alt={"Samsung A55 8GB | 128GB"}/>

        <Typography
            variant="p"
            as="h6"
            className={styles.title}
            textAlign="center"
            fontWeight={"700"}
        >
          Samsung A55 8GB | 128GB
        </Typography>


      <div className={styles['price-container']}>
        <Typography
            variant="p"
            as="span"
            className={styles['old-price']}
            textAlign="center"
            fontWeight={"600"}
            color={"#6D6D6D"}
        >
          300e
        </Typography>
        <Typography
            variant="h3"
            as="span"
            textAlign="center"
            fontWeight={"700"}
            color={"#88C738"}
        >
          229e
        </Typography>

      </div>

    </Link>
  );
}
