import { Fragment } from "react";
import Header from "../_widgets/headerWithSearch";
import MostVisitedCities from "../_widgets/mostVisitedCities";

export default function Home() {
  return (
    <Fragment>
      <Header />
      <MostVisitedCities />
    </Fragment>
  );
}
