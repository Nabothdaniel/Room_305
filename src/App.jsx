import { Outlet, useLocation, useNavigate } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import Details from "./Hooks/Details";
import { useGetCountryQuery } from "./redux/CountryApi";
import { ImageContext } from "./Hooks/ImageContext";
import { useEffect, useState } from "react";
import { differenceInDays, parseISO } from "date-fns";
import PopUp from "./components/PopUp";
import toast from "react-hot-toast";
import { useWalletQuery } from "./redux/ApiSlice";
import { FilterApi } from "./Hooks/FilterApi";

const App = () => {
  let users = JSON.parse(localStorage.getItem("details"));
  const [image, setImage] = useState("");
  const pathname = useLocation().pathname;
  const { data, isLoading } = useGetCountryQuery();
  const [pop, setPop] = useState(true);
  const [day, setDay] = useState("");
  const navigate = useNavigate();
  const { data: pay } = useWalletQuery();
  const [filter, setFilter] = useState({
    roomCountry: "",
    roomCity: "",
    tourCountry: "",
    tourCity: "",
  });

  Details();

  useEffect(() => {
    if (users?.user?.user_type == "escort") {
      if (users?.services?.length == 0) {
        navigate("/services");
      }
    }
    if (users?.user?.user_type !== "escort") {
      if (pathname == "/services") {
        navigate("/");
      }
    }
  }, [pay, pathname]);

  useEffect(() => {
    if (users?.user?.user_type == "escort") {
      const birthDate = parseISO(
        users?.user?.createdAt,
        "yyyy-MM-dd",
        new Date()
      );
      const currentDate = new Date();
      setDay(differenceInDays(birthDate, currentDate));
      if (pay?.available_coin <= 0) {
        setPop(false);
      }
    }
  }, [pay]);

  const handlePop = () => {
    if (day < 7) {
      setPop(true);
    } else {
      toast.error("Please make payment to activate your account");
    }
  };

  return (
    <>
      <ScrollToTop />
      <div className="mt-[68px] md:-mt-4">
        <ImageContext.Provider value={{ image, setImage, filter, setFilter }}>
          <Outlet />
        </ImageContext.Provider>
      </div>
      <PopUp
        popMenu={handlePop}
        popClass={`${pop ? "-translate-y-[120vh]" : "translate-y-0"}`}
      />
    </>
  );
};

export default App;
