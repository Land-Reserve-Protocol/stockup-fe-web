import React from "react";
import Button from "../UI-components/Button/button";

function Community() {
  return (
    <div className="join-bg">
      <div className="w-[1440px] h-[50vh] flex flex-col gap-[30px] justify-center items-center mx-auto">
        <div className="text-[34px] font-bold text-[#ffffff]">
          Join the Land Reserve Community
        </div>
        <p className="text-[24px] text-[#677B6F]">
          Be part of a revolutionary protocol that bridges real-worid assets
          with decentralized finance.
        </p>
        <div className="flex gap-[50px]">
          <Button
            style={
              "h-[67px] w-[250px] bg-[#D2AF38] rounded-[10px] flex items-center justify-center !text-[#5C532D] hover:bg-none text-[16px] hover:transform  hover:text-[18px]"
            }
            onClick={() => {}}
            loading={false}
            bold
            isDisabled={false}
          >
            Join the community
          </Button>
          <Button
            style={
              "h-[67px] w-[250px] bg-[transparent] ring ring-1 ring-[#D2AF38] rounded-[10px] flex items-center justify-center !text-[#D2AF38] text-[16px] hover:transform  hover:text-[18px]"
            }
            onClick={() => {}}
            loading={false}
            isDisabled={false}
          >
            Read White Paper
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Community;
