import React from 'react';
import { GoSignOut } from 'react-icons/go';
import { FiLogIn, FiShoppingCart, FiUser } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { useAuth } from '../../../hooks/useAuth';
import { useAppDispatch } from '../../../hooks/redux';
import { removeUser } from '../../../store/user/user.slice';
import { getAuth, signOut } from 'firebase/auth';
import app from '../../../firebase';
import { removeUserId } from '../../../store/cart/cart.slice';
import styles from './Nav.module.scss';

function Nav() {
  const { isAuth } = useAuth();
  const dispatch = useAppDispatch();
  const auth = getAuth(app);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        dispatch(removeUser());
        dispatch(removeUserId());
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <nav className={styles.nav}>
      <ul>
        <li>
          <div className={styles.counter}>
            <FiShoppingCart />
          </div>
        </li>
        <li>
          <div className={styles.counter}>
            <FiUser title='주문' />
          </div>
        </li>
        <li>
          {isAuth ? (
            <GoSignOut
              className={styles.nav_sign_out}
              onClick={handleSignOut}
              title='로그아웃'
            />
          ) : (
            <Link to={'/login'}>
              <FiLogIn title='로그인' />
            </Link>
          )}
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
