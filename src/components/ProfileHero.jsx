import React from "react";
import { MdWest } from "react-icons/md";
import ProfileImg from "../images/profile.jpeg";

const ProfileHero = () => {
  return (
    <>
      <div className="text-white py-14">
        <div className="flex justify-between items-center">
          <p className="flex items-center">
            <MdWest className="size-6" />
            <span className="pl-3 font-semibold">Back</span>
          </p>
          <p className="bg-[#0A0A0A] py-3 px-4 rounded-xl">Client Account</p>
        </div>
        <div className="pl-5 py-4 relative">
          <div className="bg-[#1E1E1E] h-[12rem] rounded-xl"></div>
          <div className="absolute flex top-24 left-24">
            <img
              className="w-[300px] object-cover h-[300px] rounded-full"
              src={ProfileImg}
              alt=""
            />
            <div className="mt-36 pl-10 flex justify-between items-start">
              <div className="">
                <h2 className="text-2xl font-semibold">Alex Fresh</h2>
                <p className="text-[13px] w-[45%] leading-5 text-[#DADADA] py-4 text-wrap">
                  Am here to satisfy ur pleasure I love sex most especially blow
                  job (cum in my mouth) AVAILABLE FOR INCALL
                </p>
                <div className="flex text-center">
                  <div className="pr-24">
                    <p className="text-2xl font-semibold">27</p>
                    <p className="text-[#B29A9A]">Discussion Posts</p>
                  </div>
                  <div className="pr-24">
                    <p className="text-2xl font-semibold">35</p>
                    <p className="text-[#B29A9A]">Comments</p>
                  </div>
                  <div>
                    <p className="text-2xl font-semibold">5</p>
                    <p className="text-[#B29A9A]">Bookings</p>
                  </div>
                </div>
              </div>
              <p className="bg-[#0A0A0A] ml-16 py-3 px-4 rounded-xl">
                Edit Account
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfileHero;