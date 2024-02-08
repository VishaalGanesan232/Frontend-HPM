"use client";

import {
  Brightness,
  LogOff,
  Moon,
  PersonPortraitCircle,
  PhilipsWordMark,
} from "@filament-icons/dls4-react";
import {
  backgroundPrimary,
  backgroundSecondaryNeutral,
  borderRight,
  separatorHorizontal,
} from "@filament-theme/atomics";
import { AlarmBellIEC32, Menu } from "@filament-icons/dls4-react";
import { base } from "@filament-theme/base";
import {
  Avatar,
  Button,
  Card,
  CardHeader,
  Dropdown,
  Item,
  Expander,
  ExpanderContent,
  ExpanderHeader,
  Label,
  FlexBox,
  ListView,
  NavigationBar,
  NavigationBarTitle,
  DotSeparator,
  PatientInfo,
  H1,
  H2,
  H3,
  Portal,
  Sidebar,
} from "@filament/react";
import {
  layoutStyle,
  layoutStyle2,
  layoutStyle3,
  menuStyle,
} from "../styles/compStyles.css";
import clsx from "clsx";

import { accentOrangeDark } from "@filament/theme/styles/accent/orange-dark";
import { accentOrangeLight } from "@filament/theme/styles/accent/orange-light";
import { colorBlueLight } from "@filament/theme/styles/color/blue-light";
import { colorGrayDark } from "@filament/theme/styles/color/gray-dark";
import { sizeRegular } from "@filament/theme/styles/size/regular";
import type { Selection } from "@filament/react-types";

import React, {
  Dispatch,
  ReactPropTypes,
  SetStateAction,
  useEffect,
  useMemo,
  useState,
} from "react";
import * as styles from "../../styles";
import { colorBlueDark } from "@filament/theme/styles/index";
import { container } from "@filament-theme/login";
import ListComponent from "../ListComponent";
import { HPM_LIST_ITEMS } from "../../app/constants/constant";
import { redirect } from "next/navigation";

export type navBarProps = {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  darkMode: boolean;
  setDarkMode: (arg: boolean) => void;
};

const NavBar = (props: navBarProps) => {
  const { open, setOpen, darkMode, setDarkMode } = props;

  return (
    <NavigationBar variant="primary">
      <div className={menuStyle}>
        <Button
          style={{ zIndex: 1, marginRight: "0.5rem" }}
          onPress={() => setOpen(!open)}
          variant="quiet"
          aria-label="close"
        >
          <Menu />
        </Button>
      </div>
      <div className={layoutStyle}>
        <NavigationBarTitle>
          <PhilipsWordMark />
          <H1>HPM Demo App</H1>
        </NavigationBarTitle>
      </div>
      <FlexBox
        alignItems="center"
        justifyContent="flex-end"
        gap={4}
        style={{ marginLeft: "auto" }}
      >
        <Button
          variant="quiet"
          aria-label="Theming mode toggle"
          // onPress={() => setDarkMode(!darkMode)}
        >
          {<AlarmBellIEC32 />}
        </Button>

        <Button
          variant="quiet"
          aria-label="Theming mode toggle"
          onPress={() => setDarkMode(!darkMode)}
        >
          {darkMode ? <Moon /> : <Brightness />}
        </Button>
        <Dropdown variant="input-quiet" defaultSelectedKey="henri">
          <Item key="henri">Schröter, Henri</Item>
          <Item key="logout">
            <LogOff />
            Logout
          </Item>
        </Dropdown>
      </FlexBox>
    </NavigationBar>
  );
};

export default NavBar;
