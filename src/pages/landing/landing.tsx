import Button from "../../components/Button/button";
import "../../App.css";

function Landing() {
  return (
    <div className="w-full landing-bg  h-[calc(100vh-60px)] relative">
      {/* <div className="absolute top-0 left-0 w-full h-full   shadow-[inset_0_-0px_60px_rgba(195,164,55,0.2)] z-0"></div> */}
      <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(to_top,_#00000090_10%,_#00000090_20%)] z-0"></div>
      <div className="flex flex-col justify-center items-center h-full  w-[1440px] m-auto gap-[30px] z-[50] relative">
        <div className="text-[65.6px] text-[#C3A437] font-bold text-center">
          Backed by the Earth.
        </div>
        <div className="text-[65.6px] text-[#E9EDEC] font-bold text-center">
          Built for the future.
        </div>
        <div className="text-[20.6px] text-[#87949A] w-[650px] text-center">
          The Land Reserve Protocol transforms real-world land assets into
          decentralzed financlal instruments, creating sustalnable value and
          accessible opportunities.
        </div>
        <div className="flex gap-[50px]">
          <Button
            style={
              "h-[67px] w-[250px] bg-[#D2AF38] rounded-[10px] flex items-center justify-center !text-[#5C532D] hover:bg-none text-[16px] hover:transform  hover:text-[18px]"
            }
            onClick={() => {}}
            loading={false}
            isDisabled={false}
          >
            Explore The Protocol
          </Button>
          <Button
            style={
              "h-[67px] w-[250px] bg-[white] ring ring-1 ring-[#D2AF38] rounded-[10px] flex items-center justify-center !text-[#D2AF38] text-[16px] hover:transform  hover:text-[18px]"
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

export default Landing;
