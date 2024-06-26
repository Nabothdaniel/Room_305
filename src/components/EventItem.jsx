import React from "react";
import Calender from "../images/calendar-tick.svg";
import User from "../images/user-tick.svg";
import Location from "../images/location-tick.svg";
import Love from "../images/Love.svg";
import Clock from "../images/clock.svg";
import Ticket from "../images/ticket-2.svg";
import { format, parseISO } from "date-fns";
import { Link } from "react-router-dom";

const EventItem = ({ items }) => {
  const parsedDate = parseISO(items.start_date);
  const Start_Date = format(parsedDate, "d MMMM");

  const parsedEndDate = parseISO(items.end_date);
  const End_Date = format(parsedEndDate, "d MMMM");

  const Time = items.start_time.split(":");
  const inputTime = new Date();

  inputTime.setHours(Time[0]);
  inputTime.setMinutes(Time[1]);

  const watTime = format(inputTime, "h:mm aa");

  return (
    <Link to={`/events/${items.id}`}>
      <div className="bg-[#121212] text-white p-3 rounded-lg">
        <img
          className="rounded-lg h-[200px] object-fit"
          src={`https://backend.theroom306.com${items.cover_image}`}
          alt=""
        />
        <div className="flex justify-between py-3">
          <div>
            <h4 className="font-semibold lg:text-base text-[15px] pb-2">
              {items.title}
            </h4>
            <p className="pb-1 text-[12px] lg:text-[14px]">
              <span className="flex items-center mr-2 lg:text-[12px] text-[10px]">
                <img className="size-4 mr-1" src={Calender} alt="" />
                {Start_Date} - {End_Date}
              </span>
            </p>
            <p className="flex items-center text-[12px] lg:text-[14px]">
              <img src={Location} className="mr-1 size-5" />
              <span>
                {items.city}, {items.country}{" "}
              </span>
            </p>
          </div>

          <img src={Love} className="size-12" />
        </div>
        <div className="flex justify-between pb-2 items-center">
          <p className="flex justify-between text-[12px] lg:text-[13px] items-center">
            <img className="size-4 mr-2" src={Clock} alt="" /> {watTime}
          </p>
          <p className="flex justify-between items-center">
            <img src={User} />{" "}
            <span className="font-semibold pl-1">({items.views})</span>
          </p>
        </div>
        <p className="lg:text-[13px] flex justify-between items-center text-[12px] text-wrap  pb-2 text-[#DADADA]">
          <span className="flex font-semibold items-center">
            <img className="size-5 mr-2" src={Ticket} alt="" />
            Available Ticket
          </span>
          <span className="font-semibold text-[18px]">
            {items.available_ticket}
          </span>
        </p>
      </div>
    </Link>
  );
};

export default EventItem;
