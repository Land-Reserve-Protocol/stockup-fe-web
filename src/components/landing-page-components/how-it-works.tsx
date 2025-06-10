import imgl from "../../assets/lrp.png";
function HowItWorks() {
  return (
    <div className="text-white min-h-[100vh] w-[100vw] pt-[150px] bg-[#00020b]">
      <div className="w-[1440px] h-full flex justify-between m-auto items-center content-center">
        <div className="w-[60%]">
          <div>
            <p className="text-[34px] font-semibold text-[#C8CBCC] mb-[20px]">
              Land Tokenization Process
            </p>
            <p className="text-[24px] font-semibold text-[#7A8187] mb-[40px] w-[606px]">
              See how real-world land assets are transformed into on-chain value
              through our innovative protocol.
            </p>

            {/* Step 1 */}
            <div className="flex mb-[30px]">
              <div className="w-[35px] h-[35px] rounded-full bg-[#D4AF37] text-[#111827] flex justify-center items-center mr-[20px]">
                1
              </div>
              <div className="w-[90%]">
                <div className="text-[20px] text-[#C8CBCC] mb-[15px]">
                  Land Acquisition & Verification
                </div>
                <div className="text-[17px] text-[#7A8187]">
                  Each property undergoes rigorous due diligence, including
                  legal and regulatory compliance checks. Verified documentation
                  is attached to each token’s metadata and accessible on the
                  token’s detail page.
                </div>
              </div>
            </div>

            {/* Step 2 */}
            <div className="flex mb-[30px]">
              <div className="w-[35px] h-[35px] rounded-full bg-[#D4AF37] text-[#111827] flex justify-center items-center mr-[20px]">
                2
              </div>
              <div className="w-[90%]">
                <div className="text-[20px] text-[#C8CBCC] mb-[15px]">
                  Asset Valuation
                </div>
                <div className="text-[17px] text-[#7A8187]">
                  Asset value is determined using industry-standard real estate
                  appraisal methodologies, enhanced by proprietary survey and
                  data analysis tools. This valuation informs the token’s
                  backing ratio and total supply issuance.
                </div>
              </div>
            </div>

            {/* Step 3 */}
            <div className="flex mb-[30px]">
              <div className="w-[35px] h-[35px] rounded-full bg-[#D4AF37] text-[#111827] flex justify-center items-center mr-[20px]">
                3
              </div>
              <div className="w-[90%]">
                <div className="text-[20px] text-[#C8CBCC] mb-[15px]">
                  On-Chain Registration
                </div>
                <div className="text-[17px] text-[#7A8187]">
                  Once verified, asset data is recorded in our off-chain
                  registry and immutably logged on the blockchain. This ensures
                  transparent provenance and auditable proof-of-ownership.
                </div>
              </div>
            </div>

            {/* Step 4 */}
            <div className="flex mb-[30px]">
              <div className="w-[35px] h-[35px] rounded-full bg-[#D4AF37] text-[#111827] flex justify-center items-center mr-[20px]">
                4
              </div>
              <div className="w-[90%]">
                <div className="text-[20px] text-[#C8CBCC] mb-[15px]">
                  Token Generation
                </div>
                <div className="text-[17px] text-[#7A8187]">
                  Upon successful registration, the system programmatically
                  mints tokens representing fractionalized economic rights to
                  the underlying asset. These tokens are cryptographically
                  linked to the verified property metadata.
                </div>
              </div>
            </div>

            {/* Step 5 */}
            <div className="flex mb-[30px]">
              <div className="w-[35px] h-[35px] rounded-full bg-[#D4AF37] text-[#111827] flex justify-center items-center mr-[20px] text-sm leading-none font-bold">
                5
              </div>
              <div className="w-[90%]">
                <div className="text-[20px] text-[#C8CBCC] mb-[15px]">
                  DeFi Integration
                </div>
                <div className="text-[17px] text-[#7A8187]">
                  Tokens are listed on our decentralized marketplace and become
                  available for trading. Users can hold, stake, exchange, or
                  sell tokens through both the marketplace and integrated
                  peer-to-peer escrow systems, enabling liquidity and value
                  realization.
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Placeholder for illustration, image, or animation */}
        <div className="h-[800px] w-[50%]  flex justify-center items-center ">
          <img src={imgl} className="h-[700px] w-full" />
        </div>
      </div>
    </div>
  );
}

export default HowItWorks;
