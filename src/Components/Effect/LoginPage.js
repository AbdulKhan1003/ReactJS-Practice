import { useEffect, useReducer, useRef, useState } from "react"



function emailReducer(currentState,action){
    switch(action.type){
        case "EMAIL_INPUT":
            return {value:action.value}
    }
}
function passReducer(currentState,action){
    switch(action.type){
        case "PASS_INPUT":
            return {value:action.value}
    }
}



function LoginPage(props){
let [formValidation,updateValidation]=useState(false)

let [enteredEmail, validEnteredEmail]=useReducer(emailReducer,{value:''})
let [enteredPass, validEnteredPass]=useReducer(passReducer,{value:''})

let emailRef=useRef()
let passRef=useRef()


function emailValidator(evt){
    if(!enteredEmail.value.includes('@') || !enteredEmail.value.includes('.com')){
    evt.target.style.backgroundColor = '#FFA5A5'
    }
    else{
        evt.target.style.backgroundColor = 'white'
    }
}
function passValidator(evt){
    if(enteredPass.value.length < 6){
    evt.target.style.backgroundColor = '#FFA5A5'
}
else{
    evt.target.style.backgroundColor = 'white'
}
}
let submitEmailHandler=(evt)=>{
    validEnteredEmail({value:evt.target.value, type:"EMAIL_INPUT"})
}

let submitPasswordHandler=(evt)=>{
    validEnteredPass({value:evt.target.value , type:"PASS_INPUT" })
}

let submitFormHandler=(evt)=>{
    evt.preventDefault()
    if(formValidation){
        props.loginHandler(enteredEmail.value,enteredPass.value)
    }
    else if(!enteredEmail.value.includes('@') || !enteredEmail.value.includes('.com')){
        emailRef.current.focus()
    }
    else if(enteredPass.value.length < 6){
        passRef.current.focus()
    }
    }


    useEffect(()=>{      
        let val=setTimeout(()=>{
        console.log("Validation function")
            updateValidation(enteredEmail.value.includes('@') && enteredEmail.value.includes('.com') && enteredPass.value.length > 6)
            //ghor se parh sari khud se ulti likhi hainn
        },0) 

        return ()=>{
            clearInterval(val)
        }

},[enteredEmail.value,enteredPass.value])


return <> 
<form className="form" onSubmit={submitFormHandler}>
<label className="form-group" htmlFor="name">Email:</label>
<input type="email" ref={emailRef} style={{width:'400px'}}   onBlur={emailValidator} className="form-control"onChange={submitEmailHandler} value={enteredEmail.value} name="email" />
<label className="form-group" htmlFor="name">Password:</label>
<input type="password" ref={passRef} onBlur={passValidator} style={{width:'400px'}}   className="form-control" onChange={submitPasswordHandler} value={enteredPass.value} name="password" />
<button type="submit">Submit</button>
</form>
</>
}
export default LoginPage;
