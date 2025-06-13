import Button from "../UI-components/Button/button";

function Community() {
  return (
    <div className="join-bg py-20 px-4 sm:px-6 lg:px-16">
      <div className="max-w-7xl mx-auto flex flex-col gap-8 items-center text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">
          Join the Land Reserve Community
        </h2>
        <p className="text-base sm:text-lg md:text-xl text-[#677B6F] max-w-2xl">
          Be part of a revolutionary protocol that bridges real-world assets
          with decentralized finance.
        </p>
        <div className="flex flex-col sm:flex-row gap-6">
          <Button
            style={
              "h-[55px] sm:h-[67px] w-full sm:w-[250px] bg-[#D2AF38] rounded-[10px] flex items-center justify-center !text-[#5C532D] hover:text-[18px] text-[16px] transition-all"
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
              "h-[55px] sm:h-[67px] w-full sm:w-[250px] bg-transparent ring ring-1 ring-[#D2AF38] rounded-[10px] flex items-center justify-center !text-[#D2AF38] text-[16px] hover:text-[18px] transition-all"
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
