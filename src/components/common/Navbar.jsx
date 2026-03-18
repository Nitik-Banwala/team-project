import { NAV_LIST } from "../../utils/helper";
import Button from "./Button";
import Icons from "./Icons";

const Navbar = () => {
  return (
    <div className="w-full mx-auto border-b border-b-[#0000001A]">
      <div className="max-w-285 w-full justify-between mx-auto flex items-center">
        <a href="/">
          <img src="/assets/images/webp/logo.webp" alt="logo" />
        </a>
        <ul className="flex md:gap-8 items-center md:ml-36.25 ">
          {NAV_LIST.map((nav, i) => (
            <li key={i} className="text-grey leading-[150%] whitespace-nowrap">
              <a href="">{nav.title}</a>
            </li>
          ))}
          <div className="group w-fit md:ml-28.25">
            <Button
              text={"Log In"}
              icon={
                <Icons
                  icon={"logIn"}
                  pathClass={"group-hover:fill-black duration-300 ease"}
                />
              }
              className={
                "bg-black text-white border-transparent border group-hover:text-black group-hover:border-black group-hover:bg-white whitespace-nowrap py-3.25 pl-8 pr-8 my-6 rounded-full"
              }
            />
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
