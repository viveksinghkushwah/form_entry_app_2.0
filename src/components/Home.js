import React from "react"
import {Link} from 'react-router-dom'
const Home = () => {
  return (
  <div>
    <Link to='/addentry'>Add new entry entry</Link>
    <Link to='/viewexisitingentry'> View exisiting entry</Link>
  </div>)
}
export default Home