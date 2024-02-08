"use client";
import { Item, ListItem, ListView } from "@filament/react";
import React, { ReactPropTypes } from "react";

export type listProps = {
  selectionMode: any;
  onSelectionChange: any;
  listItems: Array<string>;
};

const ListComponent = (props: listProps) => {
  const { selectionMode, onSelectionChange, listItems } = props;
  // console.log(onSelectionChange);
  return (
    <ListView
      selectionMode={selectionMode}
      // selectedKeys={}
      onSelectionChange={onSelectionChange}
      aria-label="List Item"
    >
      {listItems.map((listItem: string) => (
        <Item aria-label="test" key={listItem}>
          {listItem}
        </Item>
      ))}
    </ListView>
  );
};

export default ListComponent;
