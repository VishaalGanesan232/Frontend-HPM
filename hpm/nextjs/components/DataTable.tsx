"use client";
import {
  Table,
  TableHeader,
  TableBody,
  Column,
  Row,
  Cell,
  TableProps,
  Pagination,
} from "@filament/react";
import React, { useState } from "react";
import { edmrColumns } from "../app/constants/tableData";
import DialogComponent from "./DialogComponent";

const Default = () => {
  const [sortDesctiption, setSortDescription] = useState(edmrColumns);
  const [openDialog, setOpenDialog] = useState(false);
  return (
    <>
      <Table
        style={{ width: "200px", marginLeft: "0px", cursor: "pointer" }}
        // onSortChange={onSortChange}
        // sortDescriptor={sortDescriptor}
        aria-label="Sorted Table"
        selectionMode="single"
        onSelectionChange={(e) => {
          // setOpenDialog(!openDialog);
          // console.log("event", e);
        }}
      >
        <TableHeader columns={edmrColumns}>
          {(column) => (
            <Column allowsSorting={column.allowSort} key={column.title}>
              <span style={{ whiteSpace: "nowrap" }}>{column.title}</span>
            </Column>
          )}
        </TableHeader>
        <TableBody>
          <Row>
            <Cell>ABC</Cell>
            <Cell>1.1.1</Cell>
            <Cell>InProgress</Cell>

            <Cell>30k</Cell>
            <Cell>Today</Cell>
            <Cell>20m</Cell>
          </Row>
          <Row>
            <Cell>ABC</Cell>
            <Cell>1.1.1</Cell>
            <Cell>InProgress</Cell>

            <Cell>30k</Cell>
            <Cell>Today</Cell>
            <Cell>20m</Cell>
          </Row>
          <Row>
            <Cell>ABC</Cell>
            <Cell>1.1.1</Cell>
            <Cell>InProgress</Cell>

            <Cell>30k</Cell>
            <Cell>Today</Cell>
            <Cell>20m</Cell>
          </Row>
          <Row>
            <Cell>ABC</Cell>
            <Cell>1.1.1</Cell>
            <Cell>InProgress</Cell>

            <Cell>30k</Cell>
            <Cell>Today</Cell>
            <Cell>20m</Cell>
          </Row>
        </TableBody>
      </Table>
      <Pagination total={20} pageSize={5} currentPage={0} />
      <DialogComponent openDialog={openDialog} setOpenDialog={setOpenDialog} />
    </>
  );
};

export default Default;
