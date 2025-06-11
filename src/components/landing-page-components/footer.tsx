import Logo from "../../assets/navabr assets/logo.svg";
import { FaDiscord, FaTwitter, FaTelegram } from "react-icons/fa";

function Footer() {
  return (
    <div className="bg-[#00020b] text-white h-[411.11px] flex-col ">
      <div className="h-[311.11px] w-[1440px] mx-auto flex items-center grid grid-cols-4 gap-8">
        <div className="  h-[179.92px] ">
          <div className="flex items-center content-center mb-6">
            <img src={Logo} className="w-[20px] h-[20px]" />
            <p className="ml-[10px] text-[20px] text-[#ffffff] font-bold">
              Land Reserve Protocol
            </p>
          </div>
          <div className="w-[284px] text-gray-400 mb-6 text-[16px]">
            Bridging real-world assets with decentralized finance through
            innovative land tokenization.
          </div>
          <div className="w-full space-x-4 flex text-gray-400 text-[16px]">
            <FaDiscord />
            <FaTwitter />
            <FaTelegram />
          </div>
        </div>
        <div className="flex flex-col space-y-6 h-[179.92px] ">
          <div className="text-[16px]">Protocol</div>
          <div>
            <ul className="text-[16px] text-gray-400 space-y-2">
              <li>Documentation</li>
              <li>White Paper</li>
              <li>Security</li>
              <li>Audits</li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col space-y-6 h-[179.92px] ">
          <div className="text-[16px]">Community</div>
          <div>
            <ul className="text-[16px] text-gray-400 space-y-2">
              <li>Governance</li>
              <li>Forum</li>
              <li>Blog</li>
              <li>Newsletter</li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col space-y-6 h-[179.92px] ">
          <div className="text-[16px]">Support</div>
          <div>
            <ul className="text-[16px] text-gray-400 space-y-2">
              <li>Help Center</li>
              <li>Contact</li>
              <li>Terms</li>
              <li>Privacy</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="w-[1440px] border-t-1 border-t-gray-700 h-[100px] mx-auto text-[#9ca3af] text-center flex items-center content-center justify-center">
        2024 Land Reserve Protocol. All rights reserved.
      </div>
    </div>
  );
}

export default Footer;
