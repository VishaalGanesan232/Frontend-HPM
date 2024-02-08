"use client";
import { DeleteTrash, TextBold, Textfield } from "@filament-icons/dls4-react";
import {
  Button,
  Cell,
  Column,
  ComboBox,
  Dialog,
  DialogActions,
  DialogContainer,
  DialogContent,
  FlexBox,
  Item,
  NotificationsQueue,
  Row,
  Table,
  TableBody,
  TableHeader,
  TextBox,
} from "@filament/react";
import { Key } from "@filament/react-types";
import React, { useState, useEffect, useCallback } from "react";
import {
  buttonBlock,
  edmrFormStyles,
  edmrInpStyles,
  noncommercialStyles,
} from "../styles/compStyles.css";
import { separatorHorizontal } from "@filament-theme/atomics";
import TableData from "../DataTable";
import DialogComponent from "../DialogComponent";
import { EDMR_PRODUCT_DATA } from "../../app/constants/constant";
import { getProducts, revoke } from "../../app/actions/action";
import { usePathname } from "next/navigation";
import { useFormState } from "react-dom";
import { colorBlueLight } from "@filament/theme/styles/index";
import Notifications from "../general/Notifications";
const EdmrForm = () => {
  const [openDialog, setOpenDialog] = useState(false);
  const [products, setProducts] = useState([]);
  const [productName, setProductName] = useState<Key | undefined>();
  const [productVersion, setProductVersion] = useState("");
  const [productDescription, setProductDescription] = useState("");
  const [notification, setNotification] = useState(false);
  const pathName = usePathname();

  const getProductsData = async () => {
    const response = await getProducts("");
    setProducts(response?.products?.product);
  };

  useEffect(() => {
    getProductsData();
  }, []);

  const getProductInfo = async (keys: string) => {
    const response = await getProducts(keys);
    setProductDescription(response?.product?.description);
    setProductVersion(response?.product?.nameVersion?.version);
  };

  const handleSelection = (keys: any) => {
    setProductName(keys);
    getProductInfo(keys);
  };

  const revoke = () => {
    setNotification(!notification);
  };

  const setInfo = useCallback(() => {
    setProductDescription("");
    setProductName("");
    setProductVersion("");
  }, []);

  if (pathName === "/home/hpm/non-commercialupgrade") {
    return (
      <div>
        <h1>Non-Commercial Upgrade</h1>
        <br />
        <FlexBox>
          <section className={noncommercialStyles}>
            <div className={edmrInpStyles}>
              <TextBox
                label="Product name"
                placeholder="Enter Name"
                flex="1"
                minWidth="15rem"
                width="15rem"
                aria-label="destination"
                isRequired={true}
                style={{ marginRight: "10px" }}
              />
              <TextBox
                label="Source Software Version"
                placeholder="Enter Version"
                // isFullWidth
                isRequired={true}
                flex="1"
                width="15rem"
                style={{ marginRight: "10px" }}
              />
              <TextBox
                label="ECName"
                placeholder="Enter Name"
                // isFullWidth
                flex="1"
                isRequired={false}
                width="15rem"
              />
            </div>
            <div className={edmrInpStyles}>
              {/* <ComboBox
                label="Country Pattern"
                placeholder="Select Country"
                // minWidth="15rem"
                isRequired={false}
                aria-label="destination"
                style={{ marginRight: "10px" }}
              > */}
              {/* {productName?.map((product) => (
                  <Item key={product.id}>{product.name}</Item>
                ))} */}
              {/* </ComboBox> */}
              <TextBox
                label="Target Version"
                placeholder="Enter Version"
                // isFullWidth
                flex="1"
                isRequired={true}
                width="15rem"
              />
            </div>

            <div className={buttonBlock}>
              <Button
                variant="primary"
                onPress={() => {
                  setOpenDialog(!openDialog);
                }}
              >
                Submit
              </Button>
              <Button variant="primary">Clear</Button>
            </div>
          </section>
        </FlexBox>
        <DialogComponent
          openDialog={openDialog}
          setOpenDialog={setOpenDialog}
          setInfo={setInfo}
          invokedBy=""
        />
      </div>
    );
  }
  return (
    <div>
      <h1>eDMR Revocation</h1>
      <br />
      <FlexBox>
        <section className={edmrFormStyles}>
          {/* <form action={edmrSubmit}> */}
          <div className={edmrInpStyles}>
            <ComboBox
              // <OptionType>
              label="Product Name"
              placeholder="Enter Name"
              aria-label="destination"
              items={products}
              selectedKey={productName}
              style={{ marginRight: "20px" }}
              minWidth="15rem"
              onSelectionChange={handleSelection}
            >
              {(item) => (
                <Item key={item["id"]}>{item?.["nameVersion"]?.["name"]}</Item>
              )}
            </ComboBox>

            <TextBox
              label="Product Version"
              placeholder="Enter Version"
              aria-label="version"
              flex="1"
              value={productVersion}
              minWidth="15rem"
            />
            <TextBox
              label="Product description"
              placeholder="Enter description"
              aria-label="description"
              value={productDescription}
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
              isDisabled={!productName}
            >
              <DeleteTrash />
              Revoke
            </Button>
            <Button
              variant="primary"
              onPress={() => {
                setInfo();
              }}
            >
              Cancel
            </Button>
          </div>
          <hr className={separatorHorizontal} />
          {/* </form> */}
        </section>
      </FlexBox>
      <DialogComponent
        openDialog={openDialog}
        setOpenDialog={setOpenDialog}
        setInfo={setInfo}
        invokedBy="eDMR"
      />
    </div>
  );
};

export default EdmrForm;
