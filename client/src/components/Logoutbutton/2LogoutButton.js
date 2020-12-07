import React from "react";
import {useAuth0} from '@auth0/auth0-react';
import './2LogoutButton.css';

const SecondLogoutButton = () => {
    const {logout, isAuthenticated} = useAuth0();

    return (
        isAuthenticated && (
            <a href='#' onClick={() => logout()}>Log Out</a>
        )
    )
}

export default SecondLogoutButton;