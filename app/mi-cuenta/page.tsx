"use client";
import { useMyAccountLogic } from "./myAccount.logic";
import MyAccountPageView from "./myAccount.view";

const MyAccount = () => {
   const logic = useMyAccountLogic();
   return <MyAccountPageView {...logic} />;
};

export default MyAccount;
