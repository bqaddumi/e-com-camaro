import { configureStore}from '@reduxjs/toolkit'
import cartReducer from '../slices/cartSlice'
export const store =configureStore ({
    reducer: {
        //myFavorites:myFavoritesreducer,
       // user:userReducer,
        //homePage:homePagereducer,
        cart:cartReducer,
       // theme:themereducer



    },
}); 

