"use client";

import { DeleteTrash } from "@filament-icons/dls4-react";
import { Button, FlexBox, Text } from "@filament/react";
import React from "react";
import { viewUploadedFile } from "./styles/guradianStyle.css";
type uploadedFileProps = {
  name: string;
  size: number;
  dispatch: any;
};
const ShowUploadedFile = (props: uploadedFileProps) => {
  const { name, size, dispatch } = props;
  const removeHandler = () => {
    dispatch({ type: "REMOVE_FILE", payload: {} });
  };
  return (
    <FlexBox
      gap={16}
      alignItems="center"
      width="300px"
      marginTop="20px"
      className={viewUploadedFile}
    >
      <FlexBox elementType="span" flexDirection="column">
        <Text noGutter>
          <strong>{name}</strong>
        </Text>
        <Text variant="smallBody" noGutter>
          Filesize: {size / 1000000} MB
        </Text>
      </FlexBox>

      <Button
        variant="quietEmphasis"
        marginStart="auto"
        onPress={removeHandler}
      >
        <DeleteTrash />
      </Button>
    </FlexBox>
  );
};

export default ShowUploadedFile;
