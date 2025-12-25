import { formType } from "@/lib/types/globalTypes";
import { BaseSyntheticEvent } from "react";
import { UseFormRegister } from "react-hook-form";

export interface signUpForm {
   name?: string;
   lastName?: string;
   email?: string;
   password?: string;
}

export type SignupErrors = {
   [key: string]: {
      error: boolean;
      message: string;
   };
};

export type signupLogic = {
   signupForm: signUpForm | null;
   handleChange: (value: any, field: signupFields) => void;
   signupErrors: SignupErrors | null;
} & formType<signUpForm>;

export enum signupFields {
   "name",
   "lastName",
   "email",
   "password",
}
