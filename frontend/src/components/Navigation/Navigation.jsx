import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import './Navigation.css';
import styles from '../LandingPage/LandingPage.css';

function Navigation({ isLoaded }) {
  const sessionAdmin = useSelector(state => state.session.admin);

  return (
    <nav className="navBar">
      {/* Logo */}
      <div className="logo">
        <NavLink to="/">
          <img src="/images/logo.png" alt="Logo" className="logoImage" />
        </NavLink>
      </div>
      <img src="/images/banner.jpg" alt="Wedding Banner" className={styles.bannerImage} />
      {/* Profile Button */}
      <div className="profile">
        {isLoaded && <ProfileButton admin={sessionAdmin} />}
      </div>
    </nav>
  );
}

export default Navigation;