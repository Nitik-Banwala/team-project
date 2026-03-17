import { NAV_LIST } from "../../utils/helper";
import Icons from "./Icons";

const Navbar = () => {
  return (
    <div className="w-full mx-auto">
      <div className="max-w-285 w-full mx-auto justify-between  flex items-center">
        <a href="/" className="">
          <Icons icon={"logo"} />
        </a>
        <ul className="flex md:gap-8">
          {NAV_LIST.map((nav, i) => (
            <li key={i}>{nav.title}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
