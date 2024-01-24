"use server";

import { redirect } from "next/navigation";
import { getSession } from "../../session";
import {
  DEMO_LOGIN_DATA,
  ITAP_API,
  getRandomId,
  getTimeStamp,
} from "../constants/constant";
import { NextResponse } from "next/server";

const loginValidate = (userName: string, password: string) =>
  DEMO_LOGIN_DATA.some(
    (obj) => obj.userName === userName && obj.password === password
  );

export async function submitLoginData(prevState: any, formData: FormData) {
  // console.log("FormData: ", formData.get("email"));
  const userName = formData.get("email");
  const password = formData.get("password");
  if (loginValidate(userName, password)) {
    const session = await getSession();
    session.username = userName;
    await session.save();
    redirect("/home");
  } else {
    // console.log("ERROR logins");
    return {
      message: "Invalid username or password",
    };
  }
}

export async function checkLogin(pathName) {
  const session = await getSession();
  if (session.username && pathName === "/") {
    return { user: true };
  }
}
export async function getToken() {
  const response = await fetch(ITAP_API, {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    cache: "no-store",
    body: new URLSearchParams({
      grant_type: "client_credentials",
      scope: "api://philips-software-entitlement-api-nonprod/.default",
      client_id: "3cd13e11-f1ac-454e-8157-13dc4211aaf2",
      client_secret: "hkx8Q~HhDNxPlndvUIFcM0TBQXPggzQwTu5gtaae",
    }),
  });
  const data = await response.json();
  console.log("DATA: ", data);
  return data?.access_token;
}

export async function getEntitlementAPI() {
  const token = await getToken();
  console.log("Token: ", token);
  const id = getRandomId();
  const time = getTimeStamp();
  const response = await fetch(
    "https://dev.api.it.philips.com/philips-software-entitlement-api/v1/entitlements/eId=EFT5G-KU25RM-S6IBB",
    {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
        "X-Correlation-Id": `${id}`,
        capabilityConsumer: "defaultUI",
        capabilityConsumerTimestamp: `${time}`,
      },
    }
  );
  const data = await response.json();
  console.log("entitlement: ", data);
  return data;
}

//  EDMR

// export async function getProducts(token: String) {
//   console.log("Token23: ", token);
//   const id = getRandomId();
//   const time = getTimeStamp();
//   const response = await fetch(
//     "https://dev.api.it.philips.com/philips-product-master-data-api/products/ad5fae2c-6f5f-4f76-a19d-24a8c7802dda",
//     {
//       method: "GET",
//       headers: {
//         Authorization: `Bearer ${token}`,
//         "X-Corelation-Id": id,
//         capabilityConsumer: "defaultUI",
//         capabilityConsumerTimestamp: time,
//       },
//     }
//   );
//   const data = await response.json();
//   console.log("getProducts", data);
//   return data;
// }
