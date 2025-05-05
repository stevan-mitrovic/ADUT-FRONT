"use client";
import React from "react";
import styles from "./index.module.scss";
import FilterLabel from "@/ui/filters/filterLabel";
import Typography from "@/ui/typography";

type Props = {
    label?: string;
    options: any[];
    selectedOptions?: any[];
    onSelect: (data?: any) => void;
}

export default function FilterCheckboxList({label = "", options = [], selectedOptions = [], onSelect}: Props) {
    const handleChange = (option) => {
        if (selectedOptions.includes(option)) {
            onSelect(selectedOptions.filter((item) => item !== option));
        } else {
            onSelect([...selectedOptions, option]);
        }
    };

    return (
        <div className={styles.container}>
            <FilterLabel>{label}</FilterLabel>

            <div className={styles.content}>
                {(options || []).map(option => <label
                    key={option?.code}
                    className={styles['field']}>
                    <div
                        className={styles['field__checkbox']}>
                            <input
                                className={styles['input']}
                                type="checkbox"
                                checked={(selectedOptions || []).includes(option?.code)}
                                onChange={() => handleChange(option?.code)}
                            />
                            <span className={styles.checkbox} />
                    </div>

                    <div
                        className={styles.label}>
                        <Typography
                            variant="p2"
                            as="span"
                            textAlign="left"
                            fontWeight={"500"}
                            color={"#00000080"}
                        >
                            {option.label}
                        </Typography>
                        <Typography
                            variant="p2"
                            as="span"
                            textAlign="left"
                            fontWeight={"500"}
                            color={"#00000080"}
                        >
                            {option.numberAvailable}
                        </Typography>
                    </div>
                </label>)}
            </div>


        </div>
    );
}
