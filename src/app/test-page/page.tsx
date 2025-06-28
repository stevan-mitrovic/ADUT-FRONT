"use client";
import React from "react";
import {Loader} from "@/ui/loaders";

// TODO
// install https://www.npmjs.com/package/@react-spring/web

export default function Home() {
  return (
    <div>
      <div>
        <p>Basic text loading</p>
        <Loader.Text count={3} />
      </div>

      <div>
        <p>Circle avatar loading</p>
        <Loader.Circle height={60} />
      </div>

      <div style={{ width: "200px" }}>
        <p>Card loading</p>
        <Loader.Card />
      </div>

      <div>
        <p>LAdvanced usage with custom styling</p>
        <Loader
          type="text"
          count={2}
          height={24}
          width={"200"}
          baseColor="#f5f5f5"
          highlightColor="#e0e0e0"
          duration={1.5}
        />
      </div>
    </div>
  );
}
