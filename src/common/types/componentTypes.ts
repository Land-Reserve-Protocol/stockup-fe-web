export interface ButtonProps {
  style: string;
  onClick: () => void;
  text: string;
  loading: boolean;
  isDisabled: boolean;
}

export interface dropdownProps {
  style: string;
  options: { value: string | any; label: string | any }[];
  onSelect: (option: string) => void;
  loading: boolean;
  isDisabled: boolean;
  selectedOption: string;
}

export interface TextInputProps {
  type: string;
  placeholder: string;
  onChange: (value: string) => void;
  value: string;
  style: string;
  isDisabled: boolean;
  error: boolean;
  label: string;
  errMessage: string;
  labelStyle: string;
}
