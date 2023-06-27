import React, {useEffect, useState} from 'react';
import UserAvatar from "../assets/user-avatar.png";
import HamburgerMenu from "../assets/Haburger-Menu.png"
import "./Header.css"

function Header(props) {
    const [openNavbarMenu, setOpenNavbarMenu] = useState(false);


    return (<div className="header">
        <div className="logo">
            <a href="/">INCOMEFLOW</a>
        </div>
        <div className="navbar">
            <div className="hamburger-menu" id="hamburger-id">
                <img src={HamburgerMenu} alt="menu-icon"/>
            </div>
            <div className="menulist" id="menulist-id">
                <ul>
                    <li><a href="/dashboard"> Dashboard </a></li>
                    <li><a href="/dashboard"> Dashboard </a></li>
                </ul>
                <div className="acc-links" onClick={(e) => {
                    e.stopPropagation();
                    setOpenNavbarMenu(!openNavbarMenu)
                }}>
                    <img src={UserAvatar} alt="User Avatar"/>
                    <p>Mitesh Vasoya</p>
                    {openNavbarMenu ? (<>
                        <div className="navbar-menu">
                            <a href="/setting">Setting</a>
                            <a href="/logout">Logout</a>
                        </div>
                    </>) : (<></>)}
                </div>
            </div>

        </div>
    </div>);
}

export default Header;