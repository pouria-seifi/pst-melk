import AppFeatures from "@/app/_widgets/appFeatures";
import SecondPocket from "@/app/_widgets/secondPocket";
import { Fragment } from "react";

export default function Home() {
  return (
    <Fragment>
      <SecondPocket />
      <AppFeatures />
    </Fragment>
  );
}
