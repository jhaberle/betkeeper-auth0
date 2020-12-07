import React from 'react';
import AddSlip from '../BetSlipBox/AddSlip/AddSlip';
import TableBetslips from '../BetSlipBox/TableBetslips/TableBetslips';
import './SlipsBox.css';

const SlipsBox = () => {

    return (
        <>
            <div className="slipsbox">
                <div className="row">
                    <div className="col">
                        <AddSlip/>
                        <br/><br/>
                        <div className="row">
                            <div className="col">
                                <TableBetslips/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )

}

export default SlipsBox;