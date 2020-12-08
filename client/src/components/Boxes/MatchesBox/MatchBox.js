import React, {useState} from 'react';
import axios from 'axios';
import './MatchBox.css';
import { set } from 'mongoose';

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

    const hideClick = (event) => {
        event.preventDefault();
        setShow(false);
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
                    <>
                    <div className="row happyface">
                        <div className="col">
                            <img className="rounded-circle" src="https://ca-times.brightspotcdn.com/dims4/default/1f6a447/2147483647/strip/true/crop/600x338+0+21/resize/1200x675!/quality/90/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2Fbd%2F38%2F0ab19f851675e6b23dda752e0c61%2Fla-xpm-photo-2014-jan-19-la-sp-patriots-broncos-plaschke-20140120" alt="happy face" width="300px" height="200px"/>
                        </div>
                    </div>
                    <br/><br/>
                    <div>
                    <button className="btn btn-info" onClick={hideClick}>Hide</button>
                    </div>
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
                            <tr>
                                <td>{betresult.data[5].teams[0]}</td>
                                <td>{betresult.data[5].teams[1]}</td>
                                <td>{betresult.data[5].sites[0].odds.h2h[0]}/{betresult.data[0].sites[0].odds.h2h[1]}</td>
                                <td>{betresult.data[5].sites[1].odds.h2h[0]}/{betresult.data[0].sites[0].odds.h2h[1]}</td>
                                <td>{betresult.data[5].sites[5].odds.h2h[0]}/{betresult.data[0].sites[0].odds.h2h[1]}</td>
                            </tr>
                            <tr>
                                <td>{betresult.data[6].teams[0]}</td>
                                <td>{betresult.data[6].teams[1]}</td>
                                <td>{betresult.data[6].sites[0].odds.h2h[0]}/{betresult.data[0].sites[0].odds.h2h[1]}</td>
                                <td>{betresult.data[6].sites[1].odds.h2h[0]}/{betresult.data[0].sites[0].odds.h2h[1]}</td>
                                <td>{betresult.data[6].sites[5].odds.h2h[0]}/{betresult.data[0].sites[0].odds.h2h[1]}</td>
                            </tr>
                            <tr>
                                <td>{betresult.data[7].teams[0]}</td>
                                <td>{betresult.data[7].teams[1]}</td>
                                <td>{betresult.data[7].sites[0].odds.h2h[0]}/{betresult.data[0].sites[0].odds.h2h[1]}</td>
                                <td>{betresult.data[7].sites[1].odds.h2h[0]}/{betresult.data[0].sites[0].odds.h2h[1]}</td>
                                <td>{betresult.data[7].sites[5].odds.h2h[0]}/{betresult.data[0].sites[0].odds.h2h[1]}</td>
                            </tr>
                           
                        </tbody>
                    </table>
                    </>
                    ) :
                    <>
                    <p className="clicktext text-center">Click on Search!!</p>
                    <img src="https://movietvtechgeeks.com/wp-content/uploads/2015/05/adrian-peterson-goes-on-angry-twitter-rant-about-vikings-fans-2015.png" alt="mad face" width="300px" height="200px"/>
                    </>  
                    }
                </div>
            </div>
        </div>
        </>
    )
}

export default MatchBox;