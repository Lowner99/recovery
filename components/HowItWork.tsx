import React from "react";
import { FaChess } from "react-icons/fa";
import { FaChartBar } from "react-icons/fa";
import { VscLaw } from "react-icons/vsc";
import { AiOutlineFileSearch } from "react-icons/ai";
// import { howItWorksCard } from "./Data";
const HowItWork = () => {
  interface howItWorksCardProps {
    id: string;
    title: string;
    content: string | number;
    icon: React.ReactNode;
  }

  const howItWorksCard: howItWorksCardProps[] = [
    {
      id: "1",
      title: "PROFESSIONAL",
      content:
        "We are a globally seasoned team of experts, tackling cases across the globe with our top-notch skills and extensive training.",
      icon: <FaChess />,
    },
    {
      id: "2",
      title: "EFFICIENT",
      content:
        "We bring a treasure trove of investigative expertise, coupled with swift and effective capabilities.",
      icon: <FaChartBar />,
    },
    {
      id: "3",
      title: "ESTABLISHED",
      content:
        "We've solidified our presence in the crypto realm. Check out our expansive network displayed below!",
      icon: <VscLaw />,
    },
    {
      id: "4",
      title: "EXPERIENCED",
      content:
        "We've played the role of expert witnesses in high-profile cases, uncovering significant frauds and exposing them to bring justice.",
      icon: <AiOutlineFileSearch />,
    },
  ];
  return (
    <div className="mt-30 z-50 lg:mt-60  bg-[#0F1212] px-4 md:px-16">
      <div className="">
        <h1 className="font-semibold text-4xl leading-[48px]">
          We live and breathe blockchain and cybersecurity
        </h1>
        <div className="flex flex-col sm:grid grid-cols-2 xl:grid-cols-4 gap-5 py-10 ">
          {howItWorksCard.map(({ id, title, content, icon }) => (
            <div
              key={id}
              className="flex flex-col bg-[#C1CFDA]/5 md:min-h-[280px] px-6 py-4 font-semibold rounded-lg justify-center items-center"
            >
              <span className=" text-3xl opacity-50 p-3 rounded-full bg-[#2f887f] text-white">
                {icon}
              </span>
              <div className="flex items-center gap-1 text-base leading-4 md:block">
                <h1 className="md:text-xl my-3 tracking-wider leading-6">
                  {title}
                </h1>
              </div>
              <p className="text-sm text-[#F9F9F9]/90 md:text-base font-normal">
                {content}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HowItWork;
