import React, { useState } from 'react'
import Storedata from './Localstorage/Storedata'
import './css/Addentry.css'
import { Link } from 'react-router-dom'
import Isint from './utilities/isint'
const Addentry = (props) => {

  const { Name, setName, Age, setAge, Phone, setPhone, Company, setCompany, users, setUser } = props;
  const [id, setId] = useState(0);



  const Formhandle = (event) => {
    event.preventDefault();
    let user = {
      id, Name, Phone, Age, Company
    }
    setUser([...users, user])
    setId(id + 1)
    setName('')
    setPhone('')
    setAge('')
    setCompany('')
    

  }
 const NameEventHandle=(event)=>{
  setName(event.target.value) 
    

  }
  const PhoneEventHandle=(event)=>{
    setPhone(event.target.value);
    Isint(event.target.value) ? setPhone('') : setPhone(event.target.value)
  }
  const AgeEventHandle=(event)=>{
    Isint(event.target.value) ? setAge('') :setAge(event.target.value)

  }

  Storedata(users)
  return (
    <div className='main-cont'>
      <div className='main'>
        <div className="signupSection">
          <div className="info">
            <h2>Hey New Friend!!!</h2>
            <p>The Future Is Here</p>
            <div className='seeentry'>
              <Link id="join-btn2" name="join" alt="Join" value="Join" to='/viewexisitingentry'>View Table</Link>
            </div>
          </div>
          <form className="signupForm" name="signupform" onSubmit={Formhandle}>
            <h2>Take the first step</h2>
            <ul className="noBullet">
              <li>
                <label htmlFor ="Name"></label>
                <input type="text" className="inputFields" id="Name"  name="Name" placeholder="Name" 
                onChange={(event) => NameEventHandle(event) } 
                  value={Name} required  pattern="[A-Za-z]+" title="alphabetic value only"
                  />
              </li>
              <li>
                <label htmlFor ="Phone"></label>
                <input type="text" className="inputFields" id="Phone" name="Phone" placeholder="Phone" 
                onChange={(event) => PhoneEventHandle(event)} value={Phone} pattern="[0-9]{10}" title="Please enter 10 digit number only"
                   required />
              </li>
              <li>
                <label htmlFor ="Age"></label>
                <input type="text" className="inputFields" id="Age" name="Age" min="18" max="100" placeholder="Age" 
                onChange={(event) => AgeEventHandle(event)} value={Age}   title="enter age between 18 and 100 only" required />
              </li>
              <li>
                <label htmlFor ="Company"></label>
                <input type="text" className="inputFields" id="Company" name="Company" placeholder="company" 
                onChange={(event) => setCompany(event.target.value)} value={Company} required />
              </li>

              <li id="center-btn">
                <input type="submit" id="join-btn" name="join" alt="Join" value="Join" />
              </li>
            </ul>
          </form>
        </div>


      </div></div>
  )
}
export default Addentry


