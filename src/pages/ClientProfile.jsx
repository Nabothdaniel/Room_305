import React from "react";
import SideBar from "../components/SideBar";
import Navbar from "../components/Navbar";
import Arrow from "../images/arrow-left.svg";
import User from "../images/profile.jpeg";
import ProfileAbout from "../components/ProfileAbout";
import { Link, useNavigate } from "react-router-dom";

const ClientProfile = () => {
  const navigate = useNavigate();
  return (
    <div className="block md:flex overflow-x-clip max-w-[1740px] mx-auto">
      <SideBar />

      <div className="flex-1 md:w-[80%] px-4 pt-6 pb-20 md:pt-14 md:px-10">
        <Navbar
          Headervalue={"Welcome to Room 306"}
          textValue={"Explore our escort at your own pace"}
        />

        <div className="md:py-8">
          <div className="flex justify-between items-center md:pb-6 py-2 md:pt-8">
            <h2
              onClick={() => navigate(-1)}
              className="text-white font-semibold cursor-pointer flex items-center"
            >
              <img className="size-5 mr-1" src={Arrow} alt="" />
              Back
            </h2>

            <button className="bg-[#0A0A0A] text-[14px] text-white font-medium rounded-lg py-3 w-[125px]">
              Client Account
            </button>
          </div>

          <div className="relative">
            <div className="rounded-xl h-[171px]  bg-[#1E1E1E] "></div>
            <div className="absolute top-20 md:top-3 lg:top-20 flex flex-col md:flex-row md:justify-end md:items-center w-[100%]">
              <div className="md:w-[30%]">
                <img
                  className="lg:size-[268px] ml-14 md:ml-0 object-cover md:size-[170px] sm:size-[140px] size-[130px] rounded-full "
                  src={User}
                  alt=""
                />
              </div>
              <div className="md:w-[65%] md:ml-6 mt-8 grid grid-cols-3 md:mt-44 lg:mt-28">
                <div className="col-span-2 grid gap-y-4 text-white">
                  <h3 className="text-[20px] font-semibold">Alex Fresh</h3>
                  <p className="text-[#DADADA] md:w-[70%] text-[12px] lg:text-[14px]">
                    Am here to satisfy ur pleasure I love sex most especially
                    blow job (cum in my mouth) AVAILABLE FOR INCALL
                  </p>
                  <div className="md:flex hidden justify-between text-white">
                    <div className="flex flex-col items-center">
                      <p className="text-[24px] font-semibold">27</p>
                      <p className="text-[#B29A9A] text-[13px]">
                        Discussion Posts
                      </p>
                    </div>
                    <div className="flex flex-col items-center">
                      <p className="text-[24px] font-semibold">35</p>
                      <p className="text-[#B29A9A] text-[13px]">Comments</p>
                    </div>
                    <div className="flex flex-col items-center">
                      <p className="text-[24px] font-semibold">5</p>
                      <p className="text-[#B29A9A] text-[13px]">Bookings</p>
                    </div>
                  </div>
                </div>
                <div className="flex justify-end ">
                  <Link
                    to={"/edit-client"}
                    className="bg-[#0A0A0A] flex items-center justify-center text-center text-[14px] text-white font-medium rounded-lg h-[40px] w-[125px]"
                  >
                    Edit Profile
                  </Link>
                </div>
              </div>
              <div className="flex justify-between px-3 md:hidden mt-4 text-white">
                <div className="flex flex-col items-center">
                  <p className="text-[24px] font-semibold">27</p>
                  <p className="text-[#B29A9A] text-[14px]">Discussion Posts</p>
                </div>
                <div className="flex flex-col items-center">
                  <p className="text-[24px] font-semibold">35</p>
                  <p className="text-[#B29A9A] text-[14px]">Comments</p>
                </div>
                <div className="flex flex-col items-center">
                  <p className="text-[24px] font-semibold">5</p>
                  <p className="text-[#B29A9A] text-[14px]">Bookings</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="border-b-2 pt-6 mt-64 md:mt-48 flex relative font-semibold items-center text-white border-[#393C49] py-3">
          <p className="mr-10 before:contents-[''] cursor-pointer before:absolute before:-bottom-[2px] before:w-[50px] before:h-[3px] before:rounded-lg before:bg-[#E9CB50]  ">
            About
          </p>
          <p className="">Review</p>
        </div>
        <ProfileAbout />
      </div>
    </div>
  );
};

export default ClientProfile;