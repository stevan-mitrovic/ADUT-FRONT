"use client";
import React, {useMemo} from "react";
import styles from "./index.module.scss";
import clsx from "clsx";
import {TProduct} from "@/types/product";
import ProductCard from "@/components/product-card";
import Typography from "@/ui/typography";
import {Slider} from "@/ui/slider";
import {Button} from "@/ui/buttons";

type Props = {
  sectionTitle: string;
  showMoreLink: string;
  productsSliderKey: string;
  productList: TProduct[];
    className?: any;
}
export default function CategoryProducts({sectionTitle, showMoreLink, productsSliderKey, productList, className}: Props) {

  const slides = useMemo(() => productList.map(product => <ProductCard key={product?.id} product={product}/>), [productList])

  return (
    <div className={clsx(styles.container, className)}>

      <div className={styles.head}>
        <Typography
            variant="h4"
            textAlign="left"
        >
          {sectionTitle}
        </Typography>

        <Button.Text as="a" href={showMoreLink} className={styles['see-all-btn']}>
          Vidi sve
        </Button.Text>
      </div>
      <div className={styles.slider}>
        <Slider slideKey={productsSliderKey} slides={slides}/>
      </div>


    </div>
  );
}
