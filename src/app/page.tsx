"use client";
import CategoriesNav from "../layout/categoriesNav";
import Breadcrumbs from "@/ui/breadcrumbs";

// TODO
// install https://www.npmjs.com/package/@react-spring/web

const links = [
  { title: "Racunari i telefoni", href: "/" },
  { title: "Telefoni", href: "/" },
  { title: "Racunari i telefoni", href: "/" },
  { title: "Telefoni", href: "/" },
  { title: "Racunari i telefoni", href: "/" },
  { title: "Telefoni", href: "/" },
];

export default function Home() {
  return (
    <div>
      <Breadcrumbs links={links} />
      <CategoriesNav />
    </div>
  );
}
