export const ITAP_API =
  "https://login.microsoftonline.com/1a407a2d-7675-4d17-8692-b3ac285306e4/oauth2/v2.0/token";
//https://login.microsoftonline.com/1a407a2d-7675-4d17-8692-b3ac285306e4/oauth2/v2.0/token
export const DEMO_LOGIN_DATA = [
  { userName: "vishaal", password: "vishaal" },
  { userName: "joe", password: "joe" },
];

export const HPM_LIST_ITEMS = [
  "eDMR Revocation",
  "NonCommercial Upgrade",
  "adopt Entitlement",
  "Guardian Activation and Deactivation",
  "Generate Report",
];
export const ALLOWED_PATHS = ["/dashboard"];

export const EDMR_PRODUCT_DATA = [
  { id: 1, name: "AB1", description: "alpha numeric " },
  { id: 2, name: "123", description: "numeric " },
  { id: 3, name: "ABC", description: "alpha " },
  { id: 4, name: "0908", description: "numeric " },
  { id: 4, name: "lorem", description: "general " },
];

export const getRandomId = () => {
  console.log(Date.now(), "XX");
  return Date.now();
};

export const getTimeStamp = () => {
  const today = new Date();
  return today.toLocaleString();
};
