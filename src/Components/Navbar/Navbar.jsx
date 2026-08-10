import React from "react";
import navImg from "../../assets/logo.png";
import coinImg from "../../assets/dollar-1.png";

const Navbar = () => {
  return (
    <div>
      <div className="navbar max-w-312 mx-auto">
        <div className="flex-1">
          <img src={navImg} alt="" />
        </div>
        <div className="flex gap-4 items-center">
          <span>20000000</span>
          <span>
            <img src={coinImg} alt="" />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
