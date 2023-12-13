import Banner from "../components/Banner";
import EventsAndCatering from "../components/EventsAndCatering";
import Features from "../components/Features";
import LiveEvents from "../components/LiveEvents/LiveEvents";
import TopFoods from "../components/topFoods/TopFoods";

const Home = () => {
  return (
    <div>
        <Banner></Banner>
      <TopFoods></TopFoods>
      <LiveEvents></LiveEvents>
      <EventsAndCatering></EventsAndCatering>
      <Features></Features>
    </div>
  );
};

export default Home;
