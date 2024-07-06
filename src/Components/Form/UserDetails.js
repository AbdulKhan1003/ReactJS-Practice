function UserDetails(props){

function onEditClicked(event,user){
props.onEditUser(user)
}
function onDeleteClicked(evt,user){
  props.deleteUser(user)
}

return <>
<table className="table">
  <thead>
    <tr>
      <th scope="col">First Name</th>
      <th scope="col">Last Name</th>
      <th scope="col">Email</th>
      <th scope="col">Password</th>
      <th scope="col">Country</th>
      <th scope="col">City</th>
      <th scope="col">DOB</th>
      <th scope="col">Gender</th>
    </tr>
  </thead>
  <tbody>
    {props.userData.map((user)=>{
         return   <tr>
            <td scope="col">{user.fName}</td>
              <td scope="col">{user.lName}</td>
              <td scope="col">{user.email}</td>
              <td scope="col">{user.pass}</td>
              <td scope="col">{user.country}</td>
              <td scope="col">{user.city}</td>
              <td scope="col">{user.date}</td>
              <td scope="col">{user.gender}</td>
              <td>
              <button className="btn bg-warning" onClick={(evt)=>{onEditClicked(evt,user)}}>Edit Mode</button>
              <button className="btn bg-danger" onClick={(evt)=>{onDeleteClicked(evt,user)}}>Delete Mode</button>
              </td>
            </tr>
    })}

    </tbody>
    </table>
</>
}
export default UserDetails;