import React from 'react'

const Displaytable = (props) => {
  const users2 = props.users1
  const setUser2 = props.setUser1
  const deleteUser2 = props.deleteUser1

  return users2.map(user => (
    <>
      <tr key={user.id} className='fromdatatable'>
        <td className='fromdatatable'>{user.id}</td>
        <td className='fromdatatable'>{user.Name}</td>
        <td className='fromdatatable'>{user.Phone}</td>
        <td className='fromdatatable'>{user.Age}</td>
        <td className='fromdatatable'>{user.Company}</td>
        <td className='fromdatatable'><button onClick={() => deleteUser2(user.id)}>delete</button></td>
        <td className='fromdatatable'>  <button >edit</button></td>
      </tr>
    </>
  ))
}
export default Displaytable