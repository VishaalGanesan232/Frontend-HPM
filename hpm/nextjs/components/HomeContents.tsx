"use client";
import React, { useState } from "react";
import NavBar from "./app_layoyt/NavBar";
import SideBar from "./app_layoyt/SideBar";
import Content from "./Content";
import {
  colorGrayDark,
  colorBlueDark,
  accentOrangeDark,
  colorBlueLight,
  accentOrangeLight,
  sizeRegular,
} from "@filament/theme/styles/index";
import clsx from "clsx";
import * as styles from "../styles";
import { base } from "@filament-theme/base";
import { Portal } from "@filament/react";
import { backgroundPrimary } from "@filament-theme/atomics";
const HomeContents = ({ children }: { children: React.ReactNode }) => {
  const [open, setOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  return (
    <>
      <div
        className={clsx(
          darkMode ? colorGrayDark : colorBlueLight,
          darkMode ? accentOrangeDark : accentOrangeLight,
          sizeRegular,
          base,
          styles.page,
          backgroundPrimary
        )}
      >
        <Portal>
          <header
            className={clsx(
              darkMode ? colorGrayDark : colorBlueDark,
              accentOrangeDark,
              styles.header
            )}
          >
            <NavBar
              open={open}
              setOpen={setOpen}
              darkMode={darkMode}
              setDarkMode={setDarkMode}
            />
          </header>

          <SideBar
            open={open}
            setOpen={setOpen}
            darkMode={darkMode}
            setDarkMode={setDarkMode}
          />
          <Content>{children}</Content>
        </Portal>
      </div>
    </>
  );
};

export default HomeContents;
