import { useRef, useState } from "react";
import type { dropdownProps } from "../../common/types/componentTypes";
import Loader from "../loader";
import useClickOutside from "../../hooks/useClickOutside/useClickoutside.hook";

function Dropdown({
  style,
  options,
  onSelect,
  loading,
  isDisabled,
  selectedOption,
}: dropdownProps) {
  const [showOptions, setShowOptions] = useState<boolean | boolean>(false);
  const dropdownRef = useRef(null as any);

  useClickOutside(dropdownRef, () => {
    setShowOptions(false);
  });

  return (
    <div>
      <div
        className={`${style} relative inline-block text-left`}
        ref={dropdownRef}
      >
        <div>
          <button
            type="button"
            className="inline-flex w-56 justify-between rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500"
            id="menu-button"
            aria-expanded="true"
            aria-haspopup="true"
            onClick={() => setShowOptions(!showOptions)}
            disabled={loading || isDisabled}
          >
            {`${selectedOption?.label || "Select"}`}
            <svg
              className="-mr-1 ml-2 h-5 w-5"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
        {showOptions && options?.length > 0 ? (
          <div>
            <div
              className="absolute left-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="menu-button"
              tabIndex={-1}
            >
              {!loading ? (
                options.map((opt) => (
                  <button
                    key={opt?.value}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left rounded-[8px]"
                    role="menuitem"
                    onClick={() => {
                      console.log("opt", selectedOption);
                      onSelect(opt);
                    }}
                  >
                    {opt?.icon}
                    {opt?.label}
                  </button>
                ))
              ) : (
                <Loader size={30} color="#1E1E1E" />
              )}
            </div>
          </div>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}

export default Dropdown;
