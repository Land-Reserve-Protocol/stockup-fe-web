import { FaCoins } from "react-icons/fa";
import { BsStack } from "react-icons/bs";
import { MdPeopleAlt } from "react-icons/md";

function CoreFeatures() {
  return (
    <div className="h-[70vh] bg-[#00000090] flex flex-col justify-between relative">
      <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(to_top,_#00000090_10%,_#00000090_20%)] z-0 "></div>

      <div className="flex flex-col items-center justify-center gap-[20px] h-[60%] z-99">
        <p className="text-center text-[34px] font-bold text-[#C8CBCC]">
          Core Features
        </p>
        <p className="text-center text-[24px] text-[#656F79]">
          Revolutionary DeFi infrastructure backed by real-world assets
        </p>
      </div>
      <div className="w-[1440px] h-[80%] flex  content-center mx-auto justify-between z-99">
        <div className="w-[400px] h-[350px] bg-[#1E2F34] flex flex-col content-center pl-[20px] pr-[30px] pt-[50px] gap-[30px] rounded-[8px] ring ring-2 ring-[#25433D] ring-offset-2 ring-offset-[#1E2F34]">
          <div className="bg-[#5C532D] h-[54px] w-[54px] flex justify-center items-center rounded-lg">
            <FaCoins className="text-[#C3A437] text-[24px]" />
          </div>
          <p className="text-[24px] text-[#B1B8B8]">Land-Backed Liquidity</p>
          <p className="text-[#7B8689] text-[19px]">
            Access deep liquidity pools backed by verified land assets,
            providingstability and real-world value to your DeFi positions.
          </p>
        </div>
        <div className="w-[400px] h-[350px] bg-[#1E2F34] flex flex-col content-center pl-[20px] pr-[30px] pt-[50px] gap-[30px] rounded-[8px] ring ring-2 ring-[#25433D] ring-offset-2 ring-offset-[#1E2F34]">
          <div className="bg-[#5C532D] h-[54px] w-[54px] flex justify-center items-center rounded-lg">
            <BsStack className="text-[#C3A437] text-[24px]" />
          </div>
          <p className="text-[24px] text-[#B1B8B8]">Categorical Minting</p>
          <p className="text-[#7B8689] text-[19px]">
            Mint tokens based on specific land categories -agricultural,
            commercial, residential - each with unique yield characteristics.
          </p>
        </div>
        <div className="w-[400px] h-[350px] bg-[#1E2F34] flex flex-col content-center pl-[20px] pr-[30px] pt-[50px] gap-[30px] rounded-[8px] ring ring-2 ring-[#25433D] ring-offset-2 ring-offset-[#1E2F34]">
          <div className="bg-[#5C532D] h-[54px] w-[54px] flex justify-center items-center rounded-lg">
            <MdPeopleAlt className="text-[#C3A437] text-[24px]" />
          </div>
          <p className="text-[24px] text-[#B1B8B8]">Governance BY DAO</p>
          <p className="text-[#7B8689] text-[19px]">
            Community-driven governance ensures transparent decision-making for
            protocol upgrades and land asset management.
          </p>
        </div>
      </div>
    </div>
  );
}

export default CoreFeatures;
