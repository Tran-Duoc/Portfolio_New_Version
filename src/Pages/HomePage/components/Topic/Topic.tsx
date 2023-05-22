import CodeEditor from "../../../../Components/CodeEditor/CodeEditor";
import TranDuoc from "/src/assets/images/tran_duoc.jpg";
import SubTitle from "../../../../Components/SubTitle/SubTitle";
import { motion } from "framer-motion";

const RightSide: React.FC = () => {
  return (
    <motion.div
      whileTap={{ scale: 0.9 }}
      whileHover={{ translateY: -10 }}
      className="w-full bg-transparent dark:bg-[#1e1f35] rounded-2xl shadow-xl shadow-slate-700 border-4 border-slate-800 "
    >
      <div className="flex flex-col items-center justify-center py-20 gap-8">
        <div>
          <img
            src={TranDuoc}
            alt=""
            className="w-24 h-24 object-cover bg-cover bg-center rounded-full border-4  border-slate-500"
          />
        </div>
        <div className="text-base text-slate-200 text-center">
          <SubTitle style="text-2xl boxTextBlue boxTextActive">
            Trần Được
          </SubTitle>
          <p className="mt-4">
            <span>
              Lập trình viên
              <SubTitle style="boxTextBlue boxTextActive mx-2">
                Front End
              </SubTitle>
              /
              <SubTitle style="boxTextGreen boxTextActive mx-2">
                Back End
              </SubTitle>
            </span>
          </p>
        </div>
      </div>
    </motion.div>
  );
};

const Topic = () => {
  return (
    <div className="mt-10 pt-10 md:mt-20 relative">
      <div>
        <div className="absolute inset-x-0 top-0 hidden h-[37.5rem] bg-gradient-to-b from-[#0c1120] dark:block "></div>
      </div>
      <div className="relative z-10 max-w-[90rem] mx-auto px-4 md:px-5 ">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-3 relative">
          <div className="col-span-3 lg:col-span-2">
            <CodeEditor />
          </div>
          <div className="col-span-3 lg:col-span-1">
            <RightSide />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topic;
