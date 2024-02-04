"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import CoinNew from "../public/images/blockchain3.png";
import Link from "next/link";
// import ESTModal1 from "../../modals/ESTModal1";
// import ESTModal2 from "../../modals/ESTModal2";

const Hero = () => {
  const [state, setState] = useState("");
  const handleClick = async () => {
    const response = await fetch("/api/file");

    if (response.status !== 200) {
      console.error(response.status, response.statusText);
    }

    const blob = await response.blob();
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "streal-lite.pdf";
    link.click();
  };

  const [earnStrealModal, setEarnStrealModal] = useState(false);
  const [eSTModal1, setESTModal1] = useState(false);
  const [eSTModal2, setESTModal2] = useState(false);

  function closeModal() {
    setEarnStrealModal(false);
  }

  return (
    <div
      className="flex flex-col-reverse lg:flex-row py- text-white relative"
      id="Hero"
    >
      <div className="flex px-4 lg:w-2/5 md:pl-16 md:pt-3 ">
        <div className=" md:mt-56 lg:mt-0 lg:absolute left-14 top-20 w-full lg:w-1/2">
          <h1 className="font-normal text-3xl leading-8 md:text-5xl md:leading-[57.6px]">
            Simplified and
            <span className="block bg-clip-text text-transparent bg-gradient-to-r from-[#20A4F3]  to-[#59F8E8]">
              Transparent Wallet Retrieval
            </span>
            Solutions for Enhanced Hacks and Breaches
          </h1>
          <p className="text-base leading-7 max-w-lg lg:w-3/5 py-5">
            Unlocking the Mysteries: Effortless Solutions for Regaining Access
            to Your Wallet and Unraveling Crypto Scams
          </p>
          <div className="flex md:w-1/2 gap-2 lg:w-4/5 xl:w-1/2 max-w-lg md:gap-5 items-center">
            <button className="text-[#0F1212] cursor-pointer px-[4.5px] py-[6px] md:px-1.5 md:py-1.5 bg-gradient-to-r from-[#20A4F3]  to-[#59F8E8]  w-full font-semibold text-base rounded-md">
              Contact Us
            </button>
            <button
              className=" px-1.5 py-1.5 w-full font-semibold text-base text-[#bbd3d3] bg-[#59F8E8]/20"
              id="WhitePaper"
            >
              Whitepaper
            </button>

            <button
              className="text-[#bbd3d3] bg-[#59F8E8]/20 px-1.5 py-1.5  w-full font-semibold text-base"
              id="LitePaper"
              type="button"
              defaultValue={state}
            >
              Lite paper
            </button>
          </div>
          <div className="w-full flex items-center justify-between md:w-4/5 lg:w-full xl:w-4/5  mt-8  md:mt-16 text-2xl md:text-4xl leading-10">
            <div className="">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#20A4F3]  to-[#59F8E8]">
                250+
              </span>
              <h1 className="text-xs md:text-base">Wallets Revoked</h1>
            </div>
            <div className="mx-3">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#20A4F3]  to-[#59F8E8]">
                40M+
              </span>
              <h1 className="text-xs md:text-base">Recovered</h1>
            </div>
            <div className="">
              <span className="bg-clip-text text-transparent animate-trans-y bg-gradient-to-r from-[#20A4F3]  to-[#59F8E8]">
                28000+
              </span>
              <h1 className="text-xs md:text-base">Users </h1>
            </div>
          </div>
        </div>
      </div>

      <div className=" flex-1 md:pl-16 mx-auto -mt-20  lg:w-full lg:mt-0 p-[1px] lg:min-w-[574.14px] rounded-lg">
        <div className="css-gradient rounded-lg  bg-[#0F1212]">
          <div className="sm:w-[600px] sm:h-[500px] w-full h-full ">
            <Image
              className="h-full w-full object-cover bg-blend-lighten animate-custom-bounce"
              src={CoinNew}
              alt="social-icon"
            />
          </div>
        </div>
      </div>

      {/* <div className="flex -mt-20 md:-mt-48 xl:-mt-10 lg:min-w-[574.14px]">
        <div className="w-[850px] h-full">
          <Image
            className="w-full h-3/4 object-cover bg-blend-lighten animate-trans-y"
            src={CoinNew}
            width={10}
            height={10}
            alt={"coin"}
          />
        </div>
      </div> */}
      {/* {earnStrealModal && <EarnStrealModal setEarnStrealModal={setEarnStrealModal} setESTModal1={setESTModal1}/>} */}
      {/* {eSTModal1 && <ESTModal1 setESTModal1={setESTModal1} setESTModal2={setESTModal2}/>} */}
      {/* {eSTModal2 && <ESTModal2 setESTModal2={setESTModal2} setESTModal1={setESTModal1}/> } */}
    </div>
  );
};

export default Hero;
