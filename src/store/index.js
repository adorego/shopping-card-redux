import cartSlice from "../store/cart-slice";
import {configureStore} from "@reduxjs/toolkit";
import uiSlice from "../store/ui-slice";

const store = configureStore({
    reducer : {ui: uiSlice.reducer,
                cart: cartSlice.reducer
              }
});

export default store;