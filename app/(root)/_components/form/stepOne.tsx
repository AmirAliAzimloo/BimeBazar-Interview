"use client";

//* pakages
import * as yup from "yup";
import { useState } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { SubmitHandler, useForm } from "react-hook-form";

//* locales
import Input from "@/components/fields/input";
import { completionSchema } from "@/schemas/order";
import Head from "./head";

const StepOne = () => {
  //* react states
  const [isLoading, setIsLoading] = useState<boolean>(false);

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
      addressId: "",
    },
    resolver: yupResolver(completionSchema),
  });

  //! post data to back end
  const onSubmit: SubmitHandler<
    yup.InferType<typeof completionSchema>
  > = async (formData) => {
    try {
      setIsLoading(true);
      console.log(formData);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form className="pt-4 pb-8 " onSubmit={handleSubmit(onSubmit)}>
      {/* pohone & national_code */}
      <div className="space-y-[28px]">
        <Input
          type="number"
          id="nationalId"
          register={register}
          errors={errors}
          disabled={isLoading}
          placeholder="کد ملی"
        />

        <Input
          type="number"
          id="phoneNumber"
          register={register}
          errors={errors}
          disabled={isLoading}
          placeholder="شماره تلفن همراه"
        />
      </div>
      {/* address */}
      <div className="mt-8">
        <Head
          title="آدرس جهت درج روی بیمه نامه"
          titleClass="font-DanaBold text-lg"
        />
        <p className="pt-4 pb-6 font-DanaRegular text-sm">
          لطفا آدرسی را که می خواهید روی بیمه نامه درج شود، وارد کنید.
        </p>

      </div>
    </form>
  );
};

export default StepOne;
