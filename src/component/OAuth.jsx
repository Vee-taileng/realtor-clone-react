import React from "react";
import { FcGoogle } from "react-icons/fc";

const OAuth = () => {
  return (
      <button className="w-full bg-red-700 
    flex justify-center items-center
    text-white px-7 py-3 uppercase text-sm font-medium
    hover:bg-red-800
    active:bg-red-900 shadow-md
    hover:shadow-lg
    active:shadow-lg
    transition duration-200 ease-in-out rounded">
      <FcGoogle className="mr-3 text-xl"/>
      Continue With Google
    </button>
  );
};

export default OAuth;
