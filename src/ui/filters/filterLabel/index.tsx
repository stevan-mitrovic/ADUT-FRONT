"use client";
import React from "react";
import Typography from "@/ui/typography";

type Props = {
    children: React.ReactNode;
}

export default function FilterLabel({children}: Props) {

    return (
            <Typography
                variant="p2"
                as="span"
                textAlign="left"
                fontWeight={"500"}
                color={"#00000080"}
            >
                {children}
            </Typography>
    );
}
