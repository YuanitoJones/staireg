"use client";

import { useState } from "react";
import { SignupErrors, signupFields, signUpForm } from "./signup.types";
import { useForm } from "react-hook-form";

export function useSignupLogic() {
   const [signupForm, setSignUpForm] = useState<signUpForm | null>(null);
   const [signupErrors, setSignupErrors] = useState<SignupErrors | null>(null);
   const {
      register,
      handleSubmit,
      formState: { errors },
   } = useForm<signUpForm>();

   const handleChange = (value: any, field: signupFields) => {
      if (signupForm === null) setSignUpForm({ [field]: value });
      setSignUpForm((s) => ({
         ...s,
         [field]: value,
      }));
   };

   const handleValidateField = (field: any, value: any) => {
      setSignupErrors((s) => ({
         ...s,
         [field]: {
            error: false,
            message: "Campo obligatorio",
         },
      }));
      return true;
   };

   const onSubmit = handleSubmit((data) => {
      console.log({ data });
   });

   return {
      signupForm,
      handleChange,
      signupErrors,
      register,
      onSubmit,
   };
}
