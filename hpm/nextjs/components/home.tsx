import React from "react";
import HomeContents from "./HomeContents";

export default function Home({ children }: { children: React.ReactNode }) {
  return <HomeContents>{children}</HomeContents>;
}
