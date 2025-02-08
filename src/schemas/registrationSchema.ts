import * as Yup from "yup";
import { InputSchema, EmailSchema, PasswordSchema } from "./common";
import { validationMessage } from "./messages";

export const registrationSchema = Yup.object().shape({
  firstName: InputSchema.required(),
  lastName: InputSchema.required(),
  phone: InputSchema.required(),
  email: EmailSchema.required(validationMessage.REQUIRED),
  password: PasswordSchema,
  confirmPassword: PasswordSchema.oneOf(
    [Yup.ref("password"), null],
    validationMessage.PASSWORDS_MATCH
  ),
});
