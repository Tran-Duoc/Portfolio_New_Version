import SubTitle from "../../../../Components/SubTitle/SubTitle";
import { javascript } from "@codemirror/lang-javascript";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const MyProject = () => {
  return (
    <div className="mt-10 pt-10 md:mt-20 relative">
      <div>
        <div className="absolute inset-x-0 top-0 hidden h-[37.5rem] bg-gradient-to-b from-[#0c1120] dark:block "></div>
        <div className="absolute inset-x-0 top-0 h-full bg-[url('/src/assets/images/1-light.png')] bg-[length:125rem_100%] bg-top bg-no-repeat dark:bg-[url('/src/assets/images/1-dark.png')] "></div>
      </div>
      <div className="relative z-10 max-w-[90rem] mx-auto px-4 md:px-5 ">
        <h2 className="text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-5xl">
          <SubTitle style="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
            Sản phẩm cá nhân !
          </SubTitle>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-6 md:mt-10 gap-10">
          {Array(3)
            .fill(0)
            .map(() => {
              return (
                <div className="col-span-1">
                  <div className="block overflow-hidden rounded bg-white shadow-xl dark:bg-slate-800 min-h-[30rem]">
                    <img
                      src="https://source.unsplash.com/random"
                      alt=""
                      className="h-44 w-full object-cover sm:h-52"
                      loading="lazy"
                      style={{ color: "transparent" }}
                    />

                    <div className="p-4">
                      <h3 className="bg-gradient-to-r from-sky-500 to-cyan-400 bg-clip-text text-xl font-bold tracking-tight text-transparent dark:from-sky-400 dark:to-cyan-300 ">
                        My Portfolio
                      </h3>
                      <div>
                        <p className="flex flex-col md:flex-row gap-5 text-cyan-600 mt-6">
                          <span className="text-lg boxTextRed">Ngôn ngữ:</span>
                          <span className="text-lg flex-wrap">
                            <SubTitle style="boxTextYellow mx-2 boxTextActive">
                              Javascript
                            </SubTitle>
                            +
                            <SubTitle style="boxTextBlue mx-2 boxTextActive">
                              Typescript
                            </SubTitle>
                          </span>
                        </p>
                        <p className="flex flex-col md:flex-row gap-5 text-cyan-600 mt-4">
                          <span className="text-lg">Library / Framework</span>
                          <span className="text-lg flex-wrap w-full">
                            <SubTitle style="  mx-2  text-cyan-400">
                              React JS, Tailwind CSS, React-Router-Dom, Framer
                              motion, CodeEditor,...
                            </SubTitle>
                          </span>
                        </p>
                      </div>
                      <Link
                        to="/"
                        className="w-full flex items-center justify-center bg-cyan-700 text-gray-800 font-semibold text-lg md:text-xl mt-4 py-4 rounded-xl hover:bg-cyan-700/40 duration-200 hover:text-slate-400"
                      >
                        <p>Mã Nguồn</p>
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default MyProject;
