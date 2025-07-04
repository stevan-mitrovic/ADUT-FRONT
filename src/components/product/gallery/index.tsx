"use client";
import React from "react";
import styles from "./index.module.scss";
import Image1 from "@/ui/images/product/image3.svg";
import Image2 from "@/ui/images/product/image5.svg";
import Image3 from "@/ui/images/product/image6.svg";
import Image from "next/image";

interface ProductProps {
  slug?: string;
}

export default function Gallery({ slug }: ProductProps) {
  return (
    <div className={styles.container}>
      <div>
        <Image
          src={Image1}
          width={271}
          height={328}
          alt={"Telefon"}
          style={{ width: "271px", height: "328px", objectFit: "cover" }}
        />
      </div>
      <div>
        <Image
          src={Image2}
          width={100}
          height={100}
          alt={"Telefon"}
          style={{ width: "100px", height: "100px", objectFit: "cover" }}
        />
        <Image
          src={Image3}
          width={100}
          height={100}
          alt={"Telefon"}
          style={{ width: "100px", height: "100px", objectFit: "cover" }}
        />
      </div>
    </div>
  );
}
