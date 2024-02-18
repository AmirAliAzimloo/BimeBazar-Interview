import { FieldErrors, UseFormRegister } from "react-hook-form";

import { cn } from "@/utils/cn";

interface InputProps {
  id: string;
  errors?: FieldErrors;
  type: string;
  register: UseFormRegister<any>;
  disabled: boolean;
  placeholder: string;
}

const Input: React.FC<InputProps> = ({
  id,
  errors,
  type,
  register,
  disabled,
  placeholder,
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
          border-custm-zinc-500
          outline-none
          form-input
          block
          w-full
          p-3
          font-DanaMedium
          text-sm
          placeholder:text-custm-zinc-700
          `,
            errors?.[id] && "focus:ring-rose-500",
            errors?.[id] && "ring-rose-500",
            disabled && "opacity-50 cursor-default"
          )}
        />

        {errors?.[id] && (
          <div
            className={cn(
              "block text-sm font-medium leading-6 text-gray-900",
              errors?.[id] && "text-rose-500",
              disabled && "opacity-50 cursor-default"
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
