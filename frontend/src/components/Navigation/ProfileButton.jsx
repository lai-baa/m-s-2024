// frontend/src/components/Navigation/ProfileButton.jsx

import OpenModalMenuItem from './OpenModalMenuItem';
import LoginFormModal from '../LoginFormModal/LoginFormModal';
import { useNavigate } from "react-router-dom";

import { useDispatch } from 'react-redux';
import { useState, useEffect, useRef } from 'react';
import { FaUserCircle } from 'react-icons/fa';
import { IoMenu } from "react-icons/io5";
import * as sessionActions from '../../store/session';
import "./Navigation.css";

function ProfileButton({ admin }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [showMenu, setShowMenu] = useState(false);
  const ulRef = useRef();

  const toggleMenu = (e) => {
    e.stopPropagation();
    setShowMenu(!showMenu);
  };

  useEffect(() => {
    if (!showMenu) return;

    const closeMenu = (e) => {
      if (ulRef.current && !ulRef.current.contains(e.target)) {
        setShowMenu(false);
      }
    };

    document.addEventListener('click', closeMenu);

    return () => document.removeEventListener('click', closeMenu);
  }, [showMenu]);

  const closeMenu = () => setShowMenu(false);

  const logoutClick = (e) => {
    e.preventDefault();
    dispatch(sessionActions.logout());
    closeMenu();
    navigate('/');
};

  const ulClassName = "profile-dropdown" + (showMenu ? "" : " hidden");

  return (
    <>
      <button id="toggle-menu-button" onClick={toggleMenu}>
        <IoMenu />
        <FaUserCircle />
      </button>
      <ul className={ulClassName} ref={ulRef}>
      {admin ? (
          <>
            {/* <li>{admin.username}</li> */}
            <li>Hello, {admin.firstName}</li>
            <li>{admin.email}</li>
            <li id="logout">
              <button onClick={logoutClick}>Log Out</button>
            </li>
          </>
        ) : (
          <>
            <li>
            <OpenModalMenuItem
                buttonText="Log In"
                onButtonClick={closeMenu}
                modalComponent={<LoginFormModal />}
                className="dropdown-button"
              />
            </li>
          </>
        )}
      </ul>
    </>
  );
}

export default ProfileButton;