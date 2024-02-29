import {createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios"

const initialState = {
    items:[],
    status:null,
};

export const productsFetch = createAsyncThunk(
    "products/productsFetch",
    async (id=null,{rejectWithValue}) => {
        try{
        const response =  await axios.get("http://localhost:5000/products");
        return response?.data
        }catch(error){
            return rejectWithValue("an error occured");
        }
    }
    );

    const productsSlice = createSlice({
        name: "products",
        initialState,
        reducers: {},
        extraReducers: (builder) => {
          builder
            .addCase(productsFetch.pending, (state, action) => {
              state.status = "loading";
            })
            .addCase(productsFetch.fulfilled, (state, action) => {
              state.status = "success";
              state.items = action.payload;
            })
            .addCase(productsFetch.rejected, (state, action) => {
              state.status = "failed";
            });
        },
      });
      

export default productsSlice.reducer;