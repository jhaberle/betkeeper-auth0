import React from 'react';
import LogoutButton from '../Logoutbutton/LogoutButton';
import LoginButton from '../Loginbutton/LoginButton';

const NavBar = () => {

    return (
    <nav class="navbar fixed-top navbar-expand-lg navbar-light bg-dark">
	<a class="navbar-brand">Bet Keeper</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
        </button>
		<div class="collapse navbar-collapse" id="navbarTogglerDemo02">
			{/* <ul class="navbar-nav mr-auto">
				<li class="nav-item active">
					<a class="nav-link" href="/home">Home <span class="sr-only">(current)</span></a>
				</li>
				<li class="nav-item active">
					<a class="nav-link" href="/bets">BetSlips</a>
				</li>
			</ul> */}
			<ul class="navbar-nav my-2 my-lg-0">
                <li className="nav-item active">
                    <LoginButton/>
                </li>
                <li className="nav-item active">
                    <LogoutButton/>
                </li>
			</ul>
		</div>
	</nav>
    )

}

export default NavBar;