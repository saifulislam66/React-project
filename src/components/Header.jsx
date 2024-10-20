import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="w-full flex justify-between items-center uppercase px-10 py-5 bg-emerald-700">
      <h2>Saiful islam</h2>
      <div className="flex gap-10 font-semibold ">
        <Link to="/">home</Link>
        <Link to="/about">about</Link>
        <Link to="/contact">contact</Link>
      </div>
    </div>
  );
};
export default Header;
