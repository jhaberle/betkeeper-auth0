import React, { useContext, useEffect, useState } from 'react';
import DrinkContext from '../../../utils/drinkContext';
import drinksAPI from '../../../utils/drinksAPI'
import Image from 'react-bootstrap/Image';
import DrinkSearchForm from './DrinkSearchForm/DrinkSearchForm';
import './Box.css';

const Box = () => {

    const [result, setResult] = useState({});
    const [search, setSearch] = useState('');

    useEffect(() => {
        searchDrinks("Manhattan");
    }, []);

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
        })
        .catch (function (error) {
            console.log("There was an error processing your results");
        })
    };

    const {
        result: { drinks },
    } = useContext(DrinkContext);

    console.log({drinks});

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
        <div className="box">
            {drinks ? console.log(drinks) : console.log("Does not exist!")}
            <div>
                <div className="row">
                    <div className="col">
                            <h5>Search for a Drink</h5>
                        <div className="row">
                            <div className="col">
                                <DrinkSearchForm/>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <div className="accordion" id="accordionExample">
                                    <div className="card">
                                        <div className="card-header" id="headingOne">
                                            <h2 className="mb-0">
                                                <button className="btn btn-link btn-block text-left" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                                                    {drinks ? drinks[0].strDrink : "Not Found"}
                                                </button>
                                            </h2>
                                        </div>
                                        <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
                                            <div className="card-body">
                                                <Image className="images" src={drinks ? drinks[0].strDrinkThumb : "Not Found"} thumbnail width="150" height="150"/>
                                                <h5 className="text-center">Ingredients:</h5>
                                                <ol>
                                                    <li>{drinks ? drinks[0].strIngredient1 : "Not Found"}</li>
                                                    <li>{drinks ? drinks[0].strIngredient2 : "Not Found"}</li>
                                                    <li>{drinks ? drinks[0].strIngredient3 : "Not Found"}</li>
                                                    <li>{drinks ? drinks[0].strIngredient4 : "Not Found"}</li>
                                                    <li>{drinks ? drinks[0].strIngredient5 : "Not Found"}</li>
                                                </ol>
                                                <p>{drinks ? drinks[0].strInstructions : "Not Found"}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </DrinkContext.Provider>
    </>
    )
}

export default Box;