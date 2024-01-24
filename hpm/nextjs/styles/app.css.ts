import { globalStyle, style } from "@vanilla-extract/css";

export const page = style({
  display: "grid",
  gridTemplateColumns: "auto auto",
  gridTemplateRows: "auto 1fr",
  gridTemplateAreas: `
    'header header'
    'sidebar content'`,
  height: "100svh",
  // display: "flex"
});
export const pageNoSidebar = style({
  display: "grid",
  gridTemplateColumns: "0 auto",
  gridTemplateRows: "auto 1fr",
  gridTemplateAreas: `
    'header header'
    'content content'`,
  height: "100svh",
});

export const header = style({
  gridArea: "header",
  containerType: "inline-size",
});

export const sidebar = style({
  gridArea: "sidebar",
  overflowY: "auto",
  width: "320px",
  height: "100%",
});

export const mobileSidebar = style({
  gridArea: "sidebar",
  overflowY: "auto",
  width: "320px",
  height: "100%",
});

export const content = style({
  gridArea: "content",
  padding: "2rem 1.5rem",
  overflowY: "auto",
});

export const patientInfo = style({
  gap: "0.5rem",
  alignItems: "center",
  justifyContent: "center",
  "@media": {
    "(min-width: 900px)": {
      position: "absolute",
      left: 0,
      right: 0,
    },
  },
});

// export const cardGrid = style({
//   display: "grid",
//   gridTemplateColumns: "repeat(auto-fill, minmax(20rem, max-content))",
//   gap: "1rem",
// });

globalStyle("body", {
  padding: 0,
  margin: 0,
});
