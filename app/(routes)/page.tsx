import { Fragment } from "react";
import Header from "../_widgets/headerWithSearch";
import MostVisitedCities from "../_widgets/mostVisitedCities";
import QuoteFromUsers from "../_widgets/quoteFromUsers";
import WhyPstMelk from "../_widgets/whyPstMelk";
import Pocket from "../_widgets/pocket";
import SuggestedPages from "../_widgets/suggestedPages";

export default function Home() {
  return (
    <Fragment>
      <Header />
      <MostVisitedCities />
      <WhyPstMelk />
      <QuoteFromUsers />
      <Pocket />
      <SuggestedPages />
    </Fragment>
  );
}
