import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import Logo from "../../assets/navabr assets/logo.svg";

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  const navItems = ["Features", "Tokenization", "How it works", "Roadmap"];

  return (
    <header className="bg-[#1F2937] fixed top-0 w-full z-[999] shadow-sm">
      <div className="max-w-7xl mx-auto px-6 h-[70px] flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <img src={Logo} className="w-5 h-5" alt="Land Reserve Logo" />
          <p className="ml-3 text-white font-semibold text-sm sm:text-base">
            Land Reserve Protocol
          </p>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-10 text-[#9B9FA5] text-sm">
          {navItems.map((item, i) => (
            <a
              href="#"
              key={i}
              className="hover:text-white transition duration-200"
            >
              {item}
            </a>
          ))}
        </nav>

        {/* Launch App Button */}
        <div className="hidden md:flex bg-[#D2AF38] text-[#192D1A] rounded-[9px] px-5 py-2 text-sm font-medium cursor-pointer hover:opacity-90">
          Launch App
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden text-white text-2xl cursor-pointer">
          {isMobileMenuOpen ? (
            <HiX onClick={toggleMenu} />
          ) : (
            <HiMenu onClick={toggleMenu} />
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-[#1F2937] px-6 py-4 space-y-4">
          {navItems.map((item, i) => (
            <a
              href="#"
              key={i}
              className="block text-[#9B9FA5] hover:text-white transition duration-200"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {item}
            </a>
          ))}
          <div className="bg-[#D2AF38] text-[#192D1A] rounded-[9px] px-5 py-2 text-sm font-medium text-center">
            Launch App
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;
