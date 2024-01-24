"use client";
import { DeleteTrash, TextBold, Textfield } from "@filament-icons/dls4-react";
import {
  Button,
  Cell,
  Column,
  ComboBox,
  FlexBox,
  Row,
  Table,
  TableBody,
  TableHeader,
  TextBox,
} from "@filament/react";
import React, { useState, useEffect } from "react";
import {
  buttonBlock,
  edmrFormStyles,
  edmrInpStyles,
} from "../styles/compStyles.css";
import { separatorHorizontal } from "@filament-theme/atomics";
import TableData from "../DataTable";
import DialogComponent from "../DialogComponent";
import { EDMR_PRODUCT_DATA } from "../../app/constants/constant";
import { getProducts } from "../../app/actions/action";
const EdmrForm = () => {
  const [openDialog, setOpenDialog] = useState(false);
  let productName;
  useEffect(() => {
    productName = EDMR_PRODUCT_DATA;
    // const data = getProducts(window.localStorage.getItem("access_token"));
  }, []);
  return (
    <div>
      <h1>eDMR Revocation</h1>
      <br />
      <FlexBox>
        <section className={edmrFormStyles}>
          <div className={edmrInpStyles}>
            <ComboBox
              label="Product name"
              placeholder="Enter Name"
              flex="1"
              minWidth="15rem"
              aria-label="destination"
              style={{ marginRight: "10px" }}
            >
              {productName?.map((product) => (
                <Item key={product.id}>{product.name}</Item>
              ))}
            </ComboBox>
            <TextBox
              label="Product Version"
              placeholder="Enter Version"
              // isFullWidth
              flex="1"
              minWidth="15rem"
            />
            <TextBox
              label="Product description"
              placeholder="Enter description"
              // isFullWidth
              flex="1"
              minWidth="15rem"
            />
          </div>

          <div className={buttonBlock}>
            <Button
              variant="primary"
              onPress={() => {
                setOpenDialog(!openDialog);
              }}
            >
              <DeleteTrash />
              Revoke
            </Button>
            <Button variant="primary">Cancel</Button>
          </div>
          <hr className={separatorHorizontal} />
        </section>
      </FlexBox>
      <DialogComponent openDialog={openDialog} setOpenDialog={setOpenDialog} />
    </div>
  );
};

export default EdmrForm;
//
