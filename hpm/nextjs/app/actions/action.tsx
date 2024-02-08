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

const loginValidate = (
  userName: FormDataEntryValue | null,
  password: FormDataEntryValue | null
) =>
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

export async function checkLogin(pathName: string | null) {
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
      client_id: "e1d47fbe-2f15-44a4-8685-b2b33b8f1f73",
      client_secret: "i6C8Q~jKlwTjL9wzHl4KuMABO6yrQ0g_UWBM4bui",
      scope: "api://philips-product-master-data-api-nonprod/.default",
    }),
  });
  const data = await response.json();
  return data?.access_token;
}

//  EDMR

export async function getProducts(keys: string | null) {
  const token = await getToken();

  const id = getRandomId();
  const time = getTimeStamp();
  const response = await fetch(
    !keys
      ? "https://dev.api.it.philips.com/philips-product-master-data-api/products"
      : `https://dev.api.it.philips.com/philips-product-master-data-api/products/${keys}`,
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
  return data;
}

export async function revoke(prevState: any, formData: FormData) {
  return "";
}
