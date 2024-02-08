"use client";

import {
  ComboBox,
  DatePicker,
  Item,
  Text,
  TextBox,
  Button,
} from "@filament/react";
import { Download } from "@filament-icons/dls4-react";
import React, { useState } from "react";
import { fieldStyle, reportStyle } from "./reportStyles.css";
import { generateReportDropdown } from "../../app/constants/constant";
import DateSelector from "./DateSelector";
import type { RangeValue } from "@filament/react-types";
type reportProps = {
  value: string;
};
const GenerateReportFields = (props: reportProps) => {
  const { value } = props;
  const [type, setType] = useState();
  const [dateValue, setDateValue] = useState<RangeValue<Date> | null>();

  const handleSelection = (keys: any) => {
    setType(keys);
  };

  const checkDisabled = (): boolean | undefined => {
    if (type && type !== "custom") {
      return false;
    }
    if (type === "custom" && dateValue) {
      return false;
    }
    return true;
  };
  const disabled = checkDisabled();
  return (
    <div>
      <div className={fieldStyle}>
        <label>
          <Text weight="bold">Choose Date</Text>
        </label>
        <ComboBox
          placeholder="Choose date"
          aria-label="destination"
          items={generateReportDropdown}
          minWidth="15rem"
          onSelectionChange={handleSelection}
          isRequired={true}
          //   selectedKey={date}
        >
          {(item) => <Item key={item["id"]}>{item?.["name"]}</Item>}
        </ComboBox>
      </div>
      {type === "custom" && (
        <div className={fieldStyle}>
          <label>
            <Text weight="bold">Select from and to date </Text>
          </label>
          <DateSelector dateValue={dateValue} setDateValue={setDateValue} />
        </div>
      )}

      {(value === "api-metadata" ||
        (value === "activity-log" && type !== "custom")) && (
        <div className={fieldStyle}>
          <label>
            <Text weight="bold">Ent ID (optional)</Text>
          </label>
          <TextBox
            placeholder="Enter Ent ID"
            //   flex="1"
            width="15rem"
            aria-label="destination"
            isRequired={false}
          />
        </div>
      )}
      {(value === "api-metadata" ||
        (value === "activity-log" && type !== "custom")) && (
        <div className={fieldStyle}>
          <label>
            <Text weight="bold">Activation ID(optional)</Text>
          </label>
          <TextBox
            placeholder="Enter Activation ID"
            // isFullWidth
            isRequired={false}
            width="15rem"
          />
        </div>
      )}

      <Button variant="primary" isDisabled={disabled}>
        <Download />
        Download
      </Button>
    </div>
  );
};

export default GenerateReportFields;
