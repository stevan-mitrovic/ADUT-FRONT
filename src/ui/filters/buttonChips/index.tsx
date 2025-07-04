"use client";
import React from "react";
import clsx from "clsx";
import styles from "./index.module.scss";
import FilterLabel from "@/ui/filters/filterLabel";
import Typography from "@/ui/typography";

type Props = {
    label?: string;
    options: any[];
    selectedOption?: string;
    onSelect: (data?: string) => void;
}

export default function FilterButtonChips({label = "", options = [], selectedOption, onSelect}: Props) {

    return (
        <div className={styles.container}>
            <FilterLabel>{label}</FilterLabel>

            <div className={styles.content}>
                {(options || []).map(option => <div
                        key={option?.code}
                        className={clsx(styles.option, (selectedOption === option.code) && styles.selected )}
                        onClick={() => onSelect(option.code)}>
                        <Typography
                            variant="p2"
                            as="span"
                            textAlign="center"
                            fontWeight={"500"}
                        >
                            {option.label}
                        </Typography>
                    </div>)}
            </div>
        </div>
    );
}
