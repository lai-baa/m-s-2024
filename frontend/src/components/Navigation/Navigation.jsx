import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import './Navigation.css';

function Navigation({ isLoaded }) {
  const sessionAdmin = useSelector(state => state.session.admin);

  return (
    <nav className="navBar">
      {/* Logo */}
      <div className="logo">
        <NavLink to="/">
          <img src="/images/IMG_0193.JPG" alt="Logo" className="logoImage" />
        </NavLink>
      </div>

      {/* Profile Button */}
      <div className="profile">
        {isLoaded && <ProfileButton admin={sessionAdmin} />}
      </div>
    </nav>
  );
}

export default Navigation;