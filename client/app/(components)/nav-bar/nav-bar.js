import { GoGear } from "react-icons/go";
import { IoIosMenu } from "react-icons/io";
import { FaRegBell } from "react-icons/fa";
import { HiMagnifyingGlass } from "react-icons/hi2";

const NavBar = () => {
  return (
    <nav>
      <div className="logo"></div>
      <div className="logo"></div>
      <form className="search">
        <HiMagnifyingGlass />
        <button type="submit">Browse</button>
        <input placeholder="Search..." />
      </form>
      <div className="customize">
        <GoGear />
        <IoIosMenu />
        <FaRegBell />
        <div className="avatar"></div>
      </div>
    </nav>
  );
};

export default NavBar;
