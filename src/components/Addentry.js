import React, { useState } from 'react'
import Retrivedata from './Localstorage/Retrivedata'
import Storedata from './Localstorage/Storedata'

const Addentry = (props) => {
    const users1=props.users
    const setUser1=props.setUser
    const[id,setId]=useState(0);
    const [Name, setName] = useState('');
    const [Phone, setPhone] = useState('');
    const [Age, setAge] = useState('');
    const [Company, setCompany] = useState('');
    

    const Formhandle = (event) => {
        event.preventDefault();
        let user = {
            id,Name, Phone, Age, Company
        }
        setUser1([...users1, user])
        setId(id+1)
        setName('')
        setPhone('')
        setAge('')
        setCompany('')
        
    }
    Storedata(users1)    
    return (
        <div>
          
            <form onSubmit={Formhandle}>
                <div>
                    <table><tr><td> <label>Name </label></td><td>
                        <input type="text" onChange={(event) => setName(event.target.value)}
                            value={Name} placeholder="Enter Your Phone"></input>
                    </td></tr>
                        <tr><td>
                            <label>Phone </label></td><td>
                                <input type="num" required onChange={(event) => setPhone(event.target.value)} value={Phone} placeholder="Enter Your Phone"></input>
                            </td></tr>
                        <tr><td><label>Age </label>
                        </td><td>
                                <input type="num" onChange={(event) => setAge(event.target.value)} value={Age} placeholder="Enter Your Age"></input>
                            </td></tr>
                        <tr><td><label>Company</label></td><td>
                            <input type="text" onChange={(event) => setCompany(event.target.value)} value={Company} placeholder="Enter Your Company"></input>
                        </td></tr>
                        <tr><td><button type="submit" >Submit</button></td>
                        </tr>
                    </table>
                </div>
            </form>
        </div>
    )}
export default Addentry