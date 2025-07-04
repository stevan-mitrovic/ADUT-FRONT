import * as Yup from "yup";
import {
  EmailSchema,
  PasswordSchema,
  PhoneSchema,
  UserFirstNameSchema,
  UserLastNameSchema,
} from "./common";
import { validationMessage } from "./messages";

export const registrationSchema = Yup.object().shape({
  firstName: UserFirstNameSchema,
  lastName: UserLastNameSchema,
  phone: PhoneSchema.required(validationMessage.REQUIRED),
  email: EmailSchema.required(validationMessage.REQUIRED),
  password: PasswordSchema,
  confirmPassword: PasswordSchema.oneOf(
    [Yup.ref("password"), null],
    validationMessage.PASSWORDS_MATCH
  ),
});
