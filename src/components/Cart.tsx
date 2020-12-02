import React from 'react'
import { useSelector } from 'react-redux'
import { remove, store } from '../features/counter/counterSlice'
import { ShoeType } from './Types/ShoeType'
import {Button} from 'react-bootstrap'
import DeleteIcon from '@material-ui/icons/Delete';
export const Cart = () => {
  const shoes = useSelector((state:ShoeType[]) => state)
    return (
        <div >
      <h1 className="Basket" data-aos="zoom-out">
        Shopping Basket
      </h1>
      <div className="Basket">
        You have {shoes.filter(shoe => shoe.added).length} items in your basket
        <div style={{fontSize:"30px"}}>
          Total: &nbsp;
        {(
              shoes
                .filter(shoe => shoe.added)
                .reduce((acc, current) => (acc += current.price), 0) 
            ).toFixed(2)}
        </div>
      </div>
      <div className="box" data-aos="zoom-in">
        {shoes
          .filter(shoe => shoe.added)
          .map((shoe) => {
            return(
              <div>
              <div style={{color:"white",fontSize:"smaller",backgroundColor:"black"}}>{shoe.name}</div> 
              <img src={shoe.img} alt={shoe.img} width="220" height="220"/> 
              <div className="price">
              Rs:&nbsp;{shoe.price} &nbsp;&nbsp;
              <Button onClick={() => store.dispatch(remove({id: shoe.id}))} variant="light"><DeleteIcon/></Button>
             </div>
              </div>
            )
          })}
         </div>
            
        </div>
    )
}
