import { useRef } from "react"

function UserForm(props){
let fnameRef=useRef()
let lnameRef=useRef()
let emailRef=useRef()
let passRef=useRef()
let countryRef=useRef()
let cityRef=useRef()
let dateRef=useRef()
let genderRef=useRef()
let confPswd=useRef()


    
function SubmitForm(evt){
    evt.preventDefault()
        if(confPswd.current.value!==passRef.current.value){
            confPswd.current.focus()  
        }
        else{

    let user={
        fName: fnameRef.current.value,
        lName: lnameRef.current.value,
        email: emailRef.current.value,
        pass: passRef.current.value,
        country: countryRef.current.value,
        city: cityRef.current.value,
        date: dateRef.current.value,
        gender: genderRef.current.value
    }
    props.onCreateUser(user)
}
}

return <>
<div id="modal" className="myModal">
    <div className="modal-content">
        <h3>Create new uesr</h3>
        <div className="user-form">
            <form onSubmit={SubmitForm}>
                <div>
                    <input type="text" placeholder="First Name" ref={fnameRef} defaultValue={props.editMode?props.editedUser.fName:''}/>
                    <input type="text" placeholder="Last Name" ref={lnameRef} defaultValue={props.editMode?props.editedUser.lName:''}/>
                </div>
                <div>
                    <input type="email" placeholder="Email" ref={emailRef} defaultValue={props.editMode?props.editedUser.email:''} />
                </div>
                <div>
                    <input type="password" placeholder="Password" ref={passRef} defaultValue={props.editMode?props.editedUser.pass:''} />
                    <input type="password" placeholder="Confirm Password" ref={confPswd}/>
                </div>

                <div>
                    <select name="country" ref={countryRef} defaultValue={props.editMode?props.editedUser.country:''}>
                        <option value="Pakistan" >Pakistan</option>
                        <option value="Germany">Germany</option>
                        <option value="USA">USA</option>
                        <option value="UK">UK</option>
                    </select>
                </div>
                <div>
                    <select name="country" ref={cityRef} defaultValue={props.editMode?props.editedUser.city:''}>
                        <option value="Sahiwal">Sahiwal</option>
                        <option value="Peshawar">Peshawar</option>
                        <option value="Karachi">Karachi</option>
                        <option value="Islamabad">Islamabad</option>
                    </select>
                </div>

            <div>
                <input type="date" placeholder="DOB" ref={dateRef} defaultValue={props.editMode?props.editedUser.date:''}/>
                <select name="gender" ref={genderRef} defaultValue={props.editMode?props.editedUser.gender:''}>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                </select>
            </div>
            <button className="add-user-button1">{props.editMode?'Update User':'Create User'}</button>
            </form>
        </div>
    </div>
</div>
</>
}
export default UserForm;