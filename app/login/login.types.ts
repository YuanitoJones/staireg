import { formType } from "@/lib/types/globalTypes";

export interface loginForm {
   email: string;
   password: string;
}

export type loginLogic = {} & formType<loginForm>;
