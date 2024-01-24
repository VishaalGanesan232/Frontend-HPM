"use client";

import {
  Button,
  ProgressCircular,
  H3,
  Text,
  TextBox,
  Password,
} from "@filament/react";
import {
  About,
  BrandReadManual31X24,
  BrandWarning28X24,
} from "@filament-icons/dls4-react";
import { accentOrangeDark } from "@filament/theme/styles/accent/orange-dark";
import { colorBlueDark } from "@filament/theme/styles/color/blue-dark";
import { sizeRegular } from "@filament/theme/styles/size/regular";
import React, { useEffect, useMemo, useState } from "react";
import { lightLayer, lightLayerAnimation } from "@filament-theme/atomics";
import {
  container,
  shield,
  title,
  form,
  buttonGroup,
  footer,
  footerText,
  footerIcons,
} from "@filament-theme/login";
import { useRouter } from "next/navigation";
import { useFormState } from "react-dom";
import {
  checkLogin,
  getEntitlementAPI,
  getToken,
  submitLoginData,
} from "../app/actions/action";
import { getSession } from "../session";
import { usePathname } from "next/navigation";
import { getTimeStamp } from "../app/constants/constant";

export const DarkBlue = () => {
  const initialState = {
    message: "",
  };
  const [isInvalid, setInvalid] = useState<boolean | undefined>(undefined);
  const [userName, setUsername] = useState<string | undefined>(undefined);
  const [password, setPassword] = useState<string | undefined>(undefined);
  const router = useRouter();
  const pathname = usePathname();

  const [state, submitUserData] = useFormState(submitLoginData, initialState);

  const some = async () => {
    const data = await getToken();
    window.localStorage.setItem("access_token", data?.access_token);
  };

  const getEntitlement = async () => {
    const data = await getEntitlementAPI();
  };

  useEffect(() => {
    getEntitlement();
  }, []);

  const [isLoggedIn, setLogin] = useState<boolean | undefined>(undefined);

  const validateEmail = (email: String | undefined) => {
    const valStr = "/^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,})$/";
    if (email.match(valStr)) {
      return true;
    }
  };

  useEffect(() => {
    // console.log("inside useeffect", pathname);
    const check = async () => {
      const loggedIn = await checkLogin(pathname);
      setLogin(loggedIn?.user);
    };
    check();
  }, []);

  if (isLoggedIn) {
    router.push("/home");
  }

  return (
    <div
      className={`${colorBlueDark} ${accentOrangeDark} ${sizeRegular} ${container}`}
    >
      <div className={`${lightLayer} ${lightLayerAnimation}`} />
      <About className={shield} />
      <H3 className={title}>HPM DEMO APP</H3>
      {!isLoggedIn && (
        <form id="user-input" className={form} action={submitUserData}>
          <label htmlFor="email"></label>
          {state?.message && <h1>Invalid Username or password</h1>}
          <TextBox
            aria-label="Email"
            value={userName}
            onChange={setUsername}
            isInvalid={isInvalid}
            isFullWidth
            id="email"
            name="email"
            errorMessage={isInvalid ? "Invalid email address" : null}
            placeholder="Email / Username"
          />
          <label htmlFor="password"></label>
          <Password
            aria-label="Password"
            value={password}
            id="password"
            name="password"
            onChange={setPassword}
            isInvalid={isInvalid}
            errorMessage={
              isInvalid ? "Invalid user name or password" : undefined
            }
            isFullWidth
            placeholder="Password"
          />

          <div className={buttonGroup}>
            <Button
              variant="primary"
              isFullWidth
              // onPress={validate}
              type="submit"
              isDisabled={!(userName && password)}
            >
              Log in
            </Button>
          </div>
        </form>
      )}

      {isLoggedIn && <ProgressCircular size="normal" isIndeterminate />}
      <footer className={footer}>
        <Text className={footerText}>
          © 2023 Koninklijke Philips N.V. All rights are reserved. Reproduction
          or transmission in whole or in part, in any form or by any means,
          electronic, mechanical, or otherwise, is prohibited without the prior
          written consent of the copyright owner.
        </Text>
      </footer>
      <div className={footerIcons}>
        <BrandReadManual31X24 width="1.75rem" height="1.75rem" />
        <BrandWarning28X24 width="1.75rem" height="1.75rem" />
      </div>
    </div>
  );
};
