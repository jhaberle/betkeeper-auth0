import React, { useContext } from 'react';
import DrinkContext from '../../../../utils/drinkContext';
import './style.css';

const DrinkSearchForm = () => {

    const { search, handleInputChange, handleFormSubmit } = useContext(DrinkContext);

    return (
        <>
            <div className="form-group">
                <lable htmlFor="search">Search:</lable>
                <input
                    className="form-control"
                    value={search}
                    name="search"
                    type="text"
                    placeholder="Search for a Drink"
                    id="search"
                    onChange={handleInputChange}
                />
                <br/>
                <div className="button_cont" align="center"><a onClick={handleFormSubmit} className="example_b" href="#" rel="nofollow noopener">Search</a></div>
            </div>
        </>
    )

}

export default DrinkSearchForm;
