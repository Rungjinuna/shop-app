import { createSlice } from '@reduxjs/toolkit';
//초기값은 로컬스토리지에서 받아오기
const initialState = localStorage.getItem('user')
  ? JSON.parse(localStorage.getItem('user') || '')
  : { email: '', token: '', id: '' };

//createSlice 사용해서 슬라이스생성
export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.email = action.payload.email;
      state.token = action.payload.token;
      state.id = action.payload.id;

      localStorage.setItem('user', JSON.stringify(state));
    },
    removeUser: (state) => {
      state.email = '';
      state.token = '';
      state.id = '';

      localStorage.setItem('user', JSON.stringify(state));
    },
  },
});

//슬라이스 내부 함수 액션으로
export const { setUser, removeUser } = userSlice.actions;
export default userSlice.reducer;
