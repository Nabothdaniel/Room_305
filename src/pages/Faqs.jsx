import React, { useReducer } from "react";
import Navbar from "../components/Navbar";
import SideBar from "../components/SideBar";
import { RiSearchLine } from "react-icons/ri";
import FAQs from "../images/faqs.svg";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import Footer from "../components/Footer";

const reducer = (state, action) => {
  switch (action.type) {
    case "Change1":
      return {
        open1: !state.open1,
      };
    case "Change2":
      return {
        open2: !state.open2,
      };
    case "Change3":
      return {
        open3: !state.open3,
      };
    case "Change4":
      return {
        open4: !state.open4,
      };
    case "Change5":
      return {
        open5: !state.open5,
      };
    case "Change6":
      return {
        open6: !state.open6,
      };
  }
};

const Faqs = () => {
  const [animationParent] = useAutoAnimate();

  const [state, dispatch] = useReducer(reducer, {
    open1: true,
    open2: false,
    open3: false,
    open4: false,
    open5: false,
    open6: false,
  });

  return (
    <div className="block md:flex overflow-x-clip h-screen max-w-[1740px] mx-auto">
      <SideBar />

      <div className="flex-1 md:w-[80%] pt-6 md:pt-14 px-3 md:px-6 lg:px-10">
        <Navbar
          Headervalue={"Asking Any Questions"}
          textValue={"Explore our rooms and activities"}
        />
        <div className="md:py-8">
          <h2 className="text-white py-4 pb-6 md:text-2xl font-semibold">
            FAQs
          </h2>
          <div className="bg-[url('../images/Mark-group.svg')] mb-5 bg-auto bg-black flex justify-center items-center h-[250px]">
            <div
              className={`bg-[#0A0A0A] p-2 md:py-3 md:px-4 flex items-center rounded-full md:rounded-lg w-[290px]`}
            >
              <RiSearchLine className="text-[#DADADA] size-8 md:size-6" />
              <input
                className="bg-transparent pl-4 w-full hidden md:block placeholder-[#00CCCB] text-[14px] text-[#00CCCB]"
                type="search"
                name=""
                id=""
                placeholder="Search for Escort"
              />
            </div>
          </div>
          <div className="bg-[#1E1E1E] text-white py-10 rounded-xl">
            <h2 className="md:text-2xl text-[22px] text-center font-semibold pb-7">
              Frequently Asked Questions (FAQs)
            </h2>
            <div
              ref={animationParent}
              className={`${
                state.open1 && "border-2 border-[#E9CB50]"
              } rounded-2xl px-4  md:px-8 py-5 bg-[#121212] mb-4 md:w-[80%] w-[95%] mx-auto`}
            >
              <div className="flex justify-between items-center">
                <h2 className="md:text-xl text-[15px] font-semibold">
                  What is Room306?
                </h2>
                <img
                  onClick={() => dispatch({ type: "Change1" })}
                  className={`${
                    !state.open1 && "rotate-[270deg]"
                  } cursor-pointer duration-500 size-12 `}
                  src={FAQs}
                  alt=""
                />
              </div>
              {state.open1 && (
                <ol
                  className={`list-decimal text-[13px] md:text-base duration-500 transition-all pt-3 pl-4 unorder text-[#E5C9C9]`}
                >
                  <p>Room306 is an exquisite companionship website</p>
                  <p className="pt-4">
                    <span className="font-semibold">
                      {" "}
                      Unlocking TheRoom306 Secret:
                    </span>{" "}
                    At www.TheRoom306.com, home to approximately 100 thousand
                    escorts, a crucial consideration emerges: What are the odds
                    that an eager client, driven by desire, would navigate
                    through over 50 pages in search of an escort?In truth, the
                    majority of clients opt for convenience, selecting escorts
                    prominently featured on the front pages. Their exploration
                    might extend to the second, third, fourth, and fifth pages,
                    but statistical probability indicates diminishing interest
                    with each subsequent page. Simply put, proximity to the
                    first page significantly impacts your visibility and
                    likelihood of selection.Admittedly, a select few clients
                    enjoy a thorough perusal, diligently scrolling through all
                    available pages to find precisely what aligns with their
                    desires. However, for those seeking maximum exposure to the
                    site's 200k daily visitors, positioning on the FRONT page is
                    paramount.To amplify your visibility, consider subscribing
                    multiple times within a day. By strategically re-BOOSTING,
                    you can consistently secure the coveted top spot on the
                    front page, ensuring continued visibility to potential
                    clients.
                  </p>
                </ol>
              )}
            </div>
            <div
              ref={animationParent}
              className={`${
                state.open3 && "border-2 border-[#E9CB50]"
              } rounded-2xl px-4  md:px-8 py-5 bg-[#121212] mb-4 md:w-[80%] w-[95%] mx-auto`}
            >
              <div className="flex justify-between items-center">
                <h2 className="md:text-xl text-[15px] font-semibold">
                  How to Register as an Escort ?
                </h2>
                <img
                  onClick={() => dispatch({ type: "Change3" })}
                  className={`${
                    !state.open3 && "rotate-[270deg]"
                  } cursor-pointer duration-500 size-12 `}
                  src={FAQs}
                  alt=""
                />
              </div>
              {state.open3 && (
                <ol
                  className={`list-decimal text-[13px] md:text-base duration-500 transition-all pt-3 pl-4 unorder text-[#E5C9C9]`}
                >
                  <li> Visit WWW.ROOM306.COM</li>
                  <li> Click Sign Up</li>
                  <li> Register as an Independent Escort</li>
                  <li>
                    follow the guidelines , and complete the Escort details
                  </li>
                  <li>Check your email for the verification code.</li>
                  <li>Complete the rest of the registration pages.</li>
                  <li>upload your appealing and bright pictures.</li>
                  <li>
                    Take and upload a verification Photo as shown by the
                    reference picture.
                  </li>
                  <li>
                    click submit and wait for your profile to be approved.
                  </li>
                  <li className="ml-2">
                    once approved, click buy coin, complete the coin buying
                    process. once approved, log back in , scroll down and click
                    ACTIVATE. ITS 10,000 NGN to activate your account
                  </li>
                  <li className="ml-2">
                    To ensure the safety of escorts it's advised to share
                    location of your rendezvous with a client to a close
                    friend/pal and don't meet client in anonymous places
                  </li>
                </ol>
              )}
            </div>
            <div
              ref={animationParent}
              className={`${
                state.open2 && "border-2 border-[#E9CB50]"
              } rounded-2xl px-4  md:px-8 py-6 bg-[#121212] md:w-[80%] w-[95%] mx-auto`}
            >
              <div className="flex justify-between items-center">
                <h2 className="md:text-xl text-[15px] font-semibold">
                  How to Manage Your Pictures ?
                </h2>
                <img
                  onClick={() => dispatch({ type: "Change2" })}
                  className={`${
                    !state.open2 && "rotate-[270deg]"
                  } cursor-pointer duration-500 size-12 `}
                  src={FAQs}
                  alt=""
                />
              </div>
              {state.open2 && (
                <div
                  className={`list-decimal text-[13px] md:text-base
                                  } duration-500 pt-3 pl-4 unorder text-[#E5C9C9]`}
                >
                  <h2 className="pb-3 md:text-[18px] font-semibold text-base">
                    Managing Your Pictures Guide
                  </h2>
                  <h3 className="md:text-base font-semibold text-[14px] pb-2">
                    To manage your pictures:
                  </h3>
                  <ol className="list-decimal text-[13px] md:text-base duration-500 pt-3 pl-4 unorder text-[#E5C9C9]">
                    <li>Click View profile</li>
                    <li>Click Gallery</li>
                    <li>
                      Click the 3 dots beside the photo you want to appear on
                      your headline.
                    </li>
                    <li>And Click move to headline</li>
                    <p>Note: Headline can only have max of 3 pics</p>
                    <li>
                      So you may need to remove existing ones from the headline
                      to make room to replace with a new picture
                    </li>
                    <p>From headline,</p>
                    <li>
                      Click a picture you want and click make default to make it
                      your main profile picture.
                    </li>
                  </ol>
                  <h2 className="md:text-base font-semibold text-[14px] pb-2 pt-3">
                    How to Delete Old Photos:
                  </h2>
                  <li>Add new pictures before attempting to delete old ones</li>
                  <li> Add your new pictures first.</li>
                  <li>
                    Click delete at the top right of the old photo you wish to
                    delete
                  </li>
                </div>
              )}
            </div>
            <div
              ref={animationParent}
              className={`${
                state.open4 && "border-2 border-[#E9CB50]"
              } rounded-2xl px-4  md:px-8 py-6 bg-[#121212] mt-4 md:w-[80%] w-[95%] mx-auto`}
            >
              <div className="flex justify-between items-center">
                <h2 className="md:text-xl text-[15px] font-semibold">
                  Transport Fare
                </h2>
                <img
                  onClick={() => dispatch({ type: "Change4" })}
                  className={`${
                    !state.open4 && "rotate-[270deg]"
                  } cursor-pointer duration-500 size-12 `}
                  src={FAQs}
                  alt=""
                />
              </div>
              {state.open4 && (
                <div
                  className={`list-decimal text-[13px] md:text-base
                                  } duration-500 pt-3 pl-4 unorder text-[#E5C9C9]`}
                >
                  <h2 className="pb-3 md:text-[18px] font-semibold text-base">
                    Transportation Fee Protocol:
                  </h2>

                  <h3 className="md:text-base uppercase font-semibold text-[14px] pb-2">
                    Mandatory Transportation Payment
                  </h3>
                  <ol className="list-decimal text-[13px] md:text-base duration-500 pt-3 pl-4 unorder text-[#E5C9C9]">
                    <li>
                      Payment for transportation is a prerequisite and should be
                      settled in advance before you consider leaving your
                      residence, unless the client offers a "Prepaid
                      Uber/Taxify" Option
                    </li>
                    <li>
                      Should a client decline this requirement, it is advisible
                      to discontinue communication, as there is a high
                      probability of encountering a fraudulent or time-wasting
                      individual.
                    </li>
                    <li>
                      It is imperative not to venture outside your home,
                      regardless of assurance provided, if client does not
                      arrange for upfront transportation fare.
                    </li>
                    <li>
                      The transportation fee serves as the primary indicator of
                      a client sincerity and is essential for your SAFETY. It
                      not only establishes a commitment but also creates a
                      traceable record in case of any unforeseen circumstances.
                    </li>

                    <li>
                      Compliance with this protocol is strictly mandatory for
                      your well-being.
                    </li>
                  </ol>
                </div>
              )}
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Faqs;
