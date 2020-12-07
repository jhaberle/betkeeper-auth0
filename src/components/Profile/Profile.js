import React from 'react';
// import JSONPretty from 'react-json-pretty';
import {useAuth0} from '@auth0/auth0-react';
import './style.css';
import SecondLogoutButton from '../Logoutbutton/2LogoutButton';

const Profile = ()=> {
    const {user, isAuthenticated} = useAuth0();

    return(
        isAuthenticated && (
            <div className="profile">
                <img src={user.picture} alt={user.name} />
                <h4>Welcome to Bet Keeper {user.name}</h4>
                <p>{user.email}</p>
                <div className="text-center">
                    <a href="/home" className="example_b">Home</a>
                </div>
                <div className="text-center">
                    <a href="/bets" className="example_b">Bet Slips</a>
                </div>
                <br></br>
                <div className="logout">
                    <SecondLogoutButton/>
                </div>
                {/* <JSONPretty data={user} /> */}
                {/* {JSON.stringify(user, null, 2)} */}
            </div>
        )
    )
}

export default Profile;