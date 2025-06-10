import imgl from "../../assets/lrp.png";

function HowItWorks() {
  return (
    <div className="text-white min-h-[100vh] w-[100vw] pt-[150px] bg-[#00020b]">
      <div className="w-[1440px] h-full flex justify-between m-auto items-center content-center gap-x-[60px]">
        {/* Left Side: Text Content */}
        <div className="w-[60%] space-y-[30px]">
          <div>
            <p className="text-[34px] font-semibold text-[#C8CBCC] mb-[20px]">
              Land Tokenization Process
            </p>
            <p className="text-[24px] font-medium text-[#7A8187] mb-[40px] w-[606px] leading-relaxed">
              See how real-world land assets are transformed into on-chain value
              through our innovative protocol.
            </p>
          </div>

          {/* Steps */}
          {[
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
          ].map((step, index) => (
            <div
              key={index}
              className="flex items-start hover:bg-[#1F2937] transition-colors duration-300 rounded-[12px] p-[12px] space-x-[20px]"
            >
              <div className="w-[35px] h-[35px] min-w-[35px] rounded-full bg-[#D4AF37] text-[#111827] flex justify-center items-center font-bold">
                {index + 1}
              </div>
              <div className="w-[90%]">
                <div className="text-[20px] text-[#C8CBCC] font-medium mb-[10px]">
                  {step.title}
                </div>
                <div className="text-[17px] text-[#7A8187] leading-[1.6]">
                  {step.content}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Right Side: Image */}
        <div className="h-[800px] w-[40%] flex justify-center items-center">
          <img src={imgl} className="h-[700px] w-full object-contain" />
        </div>
      </div>
    </div>
  );
}

export default HowItWorks;
