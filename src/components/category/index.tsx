"use client";
import React from "react";
import styles from "./index.module.scss";
import CategoriesNav from "@/layout/categoriesNav";
import Typography from "@/ui/typography";
import Breadcrumbs from "@/ui/breadcrumbs";
import ProductsGrid from "@/components/products-grid";
import CategoryFilters from "@/components/category-filters";

export default function Category() {

  const list = [
    {name: "Test"},
    {name: "Test"},
    {name: "Test"},
    {name: "Test"},
    {name: "Test"},
    {name: "Test"},
    {name: "Test"},
    {name: "Test"},
    {name: "Test"},
    {name: "Test"},
    {name: "Test"},
    {name: "Test"},
    {name: "Test"},
    {name: "Test"},
    {name: "Test"},
    {name: "Test"},
    {name: "Test"},
    {name: "Test"},
  ]

  const breadcrumbs = [
    { title: 'Racunari i telefoni', href: '/' },
    { title: 'Telefoni', href: '' }
  ];


  return (
    <div className={styles.container}>

        <CategoriesNav />

        <div className={styles.head}>
        <Breadcrumbs links={breadcrumbs}/>

        <Typography
            variant="h2"
            as="h1"
            className={styles.title}
            textAlign="left"
        >
          Telefoni
        </Typography>
        </div>

      <div className={styles.content}>
        <CategoryFilters/>

        <ProductsGrid productList={list}/>

      </div>


    </div>
  );
}
