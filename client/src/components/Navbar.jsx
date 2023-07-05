import React from "react";
import { NavLink } from "react-router-dom";
import { AiOutlinePlus } from "react-icons/ai";
const Navbar = () => {
  return (
    <div className="flex sm:mx-4 md:mx-8 justify-between items-center">
      <div>
        <h1 className="font-semibold font-logo-font text-2xl">#Tagee</h1>
      </div>
      <NavLink
        className="flex gap-2 items-center bg-primary-color p-2 px-4 rounded text-white"
        to="/post"
      >
        <div className="text-white">
          <AiOutlinePlus />
        </div>
        Post
      </NavLink>
    </div>
  );
};

export default Navbar;
