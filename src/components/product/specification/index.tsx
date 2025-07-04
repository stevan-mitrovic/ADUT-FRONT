"use client";
import React from "react";
import styles from "./index.module.scss";
import Typography from "@/ui/typography";
import SingleSpecification from "./singleSpecification";
import { TRefinedItemSpecification } from "@/types/product";

interface SpecificationProps {
  items?: TRefinedItemSpecification[];
}

const getColumnDistribution = (items: TRefinedItemSpecification[]) => {
  const length = items.length;

  if (length <= 12) {
    // Single column
    return {
      column1: items,
      column2: [],
    };
  } else if (length <= 24) {
    // First 12 in column 1, rest in column 2
    return {
      column1: items.slice(0, 12),
      column2: items.slice(12),
    };
  } else {
    // Split evenly
    const midPoint = Math.ceil(length / 2);
    return {
      column1: items.slice(0, midPoint),
      column2: items.slice(midPoint),
    };
  }
};

export default function Specification({ items }: SpecificationProps) {
  const distribution = React.useMemo(
    () => getColumnDistribution(items || []),
    [items]
  );

  return (
    <div className={styles.container}>
      <Typography variant="h5" fontWeight="700" className={styles.title}>
        Specifikacija
      </Typography>
      <div className={styles.content}>
        <div>
          {distribution.column1.map((specification) => (
            <SingleSpecification
              key={`single-specification-col-1-${specification.id}`}
              specification={specification}
            />
          ))}
        </div>
        <div>
          {distribution.column2.map((specification) => (
            <SingleSpecification
              key={`single-specification-col-2-${specification.id}`}
              specification={specification}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
