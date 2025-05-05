"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import clsx from "clsx";
import styles from "./index.module.scss";

type Props = {
  src?: string;
  href?: string;
  width?: number;
  height?: number;
  alt?: string;
  className?: any;
}

export default function Banner({src = "", href = "", width = 250, height = 250, alt = "", className}: Props) {

  const Element = (href ? Link : "div") as React.ElementType;
  const elementProps = href ? { href } : {};

  return (
    <Element className={clsx(styles.container, className)} {...elementProps} >
      {src
          ? <Image src={src}
                   width={width}
                   height={height}
                   alt={alt}
                   style={{ width: '100%', height: '100%', objectFit: "cover" }}/>
          : <div/>}

    </Element>
  );
}
