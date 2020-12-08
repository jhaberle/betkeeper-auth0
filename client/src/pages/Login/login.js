import React from "react";
import NavBar from '../../components/NavBar/Navbar';
import Footer from '../../components/Footer/Footer';
import Profile from '../../components/Profile/Profile';
import SecondLoginButton from '../../components/Loginbutton/2LoginButton';
import Carousels from '../../components/Carousel/Carousel';
import './style.css';

const Login = () => {

    return (
        <>
        <NavBar/>
            <div className="container">
                <div class="jumbotron">
		            <h1 class="display-6">Welcome to Bet Keeper!</h1>
		            <p class="lead text-center">Where betting becomes a hobbie.</p>
		            <hr class="my-4"/>
		            <div className="text-center">
                        <p class="lead"><SecondLoginButton/></p>
                    </div>
                    <div className="text-center">
                        <Profile/>
                    </div>
                    <div className="text-center">
                        <Carousels/>
                    </div>
	            </div>
            </div>
        <Footer/>
        </>
    )


}

export default Login;