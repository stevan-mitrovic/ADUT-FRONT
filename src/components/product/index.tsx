"use client";
import React, { useState, useEffect } from "react";
import styles from "./index.module.scss";
import CategoriesNav from "@/layout/categoriesNav";
import Breadcrumbs from "@/ui/breadcrumbs";
import { TProduct, TRefinedItem } from "@/types/product";
import { BasicCard } from "@/ui/card";
import Gallery from "./gallery";
import Information from "./information";
import Pricing from "./pricing";
import Specification from "./specification";
import HtmlSpecification from "./htmlSpecification";
import Typography from "@/ui/typography";

interface ProductProps {
  slug: string;
}

const breadcrumbs = [
  { title: "Racunari i telefoni", href: "/" },
  { title: "Telefoni", href: "" },
];

export default function Product({ slug }: ProductProps) {
  const [product, setProduct] = useState<TProduct | null>(null);
  const [selectedRefinedItem, setSelectedRefinedItem] =
    useState<TRefinedItem | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchProduct() {
      try {
        setLoading(true);
        setError(null);

        // Call your API route
        const response = await fetch(`/api/product?slug=${slug}`);

        if (!response.ok) {
          if (response.status === 404) {
            throw new Error("Product not found");
          }
          throw new Error("Failed to fetch product");
        }

        const data = await response.json();
        setProduct(data.product);
        if (data.product.refinedItems.length > 0) {
          setSelectedRefinedItem(data.product.refinedItems[0]);
        } else {
          setSelectedRefinedItem(null);
        }
      } catch (err) {
        setError(err instanceof Error ? err.message : "An error occurred");
      } finally {
        setLoading(false);
      }
    }

    if (slug) {
      fetchProduct();
    }
  }, [slug]);

  if (loading) {
    return (
      <div className={styles.loading}>
        <Typography variant="h4" textAlign="left">
          Učitavanje proizvoda...
        </Typography>
      </div>
    );
  }

  if (error) {
    return (
      <div className={styles.error}>
        <Typography variant="h4" textAlign="left">
          Došlo je do greške
        </Typography>
      </div>
    );
  }

  if (!product) {
    return (
      <div className={styles.notFound}>
        <Typography variant="h4" textAlign="left">
          Proizvod nije pronađen
        </Typography>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <CategoriesNav />

      <div className={styles.head}>
        <Breadcrumbs links={breadcrumbs} />
      </div>

      <div className={styles.content}>
        <BasicCard>
          <div className={styles.main}>
            <div>
              <Gallery />
            </div>
            <div>
              <Information
                product={product}
                selectedRefinedItem={selectedRefinedItem}
                setSelectedRefinedItem={setSelectedRefinedItem}
              />
              <Pricing
                product={product}
                selectedRefinedItem={selectedRefinedItem}
              />
            </div>
          </div>
        </BasicCard>
        {Array.isArray(selectedRefinedItem?.specification) ? (
          <BasicCard className={styles.specifications}>
            <Specification items={selectedRefinedItem?.specification || []} />
          </BasicCard>
        ) : (
          <></>
        )}
        {product.htmlSpecification ? (
          <BasicCard className={styles.specifications}>
            <HtmlSpecification htmlSpecification={product.htmlSpecification} />
          </BasicCard>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}
