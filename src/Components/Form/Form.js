import { useEffect, useState } from "react";
import UserForm from './UserForm'
import axios from "axios";
import UserDetails from './UserDetails'

function Form(){
    let [showForm,setForm]=useState(false)
    let [users,setUsers]=useState(false)
    let [userData,setData]=useState([])
    let [loading,setLoading]=useState(false)
    let [editMode,setEditMode]=useState(false)
    let [editedUser,setEditedUser]=useState(null)
    
    useEffect(()=>{
        getUsers()
    },[])

    function onEditUser(user){
        console.log("Edit User Called")
        setForm(true)
        setEditMode(true)
        setEditedUser(user)
        setUsers(false)
    }

    function addUser(){
        setForm(true)
        setEditMode(false)
        setUsers(false)
    }
    function getUsers(){
        setUsers(true)
        setForm(false)
    }
    function closeForm(){
        setForm(false)
        setUsers(false)
    }
    function onCreateUser(user){
        setUsers(false)
        setForm(true)
    if(!editMode){
    axios.post('https://react-tutorial-4879a-default-rtdb.firebaseio.com/user.json',user)
    .then((resp)=>{
        console.log(resp)
        getUsers(true)
        setForm(false)
    })
    }
    else{
        axios.put('https://react-tutorial-4879a-default-rtdb.firebaseio.com/user/'+editedUser.id+'.json',user)
        .then((responce)=>{
            console.log(responce)
            getUsers(true)
            setForm(false)
        })
    }

    }

    function deleteUser(user){
        let del= window.confirm("Do you want to delete "+user.fName+" "+user.lName+"?")
        if(del){
            axios.delete('https://react-tutorial-4879a-default-rtdb.firebaseio.com/user/'+user.id+'.json')
            .then((responce)=>{
                console.log(responce)
                getUsers(true)
                setForm(false)
            })
        } 

    }

    function getUsers(){
        setForm(false)
        setUsers(true)
        setLoading(true)

        axios.get('https://react-tutorial-4879a-default-rtdb.firebaseio.com/user.json')
        .then((resp)=>{
            return resp.data
        })
        .then((data)=>{
        let userData=[]
        for(let element in data){
            userData.push({...data[element],id: element})
        }
        setData(userData)
        setLoading(false)

    }).catch((error)=>{
        alert(error.message)
    })
    }


    return<>
        <div className="page-header">
            <button onClick={addUser} className="btn btn-success">Add User</button>
            <button onClick={getUsers}className="btn btn-normal">Get Users</button>
            <button className=" btn btn-normal" style={{fontSize:'22px', width:'50px'}} onClick={closeForm}>&times;</button>

        </div>
        {!loading && users && <UserDetails userData={userData} editMode={editMode} onEditUser={onEditUser} deleteUser={deleteUser}/>}
        {loading && <h1>Loading...</h1>}
        {!loading && showForm && <UserForm onCreateUser={onCreateUser} editMode={editMode} editedUser={editedUser}/>}
    </>
}
export default Form;