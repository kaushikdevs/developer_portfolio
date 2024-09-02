import React from "react";
import { AiFillSetting } from "react-icons/ai";
import {
  Popover,
  PopoverHandler,
  PopoverContent,
  Button,
} from "@material-tailwind/react";

const Theme = () => {
  const clipPathValue = "polygon(0% 0%, 75% 0%, 100% 50%, 75% 100%, 0% 100%)";

  return (
    <Popover placement="left">
      <PopoverHandler>
        <div className="absolute -right-1 top-72 py-3 px-6 bg-black rounded-l-full shadow-2xl shadow-gray-600">
          <AiFillSetting className="text-white font-bold text-xl ransition ease-in-out delay-150 hover:rotate-180 hover:scale-110 hover:text-white duration-300 cursor-pointer" />
        </div>
      </PopoverHandler>
      <PopoverContent className="bg-transparent border-none shadow-none">
        <div style={{ clipPath: clipPathValue }} className="bg-gray-900 p-5 -mr-3 shadow-lg shadow-gray-600">
          <div className="flex items-center mr-5">
            <div className="w-7 h-7 rounded-full mr-3 bg-primary_yellow" />
            <div className="w-7 h-7 rounded-full bg-primary_gold" />
          </div>
          <div className="flex items-center my-3">
            <div className="w-7 h-7 rounded-full mr-3 bg-primary_pink" />
            <div className="w-7 h-7 rounded-full bg-white" />
          </div>
          <div className="flex items-center">
            <div className="w-7 h-7 rounded-full mr-3 bg-green-800" />
            <div className="w-7 h-7 rounded-full bg-pink-800" />
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default Theme;
