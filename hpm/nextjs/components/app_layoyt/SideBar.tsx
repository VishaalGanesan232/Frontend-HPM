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

import React, {
  Dispatch,
  ReactPropTypes,
  SetStateAction,
  useEffect,
  useMemo,
  useState,
} from "react";
import * as styles from "../../styles";
import ListComponent from "../ListComponent";
import { HPM_LIST_ITEMS } from "../../app/constants/constant";
import { useRouter } from "next/navigation";

export type sideBarProps = {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  darkMode: boolean;
  setDarkMode: (arg: boolean) => void;
};

const SideBar = (props: sideBarProps) => {
  const { open, setOpen, darkMode, setDarkMode } = props;
  const router = useRouter();

  const routeList = (name: String) => {
    switch (name) {
      case "eDMR Revocation":
        router.push("/home/hpm/eDMR");
        break;
      case "Non-commercial Upgrade":
        router.push("/home/hpm/non-commercialupgrade");
        break;
      case "Guardian Activation and Deactivation":
        router.push("/home/hpm/guardian-activation-deactivation");
        break;
      case "Generate Report":
        router.push("/home/hpm/generate-report");
        break;
      default:
        break;
    }
  };

  const handleSelection = (keys: any) => {
    routeList(keys?.anchorKey);
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
