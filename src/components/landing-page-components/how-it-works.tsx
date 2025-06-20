import { useState } from "react";
import Button from "../UI-components/Button/button";
import "../../App.css";
const steps = [
  {
    title: "Land Acquisition & Verification",
    content:
      "Each property undergoes rigorous due diligence, including legal and regulatory compliance checks. Verified documentation is attached to each token’s metadata and accessible on the token’s detail page.",
  },
  {
    title: "Asset Valuation",
    content:
      "Asset value is determined using industry-standard real estate appraisal methodologies, enhanced by proprietary survey and data analysis tools. This valuation informs the token’s backing ratio and total supply issuance.",
  },
  {
    title: "On-Chain Registration",
    content:
      "Once verified, asset data is recorded in our off-chain registry and immutably logged on the blockchain. This ensures transparent provenance and auditable proof-of-ownership.",
  },
  {
    title: "Token Generation",
    content:
      "Upon successful registration, the system programmatically mints tokens representing fractionalized economic rights to the underlying asset. These tokens are cryptographically linked to the verified property metadata.",
  },
  {
    title: "DeFi Integration",
    content:
      "Tokens are listed on our decentralized marketplace and become available for trading. Users can hold, stake, exchange, or sell tokens through both the marketplace and integrated peer-to-peer escrow systems, enabling liquidity and value realization.",
  },
];

function HowItWorks() {
  const [active, setIsActive] = useState(steps?.[0]?.title || "");
  const [activeStep, setActiveStep] = useState(0);

  return (
    <div className="relative text-white bg-[#00020b] py-20 px-4 sm:px-6 lg:px-16 relative">
      <div className="max-w-7xl mx-auto flex flex-col items-center justify-center mb-10">
        <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-semibold text-[#C8CBCC] mb-4">
          Land Tokenization Process
        </h2>
        <p className=" text-center pt-5 text-base sm:text-lg lg:text-[24px] font-medium text-[#7A8187] leading-relaxed max-w-xl">
          See how real-world land assets are transformed into on-chain value
          through our innovative protocol.
        </p>
      </div>
      <div className="hidden lg:flex lg:items-center lg:justify-center lg:m-20 bg-[#1F2937] lg:p-4 lg:rounded-xl lg:shadow-xl lg:shadow-black/70 lg:space-x-4">
        {steps.map((step, index) => (
          <Button
            key={step.title}
            style={`
        px-6 py-3 rounded-lg text-sm font-medium transition-all duration-300 ease-in-out
        ${
          active === step.title
            ? "bg-[#5C532D] text-white shadow-md shadow-[#5C532D]"
            : "bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white"
        }
      `}
            onClick={() => {
              setIsActive(step.title);
              setActiveStep(index);
            }}
            loading={false}
            isDisabled={false}
          >
            {step.title}
          </Button>
        ))}
      </div>

      <div className="container max-w-7xl py-16 right-[200px] m-auto slider-container ">
        <div className="slider-matrix">
          <div className="flex justify-between items-center content-center  slider-elements">
            {steps.map(({ title, content }, index) => (
              <div
                onClick={() => setIsActive(title)}
                key={title}
                className={`
          ${
            active === title ? "bg-[#1F2937]" : "bg-[#1F2937]"
          } flex flex-col justify-center items-start
          text-white p-8 min-h-[300px] shadow-xl shadow-black/70 rounded-2xl 
          transition-all duration-300 ease-in-out
         cursor-pointer max-w-4xl m-auto w-full`}
              >
                <div>
                  <h2 className="text-2xl font-bold mb-2">{title}</h2>
                  <p className="text-md leading-relaxed w-[350px]">{content}</p>
                </div>
                <div></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default HowItWorks;
