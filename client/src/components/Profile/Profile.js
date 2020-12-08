import React from 'react';
// import JSONPretty from 'react-json-pretty';
import {useAuth0} from '@auth0/auth0-react';
import './style.css';

const Profile = ()=> {
    const {user, isAuthenticated} = useAuth0();

    return(
        isAuthenticated && (
            <div className="profile">
                <div class="row gutters-sm">
                    <div class="col mb-3">
                        <div class="card">
                            <div class="card-body">
                                <div class="d-flex flex-column align-items-center text-center">
                                    <img className="rounded-circle" src={user.picture} alt={user.name} width="150"/>
                                    <div class="mt-3">
                                        <h4 className="username">{user.name}</h4>
                                        <p class="useremail text-secondary mb-1">{user.email}</p>
                                        <div className="row text-center">
                                            <div className="col">
                                                <a href="/home" className="example_b">Home</a>
                                            </div>
                                            <div className="col">
                                                <a href="/bets" className="example_b">Bet Slips</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    )
}

export default Profile;

{/* {/* <img className="rounded-circle" src={user.picture} alt={user.name} />
                        <br/><br/>
                        <h4>Welcome back! {user.name}</h4>
                        <p>{user.email}</p>
                                <div className="row text-center">
                                    <div className="col">
                                        <a href="/home" className="example_b">Home</a>
                                    </div>
                                    <div className="col">
                                        <a href="/bets" className="example_b">Bet Slips</a>
                                    </div>
                                </div>
                        <br></br> */}