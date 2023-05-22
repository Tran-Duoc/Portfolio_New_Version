import CodeMockup from "../../../../Components/CodeMockup/CodeMockup";
import SubTitle from "../../../../Components/SubTitle/SubTitle";
import Text from "../../../../Components/Text/Text";

const LeftSide = () => {
  return (
    <div>
      <CodeMockup name="Tran_Duoc" installing={true} done={true} />
    </div>
  );
};

const Technical = () => {
  return (
    <div className="mt-10 pt-10 md:mt-20 relative">
      <div>
        <div className="absolute inset-x-0 top-0 hidden h-[37.5rem] bg-gradient-to-b from-[#0c1120] dark:block "></div>
        <div className="absolute inset-x-0 top-0 h-full bg-[url('/src/assets/images/1-light.png')] bg-[length:125rem_100%] bg-top bg-no-repeat dark:bg-[url('/src/assets/images/1-dark.png')] "></div>
      </div>
      <div className="relative z-10 max-w-[90rem] mx-auto px-4 md:px-5 ">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3 relative">
          <div className="col-span-3 lg:col-span-1">
            <LeftSide />
          </div>
          <div className="col-span-3 lg:col-span-2">
            <div>
              <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-4xl mt-5">
                <Text color="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                  Technical
                </Text>
                &nbsp;
                <Text color="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                  skill !
                </Text>
              </h2>
              <div className="mt-4 md:mt-6">
                <h2 className="text-lg md:text-xl ">
                  <SubTitle style="boxTextPink boxTextActive">
                    Đây là một số kỹ năng của mình.
                  </SubTitle>
                </h2>
              </div>
              <div className="mt-4 md:mt-6  w-full">
                <div className="mt-8 ">
                  <div className="mt-5 md:mt-10 grid grid-cols-1 md:grid-cols-3 items-center ">
                    <div className="col-span-1">
                      <p className="text-base md:text-lg text-slate-400">
                        <SubTitle>Ngôn ngữ lập trình</SubTitle>
                      </p>
                    </div>
                    <div className="col-span-2 mt-2 md:mt-0">
                      <p className="text-xl md:text-2xl">
                        <SubTitle style="boxTextYellow boxTextActive px-5 mx-2">
                          JavaScrip
                        </SubTitle>

                        <SubTitle style="boxTextBlue boxTextActive px-5 mx-2">
                          TypeScrip
                        </SubTitle>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="mt-8">
                  <div className="mt-5 md:mt-10 grid grid-cols-1 md:grid-cols-3 items-center ">
                    <div className="col-span-1">
                      <p className="text-base md:text-lg text-slate-400">
                        <SubTitle>Platform</SubTitle>
                      </p>
                    </div>
                    <div className="col-span-2 mt-2 md:mt-0">
                      <p className="text-xl md:text-2xl">
                        <SubTitle style="boxTextGreen boxTextActive px-5 mx-2">
                          NodeJS
                        </SubTitle>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="mt-8">
                  <div className="mt-5 md:mt-10 grid grid-cols-1 md:grid-cols-3 items-center ">
                    <div className="col-span-1">
                      <p className="text-base md:text-lg text-slate-400">
                        <SubTitle>Framework / Library</SubTitle>
                      </p>
                    </div>
                    <div className="col-span-2 mt-2 md:mt-0">
                      <p className="text-xl md:text-2xl flex flex-wrap gap-y-5">
                        <SubTitle style="boxTextBlue boxTextActive px-5 mx-2">
                          React
                        </SubTitle>
                        <SubTitle style="boxTextBlue boxTextActive px-5 mx-2">
                          Tailwind css
                        </SubTitle>
                        <SubTitle style="boxText_Purple boxTextActive  px-5 mx-2">
                          Redux / Redux-toolkit
                        </SubTitle>
                        <SubTitle style="boxTextPink boxTextActive  px-5 mx-2">
                          React-Query
                        </SubTitle>
                        <SubTitle style="boxTextBlue boxTextActive  px-5 mx-2">
                          Material (MUI)
                        </SubTitle>
                        <SubTitle style="boxTextYellow boxTextActive  px-5 mx-2">
                          Daisy UI
                        </SubTitle>
                        <SubTitle style="boxTextRed boxTextActive  px-5 mx-2">
                          Express
                        </SubTitle>
                        <SubTitle style="boxTextGreen  boxTextActive  px-5 mx-2">
                          Vue
                        </SubTitle>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="mt-8">
                  <div className="mt-5 md:mt-10 grid grid-cols-1 md:grid-cols-3 items-center ">
                    <div className="col-span-1">
                      <p className="text-base md:text-lg text-slate-400">
                        <SubTitle>Cơ sở dữ liệu</SubTitle>
                      </p>
                    </div>
                    <div className="col-span-2 mt-2 md:mt-0">
                      <p className="text-xl md:text-2xl flex flex-wrap gap-y-5">
                        <SubTitle style="boxTextBlue boxTextActive px-5 mx-2">
                          MySQL
                        </SubTitle>
                        <SubTitle style="boxTextGreen boxTextActive px-5 mx-2">
                          Mongoose
                        </SubTitle>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="mt-8">
                  <div className="mt-5 md:mt-10 grid grid-cols-1 md:grid-cols-3 items-center ">
                    <div className="col-span-1">
                      <p className="text-base md:text-lg text-slate-400">
                        <SubTitle>Quản lý mã nguồn / Tool</SubTitle>
                      </p>
                    </div>
                    <div className="col-span-2 mt-2 md:mt-0">
                      <p className="text-xl md:text-2xl flex flex-wrap gap-y-5">
                        <SubTitle style="boxTextRed boxTextActive px-5 mx-2">
                          Git
                        </SubTitle>
                        <SubTitle style="boxTextBlue boxTextActive px-5 mx-2">
                          VS Code
                        </SubTitle>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="mt-8">
                  <div className="mt-5 md:mt-10 grid grid-cols-1 md:grid-cols-3 items-center ">
                    <div className="col-span-1">
                      <p className="text-base md:text-lg text-slate-400">
                        <SubTitle>Anh văn</SubTitle>
                      </p>
                    </div>
                    <div className="col-span-2 mt-2 md:mt-0">
                      <p className="text-xl md:text-2xl flex flex-wrap gap-y-5">
                        <SubTitle style=" px-5 mx-2">Đang cập nhật...</SubTitle>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Technical;
