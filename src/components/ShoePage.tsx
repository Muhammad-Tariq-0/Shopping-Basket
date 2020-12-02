import React from 'react'
import { useSelector } from 'react-redux'
import {Link} from 'react-router-dom'
import { add, store } from '../features/counter/counterSlice'
import { ShoeType } from './Types/ShoeType'
import c1 from '../images/c1.png'
import add1 from '../images/add1.png'
import add2 from '../images/add2.webp'
import add3 from '../images/add3.png'
import {Button} from 'react-bootstrap'
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
export const ShoePage = () => {
  const shoes = useSelector((state:ShoeType[]) => state)
    return (
        <div className="box" data-aos="fade-up">
          {shoes.map(shoe=>{
            return(
              <div>
              <div style={{color:"white",fontSize:"smaller",backgroundColor:"black"}}>{shoe.name}</div> 
              <img src={shoe.img} alt={shoe.img} width="220" height="220"/> 
              <br/>
              <div className="price">
              Rs:&nbsp;{shoe.price} &nbsp;&nbsp;
              <Link to="/Cart" ><Button variant="light" onClick={()=> store.dispatch(add(shoe))} className="cartbutton" disabled={shoe.added}><img src={add2} width="20" height="20" alt={"Loading..."}/></Button></Link>
              </div>
              </div>
            )
          })}
    </div>
    )
}

