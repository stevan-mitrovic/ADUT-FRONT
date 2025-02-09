import * as Yup from "yup";
import { EmailSchema } from "./common";
import { validationMessage } from "./messages";

export const forgotPasswordSchema = Yup.object().shape({
  email: EmailSchema.email(validationMessage.INVALID()).required(
    validationMessage.REQUIRED
  ),
});
