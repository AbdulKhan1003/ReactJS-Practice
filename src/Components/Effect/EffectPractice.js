import { useEffect, useState } from "react"
import LoginPage from './LoginPage'
import Main from './Main'
import UseContext from "../UseContext/UseContext";

function EffectPractice(){  
    const [isLoggedin,updatedLogin]=useState(false)
    let loginVal=localStorage.getItem("LoggedIn");
    
    useEffect(()=>{    
        if(loginVal==="1"){
        updatedLogin(true)
    }
},[])



    const loginHandler = (email,password)=>{
        localStorage.setItem("LoggedIn","1")
        updatedLogin(true)
    }

    const logoutHandler = ()=>{
        localStorage.removeItem("LoggedIn")
        updatedLogin(false)
    }
return<>
    <UseContext.Provider value={{logoutHandler:logoutHandler, isLoggedin:isLoggedin}}>
        {!isLoggedin &&  <LoginPage loginHandler={loginHandler} />}
        {isLoggedin && <Main logoutHandler={logoutHandler} isLoggedin={isLoggedin}/>}
        </UseContext.Provider>
</>
}
export default EffectPractice