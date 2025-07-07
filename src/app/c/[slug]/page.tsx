import React from "react";
import Category from "@/components/category";

interface CategoryPageProps {
  params: Promise<{ slug: string }>;
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { slug } = await params;

  return <Category slug={slug} />;
}
