import React, {Fragment, useState, useEffect} from 'react';

function FulfilledSlots (props) {
  const [fulfilledWishes, setFulfilledWishes] = useState([]);

  useEffect(() => {
    setFulfilledWishes(props.fulfilledWishes);
  }, [props.fulfilledWishes]);

  return (
    <Fragment>
      <div className="fulfiled-slots scroll-y">
        <h4 className="fulfiled-header">RECENTLY FULFILED WISHES</h4>
        {
          fulfilledWishes.map((wish) => (
            <div className="fulfiled-list" key={wish._id}>
              <div className="fulfiled-list-header">
                <span>Fulfiled:</span>
                <span>{wish.fulfilledOn}</span>
                <span><i className="fa fa-star"></i></span>
              </div>
              <div className="fulfiled-list-body">
                {wish.body}
              </div>
            </div>
          ))
        }
      </div>
    </Fragment>
  )
}

export default FulfilledSlots;
