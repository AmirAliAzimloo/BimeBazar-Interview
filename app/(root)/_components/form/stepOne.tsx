"use client";

//* pakages
import * as yup from "yup";
import { Dispatch, SetStateAction, useState } from "react";
import {
  FieldErrors,
  SubmitHandler,
  UseFormHandleSubmit,
  UseFormRegister,
  UseFormSetValue,
  UseFormWatch,
  useForm,
} from "react-hook-form";
import toast from "react-hot-toast";

//* locales
import Head from "./head";
import Input from "@/components/fields/input";
import { completionSchema } from "@/schemas/order";
import Button from "@/components/fields/button";
import AddressList from "../address/list";
import { useAddnewOrderMutation } from "@/libs/redux/features/services/order";
import handelErrors from "@/utils/handelErrors";
import { rtkErrors } from "@/types";

interface StepOneProps {
  setStep: Dispatch<SetStateAction<number>>;
  register: UseFormRegister<any>;
  errors?: FieldErrors;
  handleSubmit: UseFormHandleSubmit<any>;
  setValue: UseFormSetValue<any>;
  watch : UseFormWatch<any>;
}

const StepOne: React.FC<StepOneProps> = ({
  setStep,
  register,
  errors,
  handleSubmit,
  setValue,
  watch
}) => {
  //* react states
  const [showAddresses, setShowAddresses] = useState(false);

  //! close address sheet
  const handelClose = () => {
    setShowAddresses(false);
  };

  //* watch form values
  const nationalIdWatch = watch("nationalId");
  const phoneNumberWatch = watch("phoneNumber");
  const addressIdWatch = watch("addressId");

  //! post data to back end

  //? rtk for post data
  const [addnewOrder, { isLoading }] = useAddnewOrderMutation();

  //? func for submit form
  const onSubmit: SubmitHandler<
    yup.InferType<typeof completionSchema>
  > = async (formData) => {
    try {
      console.log(formData);
      if (!formData.addressId?.[0]?.name) {
        toast.error("آدرس را انتخاب کنید");
        return;
      }

      await addnewOrder({
        nationalId: formData.nationalId,
        phoneNumber: formData.phoneNumber,
        addressId: formData.addressId?.[0]?.id,
      }).unwrap();

      toast.success("سفارش با موفقیت ثبت شد");
      setStep(2);
    } catch (error) {
      if ((error as rtkErrors)?.data?.errors?.length > 0) {
        handelErrors((error as rtkErrors).data.errors);
      } else {
        console.log(error);
      }
    }
  };

  return (
    <>
      <Head
        title="لطفا اطلاعات شخصی مالک خودرو را وارد کنید:"
        titleClass="text-base font-DanaRegular "
      />

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
            value={nationalIdWatch}
          />

          <Input
            type="number"
            id="phoneNumber"
            register={register}
            errors={errors}
            disabled={isLoading}
            placeholder="شماره تلفن همراه"
            value={phoneNumberWatch}
          />
        </div>
        {/* //! - ! address */}
        <div className="mt-8">
          <Head
            title="آدرس جهت درج روی بیمه نامه"
            titleClass="font-DanaBold text-base/[21.2px]"
          />
          {!!addressIdWatch?.[0]?.name ? (
            <>
              <h4 className="font-DanaMedium text-sm/[21.46px] pt-4">
                {addressIdWatch?.[0]?.name}
              </h4>
            </>
          ) : (
            <>
              <p className="pt-4 pb-6 font-DanaRegular text-sm">
                لطفا آدرسی را که می خواهید روی بیمه نامه درج شود، وارد کنید.
              </p>

              <Button
                fullWidth
                type="button"
                className="bg-custom-yellow text-black"
                onClick={() => setShowAddresses(true)}
              >
                انتخاب از آدرس های من
              </Button>
            </>
          )}
        </div>

        {/* //! - ! submitter */}
        <div className="pt-8 flex justify-end ">
          <Button disabled={isLoading} type="submit" className="w-[140px]">
            تایید و ادامه
          </Button>
        </div>
      </form>
      {showAddresses && (
        <AddressList setValue={setValue} onClose={handelClose} />
      )}
    </>
  );
};

export default StepOne;
