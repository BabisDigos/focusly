import { lazy } from "solid-js";
import { LofiGirl } from "~/components/Backgrounds";
import { Menu } from "~/components/Menu";

const Panels = lazy(() =>
  import("~/components/Panels").then((m) => ({ default: m.Panels }))
);

export default function Home() {
  return (
    <main>
      <LofiGirl />
      <Menu />
      <Panels />
    </main>
  );
}
