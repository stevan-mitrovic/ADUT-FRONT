"use client";
import CategoriesNav from "../layout/categoriesNav";
import Breadcrumbs from "@/ui/breadcrumbs";
import {Button} from "@/ui/buttons";
import UserIcon from "@/ui/icons/user";
import React from "react";

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
  const onProfileClick = () => {
    console.log("profile")
  }

  return (
    <div>
      <Breadcrumbs links={links} />
      <CategoriesNav />
      <Button.White onClick={onProfileClick} disabled icon={<UserIcon />}>
        Moj nalog
      </Button.White>
    </div>
  );
}
