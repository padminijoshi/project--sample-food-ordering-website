import  React from 'react'
import "./All.css"
import gif from "./gif-1.gif"
const Navbar = () => {
   
  return (
    <div>
      <nav className="container" id="navbar">
      <img src={gif} alt="my-gif" style={ {width: "130px", height: "114px",
                                            position: "relative",
                                            bottom: "38px",
                                            left: "99px"
                                        }} />
     <h3>Food Panda</h3>
      
      <input type="text" id="search" placeholder='Search Food...' />
      </nav>
    </div>
  )
}

export default Navbar
