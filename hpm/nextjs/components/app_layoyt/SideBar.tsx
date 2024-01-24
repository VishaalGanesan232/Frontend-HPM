"use client";

import {
  Brightness,
  Cross,
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
} from "../styles/compStyles.css";
import clsx from "clsx";

import { accentOrangeDark } from "@filament/theme/styles/accent/orange-dark";
import { accentOrangeLight } from "@filament/theme/styles/accent/orange-light";
import { colorBlueLight } from "@filament/theme/styles/color/blue-light";
import { colorGrayDark } from "@filament/theme/styles/color/gray-dark";
import { sizeRegular } from "@filament/theme/styles/size/regular";
import type { Selection } from "@filament/react-types";
import NavBar from "./NavBar";

import React, { useEffect, useMemo, useState } from "react";
import * as styles from "../../styles";
import { colorBlueDark } from "@filament/theme/styles/index";
import { container } from "@filament-theme/login";
import ListComponent from "../ListComponent";
import { HPM_LIST_ITEMS } from "../../app/constants/constant";

const SideBar = (props) => {
  const { open, setOpen, darkMode, setDarkMode } = props;

  const handleSelection = (keys: Selection) => {
    console.log("Selected Keys:");
  };

  if (open) {
    return (
      <div>
        <Sidebar
          isOpen={open}
          setOpen={setOpen}
          variant="temporary"
          className={clsx(
            backgroundSecondaryNeutral,
            borderRight,
            styles.mobileSidebar
          )}
        >
          <Cross onClick={() => setOpen(!open)} />
          <ListView>
            <Item key="home">Home</Item>
          </ListView>
          <hr className={separatorHorizontal} />
          <Expander variant="quiet">
            <ExpanderHeader>HPM</ExpanderHeader>
            <ExpanderContent style={{ padding: 0 }}>
              <ListComponent
                selectionMode="single"
                onSelectionChange={handleSelection}
                listItems={HPM_LIST_ITEMS}
              />
            </ExpanderContent>
          </Expander>
          {/* <Expander variant="quiet">
            <ExpanderHeader>HPM</ExpanderHeader>
            <ExpanderContent style={{ padding: 0 }}>
              <ListComponent
                selectionMode="single"
                onSelectionChange={handleSelection}
                listItems={HPM_LIST_ITEMS}
              />
            </ExpanderContent>
          </Expander> */}
          {/* <Expander variant="quiet">
            <ExpanderHeader>HPM</ExpanderHeader>
            <ExpanderContent style={{ padding: 0 }}>
              <ListComponent
                selectionMode="single"
                onSelectionChange={handleSelection}
                listItems={HPM_LIST_ITEMS}
              />
            </ExpanderContent>
          </Expander> */}
        </Sidebar>
      </div>
    );
  }

  return (
    <div className={layoutStyle} id="divId">
      <Sidebar
        // isOpen={open}
        // variant="mini"
        // setOpen={setOpen}
        className={clsx(
          backgroundSecondaryNeutral,
          borderRight,
          styles.sidebar
        )}
      >
        <ListView>
          <Item key="home">Home</Item>
        </ListView>
        <hr className={separatorHorizontal} />
        <Expander variant="quiet">
          <ExpanderHeader>HPM</ExpanderHeader>
          <ExpanderContent style={{ padding: 0 }}>
            <ListComponent
              selectionMode="single"
              onSelectionChange={handleSelection}
              listItems={HPM_LIST_ITEMS}
            />
          </ExpanderContent>
        </Expander>
        {/* <Expander variant="quiet">
          <ExpanderHeader>HPM</ExpanderHeader>
          <ExpanderContent style={{ padding: 0 }}>
            <ListComponent
              selectionMode="single"
              onSelectionChange={handleSelection}
              listItems={HPM_LIST_ITEMS}
            />
          </ExpanderContent>
        </Expander> */}
      </Sidebar>
    </div>
  );
};

export default SideBar;
