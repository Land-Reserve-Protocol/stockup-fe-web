function Roadmap() {
  return (
    <section className="bg-[#00020b] text-white py-24 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="mb-20 text-center max-w-3xl mx-auto px-4">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold mb-4">
            Protocol Roadmap
          </h2>
          <p className="text-base sm:text-lg text-[#7A8187]">
            Our strategic plan for the development and expansion of the Land
            Reserve ecosystem.
          </p>
        </div>

        {/* Timeline Section */}
        <div className="relative border-l-4 border-green-500 pl-6 sm:pl-10 space-y-20">
          {[
            {
              phase: "Phase 1: Foundation",
              date: "Q2 2025",
              points: [
                "Protocol architecture development",
                "Smart contract auditing",
                "Initial land acquisition framework",
              ],
              completed: false,
            },
            {
              phase: "Phase 2: Launch",
              date: "Q4 2025",
              points: [
                "Token generation event",
                "Initial land tokenization",
                "Market Place listings and liquidity pools",
              ],
              completed: false,
            },
            {
              phase: "Phase 3: Expansion",
              date: "Q2 2026",
              points: [
                "Cross-chain integration",
                "Lending protocol launch",
                "DAO governance activation",
              ],
              completed: false,
            },
            {
              phase: "Phase 4: Ecosystem",
              date: "2026",
              points: [
                "Real-world asset integration partners",
                "Land Reserve Index Fund",
                "Institutional adoption framework",
              ],
              completed: false,
            },
          ].map((item, idx) => (
            <div key={idx} className="relative">
              {/* Timeline Dot */}
              {/* <div className="absolute -left-5 sm:-left-6 top-2 w-6 h-6 flex items-center justify-center bg-green-500 text-black rounded-full z-10 text-sm font-bold">
                {item.completed ? "✓" : "•"}
              </div> */}

              {/* Card */}
              <div className="bg-[#0e1a2d] rounded-lg shadow-md p-6 md:p-8 w-full">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                  <h3 className="text-xl sm:text-2xl font-semibold text-[#D4AF37]">
                    {item.phase}
                  </h3>
                  <p className="text-sm text-gray-400 mt-1 sm:mt-0">
                    {item.date}
                  </p>
                </div>
                <ul className="list-disc list-inside mt-4 text-gray-100 space-y-1 text-base leading-relaxed">
                  {item.points.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Roadmap;
