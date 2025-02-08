import * as Yup from "yup";
import { InputSchema } from "./common";
import { validationMessage } from "./messages";

export const loginSchema = Yup.object().shape({
  email: InputSchema.email(validationMessage.INVALID()).required(
    validationMessage.REQUIRED
  ),
  password: Yup.string()
    .min(8, validationMessage.MIN_LENGTH(8))
    .max(255, validationMessage.MAX_LENGTH(255))
    .required(validationMessage.REQUIRED),
});
