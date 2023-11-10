import AppFeatures from "@/app/_widgets/appFeatures";
import Contact from "@/app/_widgets/contact";
import EventsTillNow from "@/app/_widgets/eventsTillNow";
import FAQ from "@/app/_widgets/faq";
import SecondPocket from "@/app/_widgets/secondPocket";
import { Fragment } from "react";

export default function Home() {
  return (
    <Fragment>
      <SecondPocket />
      <AppFeatures />
      <EventsTillNow />
      <FAQ />
      <Contact />
    </Fragment>
  );
}
