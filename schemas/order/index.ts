import * as yup from "yup";

import validateNationalCode from "@/utils/validateNationalCode";

export const completionSchema = yup.object({
  nationalId: yup
    .string()
    .required("این قسمت نمی تواند خالی باشد")
    .test({
      name: "national_code_regex",
      test: function (value: any) {
        if (value && !validateNationalCode(value)) {
          return false;
        }
        return true;
      },
      message: "کد ملی وارد شده معتبر نیست",
    }),
  phoneNumber: yup
    .string()
    .required("این قسمت نمی تواند خالی باشد")
    .min(10, "کم تر از 10 کاراکتر صحیح نمی باشد")
    .max(11, "بیشتر از 11 کاراکتر صحیح نمی باشد")
    .matches(/^(?:0|(?:(?:(?!\+98|98)[0-9]{2})))?9[0-9]{9}$/, "فرمت را صحیح وارد کنید"),
  addressId: yup.string(),
});
