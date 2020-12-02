import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Routes,
} from "react-router-dom";
import "./App.css"
import { Cart } from "./components/Cart";
import { Home } from "./components/Home";
import { ShoePage } from "./components/ShoePage";
import {Nav,Navbar,Image} from 'react-bootstrap'
import l6 from './images/l6.png'
import c2 from './images/c2.png'

function App() {
  return (
    <div>
      <Router>
      <Navbar collapseOnSelect expand="lg" bg="" variant="dark">
      <Navbar.Brand>
     <img
        src={l6}
        width="100"
        height="70"
        className="d-inline-block align-top"
        alt="React Bootstrap logo"
      /></Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
    <Nav.Link ><Link to="/" style={{color:"white"}} className="btn"> Home </Link></Nav.Link>
     <Nav.Link ><Link to="/ShoePage" style={{color:"white"}} className="btn">Products </Link></Nav.Link>
     <Nav.Link ><Link to="/" style={{color:"white"}} className="btn">About </Link></Nav.Link>
    </Nav>
    <Nav>
    <Nav.Link ><Link to="/Cart" style={{color:"white"}} className="btn"> <Image src={c2} width={45} height={40} rounded className="cartbg" /> </Link></Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>
<hr/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Cart" element={<Cart/>}/>
        <Route path="/ShoePage" element={<ShoePage/>}/>
      </Routes>
    </Router>
    </div>
  
  );
}

 export default App;