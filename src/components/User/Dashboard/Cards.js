import React, {Fragment, useEffect, useState} from 'react';

function Cards (props) {
  const [openWishCount, setOpenWishCount] = useState(0);
  const [fulfilledWishCount, setFulfilledWishCount] = useState(0);
  const [pendingWishCount, setPendingWishCount] = useState(0);

  useEffect(() => {
    setOpenWishCount(props.openWishCount);
    setFulfilledWishCount(props.fulfilledWishCount);
    setPendingWishCount(props.pendingWishCount)
  }, [props.openWishCount, props.fulfilledWishCount, props.pendingWishCount]);

  return (
    <Fragment>
      <div className="dash-cards d-flex">
        <div className="card">
          <div className="card-body">
            <div className="card-icon">
              <i className="fa fa-folder-open-o folder"></i>
            </div>
            <div className="card-number">{openWishCount}</div>
            <div className="card-caption">All Open Slots</div>
          </div>
        </div>
        <div className="card">
          <div className="card-body">
            <div className="card-icon">
              <i className="fa fa-dropbox box"></i>
            </div>
            <div className="card-number">{pendingWishCount}</div>
            <div className="card-caption">All Pending Wishes</div>
          </div>
        </div>
        <div className="card">
          <div className="card-body">
            <div className="card-icon">
              <i className="fa fa-star star"></i>
            </div>
            <div className="card-number">{fulfilledWishCount}</div>
            <div className="card-caption">All Fulfiled Wishes</div>
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default Cards;
