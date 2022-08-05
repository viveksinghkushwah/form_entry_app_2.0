const Retrivedata = () => {
    const data = localStorage.getItem('users');
    if (data) {
      return JSON.parse(data);
    }
    else {
      return []
    }
  
  }
  export default Retrivedata
  