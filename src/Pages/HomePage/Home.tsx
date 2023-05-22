import { FC } from "react";
import Navbar from "../../Components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import React from "react";
// import About from "./components/About/About";
// import Technical from "./components/Technical/Technical";
// import Topic from "./components/Topic/Topic";

const About = React.lazy(() => import("./components/About/About"));
const Technical = React.lazy(() => import("./components/Technical/Technical"));
const Topic = React.lazy(() => import("./components/Topic/Topic"));
const MyProject = React.lazy(() => import("./components/MyProject/MyProject"));

const Home: FC = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Technical />
      <Topic />
      <MyProject />
    </div>
  );
};

export default Home;
