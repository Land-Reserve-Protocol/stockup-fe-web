import Logo from "../../assets/navabr assets/logo.svg";
function Navbar() {
  return (
    <div className="bg-[#192D1A] w-full h-[60px] m-auto">
      <div className="w-[1440px] m-auto h-full flex items-center content-center justify-between">
        <div className="flex items-center content-center">
          <img src={Logo} className="w-[20px] h-[20px]" />
          <p className="ml-[10px]">Land Reserve Protocol</p>
        </div>
        <nav className="flex w-[500px] justify-between items-center h-full text-[#9B9FA5]">
          <div>Features</div>
          <div>Tokenization</div>
          <div>How it works</div>
          <div>Roadmap</div>
        </nav>
        <div className="h-[37px] w-[150px] bg-[#D2AF38] rounded-[9px] flex items-center justify-center !text-[#192D1A]">
          Launch App
        </div>
      </div>
    </div>
  );
}

export default Navbar;
