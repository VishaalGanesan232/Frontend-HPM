import dynamic from "next/dynamic";
import { AppComponent } from "../components/AppComponent";
// import "../styles/index";

// We are disabling Server Side Rendering (SSR) because in the Home component
// we need access to “window” which is available only on client-side.
// In your application you should architect your components do not disable SSR on a page root level

export default function Page() {
  return <AppComponent />;
}
