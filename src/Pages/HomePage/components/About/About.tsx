import Dot from "../../../../Components/Dot/Dot";
import SubTitle from "../../../../Components/SubTitle/SubTitle";
import Text from "../../../../Components/Text/Text";
import User from "/src/assets/images/tran_duoc.jpg";
import FE from "/src/assets/images/front_end.jpg";
import { data } from "../../../../data/data";
import { useState, Fragment, useLayoutEffect } from "react";

import PhoneMockup from "../../../../Components/PhoneMockup/PhoneMockup";

const LeftSide = () => {
  return (
    <div className="bg-slate-700/30 border-8 shadow-xl shadow-slate-700/20 border-gray-800 rounded-3xl flex items-center justify-center overflow-hidden hover:shadow-slate-600/50  duration-300 hover:-translate-y-2 md:mx-0 mx-2">
      <img src={User} alt="Trần Minh Được" className="scale-[1]" />
    </div>
  );
};

const RightSide = () => {
  const [indexElement, setIndexElement] = useState<number>(0);
  const [activeTab, setActiveTab] = useState<string | number>(0);
  const handleActive = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>,
    id: number | string
  ) => {
    const target = e.target as HTMLDivElement;
    const customValue = target.getAttribute("data-value");
    setActiveTab(id);
    console.log(id);
    setIndexElement(Number(customValue));
  };

  return (
    <div>
      <h2 className="text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-5xl">
        <Text color="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
          Một
        </Text>
        &nbsp;
        <Text color="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
          chút
        </Text>
        &nbsp;
        <Text color="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
          về
        </Text>
        &nbsp;
        <Text color="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
          bản
        </Text>
        &nbsp;
        <Text color="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
          thân !
        </Text>
      </h2>
      <h3 className="text-lg  md:text-2xl mt-2 md:mt-5 ">
        <SubTitle style="font-medium boxTextRed pb-1 bg-[#271b30] px-2 text-[#77213d] rounded-sm">
          Tại sao mình chọn lập trình web ?
        </SubTitle>
      </h3>
      <div className="mt-8 md:mt-14">
        <div className="relative ">
          <div className="absolute top-0 w-full h-2  n bg-cyan-900 rounded-3xl"></div>
          <div className="flex justify-between relative z-20 -translate-y-[6px] ">
            {data.map((item) => {
              return (
                <Fragment key={item.id}>
                  <Dot
                    style="w-2 h-2 bg-slate-900"
                    value={item.id}
                    handle={(e) => handleActive(e, item.id)}
                    itemID={item.id}
                    activeIndex={activeTab}
                  />
                </Fragment>
              );
            })}
          </div>
          <div className="w-full bg-[#1e293b]  border-4 border-gray-900 rounded-xl py-4 px-2 md:px-4  mt-5 lg:mt-10">
            <div>
              <h2 className="text-2xl md:text-3xl font-semibold ">
                <span>{data[indexElement].year}</span>
              </h2>
              <div className="text-sm md:text-lg  mt-3 md:mt-6 mb-10 md:mb-5">
                <p>{data[indexElement].content}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const About = () => {
  return (
    <div className="relative mt-10 pt-10 md:mt-20">
      <div>
        <div className="absolute inset-x-0 top-0 hidden h-[45.5rem] bg-gradient-to-b from-[#0c1120] dark:block"></div>
        <div className="absolute inset-x-0 top-0 h-full bg-[url('/src/assets/images/4-light.png')] bg-[length:125rem_100%] bg-top bg-no-repeat dark:bg-[url('/src/assets/images/4-dark.png')] "></div>
      </div>
      <div className="relative z-10 max-w-[90rem] mx-auto px-4 md:px-5 ">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
          <div className="col-span-2 md:col-span-1">
            <LeftSide />
          </div>
          <div className="col-span-2">
            <RightSide />
          </div>
        </div>
        <div className="mt-20 grid grid-cols-1 gap-10 md:grid-cols-3 relative">
          <div className="col-span-2">
            <h2 className="text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-5xl">
              <Text color="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                Hiện
              </Text>
              &nbsp;
              <Text color="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                tại !
              </Text>
            </h2>
            <div className="mt-5 md:mt-10">
              <p className="font-normal text-lg">
                <span>
                  Hiện tại ngoài việc lập trình
                  <SubTitle style="boxText boxTextBlue boxTextActive mx-2  ">
                    Front End với React JS
                  </SubTitle>
                  ra thì mình có thể lập trình
                  <SubTitle style="boxText boxTextPurple boxTextActive mx-2  ">
                    Back End với Nodejs.
                  </SubTitle>
                  Nhưng với tình hình hiện tại mình cảm nhận trình độ bản thân
                  còn thiếu sót rất nhiều.
                </span>
              </p>
            </div>
          </div>
          <div className="col-span-2 md:col-span-1">
            <PhoneMockup image={FE} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
