import React from 'react'
import { useSelector } from 'react-redux'
import {Link} from 'react-router-dom'
import { add, store } from '../features/counter/counterSlice'
import { ShoeType } from './Types/ShoeType'
import c1 from '../images/c1.png'
export const ShoePage = () => {
  const shoes = useSelector((state:ShoeType[]) => state)
    return (
        <div className="box">
          {shoes.map(shoe=>{
            return(
              <div>
              <div style={{color:"white",fontSize:"smaller",backgroundColor:"black"}}>{shoe.name}</div> 
              <img src={shoe.img} alt={shoe.img} width="220" height="220"/> 
              <br/>
              Rs:&nbsp;{shoe.price} &nbsp;&nbsp;
              <Link to="/Cart" ><button onClick={()=> store.dispatch(add(shoe))} className="cartbutton" disabled={shoe.added}><img src={c1} width="30" height="30" alt={"Loading..."}/></button></Link>
              </div>
            )
          })}
    </div>
    )
}

