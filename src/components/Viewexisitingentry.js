import React from 'react'
import Displaytable from './Displaytable'
import './css/table.css'
import { Link } from 'react-router-dom';
const Viewexisitingentry = (props) => {
  const {users,setUser,deleteUser,editUser}=props;
  return (
  <div className='tablemain'>
  <div className='container'>
  <h2>User Data Table </h2>
  {/* <small>Triggers on 767px</small> */}
  <ul className='responsive-table'>
    <li className='table-header'>
      <div className='col col-1'>Name</div>
      <div className='col col-2'>Phone</div>
      <div className='col col-3'>Age</div>
      <div className='col col-4'>Company</div>
      <div className='col col-5'>Edit</div>
      <div className='col col-6'>Delete</div>
    </li>
    <Displaytable users={users} setUser={setUser} deleteUser={deleteUser} editUser={editUser}/>
    
  </ul>
  
         
</div>
<Link className='button-17' to='/'>Home</Link>
  </div>
)
}
export default Viewexisitingentry