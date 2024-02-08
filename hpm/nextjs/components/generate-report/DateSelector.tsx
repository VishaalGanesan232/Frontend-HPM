"use client";
import {
  DateFieldProps,
  DatePicker,
  DateRangePicker,
  DateRangePickerProps,
} from "@filament/react";
import React, { useState } from "react";

type dateProps = {
  dateValue: any;
  setDateValue: any;
};

const DateSelector = (props: dateProps) => {
  const { dateValue, setDateValue } = props;
  return (
    <div>
      <DateRangePicker
        value={dateValue}
        onChange={setDateValue}
        showClearButton
      />
    </div>
  );
};

export default DateSelector;
