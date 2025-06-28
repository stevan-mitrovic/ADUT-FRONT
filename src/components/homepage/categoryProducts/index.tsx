"use client";
import React, { useMemo, useState, useEffect, useRef } from "react";
import axios from "axios";
import styles from "./index.module.scss";
import clsx from "clsx";
import { TProduct } from "@/types/product";
import ProductCard from "@/components/product-card";
import Typography from "@/ui/typography";
import { Slider } from "@/ui/slider";
import { Button } from "@/ui/buttons";
import { Loader } from "@/ui/loaders";

type Props = {
  sectionTitle: string;
  showMoreLink: string;
  productsSliderKey: string;
  categoryId: number;
  className?: any;
};
export default function CategoryProducts({
  sectionTitle,
  showMoreLink,
  productsSliderKey,
  categoryId,
  className,
}: Props) {
  const [productList, setProductList] = useState<TProduct[]>([]);
  const [loading, setLoading] = useState(false);
  const isFetched = useRef(false);

  const onProductsFetch = async (categoryId: number) => {
    try {
      setLoading(true);
      const response = await axios.get(
        `/api/products?limit=10&page=1&category=${categoryId}`
      );

      console.log("products response");
      console.log(response?.data?.items);
      setProductList(response?.data?.items);
    } catch (error) {
      console.log("products error");
      console.log(error);
      setProductList([]);
    } finally {
      setLoading(false);
      isFetched.current = true;
    }
  };

  useEffect(() => {
    if (!isFetched.current && categoryId) {
      onProductsFetch(categoryId);
    }
  }, [categoryId]);

  const slides = useMemo(
    () => productList.map((product) => <ProductCard.Basic product={product} />),
    [productList]
  );

  return (
    <div className={clsx(styles.container, className)}>
      <div className={styles.head}>
        <Typography variant="h4" textAlign="left">
          {sectionTitle}
        </Typography>

        <Button.Text
          as="a"
          href={showMoreLink}
          className={styles["see-all-btn"]}
        >
          Vidi sve
        </Button.Text>
      </div>
      <div
        className={clsx(
          styles.slider,
          slides?.length === 0 && styles["no-data"]
        )}
      >
        {loading ? (
          <div className={styles.loaders}>
            <Loader.Card />
            <Loader.Card />
            <Loader.Card />
            <Loader.Card />
            <Loader.Card />
            <Loader.Card />
          </div>
        ) : (
          <Slider
            slideKey={productsSliderKey}
            slides={slides}
            noSlidesMessage="Nema proizvoda."
          />
        )}
      </div>
    </div>
  );
}
