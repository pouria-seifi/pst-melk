import { Fragment } from "react";
import Header from "../_widgets/headerWithSearch";
import MostVisitedCities from "../_widgets/mostVisitedCities";
import QuoteFromUsers from "../_widgets/quoteFromUsers";

export default function Home() {
  return (
    <Fragment>
      <Header />
      <MostVisitedCities />
      <QuoteFromUsers />
    </Fragment>
  );
}
