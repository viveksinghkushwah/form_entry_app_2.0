import React from "react"
import { Link } from 'react-router-dom'

import './css/Sectionhome.css'
const Home = () => {
  return (

    <div className="sectiondiv">
      <div>
        <section className="sectionhome">
          <div className="containerdiv">
            <div><h1 className="Apphead">Welcome To Our Form Entry App</h1></div>
            <div className="Buttonsnav">
              <Link className="bn3637" to='/addentry'>Add Info</Link>
              <Link className="bn123" to='/viewexisitingentry'> View Table</Link>
            </div>
          </div>
        </section>
      </div></div>
  )
}
export default Home