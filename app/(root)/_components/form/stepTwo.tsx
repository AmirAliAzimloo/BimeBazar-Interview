import Button from "@/components/fields/button";
import { Dispatch, SetStateAction } from "react";

interface StepTwoProps {
  setStep: Dispatch<SetStateAction<number>>;
}

const StepTwo: React.FC<StepTwoProps> = ({ setStep }) => {
  return (
    <div className="min-h-[360px] flex flex-col justify-between" >
      <h2 className="text-custom-green font-DanaBold text-xl/[34px]">
        اطلاعات شما با موفقیت ثبت شد.
      </h2>

      <div className="flex justify-end" >
      <Button type="button" className="w-[140px]  " onClick={() => setStep(1)}>
        بازگشت
      </Button>
      </div>
    </div>
  );
};

export default StepTwo;
