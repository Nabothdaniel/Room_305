import React from "react";
import Close from "../images/close-icon.svg";
import Input from "./Input";

const AdminSupport = ({ supportClass, handleSupport }) => {
  return (
    <div
      className={`bg-black/40 duration-500 ${supportClass} fixed top-0 z-[99999999] left-0 w-[100%] h-screen flex justify-center items-center`}
    >
      <div className="bg-white flex flex-col w-[80%] md:w-[533px] z-[999999999] rounded-2xl mx-5 ">
        <div className="border-b-2 p-4 flex justify-between items-center font-semibold px-5 text-[20px] border-[#F1D6D6]">
          <h3 className="text-[#2D2D2D] text-[16px] md:text-[20px]">
            Admin Support Via Email
          </h3>
          <img
            onClick={handleSupport}
            className="size-3 cursor-pointer"
            src={Close}
            alt=""
          />
        </div>
        <div className="py-5 text-[#475367] px-8">
          <Input
            labelValue={"Enter Name"}
            labelClass={"text-[#475367] pb-2 font-semibold text-[14px]"}
            inputType={"text"}
            inputName={"name"}
            inputClass={
              "bg-[#F0F2F5] py-3 px-4 mb-5 rounded-xl placeholder-[#102127] text-[#102127]"
            }
            holder={"Enter Name Here"}
          />
          <Input
            labelValue={"Enter Email"}
            labelClass={"text-[#475367] pb-2 font-semibold text-[14px]"}
            inputType={"email"}
            inputName={"email"}
            inputClass={
              "bg-[#F0F2F5] py-3 px-4 rounded-xl placeholder-[#102127] text-[#102127]"
            }
            holder={"Enter Email Here"}
          />
          <label className="flex flex-col pt-5" htmlFor="message">
            <span className="font-semibold text-[14px] text-[#475367] pb-3">
              Enter Message
            </span>
            <textarea
              className="bg-[#F0F2F5] p-3 placeholder-[#102127] text-[#102127] outline-none rounded-xl"
              name="message"
              id="message"
              cols="30"
              rows="5"
              placeholder="Enter Message Here"
            ></textarea>
          </label>
          <div className="flex justify-end pt-6 pb-1">
            <button
              onClick={handleSupport}
              className="bg-transparent text-[#171717] mr-1 text-[14px] h-[48px] w-[92px] font-semibold rounded-xl"
            >
              Cancel
            </button>
            <button className="bg-[#E9CB50] text-[#171717] text-[14px] h-[48px] w-[92px] font-semibold rounded-xl">
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminSupport;
