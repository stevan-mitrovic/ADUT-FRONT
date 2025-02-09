import * as Yup from "yup";
import { validationMessage } from "./messages";

export const InputSchema = Yup.string().trim();

export const SelectSingleSchema = Yup.object();

export const SelectMultiSchema = Yup.array().of(Yup.object());

export const EmailSchema = InputSchema.email(validationMessage.INVALID()).max(
  255,
  validationMessage.MAX_LENGTH(255)
);

export const PhoneSchema = InputSchema.test(
  "is-valid-phone",
  validationMessage.INVALID(),
  (value) => !value || /^(?:\+|00|0)\d{8,19}$/.test(value)
);

export const PasswordSchema = Yup.string()
  .required(validationMessage.REQUIRED)
  .min(8, validationMessage.MIN_LENGTH(8))
  .max(255, validationMessage.MAX_LENGTH(255));
