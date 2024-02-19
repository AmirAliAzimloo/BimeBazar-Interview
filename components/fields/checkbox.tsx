"use client";

import { cn } from "@/utils/cn";

interface CheckBoxProps {
  label: string;
  id: number;
  isChecked: boolean;
  onChange: (id: number, isChecked: boolean) => void;
  labelClassName?: string;
}

const CheckBox: React.FC<CheckBoxProps> = ({
  label,
  id,
  isChecked,
  onChange,
  labelClassName,
}) => {
  return (
    <>
      <div className="flex items-center mb-2">
        <input
          id={label}
          key={id}
          type="radio"
          checked={isChecked}
          onChange={(event) => onChange(id, !isChecked)}
          value={`${id}-${label}`}
          className="
          w-6
          h-6
          outline-none
          rounded-full
          form-radio
        bg-gray-100 
        border-2
        border-custom-zinc  
        "
        />
        <label
        htmlFor={label}
          className={cn(
            "ms-3  font-DanaMedium text-black",
            labelClassName
          )}
        >
          {label}
        </label>
      </div>
    </>
  );
};

export default CheckBox;
