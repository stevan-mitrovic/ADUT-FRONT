"use client";
import styles from "./index.module.scss";
import Typography from "@/ui/typography";
import { useRouter } from "next/navigation";
import CategoriesNav from "@/layout/categoriesNav";
import React from "react";
import Banner from "@/components/homepage/banner";
import BannerImg1 from "@/ui/images/homepage/banner1.svg";
import BannerImg2 from "@/ui/images/homepage/banner2.svg";
import BannerImg3 from "@/ui/images/homepage/banner3.svg";
import BannerImg4 from "@/ui/images/homepage/banner4.svg";
import BannerImg5 from "@/ui/images/homepage/banner5.svg";
import BannerImg6 from "@/ui/images/homepage/banner6.svg";

export default function ProductsList() {
  const router = useRouter();

  // router.push("/");

  return (
    <div className={styles.container}>

      <div>
        <CategoriesNav />

        <div className={styles["main-banner-container"]}>
          <Banner src={BannerImg1} width={691} height={534} alt={"Adut banner"}/>
          <div>
            <Banner src={BannerImg2} width={676} height={264} alt={"Adut banner"}/>
            <div>
              <Banner src={BannerImg3} width={321} height={256} alt={"Adut banner"}/>
              <Banner src={BannerImg4} width={340} height={256} alt={"Adut banner"}/>
            </div>
          </div>
        </div>

        <Banner className={styles["full-w-banner"]} src={BannerImg5} width={1378} height={112} alt={"Adut banner"}/>

        <Banner className={styles["full-w-banner"]} src={BannerImg6} width={1378} height={112} alt={"Adut banner"}/>

        <Typography
            variant="h4"
            as="h1"
            className={styles.title}
            textAlign="center"
            fontWeight={"700"}
        >
          Popularni proizvodi
        </Typography>

      </div>

    </div>
  );
}
