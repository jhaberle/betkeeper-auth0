import axios from 'axios';
import React, { useState } from 'react';

const AddSlip = () => {
    const [input, setInput] = useState({
        team1: "",
        team2: "",
        odds: "",
        wager: "",
        payout: "",
        });

    function handleChange(event) {
        const { name, value } = event.target;
            setInput((prevInput) => {
        return {
            ...prevInput,
            [name]: value,
        };
        });
    }

    function handleClick(event) {
        event.preventDefault();
        const newBetslip = {
            team1: input.team1,
            team2: input.team2,
            odds: input.odds,
            wager: input.wager,
            payout: input.payout,
        };
        console.log(newBetslip);
        axios
            .post("http://localhost:3001/api/betslips", newBetslip)
            .then(() => {
            window.location.reload();
            })
            .catch(function (error) {
            console.log(error);
            });
    }

    return (
        <>
            <div className="row">
                <div className="col">
                    <h4>Bet Slip</h4>
                    <form>
		                <div className="form-row">
			                <div className="form-group col-md-6">
				                <input className="form-control" onChange={handleChange} value={input.team1} name="team1" placeholder="Team 1" type="text"/>
			                </div>
			                <div className="form-group col-md-6">
				                <input className="form-control" onChange={handleChange} value={input.team2} name="team2" placeholder="Team 2" type="text"/>
			                </div>
		                </div>
		                <div className="form-group">
			                <label for="inputAddress">Odds</label> <input className="form-control" onChange={handleChange} value={input.odds} name="odds" placeholder="ex. Chelsea +2" type="text"/>
		                </div>
		                <div className="form-group">
			                <label for="inputAddress2">Wager</label> <input className="form-control" onChange={handleChange} value={input.wager} name="wager" placeholder="Wager" type="text"/>
		                </div>
                        <div className="form-group">
			                <label for="inputAddress2">Payout</label> <input className="form-control" onChange={handleChange} value={input.payout} name="payout" placeholder="Payout" type="text"/>
		                </div>
		                <div className="form-group">
		                </div><a className="text-center example_b" onClick={handleClick} type="submit">Add Slip</a>
	                </form>
                </div>
            </div>
        </>
    )

}

export default AddSlip;