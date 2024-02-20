"use client";
//* pakages
import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

//* locales
import StepOne from "./stepOne";
import StepTwo from "./stepTwo";
import { completionOrderSchema } from "@/schemas/order";
import { resolverType } from "@/types/form";

const Form = () => {
  const [step, setStep] = useState<number>(1);

  //* base form
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm< resolverType<typeof completionOrderSchema> >({
    defaultValues: {
      nationalId: "",
      phoneNumber: "",
      addressId: [],
    },
    resolver: yupResolver(completionOrderSchema),
  });

  return (
    <>
      {step == 1 ? (
        <StepOne
          setStep={setStep}
          register={register}
          errors={errors}
          handleSubmit={handleSubmit}
          setValue={setValue}
          watch={watch}
        />
      ) : null}
      {step == 2 ? <StepTwo setStep={setStep} /> : null}
    </>
  );
};

export default Form;
