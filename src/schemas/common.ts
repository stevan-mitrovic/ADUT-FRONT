import * as Yup from "yup";
import { validationMessage } from "./messages";

export const InputSchema = Yup.string().trim();

export const SelectSingleSchema = Yup.object();

export const SelectMultiSchema = Yup.array().of(Yup.object());

export const EmailSchema = InputSchema.email(validationMessage.INVALID());

export const PasswordSchema = Yup.string()
  .min(8, validationMessage.MIN_LENGTH(8))
  .max(255, validationMessage.MAX_LENGTH(255))
  .required(validationMessage.REQUIRED);
