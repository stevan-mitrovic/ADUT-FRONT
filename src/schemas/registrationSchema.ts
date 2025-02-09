import * as Yup from "yup";
import {
  InputSchema,
  EmailSchema,
  PasswordSchema,
  PhoneSchema,
} from "./common";
import { validationMessage } from "./messages";

export const registrationSchema = Yup.object().shape({
  firstName: InputSchema.required(validationMessage.REQUIRED).max(
    255,
    validationMessage.MAX_LENGTH(255)
  ),
  lastName: InputSchema.required(validationMessage.REQUIRED).max(
    255,
    validationMessage.MAX_LENGTH(255)
  ),
  phone: PhoneSchema.required(validationMessage.REQUIRED),
  email: EmailSchema.required(validationMessage.REQUIRED),
  password: PasswordSchema,
  confirmPassword: PasswordSchema.oneOf(
    [Yup.ref("password"), null],
    validationMessage.PASSWORDS_MATCH
  ),
});
