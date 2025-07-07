//@ts-nocheck
"use client";
import React from "react";
import styles from "./index.module.scss";
import CategoriesNav from "@/layout/categoriesNav";
import Typography from "@/ui/typography";
import Breadcrumbs from "@/ui/breadcrumbs";
import ProductsGrid from "@/components/products-grid";
import CategoryFilters from "@/components/category-filters";
import { useCategoryStore } from "@/store/categoryStore";
import { getCategoryBreadcrumb } from "@/lib/categoryListHandlers";
import { TProduct } from "@/types/product";
import axios from "axios";

interface CategoryProps {
  slug: string;
}

export default function Category({ slug }: CategoryProps) {
  const fetched = useCategoryStore((state) => state.fetched);
  const getCategory = useCategoryStore((state) => state.getCategoryByProperty);

  const category = React.useMemo(() => {
    return getCategory("slug", slug);
  }, [slug, getCategory, fetched]);

  const categoryBreadcrumbs = React.useMemo(() => {
    const res = category ? getCategoryBreadcrumb(category) : [];
    res.pop();
    return res;
  }, [category]);

  const [products, setProducts] = React.useState<TProduct[]>([]);
  const [loading, setLoading] = React.useState<boolean>(false);
  const [error, setError] = React.useState<string>("");

  React.useEffect(() => {
    async function fetchProducts(categoryId: number) {
      try {
        setLoading(true);
        setError("");
        // Call your API route
        const response = await axios.get(
          `/api/products?limit=10&page=1&category=${categoryId}`
        );

        setProducts(response?.data?.items);
      } catch (err) {
        setProducts([]);
        setError(err instanceof Error ? err.message : "An error occurred");
      } finally {
        setLoading(false);
      }
    }

    if (category?.id) {
      fetchProducts(category.id);
    }
  }, [category]);

  return (
    <div className={styles.container}>
      <CategoriesNav />

      <div className={styles.head}>
        <Breadcrumbs links={categoryBreadcrumbs} />

        <Typography
          variant="h2"
          as="h1"
          className={styles.title}
          textAlign="left"
        >
          {category?.title || ""}
        </Typography>
      </div>

      <div className={styles.content}>
        <CategoryFilters />

        <ProductsGrid productList={products} />
      </div>
    </div>
  );
}
