import { FieldErrors, UseFormRegister } from "react-hook-form";

import { cn } from "@/utils/cn";

interface InputProps {
  id: string;
  errors?: FieldErrors;
  type: string;
  register: UseFormRegister<any>;
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
          border-custom-zinc-500
          outline-none
          form-input
          block
          w-full
          p-3
          font-DanaMedium
          text-sm
          placeholder:text-custom-zinc-700
          `,
            errors?.[id] && "border-custom-red",
            errors?.[id] && "ring-rose-500",
            disabled && "opacity-50 cursor-default"
          )}
          value={value}
        />

        {errors?.[id] && (
          <div
            className={cn(
              "block text-xs font-DanaMedium text-black mt-1",
              errors?.[id] && "text-custom-red",
              disabled && "opacity-50 "
            )}
          >
            {(errors as Record<string, any>)[id]?.message}
          </div>
        )}
      </div>
    </>
  );
};

export default Input;
