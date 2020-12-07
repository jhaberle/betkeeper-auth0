import React, { useContext, useEffect, useState } from 'react';
import './MatchBox.css';

const MatchBox = () => {

    
    return (
        <>
        <div className="matchbox">
            <div className="row">
                <div className="col">
                    <div
                    class="button_cont"
                    align="center"
                    // onClick={matchSubmit}
                    >
                    <a
                    class="example_b"
                    href="add-website-here"
                    target="_blank"
                    rel="nofollow noopener"
                    >
                    Search NFL Games!!
                    </a>
                    </div>
                </div>
            </div>
            <br/>
            <div className="row">
                <div className="col text-center">
                    <p>RESPONSE GOES HERE</p>
                </div>
            </div>
        </div>
        </>
    )
}

export default MatchBox;