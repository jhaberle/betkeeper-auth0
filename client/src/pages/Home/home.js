import React, { useState, useEffect } from 'react';
import DrinkContext from '../../utils/drinkContext';
import SecondNavBar from '../../components/NavBar/Navbar2';
import Footer from '../../components/Footer/Footer';
import drinksAPI from '../../utils/drinksAPI';
import Box from '../../components/Boxes/DrinkBox/Box';
import MatchBox from '../../components/Boxes/MatchesBox/MatchBox';
import Carousels from '../../components/Carousel/Carousel';

const Home = () => {

    const [result, setResult] = useState({});
    const [search, setSearch] = useState('');

    useEffect(() => {
        searchDrinks("Manhattan");
    }, []);

    // Drinks THIRD PARTY API

    const handleFormSubmit = (event) => {
        event.preventDefault();
        searchDrinks(search);
    };

    const handleInputChange = (event) => {
        const { value } = event.target;
        setSearch(value);
    };

    function searchDrinks(query) {
        drinksAPI.search(query)
        .then(function(res) {
            console.log(res.data)
            setResult(res.data);
        }).catch (function (error) {
            console.log("There was an error processing your results");
        })
    };


    return (
        <>
        <DrinkContext.Provider
        value={{
            search,
            result,
            handleInputChange,
            handleFormSubmit,
        }}
        >
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
        </DrinkContext.Provider>
        </>
    )
}

export default Home;