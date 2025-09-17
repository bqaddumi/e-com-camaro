import { configureStore}from '@reduxjs/toolkit'
import cartreducer from './cartSlice'
export const store =configureStore ({
    reducer: {
        myFavorites:myFavoritesreducer,
        user:userReducer,
        homePage:homePagereducer,
        cart:cartreducer,
        theme:themereducer



    },
}); 

