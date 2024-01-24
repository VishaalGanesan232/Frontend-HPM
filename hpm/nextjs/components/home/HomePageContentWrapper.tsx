import React from "react";
import ServerTime from "./ServerTime";
import Entitlements from "./Entitlements";
import { homeStyles } from "./styles/homeStyles.css";

const HomePageContentWrapper = () => {
  return (
    <div className={homeStyles}>
      <ServerTime />
      <Entitlements />
    </div>
  );
};

export default HomePageContentWrapper;
