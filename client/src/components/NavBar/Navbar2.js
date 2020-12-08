import React from 'react';
import LogoutButton from '../Logoutbutton/LogoutButton';
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';
import './Navbar2.css';

const SecondNavBar = () => {

    return (
	<Navbar fixed="top" bg="dark" expand="lg">
		<Navbar.Brand>Bet Keeper</Navbar.Brand>
			<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
    				<Nav className="mr-auto">
						<Nav.Link href="/home">Home</Nav.Link>
						<Nav.Link href="/bets">Bet Slips</Nav.Link>
    				</Nav>
					<Nav>
						<Nav.Link href="/">
							Log Out
						</Nav.Link>
					</Nav>
				</Navbar.Collapse>
	</Navbar>
    )

}

export default SecondNavBar;