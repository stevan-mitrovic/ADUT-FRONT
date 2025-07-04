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
    const handleChange = (option: any) => {
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
                <div className={styles['content-overflow']}>
                {(options || []).map(option => <label
                    key={option?.code}
                    className={styles['field']}>
                            <input
                                className={styles['input']}
                                type="checkbox"
                                checked={(selectedOptions || []).includes(option?.code)}
                                onChange={() => handleChange(option?.code)}
                            />

                    <div
                        className={styles.label}>
                        <Typography
                            variant="p2"
                            as="span"
                            textAlign="left"
                            fontWeight={"500"}
                        >
                            {option.label}
                        </Typography>
                        {option?.additionalInfo ? <Typography
                            variant="p2"
                            as="span"
                            textAlign="left"
                            fontWeight={"500"}
                        >
                            {option.additionalInfo}
                        </Typography> : ""}
                    </div>
                </label>)}
                </div>
            </div>
        </div>
    );
}
