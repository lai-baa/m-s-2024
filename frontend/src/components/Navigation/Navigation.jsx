// frontend/src/components/Navigation/Navigation.jsx

import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import './Navigation.css';

function Navigation({ isLoaded }){
  const sessionAdmin = useSelector(state => state.session.admin);

  const sessionLinks = sessionAdmin ? (
    <li>
      <ProfileButton admin={sessionAdmin} />
    </li>
  ) : (
    <>
      <li>
        <NavLink to="/login">Log In</NavLink>
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