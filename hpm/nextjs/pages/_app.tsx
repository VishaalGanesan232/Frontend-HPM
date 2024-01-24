import { base } from "@filament-theme/base";
import "@filament/fonts";
import type { AppProps } from "next/app";

import { accentOrangeLight } from "@filament/theme/styles/accent/orange-light";
import { colorBlueDark } from "@filament/theme/styles/color/blue-dark";
import { sizeRegular } from "@filament/theme/styles/size/regular";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div
      className={`${colorBlueDark} ${accentOrangeLight} ${sizeRegular} ${base}`}
    >
      <Component {...pageProps} />
    </div>
  );
}
