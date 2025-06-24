import Button from "../../components/UI-components/Button/button";

function Hero() {
  return (
    <div className="flex items-center justify-center w-full parallax-container min-h-screen bg-[linear-gradient(to_top,_#00000090_10%,_#00000090_20%)]">
      {/* Content */}
      <div className="flex flex-col justify-center items-center h-full px-4 sm:px-6 md:px-10 lg:px-16 max-w-[90rem] mx-auto gap-6 z-[50] relative text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[65.6px] text-[#C3A437] font-bold leading-tight">
          Backed by the Earth.
        </h1>
        <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-[65.6px] text-[#E9EDEC] font-bold leading-tight">
          Built for the future.
        </h2>
        <p className="text-base sm:text-lg md:text-xl lg:text-[20.6px] text-[#87949A] max-w-[90%] sm:max-w-[600px] md:max-w-[650px] mx-auto">
          The Land Reserve Protocol transforms real-world land assets into
          decentralized financial instruments, creating sustainable value and
          accessible opportunities.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-[50px] mt-4">
          <Button
            style={
              "h-14 p-6 sm:h-[67px] w-full sm:w-[250px] bg-[#D2AF38] leading-20 rounded-[20px] flex items-center justify-center !text-[#5C532D] hover:scale-none lg:hover:scale-105 lg:hover:opacity-100 opacity-80 hover:opacity-100 transition-all duration-200 ease-in-out"
            }
            onClick={() => {}}
            loading={false}
            isDisabled={false}
          >
            Explore The Protocol
          </Button>
          <Button
            style={
              "h-[56px] sm:h-[67px] w-full sm:w-[250px] bg-white  leading-20 rounded-[20px] flex items-center justify-center !text-[#D2AF38] text-[16px] lg:hover:opacity-100 opacity-80 hover:opacity-100 hover:scale-none lg:hover:scale-105 transition-all duration-200 ease-in-out"
            }
            onClick={() =>
              window.open(
                "https://raw.githubusercontent.com/Land-Reserve-Protocol/landing-page-assets/main/The%20Land%20Reserve%20Protocol%20(Stock%20Up)%20(1).pdf",
                "_blank"
              )
            }
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

export default Hero;
