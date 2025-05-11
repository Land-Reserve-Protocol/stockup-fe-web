import type { TextBoxProps } from "../../common/types/componentTypes";

function TextBox({
  placeholder,
  onChange,
  value,
  style,
  isDisabled,
  error = true,
  label,
  errMessage,
  labelStyle,
}: TextBoxProps) {
  return (
    <div className="flex flex-col mb-4">
      <div
        className={` font-[700] text-[#1e1e1e] text-left mb-2 ${labelStyle}`}
      >
        {label}
      </div>
      <textarea
        className={`border border-gray-300 rounded-md p-2 bg-[white] text-[#1e1e1e] h-[156px] ${style}`}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        disabled={isDisabled}
      />
      {error && (
        <div className="text-[#EE4B2B] text-md mt-1">{errMessage} </div>
      )}
    </div>
  );
}

export default TextBox;
