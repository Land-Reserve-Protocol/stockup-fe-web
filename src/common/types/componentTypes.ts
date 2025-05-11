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

export interface TextBoxProps {
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

export interface DatePickerProps {
  value: Date | string;
  onChange: (date: Date) => void;
  minDate?: Date;
  maxDate?: Date;
  placeholder?: string;
  format?: string; // e.g., 'yyyy-MM-dd' or 'MMM d, yyyy'
  disabled?: boolean;
  locale?: string; // e.g., 'en-US', 'fr-FR'
  name?: string;
  id?: string;
  className?: string;
  required?: boolean;
  autoFocus?: boolean;
  showTimeSelect?: boolean;
  timeFormat?: string; // e.g., 'HH:mm'
  showTodayButton?: boolean;
  readOnly?: boolean;
  highlightDates?: Date[];
  inline?: boolean;
  customInput?: React.ReactNode;
  dayClassName?: (date: Date) => string;
  excludeDates?: Date[];
  includeDates?: Date[];
  calendarStartDay?: number; // 0 = Sunday, 1 = Monday, etc.
  onMonthChange?: (month: Date) => void;
}
