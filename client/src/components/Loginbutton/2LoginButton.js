import React from 'react';
import {useAuth0} from '@auth0/auth0-react';
import './2LoginButton.css';

const SecondLoginButton = () => {

    const {loginWithRedirect, isAuthenticated} = useAuth0();
    return(
        !isAuthenticated && (
            <a className="example_b" href="#" onClick={() => loginWithRedirect()}>Log In</a>
        )
    )
}

export default SecondLoginButton;