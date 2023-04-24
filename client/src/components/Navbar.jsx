import React, { useEffect, useState } from "react";
import { BiLogOut } from "react-icons/bi";
import { useDispatch } from "react-redux";
import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const dispatch = useDispatch();
  const logoutFunc = () => {
    localStorage.clear();
    window.location = "/auth";
  };

  const location = useLocation();
  const [loc, setLoc] = useState();
  console.log(location.pathname);

  useEffect(() => {
    location.pathname === "/" ? setLoc(true) : setLoc(false);
  }, [location]);

  const openModal = () => {
    dispatch({ type: "MODAL", payload: true });
  };

  function MyCustomButton({ children }) {
    return <button>{children}</button>;
  }

  return (
    <div className="h-20 bg-indigo-600 flex items-center justify-between px-5">
      <div className="flex">
        <div className="text-white font-bold text-2xl cursor-pointer ml-3">
          <Link to={"/"}>
            <MyCustomButton>Companies</MyCustomButton>
          </Link>
        </div>
        <div className="text-white font-bold text-2xl cursor-pointer ml-3">
          <Link to={"/products"}>
            <MyCustomButton>Products</MyCustomButton>
          </Link>
        </div>
      </div>

      <div className="">
        <div className="flex items-center space-x-5">
          <input
            type="text"
            placeholder="Ara"
            className="p-2 outline-none rounded-md"
          />
          <div
            onClick={openModal}
            className="w-36 border border-indigo-900 p-2 rounded-md text-center text-white cursor-pointer hover:bg-indigo-800"
          >
            {loc ? "Create Company" : "Create Product"}
          </div>

          <BiLogOut
            onClick={logoutFunc}
            size={25}
            className="text-white cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
