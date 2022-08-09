import React from 'react'

const Displaytable = (props) => {
  const {users,deleteUser,editUser}=props;

  return users.map(user => (
    <li className='table-row' key={user.id}>
      <div className='col col-1'>{user.Name}</div>
      <div className='col col-2' >{user.Phone}</div>
      <div className='col col-3' >{user.Age}</div>
      <div className='col col-4' >{user.Company}</div>
      <div className='col col-5' ><button onClick={() =>editUser(user.id)}>edit</button></div>
      <div className='col col-6' ><button onClick={() => deleteUser(user.id)}>delete</button></div>
    </li>
  ))
}
export default Displaytable