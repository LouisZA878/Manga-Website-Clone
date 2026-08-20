import Input from "./Input";

import { GoGear } from "react-icons/go";
import { IoIosMenu } from "react-icons/io";
import { FaRegBell } from "react-icons/fa";

const NavBar = () => {
  return (
    <nav>
      <div className="logo"></div>
      <div className="logo"></div>
      <Input />
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
