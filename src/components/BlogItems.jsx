import React from "react";
import Blog from "../images/blog.jpeg";
import Calender from "../images/calendar-tick.svg";
import Note from "../images/note-2.svg";
import User from "../images/user-tick.svg";
import { Link } from "react-router-dom";

const BlogItems = () => {
  return (
    <div className="bg-[#1E1E1E] h-full rounded-xl p-3">
      <img className="rounded-xl  h-[230px] object-cover" src={Blog} alt="" />
      <div className="text-white pt-4">
        <h3 className="text-[15px] lg:text-[17px] font-semibold">
          Room306.com review: Adult dating website in Nigeria
        </h3>
        <p className="text-[#DADADA] text-[13px] pt-3 pb-4">
          Room306.com is a Nigerian adult dating service that allows men and
          women to advertise any sex
        </p>
        <div className="flex items-center justify-between">
          <p className="flex items-center">
            <span className="flex items-center mr-2 text-[11px]">
              <img className="size-4 mr-1" src={Calender} alt="" />
              25th Dec, 2024
            </span>
            <span className="flex items-center text-[11px]">
              <img className="size-4 mr-1" src={Note} alt="" />
              2min Read
            </span>
          </p>
          <p>
            <span className="flex items-center font-semibold text-[11px]">
              <img className="size-4 mr-1" src={User} alt="" />
              (688)
            </span>
          </p>
        </div>
      </div>
      <Link
        to={"/signup/escort/1"}
        className="text-center block bg-[#E9CB50] mt-[15px] w-[100%] py-2 font-medium rounded-xl"
      >
        Read More
      </Link>
    </div>
  );
};

export default BlogItems;