import React, { useContext, useEffect, useState } from 'react';
import { Accordion, Card } from 'react-bootstrap';
import DrinkContext from '../../../utils/drinkContext';
import Image from 'react-bootstrap/Image';
import DrinkSearchForm from './DrinkSearchForm/DrinkSearchForm';
import './Box.css';

const Box = () => {

    const {
        result: { drinks },
    } = useContext(DrinkContext);

    return (
        <>
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
                                <Accordion>
                                    <Card>
                                        <Accordion.Toggle className="accordiontoggle" as={Card.Header} eventKey="0">
                                        {drinks ? drinks[0].strDrink : "Not found"}
                                        </Accordion.Toggle>
                                        <Accordion.Collapse eventKey="0">
                                        <Card.Body>
                                            <div className="image">
                                                <Image src={drinks ? drinks[0].strDrinkThumb : "Not Found"} thumbnail width="150" height="150" />
                                            </div>
                                            <div className="ingredients">
                                                <h5>Ingredients:</h5>
                                                    <h6>{drinks ? drinks[0].strIngredient1 : "Not Found"}</h6>
                                                    <h6>{drinks ? drinks[0].strIngredient2 : "Not Found"}</h6>
                                                    <h6>{drinks ? drinks[0].strIngredient3 : "Not Found"}</h6>
                                                    <h6>{drinks ? drinks[0].strIngredient4 : "Not Found"}</h6>
                                                    <h6>{drinks ? drinks[0].strIngredient5 : "Not Found"}</h6>
                                            </div>
                                            <p>{drinks ? drinks[0].strInstructions : "Not Found"}</p>
                                        </Card.Body>
                                        </Accordion.Collapse>
                                    </Card>
                                </Accordion>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
    )
}

export default Box;