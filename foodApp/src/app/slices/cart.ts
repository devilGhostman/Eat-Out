import { createSlice } from '@reduxjs/toolkit'

export interface ItemState {
    cartItem:[]
    quantity: number
}

const initialState: ItemState = {
  cartItem: [],
  quantity:0,
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state,action) => {
        const item:any = state.cartItem.find(
            (item:{id:string}) => item.id === action.payload.id
        );
        if (item) {
            item.quantity += action.payload.quantity;
        } else {
            state.cartItem.push(action.payload);
        }
        state.quantity++;
    },

    removeItem: (state, action) => {
        const item:any = state.cartItem.find(
            (item:{id:string}) => item.id === action.payload);

        if (item.quantity > 1) {
            item.quantity -= 1;
        }else{
            state.cartItem = state.cartItem.filter(
            (item:{id:string}) => item.id !== action.payload);
        }
        state.quantity--;
    },

    resetCart: (state) => {
        state.cartItem = [];
        state.quantity = 0;
    },

  },
})

export const { addItem, removeItem, resetCart } = cartSlice.actions
export default cartSlice.reducer