import SubTitle from "../../../../Components/SubTitle/SubTitle";
import Text from "../../../../Components/Text/Text";
import LaptopMockup from "/src/assets/images/coding.png";
import debug from "/src/assets/images/debugging-programming.gif";

const ScreenMockup = () => {
  return (
    <div className="mt-10 pt-10 md:mt-20 relative">
      <div>
        <div className="absolute inset-x-0 top-0 hidden h-[37.5rem] bg-gradient-to-b from-[#0c1120] dark:block "></div>
        <div className="absolute inset-x-0 top-0 h-full bg-[url('/src/assets/images/1-light.png')] bg-[length:125rem_100%] bg-top bg-no-repeat dark:bg-[url('/src/assets/images/1-dark.png')] "></div>
      </div>

      <div className="relative z-10 max-w-[90rem] mx-auto px-4 md:px-5 ">
        <div className="grid col-span-1 lg:grid-cols-3 items-start justify-items-center gap-10 mt-10">
          <div className="lg:col-span-2 col-span-3">
            <img
              src={LaptopMockup}
              alt="this is a laptop"
              className="w-ful bg-cover h-full"
            />
          </div>
          <div className="col-span-3 lg:col-span-1">
            <h2 className="text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-5xl">
              <Text color="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                Chia
              </Text>
              &nbsp;
              <Text color="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                sẻ
              </Text>
              &nbsp;
              <Text color="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                kiến
              </Text>
              &nbsp;
              <Text color="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                thức
              </Text>
            </h2>
            <div className="mt-6">
              <div className="text-lg md:text-xl mt-4">
                <p>
                  Ngooài viêc lập trình ra thì mình cũng rất thích chia sẻ những
                  kiến thức lập trình bổ ích mà mình biết cho tất cả mọi người
                  cùng biết
                </p>
              </div>
            </div>
            <div className="mt-6">
              <h2 className="text-xl font-semibold uppercase my-4 text-blue-600">
                <span>Gif joke</span>
              </h2>
              <img src={debug} alt="GIF Joke" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ScreenMockup;
