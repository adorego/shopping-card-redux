import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    items:[],
    totalAmount:0
}
const cartSlice = createSlice({
    name:"cart",
    initialState,
    reducers:{
        replaceCart(state, action){
            console.log("Ingreso a replaceCart");
            state.totalAmount = action.payload.totalAmount;
            state.items = action.payload.items;
        },
        addItemToCart(state,action){
            const newItem = action.payload;
            //console.log("newItem:", newItem);
            let existedItem = state.items.find((selectedItem) => selectedItem.id === newItem.id)
            if(!existedItem){
                state.items.push({
                    id: newItem.id,
                    price: newItem.price,
                    quantity: 1,
                    totalPrice: newItem.price,
                    name: newItem.title
                });
                
            }else{
                existedItem.quantity++;
                existedItem.totalPrice += existedItem.price; 
            }
            state.totalAmount++;
        },
        deleteItem(state, action){
            const id = action.payload;
            const toDeleteItem = state.items.find((item) => item.id === id);
            if(toDeleteItem){
                if(toDeleteItem.quantity === 1){
                    state.items = state.items.filter((item) => item.id !== id);
                }else{
                    toDeleteItem.quantity--;
                    toDeleteItem.totalPrice = toDeleteItem.totalPrice - toDeleteItem.price;
                }
            } 
            
            state.totalAmount--;
        }
    }
})




export const cartActions = cartSlice.actions;
export default cartSlice;
