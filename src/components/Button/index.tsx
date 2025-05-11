import type { ButtonProps } from "../../common/types/componentTypes";

function Button({ style, onClick, text, loading, isDisabled }: ButtonProps) {
  return (
    <button
      className={`${style} bg-[#f1f1f1] rounded-[8px]`}
      disabled={loading || isDisabled}
      onClick={() => onClick()}
    >
      {!loading ? text : <div className="loader"></div>}
    </button>
  );
}

export default Button;
