function Core() {
  const protocolFeatures = [
    {
      title: "🛠️ Not Just a Token—A Market",
      content:
        "$LND powers an entire trading ecosystem: Peer-to-peer land swaps, liquidity-backed land pools, synthetic real estate instruments, and collateral for borrowing, options, and perpetuals. It’s not a currency. It’s programmable land value—ready to be composed into vaults, strategies, and DeFi infrastructure.",
    },
    {
      title: "⚡ Real-Time Settlement. Permissionless Trade.",
      content:
        "Land used to be illiquid. Not anymore. $LND trades instantly, like any ERC-20. It can be staked, farmed, swapped, LP’d, and loaned—zero middlemen, zero paperwork, zero settlement lag. Where TradFi took 30 days, we take 3 seconds.",
    },

    {
      title: "🔗 Fully On-Chain Collateral",
      content:
        "The land isn’t theoretical. It’s titled, mapped, appraised, and held in verifiable trust. Land metadata is stored on-chain; valuations are oracle-fed and dynamically updated. Every token is traceable to the physical plots that back it. No fiction. No wrapped real estate vapor. Just proof-backed earth.",
    },
    {
      title: "🔁 Redeemable. Collateralizable. Stackable.",
      content:
        "Redeem $LND for stables via on-chain land valuation oracles. Use $LND as collateral in lending markets. Stake it in land yield vaults. Trade it on DEXs or AMMs built for real-world assets.",
    },
  ];
  return (
    <div className="flex items-center justify-center max-w-full lg:min-h-screen max-h_screen py-[150px] bg-[linear-gradient(to_top,_#00000090_10%,_#00000090_20%)]">
      <div className="flex flex-col justify-center items-center h-full px-4 sm:px-6 md:px-10 lg:px-16 max-w-[90rem] mx-auto gap-6 z-[50] relative ">
        <div className="grid lg:grid-cols-2 items-center gap-x-[100px] gap-y-[20px]">
          <h1 className="text-[48px] text-[#C8CBCC] w-full">
            A New Market Primitive:&nbsp;&nbsp;&nbsp;{" "}
            <div className="text-[#D2AF38] font-[600]">Land as Liquidity</div>
          </h1>
          <p className="lg:w-[608.5px] w-full">
            Land Reserve Protocol ($LND) isn’t just a token. It’s the foundation
            of a new on-chain economy—where real-world land is liquid,
            composable, and tradeable at scale. Every $LND token represents
            fractional ownership in a verified land reserve, collateralized and
            priced dynamically by market demand and asset-backed valuation
            models.
          </p>
        </div>
        <hr className="h-[1px] w-full bg-[#8A96A1] border-none" />
        <div className="w-full grid lg:grid-cols-4 gap-[30px]">
          {protocolFeatures.map(
            ({ title, content }: { title: string; content: string }) => (
              <div className="w-full space-y-[20px] ">
                <h1 className="text-[20px] font-[700] h-[50px] flex items-center text-[#C8CBCC]">
                  {title}
                </h1>
                <p className="text-[16px] text-[#8A96A1]">{content}</p>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
}

export default Core;
