"use client";
import styles from "./index.module.scss";
import React from "react";
import { TRefinedItem } from "@/types/product";

type Props = {
  options?: TRefinedItem[];
};

const ColorOption = ({ option }: { option: any }) => {
  return (
    <div
      className={styles["color-option"]}
      style={{ backgroundColor: option?.color || "transparent" }}
    />
  );
};
export default function SpecificationOptions({ options }: Props) {
  const mappedOptions: any[] = React.useMemo(
    () =>
      (options || [])
        .map((option) => ({
          color: option?.distinctiveTrait?.additional,
          name: option?.distinctiveTrait?.value,
        }))
        .filter((option) => option.color),
    [options]
  );

  return (
    <div className={styles.container}>
      {(mappedOptions || [])?.length <= 0 ? (
        <div className={styles["no-options"]}>
          <svg
            width="62"
            height="1"
            viewBox="0 0 62 1"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <line
              y1="0.5"
              x2="62"
              y2="0.5"
              stroke="black"
              strokeOpacity="0.15"
              strokeDasharray="2 2"
            />
          </svg>
        </div>
      ) : (
        <div className={styles["options-container"]}>
          {mappedOptions.map((option, key) => (
            <ColorOption key={`color-option-${key}`} option={option} />
          ))}
        </div>
      )}
    </div>
  );
}
