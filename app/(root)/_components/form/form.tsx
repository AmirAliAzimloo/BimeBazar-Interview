"use client";

import { useState } from "react";
import Head from "./head";
import Wrapper from "@/components/ui/wrapper";
import StepOne from "./stepOne";

const Form = () => {

  const [step,setStep] = useState(1);

  return (
    <Wrapper
    className="py-8"
    >
      <Head 
      title="لطفا اطلاعات شخصی مالک خودرو را وارد کنید:"
      titleClass="text-base font-DanaRegular "
      />

      {
        step == 1 ? (<StepOne />) : null
      }

    </Wrapper>
  );
};

export default Form;
