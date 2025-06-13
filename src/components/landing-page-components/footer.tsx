import Logo from "../../assets/navabr assets/logo.svg";
import { FaDiscord, FaTwitter, FaTelegram } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-[#00020b] text-white pt-16 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 pb-10">
        {/* Logo and Description */}
        <div>
          <div className="flex items-center mb-4">
            <img src={Logo} className="w-5 h-5" alt="Logo" />
            <p className="ml-3 text-lg font-bold">Land Reserve Protocol</p>
          </div>
          <p className="text-gray-400 text-sm mb-4 max-w-xs">
            Bridging real-world assets with decentralized finance through
            innovative land tokenization.
          </p>
          <div className="flex gap-4 text-gray-400 text-lg">
            <FaDiscord className="hover:text-white cursor-pointer" />
            <FaTwitter className="hover:text-white cursor-pointer" />
            <FaTelegram className="hover:text-white cursor-pointer" />
          </div>
        </div>

        {/* Columns */}
        {[
          {
            title: "Protocol",
            items: ["Documentation", "White Paper", "Security", "Audits"],
          },
          {
            title: "Community",
            items: ["Governance", "Forum", "Blog", "Newsletter"],
          },
          {
            title: "Support",
            items: ["Help Center", "Contact", "Terms", "Privacy"],
          },
        ].map((section, idx) => (
          <div key={idx}>
            <h3 className="text-md font-semibold mb-4">{section.title}</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              {section.items.map((item, i) => (
                <li key={i} className="hover:text-white cursor-pointer">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Bottom Note */}
      <div className="border-t border-gray-700 text-center py-6 text-sm text-gray-500">
        © 2024 Land Reserve Protocol. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
