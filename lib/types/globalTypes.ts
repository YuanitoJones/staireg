import { BaseSyntheticEvent } from "react";
import { UseFormRegister, FieldValues } from "react-hook-form";

export interface formType<T extends FieldValues> {
   register: UseFormRegister<T>;
   onSubmit: (e?: BaseSyntheticEvent<object, any, any> | undefined) => Promise<void>;
}
