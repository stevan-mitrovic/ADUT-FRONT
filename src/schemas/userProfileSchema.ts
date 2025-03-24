import * as Yup from "yup";
import {
  EmailSchema,
  PhoneSchema,
  UserFirstNameSchema,
  UserLastNameSchema,
  UserAddressSchema,
  UserCitySchema,
  UserMunicipalitySchema,
} from "./common";
import { validationMessage } from "./messages";

export const userProfileSchema = Yup.object().shape({
  firstName: UserFirstNameSchema,
  lastName: UserLastNameSchema,
  phone: PhoneSchema.required(validationMessage.REQUIRED),
  email: EmailSchema.required(validationMessage.REQUIRED),
  address: UserAddressSchema,
  city: UserCitySchema,
  municipality: UserMunicipalitySchema,
});
