"use client";
import { useContext, useState } from "react";
import { signupFields, signUpForm } from "../signup/signup.types";
import { useForm } from "react-hook-form";
import { UserContext } from "@/lib/context/userContext";

export function useMyAccountLogic() {
   const userContext = useContext(UserContext);
   if (!userContext) throw new Error("Context not in provider");
   const { user } = userContext;
   const [userInfoForm, setUserInfoForm] = useState<signUpForm | null>(user);
   const [userInfoErrors, setUserInfoErrors] = useState<signUpForm | null>(null);
   const {
      register,
      handleSubmit,
      formState: { errors },
   } = useForm<signUpForm>();

   const handleChange = (value: any, field: signupFields) => {
      if (userInfoForm === null) setUserInfoForm({ [field]: value });
      setUserInfoForm((s) => ({
         ...s,
         [field]: value,
      }));
   };

   const onSubmit = handleSubmit((data) => {
      console.log({ data });
   });

   return {
      userInfoForm,
      handleChange,
      userInfoErrors,
      register,
      onSubmit,
   };
}
