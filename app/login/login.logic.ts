"use client";

import { useForm } from "react-hook-form";
import { loginForm } from "./login.types";

export function useLoginLogic() {
   const {
      register,
      handleSubmit,
      formState: { errors },
   } = useForm<loginForm>();

   const onSubmit = handleSubmit((data) => {
      console.log({ data });
   });

   return {
      register,
      onSubmit,
   };
}
