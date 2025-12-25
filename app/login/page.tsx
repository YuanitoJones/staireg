'use client'

import { useLoginLogic } from "./login.logic";
import { LoginPageView } from "./login.view"

const Login = ()=>{
    const logic = useLoginLogic();
    return <LoginPageView {...logic} />
}

export default Login