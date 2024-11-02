// frontend/src/components/Navigation/Navigation.jsx

import { NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import ProfileButton from './ProfileButton';
import * as sessionActions from '../../store/session';

function Navigation({ isLoaded }) {
  const sessionAdmin = useSelector(state => state.session.admin);
  const dispatch = useDispatch();

  const logout = (e) => {
    e.preventDefault();
    dispatch(sessionActions.logout());
  };

  const sessionLinks = sessionAdmin ? (
    <>
      <li>
        <ProfileButton admin={sessionAdmin} />
      </li>
      <li>
        <button onClick={logout}>Log Out</button>
      </li>
    </>
  ) : (
    <>
      <li>
        <NavLink to="/login">Log In</NavLink>
      </li>
      <li>
        <NavLink to="/signup">Sign Up</NavLink>
      </li>
    </>
  );

  return (
    <ul>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      {isLoaded && sessionLinks}
    </ul>
  );
}

export default Navigation;