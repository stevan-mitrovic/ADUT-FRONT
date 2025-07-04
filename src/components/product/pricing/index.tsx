"use client";
import React from "react";
import styles from "./index.module.scss";
import { TProduct, TRefinedItem } from "@/types/product";
import Typography from "@/ui/typography";
import { Button } from "@/ui/buttons";
import ShoppingCartIcon from "@/ui/icons/shoppingCart";

interface PricingProps {
  product: TProduct;
  selectedRefinedItem: TRefinedItem;
}

export default function Pricing({
  product,
  selectedRefinedItem,
}: PricingProps) {
  const pricing = selectedRefinedItem
    ? selectedRefinedItem.price
    : product.price;
  const displayLabel = selectedRefinedItem
    ? selectedRefinedItem.displayLabel
    : product.displayLabel;

  return (
    <div className={styles.container}>
      <div className={styles.priceContent}>
        <Typography variant="p" as="span" fontWeight="700" textAlign="center">
          Cijena:
        </Typography>
        {pricing.diff !== 0 && (
          <Typography
            variant="h5"
            as="span"
            fontWeight="600"
            textAlign="center"
            className={styles.discountPrice}
          >
            {displayLabel.retailPrice}
          </Typography>
        )}
        <Typography
          variant="h1"
          as="span"
          fontWeight="700"
          textAlign="center"
          className={styles.currentPrice}
        >
          {displayLabel.discountedRetailPrice}
        </Typography>
        {pricing.diff !== 0 && (
          <Typography
            variant="p3"
            as="span"
            fontWeight="500"
            textAlign="center"
            className={styles.discountText}
          >
            Ušteda: {displayLabel.diff}
          </Typography>
        )}
      </div>
      <div className={styles.buttons}>
        <Button.Primary
          className={styles.btn}
          icon={<ShoppingCartIcon />}
          onClick={() => console.log("Postavi pitanje")}
        >
          Dodaj u korpu
        </Button.Primary>
        <Button.Black
          className={styles.btn}
          onClick={() => console.log("Postani partner")}
        >
          Kupi odmah
        </Button.Black>
      </div>
    </div>
  );
}
