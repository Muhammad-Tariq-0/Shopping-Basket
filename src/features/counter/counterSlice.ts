import { configureStore, createSlice } from '@reduxjs/toolkit';
import {shoes} from '../../components/shoes'

export const counterSlice = createSlice({
  name: 'ShoppingStore',
  initialState:shoes,
  reducers: {
    add: (state,action) => {
      return state.map(item => {
        if (item.id !== action.payload.id) {
          return item
        }

        return {
          ...item,
          added: true
        }
      })
    },
      remove: (state, action) => {
        return state.map(item => {
          if (item.id !== action.payload.id) {
            return item;
          }
          return {
            ...item,
            added: false
          }
        })
      }
    }
});

export const { add,remove } = counterSlice.actions;
export const store = configureStore({reducer: counterSlice.reducer});
export default counterSlice.reducer;
