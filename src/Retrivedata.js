const Retrivedata = () => {
    const data = localStorage.getItem('userdata');
    if (data) {
      return JSON.parse(data);
    }
    else {
      return []
    }
  
  }
  export default Retrivedata
  