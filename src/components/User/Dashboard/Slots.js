import React, {Fragment, useEffect, useState} from 'react';

function Slots (props) {
  const [slots, setSlots] = useState([]);

  useEffect(() => {
    setSlots(props.slots);
  }, [props.slots]);

  return (
    <Fragment>
      <div className="slots">
        <div className="slot-header">
          <div>
            <h3>RECENT SLOT CREATED</h3>
          </div>
          <div>
            <a href="">
              See All Slots
            </a>
          </div>
        </div>
        <div className="slot-list">
          <div className="list-header">
            <h4>Name of slot</h4>
            <h4>Number of wishes</h4>
            <h4>Closing Date</h4>
          </div>
          <div className="list scroll-y">
            {
              slots.map((slot) => (
                <a key={slot._id} className="list-item" href={`/slots/${slot._id}`}>
                  <span className="slot-title"><strong>D</strong>{slot.title}</span>
                  <span>{slot.wishes.length} wishes</span>
                  <span className="text-right">{slot.date}</span>
                </a>
              ))
            }
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default Slots;
