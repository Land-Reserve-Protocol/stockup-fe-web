import type { ButtonProps } from "../../../common/types/componentTypes";

function Button({
  style = "",
  onClick,
  text,
  loading = false,
  isDisabled = false,
  children,
}: ButtonProps) {
  const baseStyles = `
    rounded-[8px]
    text-center 
    flex justify-center items-center 
    font-bold text-[16px] leading-[24px] 
    transition-all duration-200 ease-in-out
    cursor-pointer
    disabled:bg-[#f1f1f1] 
    disabled:text-[#9ca3af]
    disabled:cursor-not-allowed
  `;

  return (
    <button
      className={`${baseStyles} ${style}`}
      disabled={loading || isDisabled}
      onClick={onClick}
    >
      {text || children}
    </button>
  );
}

export default Button;
