"use client";
import styles from "./index.module.scss";
import Typography from "@/ui/typography";
import { useRouter } from "next/navigation";
import React from "react";
import {ProductCardProps} from "@/components/product-card";
import Image from "next/image";
import ProductCardImage from "@/components/product-card/productCard.svg";


export default function ProductCardExtended({product}: ProductCardProps) {
  const router = useRouter();

  // router.push("/");

  return (
      <div className={styles.container}>

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

      </div>
  );
}
