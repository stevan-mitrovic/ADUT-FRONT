"use client";
import styles from "./index.module.scss";
import Typography from "@/ui/typography";
import { useRouter } from "next/navigation";
import React from "react";
import { ProductCardProps } from "@/components/product-card";
import Image from "next/image";
import ProductCardImage from "@/components/product-card/productCard.svg";
import SpecificationOptions from "@/components/product-card/extended/specificationOptions";
import { getProductRoute } from "@/lib/urlHandlers";

export default function ProductCardExtended({ product }: ProductCardProps) {
  const router = useRouter();

  // router.push("/");

  const specifications = [
    "6.6 in, IPS, 500nits",
    "Android 13",
    "Octa-core 1.6 GHz",
  ];
  const productRoute = React.useMemo(() => getProductRoute(product), [product]);

  return (
    <div className={styles.container}>
      <Image src={ProductCardImage} alt={"Samsung A55 8GB | 128GB"} />

      <Typography
        variant="p"
        as="h6"
        className={styles.title}
        textAlign="center"
        fontWeight={"700"}
      >
        Samsung A55 8GB | 128GB
      </Typography>

      <div className={styles["specifications"]}>
        <SpecificationOptions />
        {(specifications || []).map((specification, key) => (
          <Typography
            key={`specification-${key}`}
            variant="p3"
            textAlign="center"
            fontWeight={"400"}
            color={"#00000099"}
          >
            {specification}
          </Typography>
        ))}
      </div>

      <div className={styles["price-container"]}>
        <Typography
          variant="p"
          as="span"
          className={styles["old-price"]}
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

      <Typography
        variant="span2"
        textAlign="center"
        fontWeight={"600"}
        color={"#00000080"}
      >
        + Besplatna dostava
      </Typography>
    </div>
  );
}
