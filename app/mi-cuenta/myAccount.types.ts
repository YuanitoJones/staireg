import { formType } from "@/lib/types/globalTypes";
import { signupFields, signUpForm } from "../signup/signup.types";

export type myAccountLogic = {
   userInfoForm: signUpForm | null;
   handleChange: (value: any, field: signupFields) => void;
} & formType<signUpForm>;
