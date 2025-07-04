"use client";
import styles from "./index.module.scss";
import { useRouter } from "next/navigation";
import React from "react";
import {TProduct} from "@/types/product";

type Props = {
    product?: TProduct;
}

const ColorOption = ({option}: {option: any}) => {
    return <div className={styles['color-option']} style={{backgroundColor: option?.color || "transparent"}}/>
}
export default function SpecificationOptions({product}: Props) {
  const router = useRouter();

  // router.push("/");

    const options = [
        {color: '#151515', link: ''},
        {color: '#3E562F', link: ''},
        {color: '#7BB0CE', link: ''},
    ]

  return (
      <div className={styles.container}>
          {(options || [])?.length <= 0
              ? <div className={styles['no-options']}>
                  <svg width="62" height="1" viewBox="0 0 62 1" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <line y1="0.5" x2="62" y2="0.5" stroke="black" strokeOpacity="0.15" strokeDasharray="2 2"/>
                  </svg>
              </div>
              : <div className={styles['options-container']}>
                  {options.map((option, key) => <ColorOption
                      key={`color-option-${key}`}
                      option={option}/>)}
              </div>
          }
      </div>
  );
}
