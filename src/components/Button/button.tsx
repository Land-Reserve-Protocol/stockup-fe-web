import type { ButtonProps } from "../../common/types/componentTypes";
import Loader from "../loader";

function Button({
  style,
  onClick,
  text,
  loading,
  isDisabled,
  children,
}: ButtonProps) {
  return (
    <button
      className={`${style} disabled:bg-[#f1f1f1] disabled:cursor-not-allowed bg-[#1e1e1e] rounded-[8px] 
      text-center flex justify-center items-center text-[#1e1e1e] 
      font-[700] text-[16px] leading-[24px] cursor-pointer hover:bg-[#e0e0e0] 
      transition-all duration-200 ease-in-out`}
      disabled={loading || isDisabled}
      onClick={() => onClick()}
    >
      {!loading ? text || children : <Loader size={24} color="#1E1E1E" />}
    </button>
  );
}

export default Button;
