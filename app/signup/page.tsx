'use client'
import { useSignupLogic } from "./signup.logic";
import { SignupPageView } from "./signup.view";


const Signup = ()=>{
    const logic = useSignupLogic()
    return <SignupPageView {...logic}/>
}

export default Signup;