import { FaCoins } from "react-icons/fa";
import { BsStack } from "react-icons/bs";
import { MdPeopleAlt } from "react-icons/md";

function CoreFeatures() {
  return (
    <div className="min-h-[50vh] bg-transparent flex flex-col space-y-8 relative px-4 sm:px-8 py-20">
      {/* Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(to_top,_#00000090_10%,_#00000090_20%)] z-10"></div>

      {/* Header */}
      <div className="relative z-10 flex flex-col items-center justify-center gap-4 text-center">
        <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#C8CBCC]">
          Core Features
        </p>
        <p className="text-base sm:text-lg md:text-xl text-[#8A96A1] max-w-3xl">
          Revolutionary DeFi infrastructure backed by real-world assets
        </p>
      </div>

      {/* Feature Cards */}
      <div className="relative z-10 mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
        {[
          {
            icon: <FaCoins className="text-[#C3A437] text-2xl" />,
            title: "Land-Backed Liquidity",
            text: `Access deep liquidity pools backed by verified land assets, providing stability and real-world value to your DeFi positions.`,
          },
          {
            icon: <BsStack className="text-[#C3A437] text-2xl" />,
            title: "Categorical Minting",
            text: `Mint tokens based on specific land categories—agricultural, commercial, residential—each with unique yield characteristics.`,
          },
          {
            icon: <MdPeopleAlt className="text-[#C3A437] text-2xl" />,
            title: "Governance BY DAO",
            text: `Community-driven governance ensures transparent decision-making for protocol upgrades and land asset management.`,
          },
        ].map((feature, i) => (
          <div
            key={i}
            className="bg-[#1E2F34] rounded-[8px] ring ring-2 ring-[#25433D] ring-offset-2 ring-offset-[#1E2F34] p-6 pt-[50px] flex flex-col gap-[30px] lg:h-[350px]"
          >
            <div className="bg-[#5C532D] h-[54px] w-[54px] flex justify-center items-center rounded-lg">
              {feature.icon}
            </div>
            <p className="text-lg sm:text-xl font-semibold text-[#B1B8B8]">
              {feature.title}
            </p>
            <p className="text-sm sm:text-base text-[#7B8689]">
              {feature.text}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CoreFeatures;
