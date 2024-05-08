import React from "react";
import { parseISO, format } from "date-fns";

const ProfileAbout = ({ client }) => {
  const parsedDate = parseISO(client.createdAt);
  const formattedDate = format(parsedDate, "MMMM d, yyyy");

  return (
    <div className="pt-6 text-[#DADADA]">
      <div className="grid grid-cols-2 md:grid-cols-4 text-[14px] pt-3 gap-y-6 md:gap-y-8">
        <div className="flex flex-col justify-center">
          <h4 className="text-[#B29A9A] text-[13px]">Username</h4>
          <p className="font-semibold">{client.username}</p>
        </div>
        <div className="flex flex-col md:col-span-3 justify-center">
          <h4 className="text-[#B29A9A] text-[13px]">Display Name</h4>
          <p className="font-semibold">{client.display_name}</p>
        </div>
        <div className="flex flex-col md:col-span-4 justify-center">
          <h4 className="text-[#B29A9A] text-[13px]">Email</h4>
          <p className="font-semibold">{client.email}</p>
        </div>

        <div className="flex flex-col justify-center">
          <h4 className="text-[#B29A9A] text-[13px]">Phone Number</h4>
          <p className="font-semibold">{client.mobile_number}</p>
        </div>

        {/* <div className="flex flex-col justify-center">
          <h4 className="text-[#B29A9A] text-[13px]">Education</h4>
          <p className="font-semibold"></p>
        </div>
        <div className="flex flex-col justify-center">
          <h4 className="text-[#B29A9A] text-[13px]">Occupation</h4>
          <p className="font-semibold">Student</p>
        </div> */}
        <div className="flex flex-col justify-center">
          <h4 className="text-[#B29A9A] text-[13px]">Country</h4>
          <p className="font-semibold">{client.country}</p>
        </div>
        <div className="flex flex-col justify-center">
          <h4 className="text-[#B29A9A] text-[13px]">State</h4>
          <p className="font-semibold">{client.state}</p>
        </div>
        <div className="flex flex-col justify-center">
          <h4 className="text-[#B29A9A] text-[13px]">City</h4>
          <p className="font-semibold">{client.city}</p>
        </div>

        {/* <div className="flex flex-col justify-center">
          <h4 className="text-[#B29A9A] text-[13px]">Last Login</h4>
          <p className="font-semibold">February 29, 2024</p>
        </div> */}
        <div className="flex flex-col justify-center">
          <h4 className="text-[#B29A9A] text-[13px]">Registration Login</h4>
          <p className="font-semibold">{formattedDate}</p>
        </div>
      </div>
    </div>
  );
};

export default ProfileAbout;
