import { createSlice } from '@reduxjs/toolkit'

export interface favouriteState {
    favItem:[]
    quantity: number
}

const initialState: favouriteState = {
  favItem: [],
  quantity:0,
}

export const favouriteSlice = createSlice({
  name: 'favourite',
  initialState,
  reducers: {
    addItem: (state,action) => {
        const item:any = state.favItem.find(
            (item:{id:string}) => item.id === action.payload.id
        );
        if (!item) {
            state.favItem.push(action.payload);
        } 
        state.quantity++;
    },

    removeItem: (state, action) => {
        state.favItem = state.favItem.filter(
            (item:{id:string}) => item.id !== action.payload);
        state.quantity--;
    },

    resetfavlist: (state) => {
        state.favItem = [];
        state.quantity = 0;
    },

  },
})

export const { addItem, removeItem, resetfavlist } = favouriteSlice.actions
export default favouriteSlice.reducer

export const isFavourite = (state:any,id:string)=>{
    state.favourite.favItem.filter(item=>item.id == id)
}