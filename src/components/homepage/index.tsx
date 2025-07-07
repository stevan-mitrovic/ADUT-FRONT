"use client";
import React from "react";
import styles from "./index.module.scss";
import CategoriesNav from "@/layout/categoriesNav";
import Banner from "@/components/homepage/banner";
import CategoryProducts from "@/components/homepage/categoryProducts";
import Typography from "@/ui/typography";
import BannerImg1 from "@/ui/images/homepage/banner1.svg";
import BannerImg2 from "@/ui/images/homepage/banner2.svg";
import BannerImg3 from "@/ui/images/homepage/banner3.svg";
import BannerImg4 from "@/ui/images/homepage/banner4.svg";
import BannerImg5 from "@/ui/images/homepage/banner5.svg";
import BannerImg6 from "@/ui/images/homepage/banner6.svg";
import {
  homepageCategoryIds,
  homepageCategoryRoutes,
} from "@/constants/categoriesList";

export default function Homepage() {
  return (
    <div className={styles.container}>
      <div>
        <CategoriesNav />

        <div className={styles["main-banner-container"]}>
          <Banner
            src={BannerImg1}
            width={691}
            height={534}
            alt={"Adut banner"}
          />
          <div>
            <Banner
              src={BannerImg2}
              width={676}
              height={264}
              alt={"Adut banner"}
            />
            <div>
              <Banner
                src={BannerImg3}
                width={321}
                height={256}
                alt={"Adut banner"}
              />
              <Banner
                src={BannerImg4}
                width={340}
                height={256}
                alt={"Adut banner"}
              />
            </div>
          </div>
        </div>

        <Typography
          variant="h2"
          as="h1"
          className={styles.title}
          textAlign="center"
        >
          Popularni proizvodi
        </Typography>

        <CategoryProducts
          sectionTitle={"Telefoni"}
          showMoreLink={homepageCategoryRoutes.PHONES}
          productsSliderKey={"kategorija-telefoni"}
          categoryId={homepageCategoryIds.PHONES}
        />

        <Banner
          className={styles["full-w-banner"]}
          src={BannerImg5}
          width={1378}
          height={112}
          alt={"Adut banner"}
        />

        <CategoryProducts
          sectionTitle={"Klima uredjaji"}
          showMoreLink={homepageCategoryRoutes.AIR_CONDITIONERS}
          productsSliderKey={"kategorija-klima-uredjaji"}
          categoryId={homepageCategoryIds.AIR_CONDITIONERS}
        />

        <Banner
          className={styles["full-w-banner"]}
          src={BannerImg6}
          width={1378}
          height={112}
          alt={"Adut banner"}
        />

        <CategoryProducts
          sectionTitle={"Televizori"}
          showMoreLink={homepageCategoryRoutes.TVS}
          productsSliderKey={"kategorija-televizori"}
          className={styles["category-products"]}
          categoryId={homepageCategoryIds.TVS}
        />

        <CategoryProducts
          sectionTitle={"Laptopovi"}
          showMoreLink={homepageCategoryRoutes.PCS}
          productsSliderKey={"kategorija-laptopovi"}
          className={styles["category-products"]}
          categoryId={homepageCategoryIds.PCS}
        />
      </div>
    </div>
  );
}
