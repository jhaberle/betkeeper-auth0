import React from 'react';
import LogoutButton from '../Logoutbutton/LogoutButton';

const SecondNavBar = () => {

    return (
    <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-dark">
	<a className="navbar-brand">Bet Keeper</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
        </button>
		<div className="collapse navbar-collapse" id="navbarTogglerDemo02">
			<ul className="navbar-nav mr-auto">
				<li className="nav-item active">
					<a className="nav-link" href="/home">Home <span className="sr-only">(current)</span></a>
				</li>
				<li className="nav-item active">
					<a className="nav-link" href="/bets">BetSlips</a>
				</li>
			</ul>
			<ul className="navbar-nav my-2 my-lg-0">
                <li className="nav-item active">
                    <LogoutButton/>
                </li>
				<li className="nav-item active">
					<a className="nav-link" href="/">Log Out</a>
				</li>
			</ul>
		</div>
	</nav>
    )

}

export default SecondNavBar;