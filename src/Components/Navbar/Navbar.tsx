import { AiFillGithub } from "react-icons/ai";
import { FaFacebook } from "react-icons/fa";
import { Link } from "react-router-dom";
import Dropdown from "../Dropdown/Dropdown";

const Logo = () => {
  return (
    <div
      className="
        relative
        flex
        flex-row
        text-2xl
        items-center
        justify-center
  "
    >
      <div className=" font-bold">
        <span className="text-[#0ea5e9]">T</span>
        <span className="text-[#bae6fd]">Đ</span>
      </div>
      <div className="absolute w-12 h-12 bg-white/10 blur-sm -z-10 "></div>
    </div>
  );
};

const Navbar = () => {
  return (
    <header className="sticky top-0 z-40 w-full flex-none backdrop-blur transition-colors duration-500 lg:z-50 lg:border-b lg:border-slate-900/10 supports-backdrop-blur:bg-white/60 bg-white/80 dark:border-slate-50/[0.06] dark:bg-transparent ">
      <div className="max-w-[90rem] mx-auto text-slate-50 ">
        <div className="mx-4 border-b border-slate-900/10 py-4 dark:border-slate-300/10 lg:border-0">
          <div className="flex items-center  justify-between px-3 lg:px-0">
            <Logo />
            <div className="flex items-center gap-8 ml-auto pr-5">
              <Link to="https://github.com/Tran-Duoc" target="_blank">
                <AiFillGithub size={26} />
              </Link>
              <Link
                to="https://www.facebook.com/profile.php?id=100027522219067"
                target="_blank"
              >
                <FaFacebook size={26} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
