function Roadmap() {
  return (
    <div className="bg-[#00020b] text-white py-[100px] px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="mb-14 text-center max-w-3xl mx-auto px-2">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-3">
            Protocol Roadmap
          </h2>
          <p className="text-base sm:text-lg text-[#7A8187]">
            Our strategic plan for the development and expansion of the Land
            Reserve ecosystem.
          </p>
        </div>

        {/* Phases Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 px-2">
          {[
            {
              phase: "Phase 1: Foundation",
              points: [
                "Protocol architecture development",
                "Smart contract auditing",
                "Initial land acquisition framework",
              ],
            },
            {
              phase: "Phase 2: Launch",
              points: [
                "Token Generation Event (TGE)",
                "Initial Coin Offering (ICO)",
                "DEX listing and liquidity pool deployment",
              ],
            },
            {
              phase: "Phase 3: Expansion",
              points: [
                "Cross-chain integration",
                "Lending protocol launch",
                "DAO governance activation",
              ],
            },
            {
              phase: "Phase 4: Ecosystem",
              points: [
                "Integration with real-world asset partners",
                "Launch of the Land Reserve Index Fund",
                "Institutional adoption and compliance framework",
              ],
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="bg-[#0a0f14] p-6 rounded-lg shadow-md ring-1 ring-[#1a1a1a]"
            >
              <h3 className="text-xl md:text-2xl font-semibold text-[#D4AF37] mb-4">
                {item.phase}
              </h3>
              <ul className="list-disc list-inside text-[#C8CBCC] space-y-2 text-[17px]">
                {item.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Roadmap;
