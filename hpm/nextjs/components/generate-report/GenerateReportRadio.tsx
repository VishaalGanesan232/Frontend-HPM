"use client";

import { RadioGroup, RadioGroupProps, RadioButton } from "@filament/react";
import React, { useState } from "react";
import { radioStyle, reportStyle } from "./reportStyles.css";
type radioProps = {
  value: string;
  setValue: (arg: string) => void;
};
const GenerateReportRadio = (props: radioProps) => {
  const { value, setValue } = props;
  return (
    <div>
      <RadioGroup
        // {...props}
        value={value}
        onChange={setValue}
      >
        <div className={radioStyle}>
          <RadioButton value="activity-log">Activity Log</RadioButton>
          <RadioButton value="api-metadata">API Metadata</RadioButton>
        </div>
      </RadioGroup>
    </div>
  );
};

export default GenerateReportRadio;
