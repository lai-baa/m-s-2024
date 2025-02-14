// frontend/src/components/Navigation/ProfileButton.jsx

import { logout } from "../../store/session";
import OpenModalMenuItem from './OpenModalMenuItem'
import LoginFormModal from '../LoginFormModal/LoginFormModal';
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';

import { useDispatch } from "react-redux";
import { useEffect, useState, useRef } from "react";
import { IoMenu } from "react-icons/io5";
import { FaCircleUser } from "react-icons/fa6";

const ProfileButton = ({admin}) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [showMenu, setShowMenu] = useState(false);
    const ulRef = useRef()

    const toggleMenu = (e) => {
        e.stopPropagation();
        setShowMenu(!showMenu);
    };

    useEffect(() => {
        if (!showMenu) return;

        const closeMenu = (e) => {
            if (!ulRef.current.contains(e.target)) {
                setShowMenu(false);
            }
        }

        document.addEventListener('click', closeMenu);

        return () => document.removeEventListener('click', closeMenu);
    }, [showMenu]);

    const closeMenu = () => setShowMenu(false);

    const logoutClick = (e) => {
        e.preventDefault();
        dispatch(logout());
        closeMenu();
        navigate('/');
    };

    const dropdownClasses = "profile-dropdown" + (showMenu ? "" : " hidden");

    return (
        <div>
            <button id="toggle-menu-button" onClick={toggleMenu}>
                <IoMenu />
                <FaCircleUser />
            </button>
            <ul className={dropdownClasses} ref={ulRef}>
                {admin ? (
                    <>
                        <li>Hello, {admin.firstName}</li>
                        <li>{admin.email}</li>
                        {/* <hr />
                        <Link to="/favorites" onClick={closeMenu} className="dropdown-link">Favorites</Link>
                        <hr />
                        <Link to="/reminders" onClick={closeMenu} className="dropdown-link">Reminders</Link> */}
                        <hr />
                        <Link to="/rsvps" onClick={closeMenu} className="dropdown-link">RSVPs</Link>
                        <hr />
                        <li id="logout">
                            <button onClick={logoutClick}>Log Out</button>
                        </li>
                    </>
                ) : (
                    <>
                      <li>
                          <OpenModalMenuItem
                              itemText="Log In"
                              onItemClick={closeMenu}
                              modalComponent={<LoginFormModal />}
                              className="dropdown-button"
                          />
                      </li>
                    </>
                )}
            </ul>
        </div>
    );
};

export default ProfileButton;