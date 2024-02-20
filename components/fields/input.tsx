import { FieldErrors, UseFormRegister } from "react-hook-form";

import { cn } from "@/utils/cn";
import { registerType } from "@/types/form";

interface InputProps {
  id: string;
  errors?: FieldErrors;
  type: string;
  register: registerType<any>;
  disabled: boolean;
  placeholder: string;
  value : string | number | []
}

const Input: React.FC<InputProps> = ({
  id,
  errors,
  type,
  register,
  disabled,
  placeholder,
  value
}) => {
  return (
    <>
      <div >
        <input
          type={type}
          id={id}
          disabled={disabled}
          placeholder={placeholder}
          {...register(id)}
          className={cn(
            `
          border
          border-zinc-500
          outline-none
          form-input
          block
          w-full
          p-3
          font-DanaMedium
          text-sm
          placeholder:text-zinc-700
          `,
            errors?.[id] && "border-red-600",
            errors?.[id] && "ring-rose-500",
            disabled && "opacity-50 cursor-default"
          )}
          value={value}
        />

        {errors?.[id] && (
          <span
            className={cn(
              "block text-xs font-DanaMedium text-black mt-1",
              errors?.[id] && "text-red-600",
              disabled && "opacity-50 "
            )}
          >
            {(errors as Record<string, any>)[id]?.message}
          </span>
        )}
      </div>
    </>
  );
};

export default Input;
