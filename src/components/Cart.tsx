import React from 'react'
import { useSelector } from 'react-redux'
import { remove, store } from '../features/counter/counterSlice'
import { ShoeType } from './Types/ShoeType'
import {Button} from 'react-bootstrap'
export const Cart = () => {
  const shoes = useSelector((state:ShoeType[]) => state)
    return (
        <div>
      <h1 className="Basket">
        Shopping Basket
      </h1>
      <div className="Basket">
        You have {shoes.filter(shoe => shoe.added).length} items in your basket
        <div style={{fontSize:"30px"}}>
          Total: &nbsp;
        {(
              shoes
                .filter(shoe => shoe.added)
                .reduce((acc, current) => (acc += current.price), 0) / 100
            ).toFixed(2)}
        </div>
      </div>
      <div className="box">
        {shoes
          .filter(shoe => shoe.added)
          .map((shoe) => {
            return(
              <div>
              <div style={{color:"white",fontSize:"smaller",backgroundColor:"black"}}>{shoe.name}</div> 
              <img src={shoe.img} alt={shoe.img} width="220" height="220"/> 
              <Button onClick={() => store.dispatch(remove({id: shoe.id}))} variant="secondary">delete</Button>
              </div>
            )
          })}
         </div>
            
        </div>
    )
}
