import React, { useContext, useState } from "react";
import SideBar from "../components/SideBar";
import Navbar from "../components/Navbar";
import Pagination from "../components/Pagination";
import { useGetSearchEscortQuery } from "../redux/EscortApi";
import Loading from "../components/Loading";
import Footer from "../components/Footer";
import { ImageContext } from "../Hooks/ImageContext";
import EscortItems from "../components/EscortItems";

const Search = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const { filter } = useContext(ImageContext);
  const { data, isLoading } = useGetSearchEscortQuery(filter.search);

  if (isLoading) {
    return <Loading />;
  }

  const usersPage = 32;

  const page = currentPage * usersPage;

  const displayVideos = data
    .slice(page, page + usersPage)
    .map((item, index) => {
      return <EscortItems key={index} items={item} />;
    });

  const pageCount = Math.ceil(data.length / usersPage);

  if (!data) {
    return (
      <div className="block md:flex overflow-x-clip max-w-[1740px] mx-auto">
        <SideBar />
        <div className="flex-1 md:w-[80%] pt-6 md:pt-14 px-6 lg:px-10">
          <Navbar
            Headervalue={"Welcome to Room 306"}
            textValue={"Explore our escort at your own pace"}
          />

          <div className="md:py-8">
            <div className="flex text-white md:py-4 md:pb-6 py-2 justify-between items-center">
              <h2 className="  md:text-2xl font-semibold">All Escort</h2>
              {/* <p className="cursor-pointer text-[#DADADA] text-[14px] md:text-base">
              See all
            </p> */}
            </div>
            {/* <div className="flex md:justify-between overflow-x-scroll md:overflow-x-auto">
            <div className="flex ">
              <img className="h-[50px] cursor-pointer mr-3" src={Bdsm} alt="" />
              <img
                className="h-[50px] cursor-pointer mr-3"
                src={Sexual}
                alt=""
              />
              <img className="h-[50px] cursor-pointer mr-3" src={Free} alt="" />
              <img
                className="h-[50px] cursor-pointer mr-3"
                src={Recent}
                alt=""
              />
              <img
                className="h-[50px] md:hidden cursor-pointer"
                src={Filter}
                alt=""
              />
            </div>
            <div>
              <img
                className="h-[50px] hidden md:block cursor-pointer"
                src={Filter}
                alt=""
              />
            </div>
          </div> */}

            <div className="grid xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4 pt-6">
              <div className="xl:col-span-4 lg:col-span-3 sm:col-span-2 col-span-1 flex justify-center items-center h-[40vh]">
                <p className="text-white font-semibold md:text-xl">
                  No Searched Escort Available...
                </p>
              </div>
            </div>
          </div>
          <Footer />
        </div>
      </div>
    );
  }

  return (
    <div className="block md:flex overflow-x-clip max-w-[1740px] mx-auto">
      <SideBar />
      <div className="flex-1 md:w-[80%] pt-6 md:pt-14 px-6 lg:px-10">
        <Navbar
          Headervalue={"Welcome to Room 306"}
          textValue={"Explore our escort at your own pace"}
        />

        <div className="md:py-8">
          <div className="flex text-white md:py-4 md:pb-6 py-2 justify-between items-center">
            <h2 className="  md:text-2xl font-semibold">All Escort</h2>
            {/* <p className="cursor-pointer text-[#DADADA] text-[14px] md:text-base">
              See all
            </p> */}
          </div>
          {/* <div className="flex md:justify-between overflow-x-scroll md:overflow-x-auto">
            <div className="flex ">
              <img className="h-[50px] cursor-pointer mr-3" src={Bdsm} alt="" />
              <img
                className="h-[50px] cursor-pointer mr-3"
                src={Sexual}
                alt=""
              />
              <img className="h-[50px] cursor-pointer mr-3" src={Free} alt="" />
              <img
                className="h-[50px] cursor-pointer mr-3"
                src={Recent}
                alt=""
              />
              <img
                className="h-[50px] md:hidden cursor-pointer"
                src={Filter}
                alt=""
              />
            </div>
            <div>
              <img
                className="h-[50px] hidden md:block cursor-pointer"
                src={Filter}
                alt=""
              />
            </div>
          </div> */}

          <div className="grid xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4 pt-6">
            {data.length == 0 ? (
              <div className="xl:col-span-4 lg:col-span-3 sm:col-span-2 col-span-1 flex justify-center items-center h-[40vh]">
                <p className="text-white font-semibold md:text-xl">
                  No Searched Escort Available...
                </p>
              </div>
            ) : (
              <div className="grid xl:grid-cols-4 xl:col-span-4 lg:col-span-3 sm:col-span-2 col-span-1 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
                {displayVideos}
              </div>
            )}
          </div>
          {data.length == 0 || (
            <Pagination PageCount={pageCount} setCurrentPage={setCurrentPage} />
          )}
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Search;
