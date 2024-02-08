import React from "react";
import clsx from "clsx";
import { backgroundPrimary } from "@filament-theme/atomics";
import * as styles from "../styles";
const Content = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className={clsx(backgroundPrimary, styles.content)}>{children}</main>
  );
};

export default Content;
