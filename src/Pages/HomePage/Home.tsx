import { FC } from "react";
import Navbar from "../../Components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";

const Home: FC = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
    </div>
  );
};

export default Home;
