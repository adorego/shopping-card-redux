import { cartActions } from "./cart-slice";
import { uiActions } from "./ui-slice";

export const fetchCartData = () =>{
    return async (dispatch) => {
        const fetchData = async () =>{
            const response = await fetch("https://cartproject-7a122-default-rtdb.firebaseio.com/cart.json");

            if(!response.ok){
                throw new Error("Error fetching initial data!")
            }

            const data = await response.json();
            return data;
        }
        try{
            const cartData = await fetchData();
            dispatch(cartActions.replaceCart(cartData));
        }catch(error){
            dispatch(uiActions.showNotification({
                status:"error",
                title:"Error....",
                message:"Sending cart data failed!"
            }))
        }
    }
}

export const sendCartData = (cart) =>{
    return async (dispatch) =>{
        
        dispatch(uiActions.showNotification({
            status:"pending",
            title:"Sending....",
            message:"Sending cart data"
        }))
        const sendRequest = async () =>{
            const response = await fetch("https://cartproject-7a122-default-rtdb.firebaseio.com/cart.json",{
                method:"PUT",
                body: JSON.stringify(cart)
            });
                
            if(!response.ok){
                throw new Error("Sending cart data failed!")
            }
            dispatch(uiActions.showNotification({
                status:"success",
                title:"Success....",
                message:"Sent cart successfully!"
            }))
                
        };

        try{
            await sendRequest();
        }catch(error){
            dispatch(uiActions.showNotification({
                status:"error",
                title:"Error....",
                message:"Sending cart data failed!"
            }))
        }
    }
}