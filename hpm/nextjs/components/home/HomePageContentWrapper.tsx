import React from "react";
import Entitlements from "./Entitlements";
import { homeStyles } from "./styles/homeStyles.css";

const HomePageContentWrapper = () => {
  return (
    <div className={homeStyles}>
      <Entitlements />
      {/* <ServerTime /> */}
      <Entitlements />
    </div>
  );
};

export default HomePageContentWrapper;
