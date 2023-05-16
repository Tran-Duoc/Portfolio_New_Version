import { AiFillGithub } from "react-icons/ai";
import { FaFacebook } from "react-icons/fa";
import { Link } from "react-router-dom";

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

const Dropdown = () => {
  return (
    <div className="dropdown dropdown-end">
      <label
        tabIndex={0}
        className="btn bg-transparent border-0 hover:bg-transparent"
      >
        <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M17.715 15.15A6.5 6.5 0 0 1 9 6.035C6.106 6.922 4 9.645 4 12.867c0 3.94 3.153 7.136 7.042 7.136 3.101 0 5.734-2.032 6.673-4.853Z"
            className="fill-transparent"
          />
          <path
            d="m17.715 15.15.95.316a1 1 0 0 0-1.445-1.185l.495.869ZM9 6.035l.846.534a1 1 0 0 0-1.14-1.49L9 6.035Zm8.221 8.246a5.47 5.47 0 0 1-2.72.718v2a7.47 7.47 0 0 0 3.71-.98l-.99-1.738Zm-2.72.718A5.5 5.5 0 0 1 9 9.5H7a7.5 7.5 0 0 0 7.5 7.5v-2ZM9 9.5c0-1.079.31-2.082.845-2.93L8.153 5.5A7.47 7.47 0 0 0 7 9.5h2Zm-4 3.368C5 10.089 6.815 7.75 9.292 6.99L8.706 5.08C5.397 6.094 3 9.201 3 12.867h2Zm6.042 6.136C7.718 19.003 5 16.268 5 12.867H3c0 4.48 3.588 8.136 8.042 8.136v-2Zm5.725-4.17c-.81 2.433-3.074 4.17-5.725 4.17v2c3.552 0 6.553-2.327 7.622-5.537l-1.897-.632Z"
            className="fill-slate-400 dark:fill-slate-500"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M17 3a1 1 0 0 1 1 1 2 2 0 0 0 2 2 1 1 0 1 1 0 2 2 2 0 0 0-2 2 1 1 0 1 1-2 0 2 2 0 0 0-2-2 1 1 0 1 1 0-2 2 2 0 0 0 2-2 1 1 0 0 1 1-1Z"
            className="fill-slate-400 dark:fill-slate-500"
          />
        </svg>
      </label>
      <ul
        tabIndex={0}
        className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52 font-semibold"
      >
        <li className="py-1">
          <span>
            <svg
              viewBox="0 0 24 24"
              fill="none"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-6 h-6 mr-2"
            >
              <path
                d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                className="stroke-slate-400 dark:stroke-slate-500"
              />
              <path
                d="M12 4v1M17.66 6.344l-.828.828M20.005 12.004h-1M17.66 17.664l-.828-.828M12 20.01V19M6.34 17.664l.835-.836M3.995 12.004h1.01M6 6l.835.836"
                className="stroke-slate-400 dark:stroke-slate-500"
              />
            </svg>
            Light
          </span>
        </li>
        <li className="py-1">
          <span>
            <svg viewBox="0 0 24 24" fill="none" className="mr-2 h-6 w-6">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M17.715 15.15A6.5 6.5 0 0 1 9 6.035C6.106 6.922 4 9.645 4 12.867c0 3.94 3.153 7.136 7.042 7.136 3.101 0 5.734-2.032 6.673-4.853Z"
                className="fill-transparent"
              />
              <path
                d="m17.715 15.15.95.316a1 1 0 0 0-1.445-1.185l.495.869ZM9 6.035l.846.534a1 1 0 0 0-1.14-1.49L9 6.035Zm8.221 8.246a5.47 5.47 0 0 1-2.72.718v2a7.47 7.47 0 0 0 3.71-.98l-.99-1.738Zm-2.72.718A5.5 5.5 0 0 1 9 9.5H7a7.5 7.5 0 0 0 7.5 7.5v-2ZM9 9.5c0-1.079.31-2.082.845-2.93L8.153 5.5A7.47 7.47 0 0 0 7 9.5h2Zm-4 3.368C5 10.089 6.815 7.75 9.292 6.99L8.706 5.08C5.397 6.094 3 9.201 3 12.867h2Zm6.042 6.136C7.718 19.003 5 16.268 5 12.867H3c0 4.48 3.588 8.136 8.042 8.136v-2Zm5.725-4.17c-.81 2.433-3.074 4.17-5.725 4.17v2c3.552 0 6.553-2.327 7.622-5.537l-1.897-.632Z"
                className="fill-slate-400 dark:fill-slate-500"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M17 3a1 1 0 0 1 1 1 2 2 0 0 0 2 2 1 1 0 1 1 0 2 2 2 0 0 0-2 2 1 1 0 1 1-2 0 2 2 0 0 0-2-2 1 1 0 1 1 0-2 2 2 0 0 0 2-2 1 1 0 0 1 1-1Z"
                className="fill-slate-400 dark:fill-slate-500"
              />
            </svg>
            Dark
          </span>
        </li>
      </ul>
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
            <div className="flex items-center gap-10 ml-auto pr-5">
              <Link to="https://github.com/Tran-Duoc">
                <AiFillGithub size={24} />
              </Link>
              <Link to="https://www.facebook.com/profile.php?id=100027522219067">
                <FaFacebook size={24} />
              </Link>
            </div>
            <Dropdown />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
