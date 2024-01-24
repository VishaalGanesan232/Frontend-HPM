import { base } from "@filament-theme/base";
import "@filament/fonts";
import type { Metadata } from "next";

import { colorBlueDark } from "@filament/theme/styles/color/blue-dark";
import { accentOrangeLight } from "@filament/theme/styles/accent/orange-light";
import { sizeRegular } from "@filament/theme/styles/size/regular";

export const metadata: Metadata = {
  title: "Filament React starter",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${colorBlueDark} ${accentOrangeLight} ${sizeRegular} ${base}`}
        style={{ margin: 0, padding: 0 }}
      >
        {children}
      </body>
    </html>
  );
}
