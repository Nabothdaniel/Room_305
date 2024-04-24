import React from "react";
import Location from "../images/location-tick.svg";
import Love from "../images/Love.svg";
import User from "../images/user-tick.svg";
import { FaStar } from "react-icons/fa";
import Slider1 from "../images/slider1.png";

const EscortItems = () => {
  return (
    <>
      <div className="bg-[#1E1E1E] text-white  p-3 rounded-lg">
        <img
          className="rounded-lg h-[200px] object-cover"
          src={Slider1}
          alt=""
        />
        <div className="flex justify-between py-3">
          <div>
            <h4 className="font-semibold pb-2">Sandra Kiss</h4>
            <p className="pb-1 text-[12px] lg:text-[14px]">
              <span className="font-semibold">#7,500</span> short time
            </p>
            <p className="flex items-center text-[12px] lg:text-[14px]">
              <img src={Location} className="mr-1 size-5" />
              <span>lagos, Nigeria</span>
            </p>
          </div>
          <img src={Love} className="size-12" />
        </div>
        <p className="lg:text-[15px] text-[12px] text-wrap  pb-2 text-[#DADADA]">
          Hey, I’m pretty and good on bed. Give me a message
        </p>
        <div className="flex justify-between pb-2 items-center">
          <p className="flex justify-between items-center">
            <FaStar className="text-[#FFD910] mr-2" />
            4.9
          </p>
          <p className="flex justify-between items-center">
            <img src={User} /> <span className="font-semibold pl-1">(22)</span>
          </p>
        </div>
      </div>
    </>
  );
};

export default EscortItems;