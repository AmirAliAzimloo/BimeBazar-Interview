import * as yup from "yup";

import validateNationalCode from "@/utils/validateNationalCode";

export const completionSchema = yup.object({
  nationalId: yup.string().test({
    name: "national_code_regex",
    test: function (value: any) {
      if (value && !validateNationalCode(value)) {
        return false;
      }
      return true;
    },
    message: "کد ملی فقط عدد و ده کاراکتر و صحیح باید باشد",
  }),
  phoneNumber: yup
    .string()
    .required("این فیلد اجباری است")
    .min(10, "کم تر از 10 کاراکتر صحیح نمی باشد")
    .max(11, "بیشتر از 11 کاراکتر صحیح نمی باشد")
    .matches(/^(?:(?:\+|00)?98|0)?9[0-9]{9}$/,"فرمت را صحیح وارد کنید"),
  addressId: yup.string(),
});
