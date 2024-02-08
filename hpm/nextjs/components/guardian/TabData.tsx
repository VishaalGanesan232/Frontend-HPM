"use client";
import { FlexBox, Text } from "@filament/react";
import React, { useReducer, useRef } from "react";
import Drag_Drop from "./Drag_Drop";
import { guardianStyle } from "./styles/guradianStyle.css";
import ShowUploadedFile from "./ShowUploadedFile";
import ButtonDecide from "./ButtonDecide";
import clsx from "clsx";
import { backgroundTertiary } from "@filament-theme/atomics";
type tabProps = {
  type: string;
};
const TabData = (props: tabProps) => {
  const { type} = props;
  const defaultState = {
    files: {},
  };
  const reducer = (state: any, action: any) => {
    switch (action.type) {
      case "ADD_FILE":
        const file = action.payload;
        return {
          files: {
            name: file.name,
            size: file.size,
          },
        };
        break;
      case "REMOVE_FILE":
        return {
          files: {},
        };
      default:
        break;
    }
  };

  const [state, dispatch] = useReducer(reducer, defaultState);

  return (
    <>
      <FlexBox flexDirection="column">
        <Text elementType="h2">
          {type === "activation"
            ? "Guradian Activation"
            : "Guardian Deactivation"}
        </Text>
        <div className={clsx(guardianStyle, backgroundTertiary)}>
          <Text marginY="1rem">Drag and drop an XML file </Text>
          <Text>or</Text>
          <Drag_Drop dispatch={dispatch} reducer={reducer} />
        </div>
        <div>
          {state?.files?.name && (
            <ShowUploadedFile
              name={state?.files?.name}
              size={state?.files?.size}
              dispatch={dispatch}
            />
          )}
        </div>
        <div>
          <ButtonDecide state={state} type={type} />
        </div>
      </FlexBox>
    </>
  );
};

export default TabData;
