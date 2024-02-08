import { style } from "@vanilla-extract/css";

export const layoutStyle = style({
  "@media": {
    "(max-width:1060px)": {
      // style for less than 900
      display: "none",
    },
  },
});

export const layoutStyle2 = style({
  "@media": {
    "(max-width: 1060px)": {
      display: "none",
    },
  },
});

export const menuStyle = style({
  "@media": {
    "(min-width: 1060px)": {
      display: "none",
    },
  },
});

export const layoutStyle3 = style({
  "@media": {
    "(max-width: 1200px)": {
      // style for less that 1200
      display: "none",
    },
  },
});

export const edmrFormStyles = style({
  display: "flex",
  flexDirection: "column",
  width: "100%",
  maxWidth: "50rem",
  gap: "20px",
});

export const edmrInpStyles = style({
  display: "flex",
});

export const noncommercialStyles = style({
  display: "flex",
  flexDirection: "column",
  gap: "20px",
});
export const buttonBlock = style({
  display: "flex",
  gap: "10px",
  marginTop: "20px",
});
