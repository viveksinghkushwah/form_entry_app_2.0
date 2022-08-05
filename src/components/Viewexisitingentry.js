import React from 'react'
import Displaytable from './Displaytable'

const Viewexisitingentry = (props) => {
  const users1=props.users
  const setUser1=props.setUser
  const deleteUser1=props.deleteUser
  return (
  <div><h1 > User Data table</h1>
  <table className='fromdatatable' >
    <thead><tr>
    <th className='fromdatatable'>Name</th>
    <th className='fromdatatable'>Phone</th>
    <th className='fromdatatable'>Age</th>
    <th className='fromdatatable'>Company</th>
    <th className='fromdatatable'>Edit entry</th>
    <th className='fromdatatable'>Delete entry</th>
    </tr>
    </thead><tbody>
  <Displaytable users1={users1} setUser1={setUser1} deleteUser1={deleteUser1}/>
  </tbody>
  </table></div>
)
}
export default Viewexisitingentry