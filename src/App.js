import './App.css';
import Home from './components/Home';
import React from 'react';
import {Routes,Route} from 'react-router-dom'
import Addentry from './components/Addentry';
import Viewexisitingentry from './components/Viewexisitingentry';
import { useState } from 'react';
import Retrivedata from './components/Localstorage/Retrivedata';
function App() {
  const [users, setUser] = useState(Retrivedata());
  const deleteUser = (id) => {
    const updatedUsers = users.filter((element, index) => {
      return element.id !== id
    })
    setUser(updatedUsers);
  }
  return (
   <Routes>
    <Route path='/' element={<Home />}></Route>
    <Route path='/addentry' element={<Addentry users={users} setUser={setUser} />}></Route>
    <Route path='/viewexisitingentry' element={<Viewexisitingentry users={users} setUser={setUser} deleteUser={deleteUser}/>}></Route>
   </Routes>
   
  ) 
}

export default App;
