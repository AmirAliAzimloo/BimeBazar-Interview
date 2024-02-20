import * as yup from "yup";

import validateNationalCode from "@/utils/validateNationalCode";
import errors from "@/common/errors";

export const completionOrderSchema = yup.object({
  nationalId: yup
    .string()
    .required(errors.required)
    .test({
      name: "national_code_regex",
      test: function (value: any) {
        if (value && !validateNationalCode(value)) {
          return false;
        }
        return true;
      },
      message: errors.nationalId,
    }),
  phoneNumber: yup
    .string()
    .required(errors.required)
    .min(10, errors.phoneNumber.min)
    .max(11, errors.phoneNumber.max)
    .matches(/^(?:0|(?:(?:(?!\+98|98)[0-9]{2})))?9[0-9]{9}$/, errors.phoneNumber.format),
  addressId: yup.array(),
});
