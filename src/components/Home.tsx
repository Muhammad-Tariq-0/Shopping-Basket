import React from 'react'
import {Link} from 'react-router-dom'
export const Home = () => {
    return ( 
      <div>
         <div className="im"></div>
   <div className="main" data-aos="zoom-out" >
      <h4>SHOE STORE</h4>
     <p>I'm not afraid of heights, have you seen my shoes?</p>
      <Link to="/ShoePage"><button className="homebutton"> <h3 className="txt">Visit Our Products</h3> </button></Link> 
   </div>
   </div>
    )
}
