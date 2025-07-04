import React from "react";
import Product from "@/components/product";

interface ProductPageProps {
  params: Promise<{ slug: string }>;
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = await params;

  console.log("product");
  console.log(slug);
  return <Product slug={slug} />;
}
