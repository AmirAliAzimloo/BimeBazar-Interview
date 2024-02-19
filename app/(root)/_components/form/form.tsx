"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import Wrapper from "@/components/ui/wrapper";
import StepOne from "./stepOne";
import StepTwo from "./stepTwo";
import { completionSchema } from "@/schemas/order";

const Form = () => {
  const [step, setStep] = useState(1);

  //* base form
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm<yup.InferType<typeof completionSchema>>({
    defaultValues: {
      nationalId: "",
      phoneNumber: "",
      addressId: [],
    },
    resolver: yupResolver(completionSchema),
  });

  return (
    <Wrapper className="py-8">
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
    </Wrapper>
  );
};

export default Form;
