import dynamic from "next/dynamic";

// We are disabling Server Side Rendering (SSR) because in the Home component
// we need access to “window” which is available only on client-side.
// In your application you should architect your components do not disable SSR on a page root level
const HomeNoSSR = dynamic(() => import("../components/home"), {
  ssr: false,
});

export default function HomePage() {
  return (
    <div>
      <HomeNoSSR />
    </div>
  );
}
