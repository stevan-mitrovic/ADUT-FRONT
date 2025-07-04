import * as Yup from "yup";
import { EmailSchema, PasswordSchema } from "./common";
import { validationMessage } from "./messages";

export const loginSchema = Yup.object().shape({
  email: EmailSchema.email(validationMessage.INVALID()).required(
    validationMessage.REQUIRED
  ),
  password: PasswordSchema,
});
