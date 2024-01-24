/**
 * This story has multiple source files.
 * Please open the Canvas for the main story and open
 * the "Story Source" tab to view the full source.
 */
"use client";
import {
  Avatar,
  Button,
  Card,
  CardHeader,
  Item,
  Expander,
  ExpanderContent,
  ExpanderHeader,
  Label,
  FlexBox,
  ListView,
  MenuButton,
  NavigationBar,
  NavigationBarTitle,
  DotSeparator,
  PatientInfo,
  Sidebar,
  H1,
  H2,
  H3,
  Portal,
} from "@filament/react";
import { accentOrangeDark } from "@filament/theme/styles/accent/orange-dark";
import { accentOrangeLight } from "@filament/theme/styles/accent/orange-light";
import { colorBlueDark } from "@filament/theme/styles/color/blue-dark";
import { colorBlueLight } from "@filament/theme/styles/color/blue-light";
import { colorGrayDark } from "@filament/theme/styles/color/gray-dark";
import { sizeTouch } from "@filament/theme/styles/size/touch";
import React, { useEffect, useMemo, useState } from "react";
import {
  backgroundPrimary,
  separatorHorizontal,
} from "@filament-theme/atomics";
import { base } from "@filament-theme/base";
import {
  ArrowDown,
  Brightness,
  LogOff,
  Menu,
  Moon,
  PersonPortraitCircle,
  PhilipsWordMark,
  Settings,
} from "@filament-icons/dls4-react";

// import imgClinical2 from "./images/img-clinical-2.jpg";

function useMediaQuery(query: string) {
  const mediaQuery = useMemo(() => window.matchMedia(query), [query]);
  const [match, setMatch] = useState(mediaQuery.matches);

  useEffect(() => {
    const onChange = () => setMatch(mediaQuery.matches);
    mediaQuery.addEventListener("change", onChange);

    return () => mediaQuery.removeEventListener("change", onChange);
  }, [mediaQuery]);

  return match;
}

function useBreakpoints() {
  const minWidth900 = useMediaQuery("(min-width: 1000px)");
  const minWidth1060 = useMediaQuery("(min-width: 1160px)");
  const minWidth1200 = useMediaQuery("(min-width: 1300px)");

  return { minWidth900, minWidth1060, minWidth1200 };
}

const pageStyle: React.CSSProperties = {
  position: "relative",
  display: "grid",
  gridTemplateColumns: "21.5rem 1fr",
  gridTemplateRows: "auto 1fr",
  gridTemplateAreas: `
    'header header'
    'sidebar content'`,
  height: "100%",
};

const headerStyle: React.CSSProperties = {
  gridArea: "header",
  containerType: "inline-size",
  paddingLeft: "0.25rem",
};

const contentStyle: React.CSSProperties = {
  gridArea: "content",
  padding: "2rem 1.5rem",
  overflowY: "auto",
};

const pageSidebar: React.CSSProperties = {
  minWidth: "13rem",
  width: "21.5rem",
  maxWidth: "400px",
};

const sidebarToggleButton: React.CSSProperties = {
  zIndex: 1,
  marginRight: "0.5rem",
};

const cardGridStyle: React.CSSProperties = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fill, minmax(21rem, max-content))",
  gap: "1rem",
};

