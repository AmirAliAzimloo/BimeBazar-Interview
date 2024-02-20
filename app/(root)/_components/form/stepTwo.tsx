import Button from "@/components/fields/button";
import { setStateType } from "@/types/react";

interface StepTwoProps {
  setStep: setStateType<number>;
}

const StepTwo: React.FC<StepTwoProps> = ({ setStep }) => {
  return (
    <div className="min-h-[347px] flex flex-col justify-between" >
      <h2 className="text-green-500 font-DanaBold text-xl/[34px]">
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
