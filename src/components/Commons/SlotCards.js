import React, { Fragment } from 'react';

function SlotCard({cardNumber, cardCaption}) {
    return (
        <Fragment>
        <div className="card">
            <div className="card-body">
                <div className="card-icon">
                    <i className="fa fa-folder-open-o folder"></i>
                </div>
                <div className="card-number">{cardNumber}</div>
                <div className="card-caption">{cardCaption}</div>
            </div>
        </div>
    </Fragment>
    )
}
export default SlotCard;