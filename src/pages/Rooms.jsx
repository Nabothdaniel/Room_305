import React, { useState } from "react";
import Navbar from "../components/Navbar";
import SideBar from "../components/SideBar";
import Filter from "../images/Input.svg";
import Pagination from "../components/Pagination";
import RoomsItem from "../components/RoomsItem";
import { useGetAllRoomsQuery } from "../redux/roomApi";
import Loading from "../components/Loading";
import Frame from "../images/Frame.svg";
import { Link } from "react-router-dom";

const Rooms = () => {
  const users = JSON.parse(localStorage.getItem("details"));
  const { data, isLoading } = useGetAllRoomsQuery();
  const [currentPage, setCurrentPage] = useState(0);

  if (isLoading) {
    return <Loading />;
  }

  if (!data) {
     <div className="block md:flex overflow-x-clip h-screen max-w-[1740px] mx-auto">
       <SideBar />

       <div className="flex-1 md:w-[80%] pt-4 md:pt-14 px-3 md:px-6 lg:px-10">
         <Navbar
           Headervalue={"Best Escort Room"}
           textValue={"Explore our rooms and activities"}
         />
         <div className="pb-10 md:pt-8 pt-3 px-3 md:pl-2">
           <div className="flex pb-3 md:pb-0 justify-between items-center">
             <h2 className="text-white min-w-[180px] flex items-center md:py-6 md:text-[20px] font-semibold">
               Rooms Let
               {users?.user?.user_type == "escort" && (
                 <Link to={"/add-room"}>
                   <img className="size-9 ml-3" src={Frame} alt="" />
                 </Link>
               )}
             </h2>
             <div className="flex gap-x-3 justify-end">
               <img src={Filter} alt="" />
             </div>
           </div>
           <div className=" bg-[#121212]">
             <div className="flex justify-center items-center h-[40vh]">
               <p className="text-xl md:text-3xl font-semibold text-white">
                 No Room To Let Available
               </p>
             </div>
           </div>
         </div>
       </div>
     </div>;
  }

   if (data.length == 0) {
     <div className="block md:flex overflow-x-clip h-screen max-w-[1740px] mx-auto">
       <SideBar />

       <div className="flex-1 md:w-[80%] pt-4 md:pt-14 px-3 md:px-6 lg:px-10">
         <Navbar
           Headervalue={"Best Escort Room"}
           textValue={"Explore our rooms and activities"}
         />
         <div className="pb-10 md:pt-8 pt-3 px-3 md:pl-2">
           <div className="flex pb-3 md:pb-0 justify-between items-center">
             <h2 className="text-white min-w-[180px] flex items-center md:py-6 md:text-[20px] font-semibold">
               Rooms Let
               {users?.user?.user_type == "escort" && (
                 <Link to={"/add-room"}>
                   <img className="size-9 ml-3" src={Frame} alt="" />
                 </Link>
               )}
             </h2>
             <div className="flex gap-x-3 justify-end">
               <img src={Filter} alt="" />
             </div>
           </div>
           <div className=" bg-[#121212]">
             <div className="flex justify-center items-center h-[40vh]">
               <p className="text-xl md:text-3xl font-semibold text-white">
                 No Room To Let Available
               </p>
             </div>
           </div>
         </div>
       </div>
     </div>;
   }

  const usersPage = 12;

  const page = currentPage * usersPage;

  const displayRooms = data.slice(page, page + usersPage).map((item, index) => {
    return <RoomsItem key={index} items={item} />;
  });

  const pageCount = Math.ceil(data.length / usersPage);

  return (
    <div className="block md:flex overflow-x-clip h-screen max-w-[1740px] mx-auto">
      <SideBar />

      <div className="flex-1 md:w-[80%] pt-4 md:pt-14 px-3 md:px-6 lg:px-10">
        <Navbar
          Headervalue={"Best Escort Room"}
          textValue={"Explore our rooms and activities"}
        />
        <div className="pb-10 md:pt-8 pt-3 px-3 md:pl-2">
          <div className="flex pb-3 md:pb-0 justify-between items-center">
            <h2 className="text-white min-w-[180px] flex items-center md:py-6 md:text-[20px] font-semibold">
              Rooms Let
              {users?.user?.user_type == "escort" && (
                <Link to={"/add-room"}>
                  <img className="size-9 ml-3" src={Frame} alt="" />
                </Link>
              )}
            </h2>
            <div className="flex gap-x-3 justify-end">
              <img src={Filter} alt="" />
            </div>
          </div>
          <div className=" bg-[#121212]">
            <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
              {displayRooms}
            </div>
            <Pagination PageCount={pageCount} setCurrentPage={setCurrentPage} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rooms;
