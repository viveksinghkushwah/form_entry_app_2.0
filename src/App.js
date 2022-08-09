import './App.css';
import Home from './components/Home';
import React from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom'
import Addentry from './components/Addentry';
import Viewexisitingentry from './components/Viewexisitingentry';
import { useState } from 'react';
import Retrivedata from './Retrivedata';



function App() {
  const [users, setUser] = useState(Retrivedata());
  const [Name, setName] = useState('');
  const [Phone, setPhone] = useState('');
  const [Age, setAge] = useState('');
  const [Company, setCompany] = useState('');
  const navigate = useNavigate();

  const deleteUser = (p) => {
    const updatedUsers = users.filter((element, index) => {
      return element.id !== p
    })
    setUser(updatedUsers);  
  }
  const editUser = (y) => {
    const updatedUsers1 = users.find((element, index) => {
      return element.id === y
    })

    setName(updatedUsers1.Name)
    setPhone(updatedUsers1.Phone)
    setAge(updatedUsers1.Age)
    setCompany(updatedUsers1.Company)
    deleteUser(y)
    navigate('/addentry')
  }

  return (
    <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='/addentry' element={<Addentry users={users} setUser={setUser} Name={Name} setName={setName}
        Phone={Phone} setPhone={setPhone} Age={Age} setAge={setAge} Company={Company} setCompany={setCompany}
        navigate={navigate} />}></Route>
      <Route path='/viewexisitingentry' element={<Viewexisitingentry users={users} setUser={setUser} 
       editUser={editUser}  deleteUser={deleteUser}/>}></Route>
    </Routes>

  )
}

export default App;
