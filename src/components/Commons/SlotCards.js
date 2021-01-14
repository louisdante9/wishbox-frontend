import React, { Fragment } from 'react';

function SlotCard({cardNumber, cardCaption, iconType}) {
    return (
        <Fragment>
        <div className="card">
            <div className="card-body">
                <div className="card-icon">
                    <i className={iconType}></i>
                </div>
                <div className="card-number">{cardNumber}</div>
                <div className="card-caption">{cardCaption}</div>
            </div>
        </div>
    </Fragment>
    )
}
export default SlotCard;