"use client";
import { Item, ListItem, ListView } from "@filament/react";
import React, { ReactPropTypes } from "react";

const ListComponent = (props) => {
  const { selectionMode, onSelectionChange, listItems } = props;
  // console.log(onSelectionChange);
  return (
    <ListView
      selectionMode={selectionMode}
      // selectedKeys={}
      onSelectionChange={onSelectionChange}
      aria-label="List Item"
    >
      {listItems.map((listItem: String) => (
        <Item aria-label="test" key={listItem}>
          {listItem}
        </Item>
      ))}
    </ListView>
  );
};

export default ListComponent;
