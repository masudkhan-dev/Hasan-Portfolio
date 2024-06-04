import About from "../About/About";
import Contact from "../Contact/Contact";
import Hero from "../Hero/Hero";
import Portfolio from "../Portfolio/Portfolio";
import Service from "../Service/Service";

const Home = () => {
  return (
    <main>
      <div>
        <Hero />
        <About />
        <Portfolio />
        <Service />
        <Contact />
      </div>
    </main>
  );
};

export default Home;
