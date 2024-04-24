import React from "react";
import Profile from "../images/profile.jpeg";
import House from "../images/house.svg";
import Calender from "../images/calendar-tick.svg";
import Love from "../images/Love.svg";

const AdvertsItem = () => {
  return (
    <div className="bg-[#1E1E1E] flex flex-col relative rounded-3xl p-4 md:p-7 ">
      <div className="flex items-center sm:items-start  ">
        <img
          className="sm:size-[150px] size-[48px] object-cover rounded-full"
          src={Profile}
          alt=""
        />
        <div className="ml-3">
          <h3 className="text-white font-semibold md:text-[20px]">
            Friends with benefits
          </h3>
          <div className="hidden text-[14px] sm:flex pt-2">
            <div className="flex items-center rounded-md w-fit mr-2 py-1 px-[6px] text-white bg-[#0A0A0A]">
              <img className="size-5 mr-1" src={Calender} alt="" />
              <p className="text-[13px]">23 Mar - 28 Mar</p>
            </div>
            <div className="flex items-center rounded-md w-fit py-1 px-[6px] text-white bg-[#0A0A0A]">
              <img className="size-5 mr-1" src={House} alt="" />
              <p>Searching</p>
            </div>
          </div>
          <div className="hidden text-[14px] sm:flex pt-2">
            <div className="flex items-center rounded-md w-fit mr-3 py-1 px-[6px] text-white bg-[#0A0A0A]">
              <img className="size-5 mr-1" src={House} alt="" />
              <p>Akure, Ondo, Nigeria</p>
            </div>
            <div className="flex items-center rounded-md w-fit py-1 px-[6px] text-white bg-[#0A0A0A]">
              <p>#7500</p>
            </div>
          </div>
          <div className="sm:flex hidden pt-2 items-center">
            <button className="bg-[#E9CB50]  w-[100%] text-[#171717] h-[40px]  font-medium rounded-xl">
              Chat Now
            </button>
            <img src={Love} className="size-11 ml-2" />
          </div>
        </div>
      </div>
      <p className="text-[#DADADA] text-[15px] hidden sm:block pt-4">
        I need a clean mature minded girl between the age of 21 and 24years
        living in Akure precisely for friends with benefits. She should be good
        in bed and friendly. Ps: Im neat and clean, really money okay myself. So
        class yourself before you dm.{" "}
      </p>
      <div className="flex text-[12px] flex-col  gap-y-2 sm:hidden pt-3">
        <div className="flex">
          <div className="flex items-center rounded-md w-fit mr-3 px-3 py-1 text-white bg-[#0A0A0A]">
            <img className="size-5 mr-1" src={Calender} alt="" />
            <p>23 Mar - 28 Mar</p>
          </div>
          <div className="flex items-center rounded-md w-fit px-3 py-1 text-white bg-[#0A0A0A]">
            <img className="size-5 mr-1" src={House} alt="" />
            <p>Searching</p>
          </div>
        </div>
        <div className="flex">
          <div className="flex items-center rounded-md w-fit mr-3 px-3 py-1 text-white bg-[#0A0A0A]">
            <img className="size-5 mr-1" src={Calender} alt="" />
            <p>Akure, Ondo, Nigeria</p>
          </div>
          <div className="flex items-center rounded-md w-fit px-3 py-1 text-white bg-[#0A0A0A]">
            <p>#7500</p>
          </div>
        </div>
        <div className="flex items-center">
          <button className="bg-[#E9CB50]  w-[100%] text-[#171717] h-[40px] font-medium rounded-xl">
            Chat Now
          </button>
          <img src={Love} className="size-11 ml-2" />
        </div>
      </div>
      <p className="text-[#DADADA] text-[12px] sm:hidden block pt-4">
        I need a clean mature minded girl between the age of 21 and 24years
        living in Akure precisely for friends with benefits. She should be good
        in bed and friendly. Ps: Im neat and clean, really money okay myself. So
        class yourself before you dm.{" "}
      </p>
    </div>
  );
};

export default AdvertsItem;