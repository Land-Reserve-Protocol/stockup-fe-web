import React from "react";
import Button from "../../components/Button/button";

function Landing() {
  return (
    <div className="flex flex-col justify-center h-[calc(100vh-60px)]  w-[1440px] m-auto gap-[30px]">
      <div className="text-[65.6px] text-[#C3A437] font-bold">
        Backed by the Earth
      </div>
      <div className="text-[65.6px] text-[#E9EDEC] font-bold">
        Built for the future
      </div>
      <div className="text-[20.6px] text-[#87949A] w-[650px]">
        The Land Reserve Protocol transforms real-world land assets into
        decentralzed financlal instruments, creating sustalnable value and
        accessible opportunities.
      </div>
      <div className="flex gap-[20px]">
        <Button
          style={
            "h-[67px] w-[250px] bg-[#D2AF38] rounded-[10px] flex items-center justify-center !text-[#5C532D]"
          }
          onClick={() => {}}
          loading={false}
          isDisabled={false}
        >
          Explore The Protocol
        </Button>
        <Button
          style={
            "h-[67px] w-[250px] bg-[transparent] ring ring-1 ring-[#D2AF38] rounded-[10px] flex items-center justify-center !text-[#D2AF38]"
          }
          onClick={() => {}}
          loading={false}
          isDisabled={false}
        >
          Read White Paper
        </Button>
      </div>
    </div>
  );
}

export default Landing;
