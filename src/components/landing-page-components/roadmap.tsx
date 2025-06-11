function Roadmap() {
  return (
    <div className="bg-[#00020b] text-white py-[100px] px-4">
      <div className="max-w-[1440px] mx-auto ">
        {/* Header Section */}
        <div className="mb-[60px] text-center w-[80%] mx-auto ">
          <h2 className="text-[36px] font-semibold mb-[10px]">
            Protocol Roadmap
          </h2>
          <p className="text-[18px] text-[#7A8187]">
            Our strategic plan for the development and expansion of the Land
            Reserve ecosystem.
          </p>
        </div>

        {/* Phases */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[50px] w-[80%] mx-auto  pl-[150px]">
          {/* Phase 1 */}
          <div>
            <h3 className="text-[24px] font-semibold text-[#D4AF37] mb-[20px]">
              Phase 1: Foundation
            </h3>
            <ul className="list-disc list-inside text-[#C8CBCC] space-y-2 text-[17px]">
              <li>Protocol architecture development</li>
              <li>Smart contract auditing</li>
              <li>Initial land acquisition framework</li>
            </ul>
          </div>

          {/* Phase 2 */}
          <div>
            <h3 className="text-[24px] font-semibold text-[#D4AF37] mb-[20px]">
              Phase 2: Launch
            </h3>
            <ul className="list-disc list-inside text-[#C8CBCC] space-y-2 text-[17px]">
              <li>Token Generation Event (TGE)</li>
              <li>Initial Coin Offering (ICO)</li>
              <li>DEX listing and liquidity pool deployment</li>
            </ul>
          </div>

          {/* Phase 3 */}
          <div>
            <h3 className="text-[24px] font-semibold text-[#D4AF37] mb-[20px]">
              Phase 3: Expansion
            </h3>
            <ul className="list-disc list-inside text-[#C8CBCC] space-y-2 text-[17px]">
              <li>Cross-chain integration</li>
              <li>Lending protocol launch</li>
              <li>DAO governance activation</li>
            </ul>
          </div>

          {/* Phase 4 */}
          <div>
            <h3 className="text-[24px] font-semibold text-[#D4AF37] mb-[20px]">
              Phase 4: Ecosystem
            </h3>
            <ul className="list-disc list-inside text-[#C8CBCC] space-y-2 text-[17px]">
              <li>Integration with real-world asset partners</li>
              <li>Launch of the Land Reserve Index Fund</li>
              <li>Institutional adoption and compliance framework</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Roadmap;
