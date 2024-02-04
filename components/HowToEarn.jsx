import React from "react";
// import { expectedPointData, pointsDetails } from "../Data";
import { expectedPointData, pointsDetails } from "./Data";
import Image from "next/image";
import hand from "../public/images/hand.jpeg";
import cybersecurity from "../public/images/cybersecurity.jpeg";

const HowTOEarn = () => {
  return (
    <div>
      {/* first section  */}
      <div className="lg:flex gap-10 text-base mt-36 px-4 md:px-16 ">
        <div className="flex-1">
          <div className="w-11/12 max-w-xl">
            <h1 className="text-2xl leading-6 lg:text-3xl lg:leading-10">
              We illuminate blockchain transactions
            </h1>
            <div className="text-[#C1CFDA] leading-7">
              <p className="mt-5 leading-10">
                SampleRecovery excels in the realm of blockchain forensics,
                skillfully navigating the intricate paths of Bitcoin, Ethereum,
                and various cryptocurrencies during investigative pursuits. Our
                alliances extend to exchanges and top-notch providers of
                cutting-edge blockchain forensics tools, harmonizing the power
                of on-chain and off-chain analytics alongside investigative
                methodologies. Unleashing the prowess of our seasoned in-house
                experts, we bring unparalleled depth to every analysis.
              </p>
            </div>
          </div>
        </div>
        <div className="ma flex-1 lg:-ml-4 xl:ml-4 md:w-4/5 mx-auto lg:w-full mt-8 lg:mt-0 p-[1px]   rounded-lg">
          <div className="css-gradient rounded-lg  bg-[#0F1212]">
            <div className="sm:w-[600px] sm:h-[500px] w-full h-[350px]">
              <Image
                className="h-full w-full object-cover"
                src={hand}
                alt="social-icon"
              />
            </div>
          </div>
        </div>
      </div>
      {/* second section  */}
      <div className="lg:flex gap-10 text-base mt-24 px-4 md:px-16 ">
        <div className="ma flex-1 lg:-ml-4 xl:ml-4 md:w-4/5 mx-auto lg:w-full mt-8 lg:mt-0 p-[1px]   rounded-lg hidden md:block">
          <div className="css-gradient rounded-lg  bg-[#0F1212]">
            <div className="sm:w-[600px] sm:h-[500px] w-full h-full">
              <Image
                className="h-full w-full object-cover"
                src={cybersecurity}
                alt="social-icon"
              />
            </div>
          </div>
        </div>
        <div className="flex-1">
          <div className="w-11/12 max-w-xl">
            <h1 className="text-2xl leading-6 lg:text-3xl lg:leading-10">
              We help to recover digital assets
            </h1>
            <div className="text-[#C1CFDA] leading-7">
              <p className="mt-5 leading-10">
                We assist victims of cybercrimes involving Bitcoin and other
                cryptocurrencies, such as hacking, investment fraud, SIM
                swapping, exit scams, ransomware, embezzlement, theft, and
                divorce cases. Collaborating with exchanges, law firms, law
                enforcement, regulators, blockchain companies, ICOs, executives,
                and crypto VC firms, we strive to track and recover stolen
                cryptocurrency from various incidents, including exchange hacks,
                fraudulent ICOs, and major Bitcoin thefts, providing actionable
                intelligence for potential funds recovery.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowTOEarn;
