import React, { useEffect, useState } from "react";
import axios from "axios";
import { PaystackButton } from "react-paystack";
import { Convert } from "easy-currencies";
import toast from "react-hot-toast";

const Purchase = ({ purchaseClass, handleWallet }) => {
  let useD = JSON.parse(localStorage.getItem("details"));
  let user = useD?.profile;
  const [coin, setCoin] = useState("");
  const [amount, setAmount] = useState(0);
  const [mainAmount, setMainAmount] = useState(0);
  const [amountCoin, setAmountCoin] = useState(0);
  const [payment, setPayment] = useState([]);
  const [curr, setCurr] = useState("NGN");

  const coinPer = 1;
  const coinAmount = 50;

  const paymentSuccess = async (data) => {
    if (data.message == "Approved" && data.status == "success") {
      try {
        const res = await axios.put(
          "https://backend.theroom306.com/api/profile/buy_coin/",
          { coin_amount: coin, amount: amountCoin },
          {
            headers: {
              "Content-Type": "application/json",
              Authorization:
                "Bearer " + JSON.parse(localStorage.getItem("token")),
            },
          }
        );
        handleWallet();
        toast.success("Payment Successful");
        window.location.reload(true);
      } catch (err) {
        console.log(err);
      }
    } else {
      toast.error("Error In Payment");
    }
  };

  const currency = async () => {
    const value = await Convert(amount).from(curr).to("NGN");
    setAmountCoin(value);
  };

  const available = {
    method: "GET",
    url: "https://openexchangerates.org/api/currencies.json",
  };

  const availableCurrency = async () => {
    try {
      const response = await axios.request(available);
      setPayment(Object.keys(response.data));
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    availableCurrency();
  }, []);

  useEffect(() => {
    const result = amountCoin / coinAmount;
    setCoin(Math.round(result * coinPer));
  }, [amountCoin, curr]);

  useEffect(() => {
    currency();
  }, [amount, curr]);

  const config = {
    publicKey: "pk_live_cdd73507456891acea126db50147c858431ebcb9",
    reference: new Date().getTime().toString(),
    amount: amountCoin * 100,
    email: user?.user?.email || user?.email,
    // currency: curr,
    // payment_options: "card,mobilemoney,ussd",
    // customer: {
    //   email: user?.profile?.user?.email || user?.profile?.email,
    //   phone_number: user?.user?.mobile_number || user?.mobile_number,
    //   name: user?.user?.username || user?.username,
    // },
    // customizations: {
    //   title: "My store",
    //   description: "Payment for coins",
    //   logo: "https://st2.depositphotos.com/4403291/7418/v/450/depositphotos_74189661-stock-illustration-online-shop-log.jpg",
    // },
  };

  const handlePaystackCloseAction = () => {
    handleWallet();

    toast.error("Payment Cancelled");
  };

  // const fwConfig = {
  //   ...config,
  //   text: "Purchase Coin Now",
  //   callback: (response) => {
  //     handleWallet();
  //     if (response.charge_response_message == "Approved Successful") {
  //       paymentSuccess({ coin_amount: coin, amount: response.amount });
  //     } else {
  //       toast.error("Payment Not Successful");
  //     }
  //     closePaymentModal();
  //   },
  //   onClose: () => {
  //     toast.error("Payment Cancelled");
  //   },
  // };

  const componentProps = {
    ...config,
    text: "Purchase Coin Now",
    onSuccess: (reference) => paymentSuccess(reference),
    onClose: handlePaystackCloseAction,
  };

  return (
    <div
      className={`bg-black/40 duration-500 ${purchaseClass} fixed top-0 z-[999999] flex left-0 w-[100%] h-screen  justify-center items-center`}
    >
      <div className="bg-white w-[90%] md:w-[40vw] p-8 rounded-xl">
        <h2 className="text-center md:text-4xl text-[22px] font-semibold">
          Buy Coins
        </h2>

        <div className="pt-8">
          <div className="pr-2 border w-fit rounded-3xl mb-7">
            <select
              className="py-3 md:text-base text-[14px] bg-transparent px-2 outline-none rounded-3xl"
              name="currency"
              id=""
              onChange={(e) => setCurr(e.target.value)}
            >
              <option value="">Select payment currency</option>

              {payment.map((item, index) => {
                return <option key={index}>{item}</option>;
              })}
            </select>
          </div>
          <h2 className="font-medium text-[20px] pb-3">Input Amount</h2>
          <div className="flex items-center border-2 px-3 py-2 rounded-xl">
            <p>{curr}</p>

            <input
              onChange={(e) => {
                setAmount(e.target.value);
              }}
              className="px-2 w-full"
              type="number"
            />
          </div>

          <p>
            {amount} {curr} is Equivalent to {coin} coins
          </p>

          {coin < 100 && (
            <p className="py-1 text-[12px] text-red-500">
              Minimum Coin Purchase is 100 coins
            </p>
          )}
        </div>

        {coin < 100 ? (
          <button
            disabled
            className="text-center duration-500  bg-[#E9CB50] w-[100%] py-3 md:py-4  font-semibold mt-12 rounded-xl"
          >
            Purchase Coin Now
          </button>
        ) : (
          <PaystackButton
            className="text-center hover:bg-[#ffdc4e] duration-500  bg-[#E9CB50] w-[100%] py-3 md:py-4  font-semibold mt-12 rounded-xl"
            {...componentProps}
          />
        )}

        <button
          onClick={handleWallet}
          className="text-center hover:bg-red-500/80 duration-500 text-white  bg-red-500 w-[100%] py-3 md:py-4  font-semibold mt-4 rounded-xl"
        >
          Cancel Purchase
        </button>
      </div>
    </div>
  );
};

export default Purchase;
