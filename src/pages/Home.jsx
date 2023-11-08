import Banner from "../components/Banner";
import EventsAndCatering from "../components/EventsAndCatering";
import Features from "../components/Features";
import TopFoods from "../components/topFoods/TopFoods";

const Home = () => {
  return (
    <div>
        <Banner></Banner>
      <TopFoods></TopFoods>
      <EventsAndCatering></EventsAndCatering>
      <Features></Features>
    </div>
  );
};

export default Home;
