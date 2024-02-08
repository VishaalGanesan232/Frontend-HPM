"use client";

import {
  TabContext,
  Tabs,
  Item,
  TabPanels,
  TabContextProps,
} from "@filament/react";
import React from "react";
import TabData from "./TabData";

const GuardianActivationDeactivation = (props: TabContextProps) => {
  return (
    <>
      <div style={{ marginTop: "-30px" }}>
        <h1>Guardian Activation & Deactivation</h1>
        <TabContext>
          <Tabs {...props}>
            <Item key="activation">Activation</Item>
            <Item key="deactivation">Deactivation</Item>
          </Tabs>
          <TabPanels>
            <Item key="activation">
              <TabData type="activation" />
            </Item>
            <Item key="deactivation">
              <TabData type="deactivation" />
            </Item>
          </TabPanels>
        </TabContext>
      </div>
    </>
  );
};

export default GuardianActivationDeactivation;
