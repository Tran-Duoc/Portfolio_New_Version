import { useCallback, useState, useEffect } from "react";
import type { Container, Engine } from "tsparticles-engine";
import Particles from "react-particles";
import { loadFull } from "tsparticles";
import Text from "../../../../Components/Text/Text";
import Typing from "../../../../Components/Typing/Typing";
import SubTitle from "../../../../Components/SubTitle/SubTitle";
import Button from "../../../../Components/Button/Button";
import Icon from "../../../../Components/CardItem/CardItem";
import React from "../../../../assets/images/React.png";
import Tailwind from "../../../../assets/images/tailwind.png";
import Redux from "../../../../assets/images/redux.png";
import ReactRouterDom from "../../../../assets/images/react-router-dom.png";
import ReactQuery from "../../../../assets/images/react-query.png";

const element = [React, Tailwind, Redux, ReactRouterDom, ReactQuery];

const LeftSide = () => {
  return (
    <>
      <h1 className="text-4xl font-extrabold text-slate-700 dark:text-slate-100 sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl ">
        <Text>H</Text>
        <Text>i</Text>
        <Text>,</Text>
        <br />
        <Text>M</Text>
        <Text>ì</Text>
        <Text>n</Text>
        <Text>h</Text>
        &nbsp;
        <Text>l</Text>
        <Text>à</Text>
        &nbsp;
        <Text color="text-red-600">T</Text>
        <Text>r</Text>
        <Text>ầ</Text>
        <Text>n</Text>
        &nbsp;
        <Text color="text-red-600">Đ</Text>
        <Text>ư</Text>
        <Text>ợ</Text>
        <Text>c</Text>
        <br />
        <Typing />
      </h1>
      <div className="  text-slate-800 dark:text-slate-300 text-base  md:text-xl font-medium mt-5 md:mt-8 lg:mt-10  md:flex-row">
        <SubTitle style="  duration-500 hover:bg-[#271b30] px-2 hover:text-[#77213d] boxTextRed   boxText">
          Lập trình viên Front end
        </SubTitle>
        &nbsp;/&nbsp;
        <SubTitle style="  duration-500 hover:bg-[#231c3e] px-2 hover:text-[#a724bc] boxTextPurple   boxText">
          Back end
        </SubTitle>
      </div>
      <div className="mt-2 md:mt-3   text-slate-800 dark:text-slate-300">
        <Button
          type="link"
          path="https://www.facebook.com/profile.php?id=100027522219067"
          style=" mt-10 block w-full rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 px-7 py-4 text-center text-sm font-medium text-white hover:bg-gradient-to-bl focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:focus:ring-cyan-800 sm:mr-5 sm:inline-block sm:w-auto"
        >
          Nhắn tin facebook
        </Button>
        <Button
          type="link"
          path="https://github.com/Tran-Duoc"
          style=" mt-4 block w-full rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 px-7 py-4 text-center text-sm font-medium text-white hover:bg-gradient-to-l focus:outline-none focus:ring-4 focus:ring-purple-200 dark:focus:ring-purple-800 sm:mt-10 sm:inline-block sm:w-auto"
        >
          Trang Github cá nhân
        </Button>
      </div>
    </>
  );
};
const RightSide = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const upDateIndex = () => {
      if (index < element.length - 1) {
        setIndex((prev) => prev + 1);
      } else {
        setIndex(0);
      }
    };
    const increase = setInterval(upDateIndex, 2300);

    return () => {
      return clearInterval(increase);
    };
  }, [index]);

  return (
    <div className="flex items-center justify-center relative  h-[300px]   ">
      <div className="mt-10 md:mt-0">
        <Icon src={element[index]} />
      </div>
    </div>
  );
};

const Hero = () => {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(
    async (container: Container | undefined) => {
      await container;
    },
    []
  );
  return (
    <div className="relative bg-inherit">
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          background: {
            color: {
              value: "#0f172a",
            },
          },
          fpsLimit: 120,
          interactivity: {
            events: {
              onHover: {
                enable: true,
                mode: "connect",
                parallax: {
                  enable: true,
                  force: 50,
                  smooth: 10,
                },
              },
              resize: true,
            },
            modes: {
              repulse: {
                distance: 10,
                duration: 2,
              },
              attract: {
                distance: 50,
                duration: 1,
                easing: "ease-out-quad",
                factor: 1,
                maxSpeed: 50,
                speed: 10,
              },
            },
          },
          particles: {
            color: {
              value: "random",
              animation: {
                h: {
                  count: 0,
                  enable: false,
                  offset: 0,
                  speed: 2,
                  decay: 0,
                  sync: true,
                },
                s: {
                  count: 0,
                  enable: false,
                  offset: 0,
                  speed: 2,
                  decay: 0,
                  sync: true,
                },
                l: {
                  count: 0,
                  enable: false,
                  offset: 0,
                  speed: 2,
                  decay: 0,
                  sync: true,
                },
              },
            },

            collisions: {
              enable: true,
            },
            move: {
              direction: "none",
              enable: true,
              outModes: {
                default: "bounce",
              },
              random: false,
              speed: 5,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                area: 600,
              },
              value: 200,
            },
            opacity: {
              value: 0.5,
            },
            shape: {
              type: "circle",
            },
            size: {
              value: { min: 0, max: 0.8 },
            },
          },
          detectRetina: true,
        }}
      />
      <div className="relative flex min-h-[calc(100vh-4.5rem)] flex-col items-center justify-center pt-10 md:pt-0 px-2 lg:px-0">
        <div className="relative w-full">
          <div className="mx-auto max-w-[90rem] px-4 md:px-0">
            <div className="grid grid-cols-1 md:grid-cols-3 md:gap-12">
              <div className="col-span-2">
                <LeftSide />
              </div>
              <div className="col-span-1 mt-10 md:mt-0 ">
                <RightSide />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
