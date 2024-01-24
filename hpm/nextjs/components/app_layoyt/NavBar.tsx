"use client";

import {
  Brightness,
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

import React, { useEffect, useMemo, useState } from "react";
import * as styles from "../../styles";
import { colorBlueDark } from "@filament/theme/styles/index";
import { container } from "@filament-theme/login";
import ListComponent from "../ListComponent";
import { HPM_LIST_ITEMS } from "../../app/constants/constant";
import { redirect } from "next/navigation";

const NavBar = (props) => {
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
      <PatientInfo className={styles.patientInfo}>
        <Avatar size="extraSmall">
          <PersonPortraitCircle style={{ width: "1.5rem", height: "1.5rem" }} />
        </Avatar>
        <H2
          noGutter
          style={{
            marginRight: "0.5rem",
            fontSize: "1rem",
            fontWeight: "normal",
            lineHeight: "1.375rem",
          }}
        >
          Patient name
        </H2>
        <Label variant="descriptor">ID</Label>
        <Label>12345678</Label>
        <FlexBox gap={8} alignItems="center" className={layoutStyle2}>
          <DotSeparator />
          <Label variant="descriptor">DOB</Label>
          <Label>05 Jun 2022</Label>
        </FlexBox>

        <FlexBox gap={8} alignItems="center" className={layoutStyle3}>
          <DotSeparator />
          <Label variant="descriptor">Gender</Label>
          <Label>Female</Label>
        </FlexBox>
      </PatientInfo>
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
        </Dropdown>
      </FlexBox>
    </NavigationBar>
  );
};

export default NavBar;
