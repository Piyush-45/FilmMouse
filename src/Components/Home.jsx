import Hero from "../Hero/Hero";
import "../index.css";
import "../Hero/Hero.css";
import Intheator from "../InTheater/Intheator";
import OnTv from "../OnTv/OnTv";
import News from "../News/News";
// import Celebrities from "../Celebrities/Celebrities";
const Home = () => {
  return (
    <>
      <section className="main__container ">
        <div className="hero_container">
          <Hero />
        </div>
      </section>
      <div className="next_container ">
        <div className="hero_container">
          <Intheator />
          <OnTv />
          <News />
        </div>
      </div>
    </>
  );
};

export default Home;
