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
import Link from "next/link";
import { sessionSetProductId } from "@/lib/storageHandlers";

export default function ProductCardExtended({ product }: ProductCardProps) {
  const router = useRouter();

  const productRoute = React.useMemo(() => getProductRoute(product), [product]);
  const refinedItem = React.useMemo(() => {
    if (product.refinedItems.length > 0) {
      return product.refinedItems[0];
    } else return null;
  }, [product]);

  return (
    <Link
      href={productRoute}
      onClick={() => sessionSetProductId(product?.slug, product?.id)}
      className={styles.container}
    >
      <Image src={ProductCardImage} alt={"Samsung A55 8GB | 128GB"} />

      <Typography
        variant="p"
        as="h6"
        className={styles.title}
        textAlign="center"
        fontWeight={"700"}
      >
        {product.name}
      </Typography>

      <div className={styles["specifications"]}>
        {(product.refinedItems || []).length > 0
          ? <SpecificationOptions options={product.refinedItems || []}/> : <></>}

        <Typography
            variant="p3"
            textAlign="center"
            fontWeight={"400"}
            color={"#00000099"}
          >
            {refinedItem?.description || ""}
          </Typography>
      </div>

      <div className={styles["price-container"]}>
        {product.price.diff !== 0 ? (
          <Typography
            variant="p"
            as="span"
            className={styles["old-price"]}
            textAlign="center"
            fontWeight={"600"}
            color={"#6D6D6D"}
          >
            {product.displayLabel.retailPrice}
          </Typography>
        ) : (
          <></>
        )}
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

      <Typography
        variant="span2"
        textAlign="center"
        fontWeight={"600"}
        color={"#00000080"}
      >
        + Besplatna dostava
      </Typography>
    </Link>
  );
}
