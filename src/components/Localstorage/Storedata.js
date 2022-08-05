import {useEffect}from 'react'
const Storedata = (users) => {
    useEffect(() => {
        localStorage.setItem('users', JSON.stringify(users));
      }, [users])
  
}


 export default Storedata