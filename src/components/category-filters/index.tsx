"use client";
import React from "react";
import styles from "./index.module.scss";
import FilterCheckboxList from "@/ui/filters/checkboxList";

export default function CategoryFilters() {
  const [selectedBrands, setSelectedBrands] = React.useState([])

  const checkboxOptions = [
      {
    label: 'Alcatel',
    code: 'alcatel',
    numberAvailable: 14,
  },
      {
    label: 'Apple',
    code: 'apple',
    numberAvailable: 8,
  },
      {
    label: 'Asus',
    code: 'asus',
    numberAvailable: 5,
  },
      {
    label: 'BlackBerry',
    code: 'blackberry',
    numberAvailable: 4,
  },
      {
    label: 'Google',
    code: 'google',
    numberAvailable: 7,
  },
      {
    label: 'Honor',
    code: 'honor',
    numberAvailable: 17,
  },
      {
    label: 'HTC',
    code: 'htc',
    numberAvailable: 8,
  },
      {
    label: 'Huawei',
    code: 'huawei',
    numberAvailable: 12,
  },
      {
    label: 'Lenovo',
    code: 'lenovo',
    numberAvailable: 12,
  },
      {
    label: 'LG',
    code: 'lg',
    numberAvailable: 16,
  },
      {
    label: 'Motorola',
    code: 'motorola',
    numberAvailable: 21,
  },
      {
    label: 'Nokia',
    code: 'nokia',
    numberAvailable: 12,
  },
      {
    label: 'OnePlus',
    code: 'oneplus',
    numberAvailable: 7,
  },
      {
    label: 'Oppo',
    code: 'oppo',
    numberAvailable: 6,
  },
      {
    label: 'Realme',
    code: 'realme',
    numberAvailable: 19,
  },
  ]


  return (
    <div className={styles.container}>
      <FilterCheckboxList label={"Brendovi"}
                          options={checkboxOptions}
                          selectedOptions={selectedBrands}
                          onSelect={(data) => setSelectedBrands(data)}/>
    </div>
  );
}
