import { useAppSelector } from './redux';

//사용자 인증 정보를 추출하는데 사용
//!! 이중부정으로 불리언 반대값으로 바꾸기
export function useAuth() {
  const { id, email, token } = useAppSelector((state) => state.user);
  return {
    isAuth: !!email,
    email,
    id,
    token,
  };
}
