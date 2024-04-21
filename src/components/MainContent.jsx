import React from "react";
import Navbar from "./Navbar";
import EscortOne from "./EscortOne";
import EscortBanner from "./EscortBanner";
import AllEscort from "./AllEscort";

const MainContent = () => {
  return (
    <div className="flex-1 h-full md:w-[80%] px-3 pt-6 md:pt-14 md:px-10 md:pr-12">
      <Navbar
        Headervalue={"Welcome to Room 306"}
        textValue={"Explore our escort at your own pace"}
      />
      <EscortOne />
      <EscortBanner />
      <AllEscort />
    </div>
  );
};

export default MainContent;
