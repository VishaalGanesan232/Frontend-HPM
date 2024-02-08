"use client";
import { Text, H1, H2, H4, H6 } from "@filament/react";
import React, { useState } from "react";
import GenerateReportRadio from "./GenerateReportRadio";
import { radioStyle, reportStyle } from "./reportStyles.css";
import GenerateReportFields from "./GenerateReportFields";

const GenerateReport = () => {
  const [value, setValue] = useState("api-metadata");

  return (
    <div>
      <h1>Generate Report</h1>
      <div className={reportStyle}>
        <H6>Source</H6>
        <GenerateReportRadio value={value} setValue={setValue} />
      </div>
      <div>
        <GenerateReportFields value={value} />
      </div>
    </div>
  );
};

export default GenerateReport;
