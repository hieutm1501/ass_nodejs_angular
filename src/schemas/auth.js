import joi from "joi";

export const signupSchema = joi.object({
    name: joi.string().regex(/^[\p{L}\s'-]+$/u).regex(/^[A-Z][a-zA-Z\s]*$/).required().messages({
        "string.empty": "Name không được để trống",
        "any.required": "Trường name là bắt buộc",
        "string.pattern.base": "Họ và tên phải viết hoa và đúng định dạng không dấu",
    }),
    email: joi.string().email().required().messages({
        "string.email": "Email không đúng định dạng",
        "string.empty": "Email không được để trống",
        "any.required": "Trường email là bắt buộc",
    }),
    password: joi.string().regex(/^\S+$/).regex(/^(?=.*[A-Za-z])(?=.*\W)/).required().min(6).messages({
        "string.min": "Password phải có ít nhất {#limit} ký tự",
        "string.pattern.base": "Mật khẩu không được dấu cách",
        "string.empty": "Password không được để trống",
        "any.required": "Trường Password là bắt buộc",
        "string.pattern.base": "Mật khẩu phải chứa ít nhất một ký tự chữ cái và một ký tự đặc biệt",
    }),
    confirmPassword: joi.string().regex(/^\S+$/).valid(joi.ref("password")).required().messages({
        "any.only": "Password không khớp",
        "any.required": "Trường confirm password là bắt buộc",
        "string.pattern.base": "Mật khẩu không được dấu cách",
    }),
});

export const signinSchema = joi.object({

    email: joi.string().regex(/^\S+$/).email().required().messages({
        "string.email": "Email không đúng định dạng",
        "string.pattern.base": "Mật khẩu không được dấu cách",
        "string.empty": "Email không được để trống",
        "any.required": "Trường email là bắt buộc",

    }),
    password: joi.string().regex(/^\S+$/).required().min(6).messages({
        "string.min": "Password phải có ít nhất {#limit} ký tự",
        "string.pattern.base": "Mật khẩu không được dấu cách",
        "string.empty": "Password không được để trống",
        "any.required": "Trường Password là bắt buộc",
    }),

});