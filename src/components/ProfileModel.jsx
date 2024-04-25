import React from "react";
import Close from "../images/icon.svg";
import Book from "../images/book-event.svg";
import Game from "../images/game.svg";
import Heart from "../images/heart.svg";
import Like from "../images/like-shapes.svg";
import People from "../images/people.svg";
import Tag from "../images/tag.svg";
import Wallet from "../images/wallet-minus.svg";
import User from "../images/user-tag.svg";

const ProfileModel = ({ menuClass, handleMenu }) => {
  return (
    <div
      className={`bg-black/40 duration-500 ${menuClass}  fixed top-0 z-[999999] left-0 w-[100%] h-screen flex justify-center items-center`}
    >
      <div className="bg-[#1E1E1E] overflow-hidden flex flex-col h-fit md:h-[444px]  -mt-6 md:w-[580px] w-[90%] z-[9999999] rounded-3xl mx-auto ">
        <div className="border-b-2 p-4 flex justify-between text-white items-center font-semibold px-8 text-[20px] border-[#F1D6D6]">
          <h3 className="text-[#F1D6D6]">Profile Menu</h3>
          <img
            onClick={handleMenu}
            className="size-3 cursor-pointer text-[#F1D6D6]"
            src={Close}
            alt=""
          />
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 md:gap-3 gap-2 px-5 py-5 md:py-10">
          <div className="text-center text-white w-[130px] py-3 px-1 rounded-lg">
            <img className="size-10 mx-auto" src={User} alt="" />
            <p className="md:text-[14px] text-[12px] font-semibold pt-1">
              View My Profile
            </p>
          </div>
          <div className="text-center text-white w-[130px] py-3 px-1 rounded-lg ">
            <img className="size-10 mx-auto" src={Tag} alt="" />
            <p className="md:text-[14px] text-[12px] font-semibold pt-1">
              My Booking
            </p>
          </div>
          <div className="text-center text-white w-[130px] py-3 px-1 rounded-lg ">
            <img className="size-10 mx-auto" src={Like} alt="" />
            <p className="md:text-[14px] text-[12px] font-semibold pt-1">
              My Reviews
            </p>
          </div>
          <div className="text-center text-white w-[130px] py-3 px-1 rounded-lg ">
            <img className="size-10 mx-auto" src={Wallet} alt="" />
            <p className="md:text-[14px] text-[12px] font-semibold pt-1">
              My Wallets
            </p>
          </div>
          <div className="text-center text-white w-[130px] py-3 px-1 rounded-lg ">
            <img className="size-10 mx-auto" src={People} alt="" />
            <p className="md:text-[14px] text-[12px] font-semibold pt-1">
              Referrals
            </p>
          </div>
          <div className="text-center text-white w-[130px] py-3 px-1 rounded-lg ">
            <img className="size-10 mx-auto" src={Heart} alt="" />
            <p className="md:text-[14px] text-[12px] font-semibold pt-1">
              Favourites
            </p>
          </div>
          <div className="text-center text-white w-[130px] py-3 px-1 rounded-lg ">
            <img className="size-10 mx-auto" src={Tag} alt="" />
            <p className="md:text-[14px] text-[12px] font-semibold pt-1">
              Classic Ads
            </p>
          </div>
          <div className="text-center text-white w-[130px] py-3 px-1 rounded-lg ">
            <img className="size-10 mx-auto" src={Game} alt="" />
            <p className="md:text-[14px] text-[12px] font-semibold pt-1">
              Lucky Draw
            </p>
          </div>
          <div className="text-center text-white w-[130px] py-3 px-1 rounded-lg ">
            <img className="size-10 mx-auto" src={Book} alt="" />
            <p className="md:text-[14px] text-[12px] font-semibold pt-1">
              Events
            </p>
          </div>
          <div className="text-center text-white w-[130px] py-3 px-1 rounded-lg ">
            <img className="size-10 mx-auto" src={Tag} alt="" />
            <p className="md:text-[14px] text-[12px] font-semibold pt-1">
              My Discussion
            </p>
          </div>
          <div className="text-center text-white w-[130px] py-3 px-1 rounded-lg ">
            <img className="size-10 mx-auto" src={Like} alt="" />
            <p className="md:text-[14px] text-[12px] font-semibold pt-1">
              Change Password
            </p>
          </div>
          <div className="text-center text-white w-[130px] py-3 px-1 rounded-lg ">
            <img className="size-10 mx-auto" src={Wallet} alt="" />
            <p className="md:text-[14px] text-[12px] font-semibold pt-1">
              Delete Profile
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileModel;
