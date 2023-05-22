import { FC } from "react";
import Navbar from "../../Components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Technical from "./components/Technical/Technical";

const Home: FC = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Technical />
    </div>
  );
};

export default Home;
