import  { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export interface Product {
    id: number;
  title: string;
  price: number;
  category: string;
  description: string;
  image: string;
  isLocal?: boolean;
}

interface ProductsState {
    apiProducts: Product[];
    localProducts: Product[];
}

const initialState: ProductsState = {
    apiProducts: [],
  localProducts: [],
}

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setApiProducts: (state, action: PayloadAction<Product[]>) => {
      state.apiProducts = action.payload;
    },
    addProduct: (state, action: PayloadAction<Product>) => {
      state.localProducts.push({ ...action.payload, isLocal: true });
    },
    removeProduct: (state, action: PayloadAction<number>) => {
      state.apiProducts = state.apiProducts.filter(p => p.id !== action.payload);
      state.localProducts = state.localProducts.filter(p => p.id !== action.payload);
    },
  },
});

export const { setApiProducts, addProduct, removeProduct } = productsSlice.actions;
export default productsSlice.reducer;