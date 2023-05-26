import { Link } from "react-router-dom";
import Tailwind from "/src/assets/images/tailwind.png";
import React from "/src/assets/images/React.png";
import TS from "/src/assets/images/typescript.png";
import SubTitle from "../SubTitle/SubTitle";

const Footer = () => {
  return (
    <>
      <div className="mt-20  relative z-10">
        <div className=" mx-auto max-w-[90rem] divide-y divide-slate-200 border-t border-t-slate-200 px-4 pt-10 dark:divide-slate-700 dark:border-t-slate-700 md:px-5">
          <div className="grid grid-cols-1 gap-8 pb-8 md:grid-cols-2 lg:grid-cols-4">
            <div>
              <h2 className="font-semibold text-slate-900 dark:text-slate-100">
                Giới thiệu
              </h2>
              <p className="py-3 text-justify">
                My Portfolio phát triển bởi
                <SubTitle style="boxTextYellow boxTextActive mx-2">
                  Trần Được
                </SubTitle>
                .Trang web giới thiệu bản thân, quá trình học tập và phát triển
                để trở thành một lập trình viên
                <SubTitle style="boxTextBlue boxTextActive mx-2">
                  Front End
                </SubTitle>
                /
                <SubTitle style="boxTextGreen boxTextActive mx-2">
                  Back End
                </SubTitle>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-16 py-10 relative z-10">
        <p className="mb-8 text-center text-sm">
          Copyright © 2023
          <Link to="/" target="_blank" className="ml-2">
            Trần Minh Được
          </Link>
        </p>
        <div className="flex items-center justify-center relative z-10 gap-10">
          <Link to="https://tailwindcss.com" target="_blank">
            <img
              src={Tailwind}
              alt="Tailwind css"
              className="w-8 h-8 bg-cover"
            />
          </Link>
          +
          <Link to="https://react.dev/" target="_blank">
            <img src={React} alt="Tailwind css" className="w-8 h-8 bg-cover" />
          </Link>
          +
          <Link to="https://www.typescriptlang.org/" target="_blank">
            <img src={TS} alt="Tailwind css" className="w-8 h-8 bg-cover" />
          </Link>
        </div>
      </div>
    </>
  );
};

export default Footer;
