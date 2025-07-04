"use client";
import React, {useMemo} from "react";
import clsx from "clsx";
import styles from "./index.module.scss";
import FilterLabel from "@/ui/filters/filterLabel";

type Props = {
    label?: string;
    selectedRange: string[];
    onRangeChange: (val: string[]) => void;
    minLimit?: number | null;
    maxLimit?: number | null;
    allowNegativeVal?: boolean;
}

// @ts-ignore
export default function FilterRange({label = "", selectedRange = ["", ""], onRangeChange, minLimit, maxLimit, allowNegativeVal = false}: Props) {
    const limitMin = useMemo(() => (minLimit ? minLimit : allowNegativeVal ? -999999999 : 0), [minLimit, allowNegativeVal])
    const limitMax = useMemo(() => (maxLimit ? maxLimit : 999999999), [maxLimit, allowNegativeVal])

    const handleMinValChange = (val: string) => {
        //@ts-ignore
        onRangeChange([val, selectedRange[1]])
    }

    const handleMaxValChange = (val: string) => {
        //@ts-ignore
        onRangeChange([selectedRange[0], val])
    }

    const onChange = (val: string, isMinField: boolean) => {
        const raw = val;
        const num = Number(raw);

        // Allow empty string to let user delete text
        if (raw === "") {
            if(isMinField){
                handleMinValChange("")
            }else{
                handleMaxValChange("")
            }
            return;
        }

        // If it's not a number, ignore
        if (isNaN(num)) return;

        // Clamp between 0 and 5
        const clamped = Math.max(limitMin, Math.min(limitMax, num));
        if(isMinField){
            handleMinValChange(clamped.toString())
        }else{
            handleMaxValChange(clamped.toString())
        }
    }

    return (
        <div className={styles.container}>
            <FilterLabel>{label}</FilterLabel>

            <div className={styles.content}>

                <input
                    value={(Array.isArray(selectedRange)) ? selectedRange[0] : ""}
                    type={"number"}
                    placeholder={"0"}
                    min={limitMin}
                    max={limitMax}
                    onChange={(e) => onChange(e.target.value, true)}
                    className={clsx(styles['input'])}
                />
                <span className={styles.divider}/>
                <input
                    value={(Array.isArray(selectedRange)) ? selectedRange[1] : ""}
                    type={"number"}
                    placeholder={"0"}
                    min={limitMin}
                    max={limitMax}
                    onChange={(e) => onChange(e.target.value, false)}
                    className={clsx(styles['input'])}
                />

            </div>
        </div>
    );
}
