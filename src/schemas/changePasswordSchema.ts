import * as Yup from "yup";
import {
  PasswordSchema,
} from "./common";
import { validationMessage } from "./messages";

export const changePasswordSchema = Yup.object().shape({
  password: PasswordSchema,
  confirmPassword: PasswordSchema.oneOf(
    [Yup.ref("password"), null],
    validationMessage.PASSWORDS_MATCH
  ),
});
