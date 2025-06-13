import imgl from "../../assets/lrp.png";

function HowItWorks() {
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

  return (
    <div className="text-white bg-[#00020b] py-20 px-4 sm:px-6 lg:px-16">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 items-center">
        {/* Text Section */}
        <div className="lg:w-3/5 space-y-8">
          <div>
            <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-semibold text-[#C8CBCC] mb-4">
              Land Tokenization Process
            </h2>
            <p className="text-base sm:text-lg lg:text-[24px] font-medium text-[#7A8187] leading-relaxed max-w-xl">
              See how real-world land assets are transformed into on-chain value
              through our innovative protocol.
            </p>
          </div>

          {/* Steps */}
          {steps.map((step, index) => (
            <div
              key={index}
              className="flex items-start hover:bg-[#1F2937] transition-colors duration-300 rounded-[12px] p-3 sm:p-4 space-x-4"
            >
              <div className="min-w-[35px] h-[35px] rounded-full bg-[#D4AF37] text-[#111827] flex justify-center items-center font-bold">
                {index + 1}
              </div>
              <div>
                <h3 className="text-base sm:text-lg lg:text-[20px] text-[#C8CBCC] font-medium mb-2">
                  {step.title}
                </h3>
                <p className="text-sm sm:text-base lg:text-[17px] text-[#7A8187] leading-[1.6]">
                  {step.content}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Image Section */}
        <div className="lg:w-2/5 w-full flex justify-center items-center">
          <img
            src={imgl}
            alt="Land Reserve Process"
            className="w-full h-auto max-h-[700px] object-cover rounded-xl"
          />
        </div>
      </div>
    </div>
  );
}

export default HowItWorks;
