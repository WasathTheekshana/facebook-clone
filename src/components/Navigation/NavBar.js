import React from "react";
import './NavBar.css';

import SearchIcon from '@mui/icons-material/Search';
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';
import ChatIcon from '@mui/icons-material/Chat';
import SettingsIcon from '@mui/icons-material/Settings';

function NavBar(){
    return(
        <div className="navBarBox">
            <div className="navBarLeft">
                <span className="logo">Fakebook</span>
            </div>

            <div className="navBarCenter">
                <div className="searchBarBox">
                    <SearchIcon className="searchIcon" />
                    <input placeholder="Search anything you want!" className="searchInput" />
                </div>
            </div>

            <div className="navBarRight">
                <div className="navBarLink">
                    <span className="navBarLink">Home</span>
                    <span className="navBarLink">Profile</span>
                </div>
                <div className="navBarIcons">
                    <div className="navBarIcon">
                        <PersonAddAlt1Icon />
                        <span className="iconTag">3</span>
                    </div>
                    <div className="navBarIcon">
                        <ChatIcon />
                        <span className="iconTag">3</span>
                    </div>
                    <div className="navBarIcon">
                        <SettingsIcon />
                        <span className="iconTag">3</span>
                    </div>
                </div>
                <div className="pic">
                    <img src="/images/profilePic.jpg" alt="Profile Picture" className="profilePicImg" />
                </div>
            </div>
        </div>
    );
}

export default NavBar;