const Default = ({ children }) => {
  const { minWidth900, minWidth1060, minWidth1200 } = useBreakpoints();

  const imgClinical2 = "https://picsum.photos/320/240";
  const defaultState = minWidth900 ? true : false;
  const [opened, setOpened] = React.useState(defaultState);
  const [darkMode, setDarkMode] = useState(false);
  const patientInfoStyle: React.CSSProperties = {
    gap: "0.5rem",
    alignItems: "center",
    justifyContent: "center",
    ...(minWidth900 && {
      position: "absolute",
      left: 0,
      right: 0,
    }),
  };

  useEffect(() => {
    if (!minWidth1060) {
      setOpened(false);
    } else {
      setOpened(true);
    }
  }, [minWidth1060]);

  return (
    <div
      style={{
        ...pageStyle,
        gridTemplateColumns: opened ? "21.5rem 1fr" : "0 1fr",
      }}
      className={`${darkMode ? colorGrayDark : colorBlueLight} ${
        darkMode ? accentOrangeLight : accentOrangeDark
      } ${sizeTouch} ${base}`}
    >
      <Portal>
        <NavigationBar
          style={headerStyle}
          className={darkMode ? colorGrayDark : colorBlueDark}
        >
          <Button
            style={sidebarToggleButton}
            onPress={() => setOpened(!opened)}
            variant="quiet"
            aria-label="close"
          >
            <Menu />
          </Button>
          {minWidth1060 && (
            <NavigationBarTitle>
              <PhilipsWordMark />
              <H1>Application Name</H1>
            </NavigationBarTitle>
          )}

          <PatientInfo style={patientInfoStyle}>
            <Avatar size="extraSmall">
              <PersonPortraitCircle />
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
            {minWidth1060 && (
              <FlexBox gap={4}>
                <Label variant="descriptor">ID</Label>
                <Label>12345678</Label>
              </FlexBox>
            )}

            {minWidth1060 && (
              <FlexBox gap={8} alignItems="center">
                <DotSeparator />
                <FlexBox gap={4}>
                  <Label variant="descriptor">DOB</Label>
                  <Label>05 Jun 2022</Label>
                </FlexBox>
              </FlexBox>
            )}

            {minWidth1200 && (
              <FlexBox gap={8} alignItems="center">
                <DotSeparator />
                <FlexBox gap={4}>
                  <Label variant="descriptor">Gender</Label>
                  <Label>Female</Label>
                </FlexBox>
              </FlexBox>
            )}
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
              onPress={() => setDarkMode(!darkMode)}
            >
              {darkMode ? <Moon /> : <Brightness />}
            </Button>
            {minWidth900 ? (
              <MenuButton
                buttonContent={
                  <>
                    Schröter, Henri
                    <ArrowDown />
                  </>
                }
              >
                <Item>
                  <Settings />
                  Settings
                </Item>
                <Item>
                  <LogOff />
                  Log Off
                </Item>
              </MenuButton>
            ) : (
              <Avatar size="small">HS</Avatar>
            )}
          </FlexBox>
        </NavigationBar>
        <Sidebar
          isOpen={opened}
          variant="persistent"
          className={backgroundPrimary}
          style={{ ...pageSidebar, gridArea: "sidebar" }}
        >
          <ListView
            defaultSelectedKeys={new Set(["item1"])}
            selectionMode="single"
          >
            <Item key="item1">Route 1</Item>
            <Item key="item2">Route 2</Item>
            <Item key="item3">Route 3</Item>
          </ListView>
          <hr className={separatorHorizontal} />
          <Expander variant="quiet">
            <ExpanderHeader>Nav group 1</ExpanderHeader>
            <ExpanderContent style={{ padding: 0 }}>
              <ListView>
                <Item key="item4">Route 4</Item>
                <Item key="item5">Route 5</Item>
                <Item key="item6">Route 6</Item>
              </ListView>
            </ExpanderContent>
          </Expander>
          <Expander variant="quiet">
            <ExpanderHeader>Nav group 2</ExpanderHeader>
            <ExpanderContent style={{ padding: 0 }}>
              <ListView>
                <Item key="item7">Route 7</Item>
                <Item key="item8">Route 8</Item>
                <Item key="item9">Route 9</Item>
                <Item key="item10">Route 10</Item>
                <Item key="item11">Route 11</Item>
                <Item key="item12">Route 12</Item>
              </ListView>
            </ExpanderContent>
          </Expander>
        </Sidebar>
        <main style={contentStyle}>
          <div style={cardGridStyle}>
            {/* <Card>
              <img
                src={imgClinical2}
                alt="Random image"
                style={{ width: "100%" }}
              />

              <CardHeader>
                <H3>Card title</H3>
                Card Subtitle
              </CardHeader>
            </Card>
            <Card>
              <img
                src={imgClinical2}
                alt="Random image"
                style={{ width: "100%" }}
              />

              <CardHeader>
                <H3>Card title</H3>
                Card Subtitle
              </CardHeader>
            </Card>
            <Card>
              <img
                src={imgClinical2}
                alt="Random image"
                style={{ width: "100%" }}
              />

              <CardHeader>
                <H3>Card title</H3>
                Card Subtitle
              </CardHeader>
            </Card>
            <Card>
              <img
                src={imgClinical2}
                alt="Random image"
                style={{ width: "100%" }}
              />

              <CardHeader>
                <H3>Card title</H3>
                Card Subtitle
              </CardHeader>
            </Card>
            <Card>
              <img
                src={imgClinical2}
                alt="Random image"
                style={{ width: "100%" }}
              />

              <CardHeader>
                <H3>Card title</H3>
                Card Subtitle
              </CardHeader>
            </Card>
            <Card>
              <img
                src={imgClinical2}
                alt="Random image"
                style={{ width: "100%" }}
              />

              <CardHeader>
                <H3>Card title</H3>
                Card Subtitle
              </CardHeader>
            </Card> */}
            {children}
          </div>
        </main>
      </Portal>
    </div>
  );
};

export default Default;
