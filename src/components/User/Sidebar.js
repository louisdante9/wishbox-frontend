import React, {Fragment} from 'react';

function Sidebar (props) {
  return (
    <Fragment>
      <div className="side-nav d-none d-lg-flex h-100 px-0 flex-column">
        <div className="ds-brand-name flex-grow-1 px-2 pt-4">
          <a href="/">wishBox</a>
        </div>
        <div className="flex-grow-1 d-lg-flex flex-column align-items-center justify-content-between">
          <span>
              <a href="#">
                  <i className="fa fa-th-large"></i>
                  Home
              </a>
          </span>
          <span>
              <a href="#">
                  <i className="fa fa-folder-open-o"></i>
                  Slots
              </a>
          </span>
          <span>
              <a href="#">
                  <i className="fa fa-dropbox"></i>
                  Wishes
              </a>
          </span>
          <span>
            <a href="#">
                <i className="fa fa-star"></i>
                Fulfiled
            </a>
          </span>
        </div>
        <div className="flex-grow-1"></div>
      </div>
    </Fragment>
  )
}

export default Sidebar;
