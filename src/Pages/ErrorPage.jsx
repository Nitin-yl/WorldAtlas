import React from "react";
import { NavLink, useRouteError } from "react-router-dom";
import bgImage from "../assets/Section.png";
const ErrorPage = () => {
  const error = useRouteError();
  console.log(error);

  return (
    <div
      className="w-full h-screen  bg-cover bg-center flex items-center justify-center text-white"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="absolute top-1/3 right-95 transform -translate-y-1/4  text-white">
        <h1 className="text-[170px] font-bold ">404</h1>
        <p className="text-center  ">Page Not Found!</p>
        <p className="text-center"> The requested page could not </p>
        <p className="text-center">be found on the server.</p>
        {error && <p className="!mb-10" >{error.data}</p>}
        <NavLink to="/">
          <button className="!px-5 !py-3  !ml-43 border !text-white border-white rounded-lg hover:!bg-white hover:!text-black " >Go Home</button>
        </NavLink>
      </div>
    </div>
  );
};

export default ErrorPage;
