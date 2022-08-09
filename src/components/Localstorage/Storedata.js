import {useEffect}from 'react'
const Storedata = (users) => {
  useEffect(() => {
    localStorage.setItem('userdata', JSON.stringify(users));
  },[users])
  
}


 export default Storedata