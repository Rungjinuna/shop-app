//product.slice에서 createAsyncThunk 사용시 필요한 상품 및 rating타입지정

export interface IRating {
  rate: number;
  count: number;
}

export interface IProduct {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: IRating;
  quantity: number;
  total: number;
}
