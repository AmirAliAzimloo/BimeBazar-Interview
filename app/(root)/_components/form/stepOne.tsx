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
import Button from "@/components/fields/button";
import AddressList from "../address/list";

const StepOne = () => {
  //* react states
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [showAddresses, setShowAddresses] = useState(false);

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
    <>
      <form className="pt-4 pb-8 " onSubmit={handleSubmit(onSubmit)}>
        {/* //! - ! pohone & national_code */}
        <div className="flex flex-col gap-7">
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
        {/* //! - ! address */}
        <div className="mt-8">
          <Head
            title="آدرس جهت درج روی بیمه نامه"
            titleClass="font-DanaBold text-lg"
          />
          <p className="pt-4 pb-6 font-DanaRegular text-sm">
            لطفا آدرسی را که می خواهید روی بیمه نامه درج شود، وارد کنید.
          </p>

          <Button
            fullWidth
            type="button"
            className="bg-custm-yellow text-black"
            onClick={() => setShowAddresses(true)}
          >
            انتخاب از آدرس های من
          </Button>
        </div>
        {/* //! - ! submitter */}
        <div className="pt-8 flex justify-end ">
          <Button type="submit" className="w-[140px]">
            تایید و ادامه
          </Button>
        </div>
      </form>
      {
        showAddresses && (<AddressList onClose={()=>setShowAddresses(false)}  />)
      }
    </>
  );
};

export default StepOne;
