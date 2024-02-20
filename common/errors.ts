const errors = Object.freeze({
    required : "این قسمت نمی تواند خالی باشد",
    phoneNumber : {
        min : "کم تر از 10 کاراکتر صحیح نمی باشد",
        max: "بیشتر از 11 کاراکتر صحیح نمی باشد",
        format: "فرمت را صحیح وارد کنید"
    },
    nationalId : "کد ملی وارد شده معتبر نیست"
});


export default errors;

