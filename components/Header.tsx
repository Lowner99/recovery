"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { RxHamburgerMenu } from "react-icons/rx";
// import strealLogo from "../../../public/newImages/landingPage/strealLogo.svg";
import logo from "../public/images/skalez_logo.png";
import { IoMdClose } from "react-icons/io";
// import EarnStrealModal from "../../modals/EarnStrealModal";
// import ESTModal1 from "../../modals/ESTModal1";
// import ESTModal2 from "../../modals/ESTModal2";

const navLinks = [
  {
    id: 1,
    name: "Home",
    path: "#Roadmap",
  },
  {
    id: 1,
    name: "Resources",
    path: "#Hero",
  },
  {
    id: 1,
    name: "Wallets",
    path: "#Hero",
  },
  {
    id: 1,
    name: "Expert Witness",
    path: "#Hero",
  },
  {
    id: 1,
    name: "Contact Us",
    path: "/contactUs",
  },
];
const Header = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const [earnStrealModal, setEarnStrealModal] = useState(false);
  const [eSTModal1, setESTModal1] = useState(false);
  const [eSTModal2, setESTModal2] = useState(false);

  return (
    <nav className="fixed top-0  py-4  z-50  bg-[#0F1212] w-full max-w-[1440px] mx-auto px-4 md:px-16 flex items-center justify-between">
      <div className="flex items-center gap-2 leading-5">
        <Link href="/">
          <Image
            priority
            src={logo}
            width={25}
            height={25}
            alt={"streal logo"}
          />
        </Link>
        <h2 className="text-[#C1CFDA] font-semibold text-xl tracking-wider">
          SampleRecovery
        </h2>
      </div>
      <div
        className={`${
          openMenu ? "transform translate-y-0" : "-translate-y-96 hidden"
        }  w-full z-50 h-auto bg-[#0F1212] pt- transform -translate-y-full transition-all duration-500 ease-out absolute top-12 left-0 p-4 flex flex-col items-start justify-evenly lg:hidden`}
      >
        {navLinks.map((link, i) => (
          <Link
            key={i}
            href={`${link.path}`}
            className="py-2 md:px- border-t w-full md:w-10/12 mx-auto "
            onClick={() => setOpenMenu(!openMenu)}
          >
            {link.name}
          </Link>
        ))}
      </div>
      <div className="hidden lg:flex items-center  gap-8 xl:w-3/5">
        <Link
          href="#Roadmap"
          className=" hover:bg-clip-text hover:text-transparent hover:bg-gradient-to-r from-[#20A4F3]  to-[#59F8E8]"
        >
          Roadmap
        </Link>
        <Link
          href="#JoinPresales"
          className=" hover:bg-clip-text hover:text-transparent hover:bg-gradient-to-r from-[#20A4F3]  to-[#59F8E8]"
        >
          Join Presales
        </Link>
        <Link
          href="#WhitePaper"
          className=" hover:bg-clip-text hover:text-transparent hover:bg-gradient-to-r from-[#20A4F3]  to-[#59F8E8]"
        >
          Whitepaper
        </Link>
        <Link
          href="#LitePaper"
          className=" hover:bg-clip-text hover:text-transparent hover:bg-gradient-to-r from-[#20A4F3]  to-[#59F8E8]"
        >
          Lite Paper
        </Link>
        <Link href="/contactUs" className=" hover:text-[#59F8E8]">
          Contact Us
        </Link>
      </div>
      <div className="lg:hidden text-[#C1CFDA]">
        {openMenu ? (
          <span onClick={() => setOpenMenu(false)}>
            <IoMdClose size={25} className="cursor-pointer" />
          </span>
        ) : (
          <RxHamburgerMenu
            size={25}
            onClick={() => setOpenMenu(true)}
            className="cursor-pointer"
          />
        )}
      </div>
      <div className="hidden lg:block">
        <button
          onClick={() => setEarnStrealModal(true)}
          className="text-[#0F1212] px-1.5 py-1.5 bg-gradient-to-r from-[#20A4F3]  to-[#59F8E8]  w-full font-semibold text-base rounded-md"
        >
          Contact Us
        </button>
      </div>
      {/* {earnStrealModal && <EarnStrealModal setEarnStrealModal={setEarnStrealModal} setESTModal1={setESTModal1}/>}
      {eSTModal1 && <ESTModal1 setESTModal1={setESTModal1} setESTModal2={setESTModal2}/>}
      {eSTModal2 && <ESTModal2 setESTModal2={setESTModal2} setESTModal1={setESTModal1}/> } */}
    </nav>
  );
};

export default Header;
