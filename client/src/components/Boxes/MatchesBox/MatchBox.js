import React, {useState} from 'react';
import axios from 'axios';
import './MatchBox.css';

const MatchBox = () => {

    const [betresult, setBetResult] = useState({});
    const [show, setShow] = useState(false);

    function searchMatches() {
        axios.get(
            `https://api.the-odds-api.com/v3/odds/?sport=americanfootball_nfl&region=us&mkt=h2h&apiKey=094ae90b3e5382afd10840230d4aa43b&oddsFormat=american`
        )
        .then(function (res) {
            setBetResult(res.data)
            setShow(true);
        }).catch(function (error) {
            console.log("There was an error processing your odds");
        })
    };

    const handleMatchesFormSubmit = (event) => {
        event.preventDefault();
        searchMatches();
    }

    // console.log(betresult.data[0].sites[0].odds.h2h[0]);

    return (
        <>
        <div className="matchbox">
            <div className="row">
                <div className="col">
                    <div
                    class="button_cont"
                    align="center"
                    onClick={handleMatchesFormSubmit}
                    >
                    <a
                    class="example_b"
                    href="#"
                    >
                    Search NFL Games!!
                    </a>
                    </div>
                </div>
            </div>
            <br/>
            <div className="row">
                <div className="col">
                    { show ? (
                    <table class="table">
                        <thead>
                            <tr>
                                <th>Team 1</th>
                                <th>Team 2</th>
                                <th>Fanduel Odds</th>
                                <th>BetOnline Odds</th>
                                <th>Draft Kings Odds</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{betresult.data[0].teams[0]}</td>
                                <td>{betresult.data[0].teams[1]}</td>
                                <td>{betresult.data[0].sites[0].odds.h2h[0]}/{betresult.data[0].sites[0].odds.h2h[1]}</td>
                                <td>{betresult.data[0].sites[1].odds.h2h[0]}/{betresult.data[0].sites[0].odds.h2h[1]}</td>
                                <td>{betresult.data[0].sites[5].odds.h2h[0]}/{betresult.data[0].sites[0].odds.h2h[1]}</td>
                            </tr>
                            <tr>
                                <td>{betresult.data[1].teams[0]}</td>
                                <td>{betresult.data[1].teams[1]}</td>
                                <td>{betresult.data[1].sites[0].odds.h2h[0]}/{betresult.data[0].sites[0].odds.h2h[1]}</td>
                                <td>{betresult.data[1].sites[1].odds.h2h[0]}/{betresult.data[0].sites[0].odds.h2h[1]}</td>
                                <td>{betresult.data[1].sites[5].odds.h2h[0]}/{betresult.data[0].sites[0].odds.h2h[1]}</td>
                            </tr>
                            <tr>
                                <td>{betresult.data[2].teams[0]}</td>
                                <td>{betresult.data[2].teams[1]}</td>
                                <td>{betresult.data[2].sites[0].odds.h2h[0]}/{betresult.data[0].sites[0].odds.h2h[1]}</td>
                                <td>{betresult.data[2].sites[1].odds.h2h[0]}/{betresult.data[0].sites[0].odds.h2h[1]}</td>
                                <td>{betresult.data[2].sites[5].odds.h2h[0]}/{betresult.data[0].sites[0].odds.h2h[1]}</td>
                            </tr>
                            <tr>
                                <td>{betresult.data[3].teams[0]}</td>
                                <td>{betresult.data[3].teams[1]}</td>
                                <td>{betresult.data[3].sites[0].odds.h2h[0]}/{betresult.data[0].sites[0].odds.h2h[1]}</td>
                                <td>{betresult.data[3].sites[1].odds.h2h[0]}/{betresult.data[0].sites[0].odds.h2h[1]}</td>
                                <td>{betresult.data[3].sites[5].odds.h2h[0]}/{betresult.data[0].sites[0].odds.h2h[1]}</td>
                            </tr>
                            <tr>
                                <td>{betresult.data[4].teams[0]}</td>
                                <td>{betresult.data[4].teams[1]}</td>
                                <td>{betresult.data[4].sites[0].odds.h2h[0]}/{betresult.data[0].sites[0].odds.h2h[1]}</td>
                                <td>{betresult.data[4].sites[1].odds.h2h[0]}/{betresult.data[0].sites[0].odds.h2h[1]}</td>
                                <td>{betresult.data[4].sites[5].odds.h2h[0]}/{betresult.data[0].sites[0].odds.h2h[1]}</td>
                            </tr>
                        </tbody>
                    </table>
                    ) : <p className="clicktext text-center">Click on Search</p>}
                </div>
            </div>
        </div>
        </>
    )
}

export default MatchBox;