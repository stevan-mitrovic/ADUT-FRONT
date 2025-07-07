"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { ProductCardProps } from "@/components/product-card";
import Typography from "@/ui/typography";
import ProductCardImage from "../productCard.svg";
import styles from "./index.module.scss";
import RetailPrice from "./RetailPrice";
import { getProductRoute } from "@/lib/urlHandlers";
import { sessionSetProductId } from "@/lib/storageHandlers";

export default function ProductCardBasic({ product }: ProductCardProps) {
  const router = useRouter();

  // router.push("/");

  const productRoute = React.useMemo(() => getProductRoute(product), [product]);

  return (
    <Link
      className={styles.container}
      href={productRoute}
      onClick={() => sessionSetProductId(product?.slug, product?.id)}
    >
      <Image src={ProductCardImage} alt={product.name || ""} />

      <Typography
        variant="p"
        as="h6"
        className={styles.title}
        textAlign="center"
        fontWeight={"700"}
      >
        {product.name}
      </Typography>

      <div className={styles["price-container"]}>
        <RetailPrice
          diff={product.price.diff}
          retailPrice={product.displayLabel.retailPrice}
        />
        <Typography
          variant="h3"
          as="span"
          textAlign="center"
          fontWeight={"700"}
          color={"#88C738"}
        >
          {product.displayLabel.discountedRetailPrice}
        </Typography>
      </div>
    </Link>
  );
}
