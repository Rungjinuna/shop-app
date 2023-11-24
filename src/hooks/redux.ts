import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../store';

//useAppDispatch함수를 정의할때 AppDispatch로 타입지정
//useAppSelector함수 정의할때 RootState타입으로 지정
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
