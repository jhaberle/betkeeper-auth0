import React from 'react';
import Footer from '../../components/Footer/Footer';
import SecondNavBar from '../../components/NavBar/Navbar2';
import SlipsBox from '../../components/Boxes/BetSlipBox/SlipsBox';
import './bets.css';

const Bets = () => {

    return (
        <>
        <SecondNavBar/>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <SlipsBox/>
                    </div>
                </div>
            </div>
        <Footer/>
        </>
    )

}

export default Bets;