import React from "react";
import {useAuth0} from '@auth0/auth0-react';

const LogoutButton = () => {
    const {logout, isAuthenticated} = useAuth0();

    return (
        isAuthenticated && (
            <a class="nav-link" href='#' onClick={() => logout()}>Log Out</a>
        )
    )
}

export default LogoutButton;