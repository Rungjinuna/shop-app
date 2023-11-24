import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { IProduct } from './product.type';
import axios from 'axios';

export const fetchProduct = createAsyncThunk(
  'product/fetchProduct',
  async (id: number, thunkAPI) => {
    try {
      const response = await axios.get<IProduct>(
        `https://fakestoreapi.com/producsts/${id}`
      );
      return response.data;
    } catch (err) {
      return thunkAPI.rejectWithValue('Error loading product'); //
    }
  }
);

//initialState의 type 지정

type ProductType = {
  product: IProduct;
  isLoading: boolean;
  error: string;
};

//initialState지정 (초기값 세팅)

const initialState: ProductType = {
  product: {} as IProduct,
  isLoading: false,
  error: '',
};

export const productSlice = createSlice({
  name: 'product',
  initialState: initialState,
  //리듀서에 빈값을 할당하고 extraReducers로 생애주기에 따른 관리
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProduct.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchProduct.fulfilled, (state, action) => {
        state.isLoading = false;
        state.product = action.payload;
      })
      .addCase(fetchProduct.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload as string;
      });
  },
});
export default productSlice.reducer;
