import React from 'react';
import SecondNavBar from '../../components/NavBar/Navbar2';
import Footer from '../../components/Footer/Footer';
import Box from '../../components/Boxes/DrinkBox/Box';
import MatchBox from '../../components/Boxes/MatchesBox/MatchBox';

const Home = () => {

    return (
        <>
        <SecondNavBar/>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <Box/>
                    </div>
                    <div className="col">
                        <MatchBox/>
                    </div>
                </div>
            </div>
        <Footer/>
        </>   
    )
}

export default Home;