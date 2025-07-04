"use client";
import React from "react";
import styles from "./index.module.scss";
import FilterCheckboxList from "@/ui/filters/checkboxList";
import FilterRange from "@/ui/filters/range";
import FilterButtonChips from "@/ui/filters/buttonChips";
import {filters as filterConstants} from "@/constants/testingData";

export default function CategoryFilters() {

    const [filters, setFilters] = React.useState({
        subcategory: '',
        priceRange: ['', ''],
        brands: [],
        ram: [],
        memory: [],
        other: []
    })

    const changeFilters = (property: string, value: any) => {
        setFilters(prev => ({...prev, [property]: value}))
    }

  return (
    <div className={styles.container}>

        <FilterButtonChips label={"Podkategorije"}
                           options={filterConstants.SUBCATEGORIES}
                           selectedOption={filters.subcategory}
                           onSelect={(data) => changeFilters('subcategory', data)}/>

        <FilterRange label={"Cijena od-do"}
                    selectedRange={filters.priceRange}
                    onRangeChange={(data) => changeFilters('priceRange', data)}/>

      <FilterCheckboxList label={"Brendovi"}
                          options={filterConstants.BRANDS}
                          selectedOptions={filters.brands}
                          onSelect={(data) => changeFilters('brands', data)}/>

      <FilterCheckboxList label={"RAM"}
                          options={filterConstants.RAM}
                          selectedOptions={filters.ram}
                          onSelect={(data) => changeFilters('ram', data)}/>

      <FilterCheckboxList label={"Memorija za skladistenje"}
                          options={filterConstants.MEMORY}
                          selectedOptions={filters.memory}
                          onSelect={(data) => changeFilters('memory', data)}/>

      <FilterCheckboxList label={"Ostale funkcije"}
                          options={filterConstants.OTHER}
                          selectedOptions={filters.other}
                          onSelect={(data) => changeFilters('other', data)}/>
    </div>
  );
}
